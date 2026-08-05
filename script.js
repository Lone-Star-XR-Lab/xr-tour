const presentBtn = document.getElementById('presentBtn');
const main = document.getElementById('main');
const slides = [...document.querySelectorAll('.slide')];
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const slideCounter = document.getElementById('slideCounter');
const slideDots = document.getElementById('slideDots');
const fullscreenBtn = document.getElementById('fullscreenBtn');
let currentSlide = 0;
let currentView = 0;

function getMediaFrames(slide) {
  return [...slide.querySelectorAll('.app-media-frame')];
}

function setActiveFrame(slide, index) {
  getMediaFrames(slide).forEach((frame, i) => {
    const active = i === index;
    frame.classList.toggle('is-active', active);
    const video = frame.querySelector('video');
    if (!video) return;
    if (active) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}

function resetSlideView(slide) {
  currentView = 0;
  if (slide) setActiveFrame(slide, 0);
}

const dots = slides.map((slide, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'dot';
  const heading = slide.querySelector('h1, h2');
  dot.setAttribute('aria-label', `Go to slide ${index + 1}${heading ? ': ' + heading.textContent.trim() : ''}`);
  dot.addEventListener('click', () => showSlide(index));
  slideDots.appendChild(dot);
  return dot;
});

function updateCounter() {
  slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

function updateDots() {
  dots.forEach((dot, index) => {
    const active = index === currentSlide;
    dot.classList.toggle('active', active);
    if (active) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
}

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  resetSlideView(slides[currentSlide]);
  slides[currentSlide].scrollIntoView({ behavior: 'smooth', block: 'start' });
  updateCounter();
  updateDots();
}

function goNext() {
  const slide = slides[currentSlide];
  const frames = getMediaFrames(slide);
  if (currentView < frames.length - 1) {
    currentView += 1;
    setActiveFrame(slide, currentView);
    return;
  }
  showSlide(currentSlide + 1);
}

function goPrev() {
  showSlide(currentSlide - 1);
}

function isFullscreen() {
  return !!document.fullscreenElement;
}

function updateFullscreenBtn() {
  const active = isFullscreen();
  fullscreenBtn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Enter fullscreen');
}

function toggleFullscreen() {
  if (!document.documentElement.requestFullscreen) return;
  if (isFullscreen()) {
    document.exitFullscreen().catch(() => {});
  } else {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

if (!document.documentElement.requestFullscreen) {
  fullscreenBtn.hidden = true;
}

function setPresentation(active) {
  document.body.classList.toggle('presentation', active);
  presentBtn.textContent = active ? 'Exit Presentation' : 'Presentation Mode';
  if (active) showSlide(0);
}

presentBtn.addEventListener('click', () => {
  setPresentation(!document.body.classList.contains('presentation'));
});

prevSlide.addEventListener('click', () => goPrev());
nextSlide.addEventListener('click', () => goNext());
fullscreenBtn.addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', updateFullscreenBtn);

main.addEventListener('scroll', () => {
  if (!document.body.classList.contains('presentation')) return;
  const mainTop = main.getBoundingClientRect().top;
  let nearest = 0;
  let nearestDistance = Infinity;
  slides.forEach((slide, index) => {
    const distance = Math.abs(slide.getBoundingClientRect().top - mainTop);
    if (distance < nearestDistance) {
      nearest = index;
      nearestDistance = distance;
    }
  });
  if (nearest !== currentSlide) {
    currentSlide = nearest;
    resetSlideView(slides[currentSlide]);
  }
  updateCounter();
  updateDots();
}, { passive: true });

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'p') {
    setPresentation(!document.body.classList.contains('presentation'));
  }
  if (event.key.toLowerCase() === 'f') toggleFullscreen();
  if (event.key === 'Escape') setPresentation(false);
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
    event.preventDefault();
    goNext();
  }
  if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
    event.preventDefault();
    goPrev();
  }
  if (event.key === 'Home') showSlide(0);
  if (event.key === 'End') showSlide(slides.length - 1);
});

updateCounter();
updateDots();
setPresentation(true);
