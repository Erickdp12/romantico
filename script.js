let index = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

const startDate = new Date("2024-12-26T00:00:00");
const counter = document.getElementById("counter");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  counter.textContent = `${month} mêses,${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos desde o nosso amor começou.`;
}

setInterval(updateCounter, 1000);
updateCounter();
