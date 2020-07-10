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
  if (request.query.pass === password) {
    console.log('password right')
    fs.readFile('auth/index.html', 'binary', function (err, file) {
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
  } else {
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
  }
})

app.post('/Password', (request, response) => {
  if (request.body.password !== password) {
    response.json({ message: 'Incorrect password' });
    console.log('password wrong')
  } else {
    console.log('password right')
    fs.readFile('auth/index.html', 'binary', function (err, file) {
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
      return;
    })
  }
})

app.post('/keyboard', (request, response) => {
  var log;
  if (request.body.spec) {
    if (request.body.character === 'enter') {
      log = '\n'
    } else if (request.body.character === 'space') {
      log = ' '
    }
    robot.keyTap(request.body.character)
  } else {
    log = request.body.character;
    robot.typeString(request.body.character)
  }
  response.writeHead(200);
  response.write('gotcha');
  response.end();
  return;
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})