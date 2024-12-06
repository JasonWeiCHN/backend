import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'w-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  /**
   * @description
   * Images for display
   * @type {string[]}
   * @default []
   */
  @Input()
  public images: string[] = [
    'https://cdn.midjourney.com/37715d5a-70cf-4943-a5eb-c62333758b95/0_0.png',
    'https://cdn.midjourney.com/52af0e1b-d8c4-45ff-9394-d7e54146e184/0_0.png',
    'https://cdn.midjourney.com/0d39c4ed-899f-428f-8850-7df23b420d32/0_0.png',
    'https://cdn.midjourney.com/d19ab73f-0dc8-4ae5-8f12-6c10cbc5c25b/0_3.png',
    'https://cdn.midjourney.com/89952925-a833-4a8f-85e8-7abfe068f4f0/0_3.png',
    'https://cdn.midjourney.com/99bed458-f539-41bd-aaca-e8cb38e9bc65/0_0.png',
    'https://cdn.midjourney.com/7b984c18-981a-4590-a8e0-66b3fcdb09b8/0_2.png',
    'https://cdn.midjourney.com/6db8562a-3b8f-4a1c-b195-242115069889/0_0.png',
    'https://cdn.midjourney.com/d36174e4-75d7-4403-89d3-05190a97a0a5/0_0.png',
    'https://cdn.midjourney.com/a7b8f9d9-12f8-4afc-8d92-716da00c47f9/0_0.png',
    'https://cdn.midjourney.com/7a265e2d-ef3e-4985-a6d0-8980b9925c1f/0_3.png',
    'https://cdn.midjourney.com/bc8b5bc9-58c0-4139-942a-cab1b462924a/0_3.png',
    'https://cdn.midjourney.com/3d083166-d9a0-4971-bd75-0252c5dde5b9/0_0.png',
    'https://cdn.midjourney.com/c8048c21-2979-484b-bc48-f6727eed1dcd/0_0.png',
    'https://cdn.midjourney.com/2a60cfa6-29bb-442c-897e-6bc03c2454c3/0_3.png',
  ];

  // 修改为二维数组
  protected displayedImages: string[][] = [];
  protected columns = 5; // Default to 5 columns

  public constructor() {
    console.log('pic constructor');
  }

  public ngOnInit(): void {
    // 模拟图片数据，实际应用中可能通过API获取
    this.updateLayout();
  }

  // Listen for window resize to adjust the layout dynamically
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateLayout();
  }

  // Update the layout based on window width
  updateLayout() {
    const width = window.innerWidth;

    if (width >= 1200) {
      this.columns = 5;
    } else if (width >= 1000) {
      this.columns = 4;
    } else if (width >= 800) {
      this.columns = 3;
    } else if (width >= 600) {
      this.columns = 2;
    } else {
      this.columns = 1;
    }

    // Distribute images across columns based on the current layout
    this.updateImageGroups();
  }

  // Distribute the images to match the number of columns
  updateImageGroups() {
    this.displayedImages = [];

    // Split the images array into the required number of columns
    const chunkSize = Math.ceil(this.images.length / this.columns);
    for (let i = 0; i < this.columns; i++) {
      this.displayedImages[i] = this.images.slice(
        i * chunkSize,
        (i + 1) * chunkSize
      );
    }
  }
}
