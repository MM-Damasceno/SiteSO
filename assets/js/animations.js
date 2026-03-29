// Smooth scroll para links de navegação
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Smooth scroll para botão "Ir para Linha do Tempo"
document.querySelector('.go_timeline')?.addEventListener('click', function () {
  const timelineSection = document.querySelector('#linha-do-tempo');
  if (timelineSection) {
    timelineSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

// Intersection Observer para animações ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animação ao scroll
document.addEventListener('DOMContentLoaded', () => {
  // Animar seções
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-on-scroll');
    observer.observe(section);
  });

  // Animar imagem na seção sobre
  const soImg = document.querySelector('.so-img');
  if (soImg) {
    soImg.classList.add('fade-in-on-scroll');
    observer.observe(soImg);
  }

  // Animar conteúdo da timeline
  const timelineContent = document.querySelector('.timeline-content');
  if (timelineContent) {
    timelineContent.classList.add('fade-in-on-scroll');
    observer.observe(timelineContent);
  }
});

// Efeito paralax suave no header
window.addEventListener('scroll', () => {
  const container = document.querySelector('.container');
  if (container && window.scrollY < window.innerHeight) {
    container.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  }
});

// Animação de entrada suave ao carregar
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
