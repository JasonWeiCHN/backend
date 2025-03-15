import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamepadService } from './shared/services/gamepad.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GamepadService],
})
export class AppComponent implements OnInit {
  public gamepad: Gamepad | null = null;
  public buttonStates: { [key: number]: boolean } = {}; // 存储按钮状态
  public axes: number[] = []; // 摇杆数据

  public constructor(private gamepadService: GamepadService) {}

  public ngOnInit() {
    this.gamepadService.getGamepadState().subscribe((gp) => {
      this.gamepad = gp;

      if (gp) {
        // 更新按钮状态
        this.buttonStates = gp.buttons.map((btn) => btn.pressed);
        // 更新摇杆数据
        this.axes = Array.from(gp.axes);
      }
    });
  }
}
