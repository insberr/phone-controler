// The password is for security
const password = 'PASSWORD';


const express = require('express')
const util = require('util')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const robot = require('robotjs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  fs.readFile('public/index.html', 'binary', function (err, file) {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write(err + "\n");
      response.end();
      return;
    }

    var headers = {};
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
    response.write(file, "binary");
    response.end();
    return
  })
})

app.post('/Password', (req, res) => {

})

app.post('/Mr-KeyLogger', (request, response) => {
  var log;
  if (request.body.spec) {
    if (request.body.character === 'enter') {
      log = request.body.character + '\n'
    }
    robot.keyTap(request.body.character)
  } else {
    log = request.body.character;
    robot.typeString(request.body.character)
  }
  fs.appendFile('temp.txt', log, function (err) {
    if (err) {
      response.writeHead(500);
      response.end();
      return
    }
    response.writeHead(200);
    response.write('gotcha');
    response.end();
    return
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})