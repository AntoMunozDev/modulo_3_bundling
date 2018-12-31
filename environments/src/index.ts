const logoImg = require('./content/logo_2.png');
const img = document.createElement('img');
img.src = logoImg;
document.getElementById('logo').appendChild(img);
console.log(`We are in: ${process.env.NODE_ENV}`);