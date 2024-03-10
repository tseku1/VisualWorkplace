const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

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

// Draw tree
ctx.fillStyle = '#8B4513'; // Saddle Brown
ctx.fillRect(300, 250, 50, 150);

// Draw tree leaves
ctx.beginPath();
ctx.arc(325, 200, 75, 0, 2 * Math.PI);
ctx.fillStyle = '#228B22'; // Forest Green
ctx.fill();
ctx.closePath();
