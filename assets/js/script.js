/**
 * R-SENA Construções e Serviços
 * Main Script - Premium Interactivity (Optimized for WebP)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Management ---
    const projects = [
        {
            id: 'obra-chapada',
            title: 'Obra Chapada dos Guimarães',
            location: 'Chapada dos Guimarães - MT',
            status: 'Em Execução',
            category: 'execucao',
            description: 'Construção residencial de alto padrão em Chapada dos Guimarães. Execução cuidadosa da fundação, perfurações profundas, concretagem e estruturação de alvenaria e pilares reforçados.',
            mainImg: 'assets/img/IMAGENS/OBRA-CHAPADA/20260902_141943.jpg.webp',
            folder: 'assets/img/IMAGENS/OBRA-CHAPADA/',
            images: [
                '20260902_141943.jpg.webp', '20260902_141122.jpg.webp',
                '1ce30f84-ac68-4817-9941-d608fa8f5d42.jpg', '26584662-cf23-4782-807c-534d799d6355.jpg',
                '49cd63bf-9655-4d71-b3b6-09b6605fbf23.jpg', '4d6cce3b-cb83-42ba-8993-6b0d085e25e3.jpg',
                '6a4b00f4-5802-4dab-a393-a02f2e6989f5.jpg', '7c77cc27-41ff-4bc9-a95b-3e9ff833dadc.jpg',
                '7e874bdb-6b66-49f9-93eb-ae72aac92233.jpg', '9eb82d28-e3ae-4d87-a23c-8197fd58dffa.jpg',
                'a24753a4-a84d-4a3d-971a-a8aec13b93e4.jpg', 'abed54e3-17bc-4025-b1ce-0aeaad641d37.jpg',
                'ad53ef65-18f4-4120-8059-b052b3e63b5f.jpg', 'ba1833dc-7a71-4b4f-9a32-ecfb2d21c068.jpg',
                'cecff25d-8229-48bc-b11f-aa043b1e4a08.jpg', 'f03059fa-6150-4cee-9874-7f426ddc3c68.jpg'
            ]
        },
        {
            id: 'residencia-florais',
            title: 'Residência Condomínio Florais',
            location: 'Condomínio Florais, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Construção residencial de alto padrão em condomínio fechado. Obra executada do alicerce ao acabamento fino com ampla garagem, pavimentação moderna com pedras e alto padrão de sofisticação.',
            mainImg: 'assets/img/IMAGENS/OBRA-FLORAIS/IMG_0608.webp',
            folder: 'assets/img/IMAGENS/OBRA-FLORAIS/',
            images: [
                'IMG_0608.webp', 'IMG_0607.webp',
                '20260804_103641.webp', '20260804_103631.webp', '20260804_103629.webp', '20260804_103441.webp',
                '20260804_103439.webp', '20260804_103437.webp', '20260804_103433.webp', '20260804_103431.webp',
                '20260804_103424.webp', '20260804_103418.webp', '20260723_101325.webp', '20260723_101323.webp',
                '20260708_105639.webp', '20260708_105635.webp'
            ]
        },
        {
            id: 'edmundo-italia',
            title: 'Residência Jardim Itália 2',
            location: 'Bairro Jardim Itália, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Projeto de reforma integral e modernização completa. Inclui construção de piscina personalizada, nova cobertura e criação de área gourmet de alto luxo com iluminação planejada e acabamentos nobres.',
            mainImg: 'assets/img/IMAGENS/OBRA-EDMUNDO-ITALIA/IMG_0106.webp',
            folder: 'assets/img/IMAGENS/OBRA-EDMUNDO-ITALIA/',
            images: [
                'IMG_0161.webp', 'IMG_0160.webp', 'IMG_0110.webp', 'IMG_0109.webp', 'IMG_0106.webp',
                'IMG_0064.webp', 'IMG_0049.webp', 'IMG_0047.webp', '20260812_101407.webp', '20260812_101031.webp',
                '20260804_095531.webp', '20260804_095522.webp', '20260804_095519.webp', '20260804_095449.webp',
                '20260804_095447.webp', '20260804_095104.webp', '20260804_095101.webp', '20260804_095053.webp',
                '20260804_095038.webp', '20260720_160944.webp', '20260720_160804.webp', '20260720_160635.webp',
                '20260720_160621.webp', '20260720_160617.webp', '20260713_092028.webp', '20260519_131213.webp',
                '20260513_102542.webp', '20260513_102540.webp', '20260513_102537.webp', '20260512_103806.webp',
                '20260512_103757.webp', '20260512_095859.webp', '20260512_095855.webp', '20260512_090022.webp',
                '20260512_084011.webp', '20260430_101628.webp', '20260429_093300.webp', '20260427_143257.webp',
                '20260424_094500.webp', '20260409_110718.webp', '20260409_110701.webp', '20260409_110617.webp',
                '20260409_110610.webp', '20260409_110604.webp', '20260409_110600.webp', '20260401_123500.webp',
                '20260401_123425.webp', '20260401_123418.webp', '20260401_123409.webp', '20260401_123353.webp',
                '20260319_100648.webp', '20260319_080853.webp', '20260317_131337.webp', '20260317_131333.webp',
                '20260317_123917.webp', '20260317_081006.webp', '20260314_082012.webp', '20260314_081959.webp',
                '20260314_081913.webp', '20260314_081347.webp', '20260314_081339.webp', '20260311_140253.webp',
                '20260311_100741.webp', '20260311_100731.webp', '20260309_152009.webp', '20260218_124723.webp',
                '20260210_162456.webp', '20260130_141010.webp', '20260130_082129.webp', '20260130_082126.webp',
                '20260128_113327.webp', '20260127_142648.webp', '20260122_082547.webp', '20260121_152452.webp',
                '20260121_152437.webp', '20260116_143556.webp', '20260116_143548.webp', '20260113_094433.webp',
                '20260113_094428.webp', '20260112_124139.webp', '20260112_103354.webp', '20260109_172701.webp',
                '20260109_172656.webp', '20260106_104250.webp', '20251218_105557.webp', '20251218_105412.webp',
                '20251218_092813.webp', '20251218_092808.webp', '20251212_170538.webp', '20251212_170513.webp',
                '20251212_154037.webp', '20251212_154024.webp', '20251212_154005.webp', '20251211_093824.webp',
                '20251210_082758.webp', '20251209_164202.webp', '20251204_132224.webp', '20251204_132207.webp',
                '20251203_163329.webp', '20251202_103048.webp', '20251128_133150.webp', '20251128_131219.webp',
                '20251124_102048.webp'
            ]
        },
        {
            id: 'centro-labisa',
            title: 'Renovação Comercial Labisa',
            location: 'Centro, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Ampla reforma comercial e preparação técnica para nova identidade visual. O projeto inclui revitalização completa do telhado frontal e reestruturação interna.',
            mainImg: 'assets/img/IMAGENS/OBRA-CENTRO-LABISA/TELHADOPRONTO-1.webp',
            folder: 'assets/img/IMAGENS/OBRA-CENTRO-LABISA/',
            images: [
                'TELHADOPRONTO-2.webp', 'TELHADOPRONTO-1.webp', 'ESTRTUTURA-TELHADO.webp', '20260418_175759.webp',
                '20260418_174406.webp', '20260418_174405.webp', '20260417_171126.webp', '20260411_154614.webp',
                '20260411_154155.webp', '20260411_131115.webp', '20260411_090227.webp', '20260411_085716.webp',
                '20260411_085712.webp', '20260403_103903.webp', '20260403_103755.webp', '20260403_103717.webp',
                '20260331_135550.webp', '20260331_110838.webp', '20260329_170147.webp', '20260327_173044.webp',
                '20260326_175932.webp', '20260323_154704.webp', '20260221_134826.webp'
            ]
        },
        {
            id: 'leblon-reforma',
            title: 'Reforma Leblon',
            location: 'Bairro Leblon, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Projeto versátil de reforma residencial incluindo revitalização total de barracão e casa principal, priorizando modernização de acabamentos e infraestrutura.',
            mainImg: 'assets/img/IMAGENS/OBRA-LEBLON-REFORMA/20260211_154200.webp',
            folder: 'assets/img/IMAGENS/OBRA-LEBLON-REFORMA/',
            images: [
                '20260713_120243.webp', '20260713_120230.webp', '20260713_120214.webp', '20260713_120105.webp',
                '20260713_120057.webp', '20260713_120049.webp', '20260713_120039.webp', '20260713_120028.webp',
                '20260713_120022.webp', '20260519_093352.webp', '20260519_093348.webp', '20260519_093345.webp',
                '20260508_093931.webp', '20260508_093814.webp', '20260508_093741.webp', '20260508_093732.webp',
                '20260502_133821.webp', '20260502_133806.webp', '20260502_103848.webp', '20260502_103151.webp',
                '20260428_165946.webp', '20260428_165943.webp', '20260428_165937.webp', '20260428_165933.webp',
                '20260428_165928.webp', '20260427_141033.webp', '20260427_141031.webp', '20260211_154200.webp',
                '20260211_154154.webp'
            ]
        },
        {
            id: 'obra-manso',
            title: 'Reserva do Manso',
            location: 'Lago do Manso - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Construção de área de lazer em terreno complexo. Logística diferenciada para garantir o padrão R-SENA em área de difícil acesso.',
            mainImg: 'assets/img/IMAGENS/OBRA-MANSO/13-ObraManso.webp',
            folder: 'assets/img/IMAGENS/OBRA-MANSO/',
            images: ['13-ObraManso.webp']
        },
        {
            id: 'obra-juina',
            title: 'Expansão Juína',
            location: 'Juína - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Obra de escala média no interior do estado. Provamos nossa capacidade logística de mobilizar equipe e materiais para garantir a qualidade fora da capital.',
            mainImg: 'assets/img/IMAGENS/OBRA-JUINA/14-ObraJuina.webp',
            folder: 'assets/img/IMAGENS/OBRA-JUINA/',
            images: ['14-ObraJuina.webp', '15-ObraJuina.webp']
        },
        {
            id: 'centro-sul',
            title: 'Reforma Centro Sul',
            location: 'Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Revitalização de espaço comercial com troca de fachadas, pisos e instalações elétricas corporativas.',
            mainImg: 'assets/img/IMAGENS/OBRA-CENTRO-SUL/16-ObraCentroSul.webp',
            folder: 'assets/img/IMAGENS/OBRA-CENTRO-SUL/',
            images: [
                '16-ObraCentroSul.webp', '17-ObraCentroSul.webp', 'IMG_20220416_131230827.webp',
                'IMG_20220416_143325214.webp', 'IMG_20220416_143330841.webp', 'IMG_20220416_143931779.webp'
            ]
        },
        {
            id: 'centro-norte',
            title: 'Manutenção Centro Norte',
            location: 'Cuiabá - Centro',
            status: 'Concluída',
            category: 'concluida',
            description: 'Manutenção estrutural e reformas em edifícios comerciais no coração da capital, com foco em segurança e preservação.',
            mainImg: 'assets/img/IMAGENS/OBRA-CENTRO-NORTE/18-ObraCentroNorte.webp',
            folder: 'assets/img/IMAGENS/OBRA-CENTRO-NORTE/',
            images: ['18-ObraCentroNorte.webp', '19-ObraCentroNorte.webp']
        },
        {
            id: 'televideo',
            title: 'Infraestrutura Televídeo',
            location: 'Centro, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Instalações comerciais e infraestrutura tecnológica. Especializada em ambientes de alta tecnologia e datacenter.',
            mainImg: 'assets/img/IMAGENS/OBRA-TELEVIDEO/20-ObraTelevideo.webp',
            folder: 'assets/img/IMAGENS/OBRA-TELEVIDEO/',
            images: ['20-ObraTelevideo.webp', '21-ObraTelevideo.webp']
        },
        {
            id: 'muro-contencao',
            title: 'Muros de Contenção',
            location: 'Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Engenharia de contenção e muros de arrimo com foco em segurança máxima e sistema de drenagem eficiente.',
            mainImg: 'assets/img/IMAGENS/OBRA-MURO/22-ObraMuro.webp',
            folder: 'assets/img/IMAGENS/OBRA-MURO/',
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
        
        // Sort and unique images, placing mainImg first
        const mainImgName = project.mainImg.split('/').pop();
        let sortedImages = [...new Set(project.images)].sort((a, b) => {
            const isADate = /^\d{8}/.test(a);
            const isBDate = /^\d{8}/.test(b);
            if(isADate && isBDate) return b.localeCompare(a); 
            return a.localeCompare(b);
        });
        if (mainImgName && sortedImages.includes(mainImgName)) {
            sortedImages = [mainImgName, ...sortedImages.filter(img => img !== mainImgName)];
        }

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
