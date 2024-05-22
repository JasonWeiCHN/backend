import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWarhammerClassifier, IWarhammerClassifierBase, WARHAMMER_CLASSIFIERS } from '@w-monorepo/warhammer';

@Component({
  selector: 'm-race',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss'
})
export class RaceComponent implements OnInit {
  public warhammerClassifiers: IWarhammerClassifierBase[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllWarhammerClassifiers();
  }

  getAllWarhammerClassifiers(): void {
    this.http.get<any[]>('http://localhost:8080/warhammerClassifier/findAll')
      .subscribe(
        classifiers => {
          this.warhammerClassifiers = classifiers;
        },
        error => {
          console.error('Error fetching warhammer classifiers:', error);
        }
      );
  }

  // 保存所有 WARHAMMER_CLASSIFIERS 数据到后台
  saveAllWarhammerClassifiers() {
    WARHAMMER_CLASSIFIERS.forEach((classifier: IWarhammerClassifier) => {
      const { id, directory, nameCN, order } = classifier;
      this.saveWarhammerClassifier({ id, directory, nameCN, order });
    });
  }

  // 向后台发送请求保存单个 WarhammerClassifier
  saveWarhammerClassifier(classifier: { id: string; directory: string; nameCN: string; order: number | undefined }) {
    this.http.post('http://localhost:8080/warhammerClassifier/saveWarhammerClassifier', classifier)
      .subscribe(
        response => {
          console.log('WarhammerClassifier saved successfully:', response);
        },
        error => {
          console.error('Error saving WarhammerClassifier:', error);
        }
      );
  }
}

