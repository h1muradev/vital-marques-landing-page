/**
 * VITAL E MARQUES ASSESSORIA CONTÁBIL - JS DINÂMICO
 * Contém funcionalidades: Menu Mobile, Scroll Reveal, Contadores e Carrossel.
 */

// --- 1. Menu Mobile ---
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Troca o ícone (Hamburger <-> X)
        const icon = mobileBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('fa-times');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        });
    });
}


// --- 2. Animação Scroll Reveal (Intersection Observer) ---

// Adiciona a classe 'scrolled' ao header quando o usuário rola
document.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Configurações do observador
const observerOptions = {
    root: null, // viewport como root
    threshold: 0.1 // Dispara quando 10% do elemento aparece
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Usa 'visible' (classe definida no CSS)
            
            // Se for um contador (stat-box), inicia a contagem
            if (entry.target.classList.contains('stat-box')) {
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.classList.contains('counted')) {
                    // Inicia a animação (duração de 2000ms = 2s)
                    animateValue(counter, 0, parseInt(counter.getAttribute('data-target')), 2000);
                    counter.classList.add('counted');
                }
            }
            observer.unobserve(entry.target); // Para de observar depois de animar
        }
    });
}, observerOptions);

// Seleciona todos os elementos com classes reveal (reveal-up, reveal-left, etc.)
document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el);
});


// --- 3. Função para animar os números (Contador) ---
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Arredonda para o número inteiro
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
             // Garante o valor final exato
             obj.innerHTML = end; 
             // Adiciona % ou + se necessário (baseado no HTML fornecido: 100%)
             if(end === 100) obj.innerHTML += "%";
             if(end > 100) obj.innerHTML += "+"; 
        }
    };
    window.requestAnimationFrame(step);
}


// --- 4. Carrossel Simples na Seção Hero ---
const slides = document.querySelectorAll('.hero-carousel .slide');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    if (slides.length === 0) return;

    // Remove 'active' de todos
    slides.forEach(slide => slide.classList.remove('active'));

    // Calcula o novo índice
    currentSlide = (n + slides.length) % slides.length;
    
    // Adiciona 'active' ao slide atual
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Adiciona eventos aos botões
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

// Auto-play (muda a cada 5 segundos)
function startInterval() {
    // Limpa o intervalo anterior, se houver
    clearInterval(slideInterval); 
    slideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

// Inicia o carrossel se existirem slides
if (slides.length > 0) {
    showSlide(0); // Exibe o primeiro slide ao carregar
    startInterval();
}


// --- 5. Ano Atual no Footer ---
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}