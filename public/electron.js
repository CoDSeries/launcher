const path = require('path');
const { ipcMain, dialog} = require('electron');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

let updateWindow;
function createWindow() {
     launchMainWindow()
}


function launchMainWindow() {
    updateWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        resizable: false,
        fullscreenable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    /* updateWindow.setIcon(path.join(__dirname, 'assets/logo/app/codlite_logo.png')); */
    updateWindow.setTitle('COD Launcher');

    updateWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );



  /*  if (isDev) {
        updateWindow.webContents.openDevTools({ mode: 'detach' });
    }
*/
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

try {
    require('electron-reload')(module)
} catch (_) {
}
