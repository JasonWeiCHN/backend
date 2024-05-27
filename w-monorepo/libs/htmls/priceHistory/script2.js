const data = {
  'history': [
    {
      'x': 1612364706000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1612365306000,
      'y': 0,
      'f': '¥ 0',
      'd': 0
    },
    {
      'x': 1612371605000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1651620322000,
      'y': 0,
      'f': '¥ 0',
      'd': 0
    },
    {
      'x': 1651634403000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1654102942000,
      'y': 268.2,
      'f': '¥ 268.20',
      'd': 10
    },
    {
      'x': 1654707744000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1656005217000,
      'y': 268.2,
      'f': '¥ 268.20',
      'd': 10
    },
    {
      'x': 1656005424000,
      'y': 268.2,
      'f': '¥ 268.20',
      'd': 10
    },
    {
      'x': 1657214679000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1661188986000,
      'y': 268.2,
      'f': '¥ 268.20',
      'd': 10
    },
    {
      'x': 1661793783000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1663716006000,
      'y': 0,
      'f': '¥ 0',
      'd': 0
    },
    {
      'x': 1663719303000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1665075760000,
      'y': 268.2,
      'f': '¥ 268.20',
      'd': 10
    },
    {
      'x': 1665680558000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1669140945000,
      'y': 238.4,
      'f': '¥ 238.40',
      'd': 20
    },
    {
      'x': 1669746259000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1670264582000,
      'y': 238.4,
      'f': '¥ 238.40',
      'd': 20
    },
    {
      'x': 1670869389000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1671732716000,
      'y': 223.5,
      'f': '¥ 223.50',
      'd': 25
    },
    {
      'x': 1672943089000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1678384947000,
      'y': 199.66,
      'f': '¥ 199.66',
      'd': 33
    },
    {
      'x': 1679592258000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1685030703000,
      'y': 199.66,
      'f': '¥ 199.66',
      'd': 33
    },
    {
      'x': 1685638962000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1688059822000,
      'y': 178.8,
      'f': '¥ 178.80',
      'd': 40
    },
    {
      'x': 1689269071000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1694710953000,
      'y': 178.8,
      'f': '¥ 178.80',
      'd': 40
    },
    {
      'x': 1695315751000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1700590387000,
      'y': 149,
      'f': '¥ 149',
      'd': 50
    },
    {
      'x': 1701196208000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1703182259000,
      'y': 149,
      'f': '¥ 149',
      'd': 50
    },
    {
      'x': 1704393542000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1710438755000,
      'y': 149,
      'f': '¥ 149',
      'd': 50
    },
    {
      'x': 1711042219000,
      'y': 298,
      'f': '¥ 298',
      'd': 0
    },
    {
      'x': 1716480303000,
      'y': 149,
      'f': '¥ 149',
      'd': 50
    }
  ]
};

const canvas = document.getElementById('historyChart');
const ctx = canvas.getContext('2d');
const tooltip = document.getElementById('tooltip');

const padding = 40;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawChart();
}

function drawChart() {
  const history = data.history;
  const xValues = history.map(point => point.x);
  const yValues = history.map(point => point.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const scaleX = (value) => padding + (value - xMin) / (xMax - xMin) * (canvas.width - 2 * padding);
  const canvasHeight = canvas.height;
  const midY = canvasHeight / 2;
  const yRange = yMax - yMin;
  const scaleY = (value) => canvasHeight - padding - ((value - yMin) / yRange) * (canvasHeight - 2 * padding);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, canvas.height - padding);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'blue';

  for (let i = 0; i < history.length - 1; i++) {
    const x1 = scaleX(history[i].x);
    const y1 = scaleY(history[i].y);
    const x2 = scaleX(history[i + 1].x);
    const y2 = scaleY(history[i + 1].y);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    ctx.stroke();

    if (history[i].y !== history[i + 1].y) {
      ctx.beginPath();
      ctx.moveTo(x2, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
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
}

function scaleX(value) {
  const xMin = Math.min(...data.history.map(point => point.x));
  const xMax = Math.max(...data.history.map(point => point.x));
  return padding + (value - xMin) / (xMax - xMin) * (canvas.width - 2 * padding);
}

function scaleY(value) {
  const yMin = Math.min(...data.history.map(point => point.y));
  const yMax = Math.max(...data.history.map(point => point.y));
  return canvas.height - padding - ((value - yMin) / (yMax - yMin)) * (canvas.height - 2 * padding);
}

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (let i = 0; i < data.history.length - 1; i++) {
    const x1 = scaleX(data.history[i].x);
    const y1 = scaleY(data.history[i].y);
    const x2 = scaleX(data.history[i + 1].x);
    const y2 = scaleY(data.history[i + 1].y);

    if (mouseX >= x1 && mouseX <= x2 && Math.abs(mouseY - y1) < 5) {
      const date = new Date(data.history[i].x).toLocaleString();
      tooltip.style.left = `${e.clientX + 10}px`;
      tooltip.style.top = `${e.clientY + 10}px`;
      tooltip.style.display = 'block';
      tooltip.textContent = `时间: ${date}, 价格: ${data.history[i].f}`;
      return;
    }

    if (data.history[i].y !== data.history[i + 1].y && Math.abs(mouseX - x2) < 5 && mouseY >= Math.min(y1, y2) && mouseY <= Math.max(y1, y2)) {
      const date = new Date(data.history[i + 1].x).toLocaleString();
      tooltip.style.left = `${e.clientX + 10}px`;
      tooltip.style.top = `${e.clientY + 10}px`;
      tooltip.style.display = 'block';
      tooltip.textContent = `时间: ${date}, 价格: ${data.history[i + 1].f}`;
      return;
    }
  }

  tooltip.style.display = 'none';
});

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

