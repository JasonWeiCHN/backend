import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  launchGame: (gamePath: string) => ipcRenderer.send('launchGame', gamePath),
  onGameLaunchSuccess: (callback: () => void) =>
    ipcRenderer.on('game-launch-success', callback),
  onGameLaunchError: (callback: (error: string) => void) =>
    ipcRenderer.on('game-launch-error', (event, error) => callback(error)),
  onGameExit: (callback: () => void) => ipcRenderer.on('game-exit', callback),
  onImageOpenSuccess: (callback: () => void) =>
    ipcRenderer.on('image-open-success', callback),
});
