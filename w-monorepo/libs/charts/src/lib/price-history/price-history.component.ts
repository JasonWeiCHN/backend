import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHistoryPoint } from './shared/interfaces/price-history.interface';

@Component({
  selector: 'c-price-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.scss']
})
export class PriceHistoryComponent implements AfterViewInit {
  @Input()
  data: IHistoryPoint[] = [];
  @Input()
  lowestPrice = 0; // 接收历史最低价输入

  @ViewChild('historyChart') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('tooltip') tooltipRef!: ElementRef<HTMLDivElement>;
  @ViewChild('priceHistory') priceHistoryRef!: ElementRef<HTMLDivElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  padding = 20; // 决定空白

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.resizeCanvas();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const container = this.priceHistoryRef.nativeElement;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    this.drawChart();
  }

  drawChart() {
    const ctx = this.ctx;
    const canvas = this.canvasRef.nativeElement;
    const { padding } = this;

    if (!ctx) return;

    const history = this.data;
    const xValues = history.map(point => point.x);
    const yValues = history.map(point => point.y);

    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);

    const scaleX = (value: number) => padding + (value - xMin) / (xMax - xMin) * (canvas.width - 2 * padding);
    const canvasHeight = canvas.height;
    const yRange = yMax - yMin;
    const scaleY = (value: number) => canvasHeight - padding - ((value - yMin) / yRange) * (canvasHeight - 2 * padding);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2a475e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';

    for (let i = 0; i < history.length - 1; i++) {
      const x1 = scaleX(history[i].x);
      const y1 = scaleY(history[i].y);
      const x2 = scaleX(history[i + 1].x);
      const y2 = scaleY(history[i + 1].y);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y1); // 水平线段
      ctx.stroke();

      if (history[i].y !== history[i + 1].y) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x2, y1);
        ctx.lineTo(x2, y2); // 垂直线段
        ctx.stroke();
        ctx.lineWidth = 2;
      }

      ctx.beginPath();
      ctx.arc(x1, y1, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    const lastX = scaleX(history[history.length - 1].x);
    const lastY = scaleY(history[history.length - 1].y);
    ctx.beginPath();
    ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
    ctx.fill();

    // 绘制历史最低价
    ctx.font = '12px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(`历史最低价：¥ ${this.lowestPrice}`, canvas.width / 2, canvas.height - 5);
  }

  scaleX(value: number): number {
    const canvas = this.canvasRef.nativeElement;
    const { padding } = this;
    const xMin = Math.min(...this.data.map(point => point.x));
    const xMax = Math.max(...this.data.map(point => point.x));
    return padding + (value - xMin) / (xMax - xMin) * (canvas.width - 2 * padding);
  }

  scaleY(value: number): number {
    const canvas = this.canvasRef.nativeElement;
    const { padding } = this;
    const yMin = Math.min(...this.data.map(point => point.y));
    const yMax = Math.max(...this.data.map(point => point.y));
    return canvas.height - padding - ((value - yMin) / (yMax - yMin)) * (canvas.height - 2 * padding);
  }

  onMouseMove(e: MouseEvent) {
    const canvas = this.canvasRef.nativeElement;
    const tooltip = this.tooltipRef.nativeElement;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let found = false;
    for (let i = 0; i < this.data.length - 1; i++) {
      const x1 = this.scaleX(this.data[i].x);
      const y1 = this.scaleY(this.data[i].y);
      const x2 = this.scaleX(this.data[i + 1].x);
      const y2 = this.scaleY(this.data[i + 1].y);

      if (mouseY >= y1 - 5 && mouseY <= y1 + 5) { // 在横线上
        const date = new Date(this.data[i].x).toLocaleDateString();
        tooltip.textContent = `时间: ${date}, 价格: ${this.data[i].f}`;
        found = true;
      } else if (this.data[i].y !== this.data[i + 1].y && mouseX >= x1 && mouseX <= x2 && mouseY >= Math.min(y1, y2) && mouseY <= Math.max(y1, y2)) {
        const date = new Date(this.data[i + 1].x).toLocaleDateString();
        tooltip.textContent = `时间: ${date}, 价格: ${this.data[i + 1].f}`;
        found = true;
      }
    }

    if (found) {
      const tooltipLeft = mouseX;
      const tooltipTop = mouseY + 10;

      tooltip.style.left = `${tooltipLeft}px`;
      tooltip.style.top = `${tooltipTop}px`;
      tooltip.style.display = 'block';
    } else {
      tooltip.style.display = 'none';
    }
  }
}
