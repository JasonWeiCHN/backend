import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss'],
})
export class ConfigFormComponent {
  config: any = null;

  // 上传文件
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const match = text.match(/module\.exports\s*=\s*(\{[\s\S]*\})\s*$/);
      if (match) {
        try {
          const objStr = match[1];
          this.config = new Function('return ' + objStr)(); // 安全范围内使用
        } catch (err) {
          alert('解析失败，格式可能有误。');
        }
      } else {
        alert('未找到 module.exports 对象');
      }
    };
    reader.readAsText(file);
  }

  // 添加轮播图
  addSwiperImage() {
    this.config?.swiperImages.push('');
  }

  // 删除轮播图
  removeSwiperImage(index: number) {
    this.config?.swiperImages.splice(index, 1);
  }

  // 下载为 JS 文件
  download() {
    if (!this.config) return;

    const objectText = JSON.stringify(this.config, null, 2)
      .replace(/"([^"]+)":/g, '$1:') // 去除键名的引号（非必要）
      .replace(/"/g, `'`); // 全部换为单引号

    const finalText = `module.exports = ${objectText};\n`;

    const blob = new Blob([finalText], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.js';
    a.click();
    URL.revokeObjectURL(url);
  }
}
