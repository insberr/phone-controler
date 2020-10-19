**NOT MAINTAINED**  
I may not come back to this project.  
However if there are any bugs or issues, please open an issue on github.  
Feel free to send pull requests.

# phone-controler
Use your phone to control you pc.

Set the password by editing the `password` varuable in the `index.js` file.

You can use `?pass=THE_PASSWORD` at the end of the url to login without the password screen.

## Updated
Fixed a few things.

# Features
- Keyboard

# Usage
Install nodejs v12 or later  
Navigate to the project directory in the console and run `npm install`  

To start the program, run `npm start`  

Go to the web browser on your phone and type `YOURPCIP:3000` replaceing YOURPCIP with your PC's ip address.  

NOTE: This uses a node module `robotjs`, which may require you to install `node-gyp`  
To do so, run `npm install -g node-gyp` in the admin console (windows: win + x > Windows Powershell (admin)), then run `node-gyp rebuild`. Make sure to run `npm install` in the project directory again.