const canvas = document.getElementById('MyCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sky
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sun
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFD700';
    ctx.fill();
    ctx.closePath();

    // Draw ground
    ctx.fillStyle = '#32CD32';
    ctx.fillRect(0, 400, canvas.width, canvas.height);

    // Draw mountain
    ctx.beginPath();
    ctx.moveTo(200, 400);
    ctx.lineTo(400, 150);
    ctx.lineTo(600, 400);
    ctx.fillStyle = '#A9A9A9';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(900, 400);
    ctx.lineTo(550, 150);
    ctx.lineTo(500, 400);
    ctx.fillStyle = '#A9A9A9';
    ctx.fill();
    ctx.closePath();

    // Draw tree
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(300, 250, 50, 150);

    // Draw tree leaves
    ctx.beginPath();
    ctx.arc(325, 200, 75, 0, 2 * Math.PI);
    ctx.fillStyle = '#228B22';
    ctx.fill();
    ctx.closePath();

    // Draw cloud
    ctx.beginPath();
    ctx.arc(500, 120, 30, 0, 2 * Math.PI);
    ctx.arc(540, 120, 30, 0, 2 * Math.PI);
    ctx.arc(580, 120, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(140, 120, 30, 0, 2 * Math.PI);
    ctx.arc(180, 120, 30, 0, 2 * Math.PI);
    ctx.arc(220, 120, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.closePath();