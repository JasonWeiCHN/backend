import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { exec } from 'child_process'; // 用于启动游戏程序
import fs from 'fs'; // 用于检查文件是否存在
import os from 'os'; // 用于判断平台（Windows, Mac, etc.）

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 确保你的 preload 文件正确
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:4200'); // 或者加载你的 Angular 应用的路径
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  // 监听 'launchGame' 事件
  ipcMain.on('launchGame', (event, gamePath) => {
    console.log(`get the path: ${gamePath}`);

    // 分割路径和程序名
    const gameDir = path.dirname(gamePath); // 获取游戏目录
    const exeFile = path.basename(gamePath); // 获取可执行文件名

    // 检查游戏目录是否存在
    if (!fs.existsSync(gameDir)) {
      event.reply('game-launch-error', `Directory not found: ${gameDir}`);
      return;
    }

    // 使用 exec 执行进入目录并启动游戏
    const command =
      os.platform() === 'win32'
        ? `cd /d ${gameDir} && ${exeFile}` // Windows 用法
        : `cd ${gameDir} && ./${exeFile}`; // Mac/Linux 用法

    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error('Start game error:', err);
        event.reply('game-launch-error', err); // 向渲染进程发送错误信息
        return;
      }
      console.log('Start game success:', stdout);
      event.reply('game-launch-success', stdout); // 向渲染进程发送成功信息
    });
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
