import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // 复制微信号到剪切板
  copyToClipboard() {
    const wechatNo = 'wxid_rwf017tt27nr22';
    navigator.clipboard
      .writeText(wechatNo)
      .then(() => {
        alert('微信号复制成功了！');
      })
      .catch((err) => {
        console.error('复制失败: ', err);
      });
  }
}
