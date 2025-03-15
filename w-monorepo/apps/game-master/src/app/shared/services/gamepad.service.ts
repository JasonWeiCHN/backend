import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable()
export class GamepadService {
  private gamepadState = new BehaviorSubject<Gamepad | null>(null);

  constructor() {
    this.startListening();
  }

  private startListening() {
    interval(50).subscribe(() => {
      const gamepads = navigator.getGamepads();
      if (gamepads[0]) {
        this.gamepadState.next(gamepads[0]);
      }
    });
  }

  public getGamepadState() {
    return this.gamepadState.asObservable();
  }
}
