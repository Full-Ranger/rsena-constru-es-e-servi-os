/**
 * R-SENA Construções e Serviços
 * Main Script - Premium Interactivity (Optimized for WebP)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Management ---
    const projects = [
        {
            id: 'edmundo-italia',
            title: 'Residência Jardim Itália 2',
            location: 'Bairro Jardim Itália, Cuiabá - MT',
            status: 'Em Execução',
            category: 'execucao',
            description: 'Projeto de reforma integral e modernização completa. Inclui construção de piscina personalizada e criação de área gourmet externa com acabamento de alto padrão de luxo.',
            mainImg: 'assets/img/IMAGENS/OBRA-EDMUNDO-ITALIA/20260401_123500.webp',
            folder: 'assets/img/IMAGENS/OBRA-EDMUNDO-ITALIA/',
            images: [
                '20251124_102048.webp', '20251128_131219.webp', '20251128_133150.webp', '20251202_103048.webp',
                '20251203_163329.webp', '20251204_132207.webp', '20251204_132224.webp', '20251209_164202.webp',
                '20251210_082758.webp', '20251211_093824.webp', '20251212_154005.webp', '20251212_154024.webp',
                '20251212_154037.webp', '20251212_170513.webp', '20251212_170538.webp', '20251218_092808.webp',
                '20251218_092813.webp', '20251218_105412.webp', '20251218_105557.webp', '20260106_104250.webp',
                '20260109_172656.webp', '20260109_172701.webp', '20260112_103354.webp', '20260112_124139.webp',
                '20260113_094428.webp', '20260113_094433.webp', '20260116_143548.webp', '20260116_143556.webp',
                '20260121_152437.webp', '20260121_152452.webp', '20260122_082547.webp', '20260127_142648.webp',
                '20260128_113327.webp', '20260130_082126.webp', '20260130_082129.webp', '20260130_141010.webp',
                '20260210_162456.webp', '20260218_124723.webp', '20260309_152009.webp', '20260311_100731.webp',
                '20260311_100741.webp', '20260311_140253.webp', '20260314_081339.webp', '20260314_081347.webp',
                '20260314_081913.webp', '20260314_081959.webp', '20260314_082012.webp', '20260317_081006.webp',
                '20260317_123917.webp', '20260317_131333.webp', '20260317_131337.webp', '20260319_080853.webp',
                '20260319_100648.webp', '20260401_123353.webp', '20260401_123409.webp', '20260401_123418.webp',
                '20260401_123425.webp', '20260401_123500.webp', '20260409_110600.webp', '20260409_110604.webp',
                '20260409_110610.webp', '20260409_110617.webp', '20260409_110701.webp', '20260409_110718.webp',
                '20260512_084011.webp', '20260713_092028.webp', '20260720_160804.webp'
            ]
        },
        {
            id: 'centro-labisa',
            title: 'Renovação Comercial Labisa',
            location: 'Centro, Cuiabá - MT',
            status: 'Em Execução',
            category: 'execucao',
            description: 'Ampla reforma comercial e preparação técnica para nova identidade visual. O projeto inclui revitalização completa do telhado frontal e reestruturação interna.',
            mainImg: 'assets/img/IMAGENS/OBRA-CENTRO-LABISA/TELHADOPRONTO-1.webp',
            folder: 'assets/img/IMAGENS/OBRA-CENTRO-LABISA/',
            images: [
                '20260221_134826.webp', '20260323_154704.webp', '20260326_175932.webp', '20260327_173044.webp',
                '20260329_170147.webp', '20260331_110838.webp', '20260331_135550.webp', '20260403_103717.webp',
                '20260403_103755.webp', '20260403_103903.webp', '20260411_085712.webp', '20260411_085716.webp',
                '20260411_090227.webp', '20260411_131115.webp', '20260411_154155.webp', '20260411_154614.webp',
                '20260418_174405.webp', '20260418_175759.webp', 'ESTRTUTURA-TELHADO.webp', 'TELHADOPRONTO-1.webp',
                'TELHADOPRONTO-2.webp'
            ]
        },
        {
            id: 'leblon-reforma',
            title: 'Reforma Leblon',
            location: 'Bairro Leblon, Cuiabá - MT',
            status: 'Em Execução',
            category: 'execucao',
            description: 'Projeto versátil de reforma residencial incluindo revitalização total de barracão e casa principal, priorizando modernização de acabamentos e infraestrutura.',
            mainImg: 'assets/img/IMAGENS/OBRA-LEBLON-REFORMA/20260211_154200.webp',
            folder: 'assets/img/IMAGENS/OBRA-LEBLON-REFORMA/',
            images: [
                '20260211_154154.webp', '20260211_154200.webp', '20260427_141031.webp', '20260427_141033.webp',
                '20260428_165928.webp', '20260428_165933.webp', '20260428_165937.webp', '20260428_165943.webp',
                '20260428_165946.webp', '20260508_093732.webp', '20260508_093741.webp', '20260713_120022.webp',
                '20260713_120028.webp', '20260713_120039.webp', '20260713_120049.webp', '20260713_120057.webp',
                '20260713_120105.webp', '20260713_120214.webp', '20260713_120230.webp', '20260713_120243.webp'
            ]
        },
        {
            id: 'obra-manso',
            title: 'Reserva do Manso',
            location: 'Lago do Manso - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Construção de área de lazer em terreno complexo. Logística diferenciada para garantir o padrão R-SENA em área de difícil acesso.',
            mainImg: 'assets/img/13-ObraManso.webp',
            folder: 'assets/img/',
            images: ['13-ObraManso.webp']
        },
        {
            id: 'obra-juina',
            title: 'Expansão Juína',
            location: 'Juína - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Obra de escala média no interior do estado. Provamos nossa capacidade logística de mobilizar equipe e materiais para garantir a qualidade fora da capital.',
            mainImg: 'assets/img/14-ObraJuina.webp',
            folder: 'assets/img/',
            images: ['14-ObraJuina.webp', '15-ObraJuina.webp']
        },
        {
            id: 'centro-sul',
            title: 'Reforma Centro Sul',
            location: 'Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Revitalização de espaço comercial com troca de fachadas, pisos e instalações elétricas corporativas.',
            mainImg: 'assets/img/16-ObraCentroSul.webp',
            folder: 'assets/img/',
            images: ['16-ObraCentroSul.webp', '17-ObraCentroSul.webp']
        },
        {
            id: 'centro-norte',
            title: 'Manutenção Centro Norte',
            location: 'Cuiabá - Centro',
            status: 'Concluída',
            category: 'concluida',
            description: 'Manutenção estrutural e reformas em edifícios comerciais no coração da capital, com foco em segurança e preservação.',
            mainImg: 'assets/img/18-ObraCentroNorte.webp',
            folder: 'assets/img/',
            images: ['18-ObraCentroNorte.webp', '19-ObraCentroNorte.webp']
        },
        {
            id: 'televideo',
            title: 'Infraestrutura Televídeo',
            location: 'Centro, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Instalações comerciais e infraestrutura tecnológica. Especializada em ambientes de alta tecnologia e datacenter.',
            mainImg: 'assets/img/20-ObraTelevideo.webp',
            folder: 'assets/img/',
            images: ['20-ObraTelevideo.webp', '21-ObraTelevideo.webp']
        },
        {
            id: 'muro-contencao',
            title: 'Muros de Contenção',
            location: 'Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Engenharia de contenção e muros de arrimo com foco em segurança máxima e sistema de drenagem eficiente.',
            mainImg: 'assets/img/22-ObraMuro.webp',
            folder: 'assets/img/',
            images: ['22-ObraMuro.webp']
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const carouselTrack = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    let currentSlide = 0;
    let slidesCount = 0;
    
    // --- Gallery Logic ---
    function renderProjects(filter = 'all') {
        galleryContainer.innerHTML = '';
        
        const filtered = projects.filter(p => filter === 'all' || p.category === filter);
        
        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card reveal';
            card.innerHTML = `
                <div class="project-status ${project.category === 'concluida' ? 'completed' : ''}">
                    ${project.status}
                </div>
                <img src="${project.mainImg}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <p>${project.location}</p>
                    <h3>${project.title}</h3>
                    <div class="view-btn">
                        <span>Ver Obras</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(project));
            galleryContainer.appendChild(card);
        });
        
        setTimeout(handleReveal, 100);
    }

    function openModal(project) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-location').innerText = project.location;
        document.getElementById('modal-status').innerText = project.status;
        document.getElementById('modal-description').innerText = project.description;
        document.getElementById('modal-badge').innerText = project.category === 'execucao' ? 'Obra em Execução' : 'Obra Concluída';
        
        // Carousel setup
        carouselTrack.innerHTML = '';
        indicatorsContainer.innerHTML = '';
        currentSlide = 0;
        
        // Sort and unique images
        const sortedImages = [...new Set(project.images)].sort((a, b) => {
            const isADate = /^\d{8}/.test(a);
            const isBDate = /^\d{8}/.test(b);
            if(isADate && isBDate) return b.localeCompare(a); 
            return a.localeCompare(b);
        });

        slidesCount = sortedImages.length;
        
        sortedImages.forEach((imgName, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${project.folder}${imgName}" alt="${project.title} - ${index + 1}" loading="lazy">`;
            carouselTrack.appendChild(slide);
            
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(index);
            });
            indicatorsContainer.appendChild(dot);
        });

        updateCarousel();
        
        // UI visibility
        if (slidesCount <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            indicatorsContainer.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
            indicatorsContainer.style.display = 'flex';
        }
    }

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    function nextSlide() {
        if (slidesCount <= 1) return;
        currentSlide = (currentSlide + 1) % slidesCount;
        updateCarousel();
    }

    function prevSlide() {
        if (slidesCount <= 1) return;
        currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
        updateCarousel();
    }

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
    });

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    carouselTrack.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) nextSlide();
        if (touchEndX > touchStartX + swipeThreshold) prevSlide();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- Tab Filtering ---
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    function handleReveal() {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleReveal);
    
    // Header Blur on Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.4rem 0';
        } else {
            header.style.padding = '0.7rem 0';
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Initial render
    renderProjects();
    handleReveal();
});
