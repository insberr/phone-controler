# phone-controler
Use your phone to controll you pc.

Set the password by editing the `password` varuable in the `index.js` file.

You can use `?pass=THE_PASSWORD` at the endo ofthe url to login without the password screen.

# Fetures
* [ ] Keyboard - almost complete
* [ ] Trackpad - working progress
  * Scroll
  * Left/Right click
  * Drag and drop
*  [] Game Controller
  * Minecraft
*  [] Possible computer controlls
  * Volume
  * Power off

# Usage
Install nodejs v12 or later

Navigate to the project directory in the console,

run `npm install`, 

to start the program, run `npm start`.

Go to you web browser on your phone and type `YOURPCIP:3000` replaceing YOURPCIP with your PC's ip address.

To find your pcs IP address, open the command prompt and type `ipconfig`
Find where it displays a number like this: `10.0.0.48`

NOTE: This uses a node module `robotjs`, which may require you to install `node-gyp`

To do so, run `npm install -g node-gyp` in the admin console (windows: win + x > Windows Powershell (admin)), then run `node-gyp rebuild`. Make sure to run `npm install` in the project directory again.