const slidesData = [
  {
    image: "images/1.jpg",
    title: "КОМАНДА",
    quote: "Ми звикли брати на себе відповідальність та гарантуємо чесну, вчасну допомогу, навіть коли більшість безсилі.",
    name: "Олександр Олександровський",
    role: "Керуючий партнер"
  },
  {
    image: "images/2.jpg",
    title: "КОМАНДА",
    quote: "Наша мета — надати підтримку тоді, коли вона найбільше потрібна.",
    name: "Ірина Ковальчук",
    role: "Юристка"
  },
  {
    image: "images/3.jpg",
    title: "КОМАНДА",
    quote: "Ми — команда, яка вирішує складне просто.",
    name: "Андрій Петренко",
    role: "Аналітик"
  }
];

const slideContainer = document.getElementById("slideContainer");
const dotsContainer = document.getElementById("dotsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function renderSlides() {
  slideContainer.innerHTML = "";
  slidesData.forEach(slide => {
    const slideEl = document.createElement("div");
    slideEl.className = "slide";
    slideEl.innerHTML = `
      <img src="${slide.image}" alt="slide">
      <div class="slide-content">
        <h2>${slide.title}</h2>
        <p style="font-weight: bold;">${slide.quote}</p>
        <p><strong>${slide.name}</strong><br><span style="color:#999;">${slide.role}</span></p>
      </div>
    `;
    slideContainer.appendChild(slideEl);
  });
}

function renderDots() {
  dotsContainer.innerHTML = "";
  slidesData.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === currentIndex ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function updateSlider() {
  slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  renderDots();
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slidesData.length - 1;
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slidesData.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

renderSlides();
renderDots();
updateSlider();
