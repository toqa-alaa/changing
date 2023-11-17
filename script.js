
const banner = document.getElementById('banner');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');
const row4 = document.getElementById('row4');

const images = [
    './94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif', // صورة 1
    './bird-wings-flying.gif', // صورة 2
    './animated-gif-wallpaper.gif' ,'./200w.gif'
];

let currentImageIndex = 0;

function changeBackground() {
  banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}


row1.addEventListener('mouseover', changeBackground);
row2.addEventListener('mouseover', changeBackground);
row3.addEventListener('mouseover', changeBackground);
row4.addEventListener('mouseover', changeBackground);
