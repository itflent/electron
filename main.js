const electron = require('electron')
const path = { dist: './dist' }

function createWindow() {
  const window = new electron.BrowserWindow({
    width: 1168,
    height: 768,
    webPreferences: { nodeIntegration: true },
  })
  window.loadFile(`${path.dist}/index.html`)
}

electron.app.whenReady().then(createWindow)
electron.app.on('activate', () => {
  if(electron.BrowserWindow.getAllWindows().length === 0) { createWindow() }
})