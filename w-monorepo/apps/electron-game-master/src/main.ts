import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { exec, spawn } from 'child_process';
import fs from 'fs';
import os from 'os';

let win: BrowserWindow | null = null;
let gameProcess: any = null; // 存储游戏进程

// 创建窗口
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:4200');
}

// 启动应用时
app.whenReady().then(() => {
  createWindow();

  // 监听启动游戏请求
  ipcMain.on('launchGame', (event, gamePath) => {
    console.log(`启动游戏：${gamePath}`);

    // 检查文件是否存在
    if (!fs.existsSync(gamePath)) {
      event.reply('game-launch-error', `文件未找到: ${gamePath}`);
      return;
    }

    // 获取文件的扩展名
    const extname = path.extname(gamePath).toLowerCase();

    // 判断是游戏文件还是图片文件
    if (isImage(extname)) {
      openImage(event, gamePath);
      return;
    }

    if (isExecutable(extname)) {
      launchGame(event, gamePath);
    } else {
      event.reply('game-launch-error', `不支持的文件类型: ${extname}`);
    }
  });

  // 监听打开图片请求
  ipcMain.on('openImage', (event, imagePath) => {
    console.log(`打开图片：${imagePath}`);

    // 检查文件是否存在
    if (!fs.existsSync(imagePath)) {
      event.reply('image-open-error', `图片文件未找到: ${imagePath}`);
      return;
    }

    openImage(event, imagePath);
  });
});

// 启动游戏的函数
function launchGame(event: any, gamePath: string) {
  const gameDir = path.dirname(gamePath);
  const gameExe = path.basename(gamePath);

  if (gameProcess) {
    console.log('已有游戏进程运行，不能重复启动');
    return;
  }

  // 启动游戏
  if (os.platform() === 'win32') {
    // Windows 启动游戏并监听进程
    gameProcess = spawn(path.join(gameDir, gameExe), [], {
      cwd: gameDir, // 指定工作目录
      detached: false,
      stdio: 'ignore',
    });
  } else {
    // MacOS / Linux
    gameProcess = spawn('open', [gamePath], {
      cwd: gameDir,
      detached: false,
      stdio: 'ignore',
    });
  }

  // 监听游戏进程退出
  gameProcess.on('exit', (code: any) => {
    console.log(`游戏已退出，退出码: ${code}`);
    event.reply('game-exit'); // 通知前端
    gameProcess = null; // 进程结束，清空变量
  });

  event.reply('game-launch-success');
}

// 判断是否是可执行文件
function isExecutable(extname: string): boolean {
  const executableExts = ['.exe', '.app', '.bat', '.sh'];
  return executableExts.includes(extname);
}

// 判断是否是图片文件
function isImage(extname: string): boolean {
  const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
  return imageExts.includes(extname);
}

// 打开图片的函数
function openImage(event: any, imagePath: string) {
  let command = '';
  if (os.platform() === 'win32') {
    command = `start "" "${imagePath}"`; // Windows 使用 "start"
  } else if (os.platform() === 'darwin') {
    command = `open "${imagePath}"`; // Mac 使用 "open"
  } else {
    command = `xdg-open "${imagePath}"`; // Linux 使用 "xdg-open"
  }

  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error('打开图片失败:', err);
      event.reply('image-open-error', err.message);
      return;
    }
    console.log('图片打开成功:', stdout);
    event.reply('image-open-success');
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
