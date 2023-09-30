// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

// Define mainWindow as global variable
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // (Improved security) Prevent accessing Node.js from renderer
      contextIsolation: true, // (Improved security) Run preload.js as separate context
      preload: path.join(__dirname, 'js', 'preload.js')
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join('html', 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/**** Functions ****/
// Reverse given text
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  return joinArray; // "olleh"
}


/**** IPC Main Channels ****/
// Render --> Main
ipcMain.on('channel-1', (event, data) => {
  console.log(`Render --> Main [Received data: ${data}]`);
});


// Main --> Render
setInterval(function() {
  let data = Math.floor(Math.random()*100);
  mainWindow.webContents.send('channel-2', data);
}, 1000);


// Render --> Main (Value) --> Render
ipcMain.handle('channel-3', (event, data) => {
  let reverseText = reverseString(data);
  console.log(`Render --> Main (Value) --> Render [Received data: ${data}] [Send data: ${reverseText}]`);
  return reverseText;
});


// Render --> Main (Promise) --> Render
ipcMain.handle('channel-4', async (event, data) => {
  let timer = Math.floor(Math.random()*1000);
  let response = `Resolved after ${timer}ms`;
  console.log(`Render --> Main (Promise) --> Render [Received data: ${data}] [Send data: ${response}]`);

  // Define promise function
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, timer);
  });

  // Return promise
  return await myPromise.then((result) => {
    return result;
  });

});
