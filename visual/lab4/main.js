const canvas = document.getElementById('MyCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#87CEEB'; // Sky Blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sky
    ctx.fillStyle = '#87CEEB'; // Sky Blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sun
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFD700'; // Gold
    ctx.fill();
    ctx.closePath();

    // Draw grass
    ctx.fillStyle = '#32CD32'; // Lime Green
    ctx.fillRect(0, 400, canvas.width, canvas.height);

    // Draw mountain
    ctx.beginPath();
    ctx.moveTo(200, 400);
    ctx.lineTo(400, 150);
    ctx.lineTo(600, 400);
    ctx.fillStyle = '#A9A9A9'; // Dark Gray
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(900, 400);
    ctx.lineTo(550, 150);
    ctx.lineTo(500, 400);
    ctx.fillStyle = '#A9A9A9'; // Dark Gray
    ctx.fill();
    ctx.closePath();

    // Draw tree
    ctx.fillStyle = '#8B4513'; // Saddle Brown
    ctx.fillRect(300, 250, 50, 150);

    // Draw tree leaves
    ctx.beginPath();
    ctx.arc(325, 200, 75, 0, 2 * Math.PI);
    ctx.fillStyle = '#228B22'; // Forest Green
    ctx.fill();
    ctx.closePath();

    // Draw cloud
    ctx.beginPath();
    ctx.arc(500, 150, 30, 0, 2 * Math.PI);
    ctx.arc(540, 150, 30, 0, 2 * Math.PI);
    ctx.arc(580, 150, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF'; // White
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(140, 150, 30, 0, 2 * Math.PI);
    ctx.arc(180, 150, 30, 0, 2 * Math.PI);
    ctx.arc(220, 150, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF'; // White
    ctx.fill();
    ctx.closePath();