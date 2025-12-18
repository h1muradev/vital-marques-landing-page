/**
 * VITAL E MARQUES ASSESSORIA CONTÁBIL - JS DINÂMICO
 * Versão: 2.0 (Otimizada para Casos de Sucesso)
 */

// --- 1. Menu Mobile ---
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        // Troca o ícone (Hamburger <-> X)
        if (mobileMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}


// --- 2. Efeito do Header e Animação Scroll Reveal ---

// Adiciona fundo ao header quando o usuário rola a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Configurações do observador para as animações de entrada
const observerOptions = {
    threshold: 0.15 // Dispara quando 15% do elemento aparece
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Ativa a animação definida no CSS
            observer.unobserve(entry.target); // Para de observar após animar
        }
    });
}, observerOptions);

// Aplica a observação em todos os elementos de revelação
document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el);
});


// --- 3. Carrossel da Seção Hero ---
const slides = document.querySelectorAll('.hero-carousel .slide');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetInterval();
    });
}

// Troca automática a cada 5 segundos
function startInterval() {
    clearInterval(slideInterval); 
    slideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
    startInterval();
}

if (slides.length > 0) {
    showSlide(0);
    startInterval();
}


// --- 4. Ano Atual no Footer ---
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}