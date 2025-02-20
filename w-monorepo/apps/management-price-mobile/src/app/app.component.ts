import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [HttpClientModule, RouterModule, FormsModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected addPrice = {
    goodName: null,
    platformId: null,
    date: '',
    price: '',
    sourceUrl: '',
  };
  protected platforms = [
    { id: 12, name: '闲鱼' },
    { id: 10, name: '拼多多' },
    { id: 15, name: 'STEAM' },
    { id: 14, name: '香港-姐妹店' },
    { id: 13, name: '淘宝' },
    { id: 11, name: '京东' },
  ];

  constructor(private http: HttpClient) {}

  protected addPriceFormSubmit() {
    // 将表单数据提交到后端 http://111.230.29.99:5003
    const apiUrl = 'http://111.230.29.99:5003/submit'; // Flask 后端 API 地址

    this.http.post(apiUrl, this.addPrice).subscribe(
      (response) => {
        this.addPrice = {
          goodName: null,
          platformId: null,
          date: '',
          price: '',
          sourceUrl: '',
        };
        console.log('表单提交成功:', response);
        alert('文件已成功生成！');
      },
      (error) => {
        console.error('表单提交失败:', error);
        alert('提交失败，请重试！');
      }
    );
  }
}
