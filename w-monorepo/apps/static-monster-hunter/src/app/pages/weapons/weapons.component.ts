import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { IImageFile } from '@w-monorepo/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss',
  providers: [AnalysisHttpService],
})
export class WeaponsComponent {
  protected weaponImages: IImageFile[] = [
    {
      id: 'Great_Sword',
      name: '大剑/巨剑',
      path: 'assets/images/weapons/Great_Sword.png',
    },
    {
      id: 'Long_Sword',
      name: '太刀/铁剑',
      path: 'assets/images/weapons/Long_Sword.png',
    },
    {
      id: 'Sword_and_Shield',
      name: '片手剑',
      path: 'assets/images/weapons/Sword_and_Shield.png',
    },
    {
      id: 'Dual_Blades',
      name: '双刀/双剑',
      path: 'assets/images/weapons/Dual_Blades.png',
    },
    {
      id: 'Hammer',
      name: '大锤/铁锤',
      path: 'assets/images/weapons/Hammer.png',
    },
    {
      id: 'Hunting_Horn',
      name: '狩猎笛',
      path: 'assets/images/weapons/Hunting_Horn.png',
    },
    {
      id: 'Lance',
      name: '铁枪/长枪',
      path: 'assets/images/weapons/Lance.png',
    },
    {
      id: 'Gunlance',
      name: '铳枪',
      path: 'assets/images/weapons/Gunlance.png',
    },
    {
      id: 'Switch_Axe',
      name: '斩击斧/斩斧',
      path: 'assets/images/weapons/Switch_Axe.png',
    },
    {
      id: 'Charge_Blade',
      name: '盾斧/充能斧',
      path: 'assets/images/weapons/Charge_Blade.png',
    },
    {
      id: 'Insect_Glaive',
      name: '操虫棍/长刀',
      path: 'assets/images/weapons/Insect_Glaive.png',
    },
    {
      id: 'Light_Bowgun',
      name: '轻弩/轻弩炮',
      path: 'assets/images/weapons/Light_Bowgun.png',
    },
    {
      id: 'Heavy_Bowgun',
      name: '重弩/重弩炮',
      path: 'assets/images/weapons/Heavy_Bowgun.png',
    },
    {
      id: 'Bow',
      name: '弓箭',
      path: 'assets/images/weapons/Bow.png',
    },
  ];

  public constructor(
    private analysisHttpService: AnalysisHttpService,
    private _router: Router
  ) {}

  protected onItemClick(item: IImageFile) {
    this._router.navigate([`/article/${item.id}`]);

    this.analysisHttpService.submitString('查看: ' + item.name).subscribe(
      (response: any) => {
        // console.log('String submitted successfully!', response);
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );
  }
}
