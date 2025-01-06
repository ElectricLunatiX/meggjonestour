// Массив с изображениями
const images = [];
for (let i = 1; i <= 355; i++) {
  images.push(`images/pic (${i}).jpg`); // Предполагается, что изображения находятся в папке "images"
}

// Инициализация
let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
sliderImage.src = images[currentIndex];

// Кнопки
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Обработчики событий
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
});