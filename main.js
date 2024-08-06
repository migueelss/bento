const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: './images/bento/bento.ico',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2c2c2c',
      symbolColor: 'white',
      height: 38
    }
  })
  win.setMenuBarVisibility(false)

  win.loadFile('login.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})