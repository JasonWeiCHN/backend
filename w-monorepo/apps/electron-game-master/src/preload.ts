import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  launchGame: (gamePath: string) => ipcRenderer.send('launchGame', gamePath),
});
