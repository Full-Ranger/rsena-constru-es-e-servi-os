/**
 * R-SENA Construções e Serviços
 * Main Script - Premium Interactivity
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
            mainImg: 'assets/img/IMAGENS/OBRA-EDMUNDO-ITALIA/20260401_123500.jpg',
            folder: 'assets/img/IMAGENS/OBRA-EDMUNDO-ITALIA/',
            images: [
                '20251124_102048.jpg', '20251128_131219.jpg', '20251128_133150.jpg', '20251202_103048.jpg', 
                '20251203_163329.jpg', '20251204_132207.jpg', '20251204_132224.jpg', '20251209_164202.jpg', 
                '20251210_082758.jpg', '20251211_093824.jpg', '20251212_154005.jpg', '20251212_154024.jpg', 
                '20251212_154037.jpg', '20251212_170513.jpg', '20251212_170538.jpg', '20251218_092808.jpg', 
                '20251218_092813.jpg', '20251218_105412.jpg', '20251218_105557.jpg', '20260106_104250.jpg', 
                '20260109_172656.jpg', '20260109_172701.jpg', '20260112_103354.jpg', '20260112_124139.jpg', 
                '20260113_094428.jpg', '20260113_094433.jpg', '20260116_143548.jpg', '20260116_143556.jpg', 
                '20260121_152437.jpg', '20260121_152452.jpg', '20260122_082547.jpg', '20260127_142648.jpg', 
                '20260128_113327.jpg', '20260130_082126.jpg', '20260130_082129.jpg', '20260130_141010.jpg', 
                '20260210_162456.jpg', '20260218_124723.jpg', '20260309_152009.jpg', '20260311_100731.jpg', 
                '20260311_100741.jpg', '20260311_140253.jpg', '20260314_081339.jpg', '20260314_081347.jpg', 
                '20260314_081913.jpg', '20260314_081959.jpg', '20260314_082012.jpg', '20260317_081006.jpg', 
                '20260317_123917.jpg', '20260317_131333.jpg', '20260317_131337.jpg', '20260319_080853.jpg', 
                '20260319_100648.jpg', '20260401_123353.jpg', '20260401_123409.jpg', '20260401_123418.jpg', 
                '20260401_123425.jpg', '20260401_123500.jpg', '20260409_110600.jpg', '20260409_110604.jpg', 
                '20260409_110610.jpg', '20260409_110617.jpg', '20260409_110701.jpg', '20260409_110718.jpg'
            ]
        },
        {
            id: 'centro-labisa',
            title: 'Renovação Comercial Labisa',
            location: 'Centro, Cuiabá - MT',
            status: 'Em Execução',
            category: 'execucao',
            description: 'Ampla reforma comercial e preparação técnica para nova identidade visual. O projeto inclui revitalização completa do telhado frontal e reestruturação interna.',
            mainImg: 'assets/img/IMAGENS/OBRA-CENTRO-LABISA/TELHADOPRONTO-1.jpeg',
            folder: 'assets/img/IMAGENS/OBRA-CENTRO-LABISA/',
            images: [
                '20260221_134826.jpg', '20260323_154704.jpg', '20260326_175932.jpg', '20260327_173044.jpg', 
                '20260329_170147.jpg', '20260331_110838.jpg', '20260331_135550.jpg', '20260403_103717.jpg', 
                '20260403_103755.jpg', '20260403_103903.jpg', '20260411_085712.jpg', '20260411_085716.jpg', 
                '20260411_090227.jpg', '20260411_131115.jpg', '20260411_154155.jpg', '20260411_154614.jpg', 
                'ESTRTUTURA-TELHADO.jpeg', 'TELHADOPRONTO-1.jpeg', 'TELHADOPRONTO-2.jpeg'
            ]
        },
        {
            id: 'leblon-reforma',
            title: 'Reforma Leblon',
            location: 'Bairro Leblon, Cuiabá - MT',
            status: 'Em Execução',
            category: 'execucao',
            description: 'Projeto versátil de reforma residencial incluindo revitalização total de barracão e casa principal, priorizando modernização de acabamentos e infraestrutura.',
            mainImg: 'assets/img/IMAGENS/OBRA-LEBLON-REFORMA/20260211_154200.jpg',
            folder: 'assets/img/IMAGENS/OBRA-LEBLON-REFORMA/',
            images: [
                '20260211_154154.jpg', '20260211_154200.jpg'
            ]
        },
        {
            id: 'obra-manso',
            title: 'Reserva do Manso',
            location: 'Lago do Manso - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Construção de área de lazer em terreno complexo. Logística diferenciada para garantir o padrão R-SENA em área de difícil acesso.',
            mainImg: 'assets/img/13-ObraManso.jpg',
            folder: 'assets/img/',
            images: ['13-ObraManso.jpg']
        },
        {
            id: 'obra-juina',
            title: 'Expansão Juína',
            location: 'Juína - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Obra de escala média no interior do estado. Provamos nossa capacidade logística de mobilizar equipe e materiais para garantir a qualidade fora da capital.',
            mainImg: 'assets/img/14-ObraJuina.jpg',
            folder: 'assets/img/',
            images: ['14-ObraJuina.jpg', '15-ObraJuina.jpg']
        },
        {
            id: 'centro-sul',
            title: 'Reforma Centro Sul',
            location: 'Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Revitalização de espaço comercial com troca de fachadas, pisos e instalações elétricas corporativas.',
            mainImg: 'assets/img/16-ObraCentroSul.jpg',
            folder: 'assets/img/',
            images: ['16-ObraCentroSul.jpg', '17-ObraCentroSul.jpg']
        },
        {
            id: 'centro-norte',
            title: 'Manutenção Centro Norte',
            location: 'Cuiabá - Centro',
            status: 'Concluída',
            category: 'concluida',
            description: 'Manutenção estrutural e reformas em edifícios comerciais no coração da capital, com foco em segurança e preservação.',
            mainImg: 'assets/img/18-ObraCentroNorte.jpg',
            folder: 'assets/img/',
            images: ['18-ObraCentroNorte.jpg', '19-ObraCentroNorte.jpg']
        },
        {
            id: 'televideo',
            title: 'Infraestrutura Televídeo',
            location: 'Centro, Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Instalações comerciais e infraestrutura tecnológica. Especializada em ambientes de alta tecnologia e datacenter.',
            mainImg: 'assets/img/20-ObraTelevideo.jpg',
            folder: 'assets/img/',
            images: ['20-ObraTelevideo.jpg', '21-ObraTelevideo.jpg']
        },
        {
            id: 'muro-contencao',
            title: 'Muros de Contenção',
            location: 'Cuiabá - MT',
            status: 'Concluída',
            category: 'concluida',
            description: 'Engenharia de contenção e muros de arrimo com foco em segurança máxima e sistema de drenagem eficiente.',
            mainImg: 'assets/img/22-ObraMuro.jpg',
            folder: 'assets/img/',
            images: ['22-ObraMuro.jpg']
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
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
                <img src="${project.mainImg}" alt="${project.title}">
                <div class="project-overlay">
                    <p>${project.location}</p>
                    <h3>${project.title}</h3>
                    <div class="view-btn">
                        <span>Ver Imagens</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(project));
            galleryContainer.appendChild(card);
        });
        
        // Trigger reveal animation for new items
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
        
        const mainImg = document.getElementById('main-modal-img');
        const thumbsGrid = document.getElementById('thumbnails-grid');
        
        mainImg.src = project.mainImg;
        thumbsGrid.innerHTML = '';
        
        // Sort and unique images
        const sortedImages = [...new Set(project.images)].sort((a, b) => {
            // Priority to date-like strings YYYYMMDD
            const isADate = /^\d{8}/.test(a);
            const isBDate = /^\d{8}/.test(b);
            if(isADate && isBDate) return b.localeCompare(a); // Most recent first
            return a.localeCompare(b);
        });

        sortedImages.forEach(imgName => {
            const thumb = document.createElement('img');
            thumb.src = project.folder + imgName;
            thumb.className = 'thumbnail' + (project.folder + imgName === project.mainImg ? ' active' : '');
            
            thumb.addEventListener('click', () => {
                mainImg.src = thumb.src;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            
            thumbsGrid.appendChild(thumb);
        });
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

    // Initial render
    renderProjects();
    handleReveal();
});
