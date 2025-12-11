document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HEADER MUDANDO DE COR NO SCROLL
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. MENU MOBILE
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 3. ANIMAÇÃO DE SCROLL REVEAL (Aparecer elementos)
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger inicial

    // 4. CONTADORES NUMÉRICOS ANIMADOS
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const startCounters = () => {
        const statsSection = document.querySelector('.stats');
        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !hasCounted) {
            hasCounted = true; // Impede que rode de novo
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100; // Velocidade
                
                const updateCounter = () => {
                    const c = +counter.innerText;
                    if (c < target) {
                        counter.innerText = Math.ceil(c + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = "+" + target;
                    }
                };
                updateCounter();
            });
        }
    };
    window.addEventListener('scroll', startCounters);

    // 5. ACCORDION (FAQ)
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const item = acc.parentElement;
            const body = item.querySelector('.accordion-body');
            
            // Fecha outros se quiser comportamento de "apenas um aberto por vez"
            document.querySelectorAll('.accordion-item').forEach(i => {
                if(i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.accordion-body').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });

    // 6. SLIDER DE DEPOIMENTOS
    const track = document.getElementById('slider-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let slideIndex = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;

    const updateSlider = () => {
        const width = slides[0].clientWidth;
        track.style.transform = `translateX(-${slideIndex * width}px)`;
    };

    nextBtn.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Auto play no slider
    setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    }, 5000);

    // Atualiza ano footer
    document.getElementById('year').textContent = new Date().getFullYear();
});