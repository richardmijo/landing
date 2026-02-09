document.addEventListener('DOMContentLoaded', () => {
    // Project Data
    const PROJECTS_DATA = {
        movil: [
            { id: 'm1', title: 'MarketPlace', members: ['TAIS GUADALUPE CARREÑO PEÑAHERRETA', 'MATEO SEBASTIAN MERCHAN CORONEL'], repo: 'https://github.com/uide-market/uide_market', tag: 'Programación Móvil', desc: 'Comercio estudiantil UIDE.' },
            { id: 'm2', title: 'Bienestar Universitario', members: ['MATEO DAVID CASTILLO MACHERO', 'VIRGINIA ISABEL MORA GUANÍN', 'CHRISTIAN ALEXANDER SALINAS RAMON', 'JUAN ESTEBAN FUENTES PLACENCIA', 'VICTOR MANUEL MONTAÑO LUDEÑA'], repo: 'https://github.com/UIDE-BienestarU/UIDE-BienestarEstudiantil', tag: 'Programación Móvil', desc: 'Soporte y salud estudiantil.' },
            { id: 'm3', title: 'Cafeteria UIDE', members: ['MARLON SAVIER TORRES SOTO', 'ANTHONY IVAN SANCHEZ GRANDA', 'ANDERSON MICHAEL CALVA VIVANCO', 'ERICK DANIEL MORALES SARANGO', 'ALDDRIN DAMIAN VENEGAS CORDERO'], repo: 'https://github.com/uide-cafeteria/CafeteriaUIDE', tag: 'Programación Móvil', desc: 'Gestión de pedidos en campus.' },
            { id: 'm4', title: 'Emprendimiento', members: ['LANDER SANTIAGO GONZALEZ GUAMAN', 'LUIS EDUARDO RAMIREZ ROMERO', 'KEVIN MICHAEL GIRON CHUQUIRIMA', 'AIDAN ALEXANDER CARPIO YAGUACHI', 'SEBASTIAN ALEJANDRO CHOCHO SILVA'], repo: 'https://github.com/Alejotxw/emprendeUIDEmovil', tag: 'Programación Móvil', desc: 'Apps para emprendedores.' },
            { id: 'm5', title: 'UIDE MarketPlace (V2)', members: ['CAMILA DOMENICA LOARTE AGUILAR', 'RICARDO DAVID ALVARADO GAONA', 'EVELYN PATRICIA VALVERDE ERAZO'], repo: 'https://github.com/uide-marketproject/uide-marketproject', tag: 'Programación Móvil', desc: 'Venta de productos segunda mano.' }
        ],
        multimedia: [
            { id: 't1', title: 'SimuVidaTech', members: ['MADELEINE YANHELY JIMENEZ GAONA', 'MARJORIE JIMENEZ JIMENEZ', 'CRISTINA LISBETH ORELLANA ESPARZA'], repo: 'https://simuvida.uidehub.tech/', tag: 'Multimedia & Ecología', desc: 'Concienciación ambiental interactiva.' },
            { id: 't2', title: 'EcoTrack', members: ['FREDDY EMANUEL GUAMAN GONZALEZ', 'FRANCO RENE QUEZADA ORDOÑEZ'], repo: 'https://github.com/FredyNotAvailable/EcoTrack-Proyecto', tag: 'Multimedia & Ecología', desc: 'Monitoreó de huella ambiental.' },
            { id: 't3', title: 'EcoAlerta', members: ['JUAN SEBASTIAN CAMPANA VALLADARES', 'FABIAN CAMPOVERDE MUÑOZ', 'WILSON RENE MARTINEZ JIMENEZ'], repo: 'https://github.com/juanse-campana/ecoalerta_back', tag: 'Multimedia & Ecología', desc: 'Alertas ecológicas inteligentes.' },
            { id: 't4', title: 'EcoLearn', members: ['NICOLAS ALEJANDRO CEVALLOS MONTOYA', 'ESTALIN ISMAEL GONZALEZ CASTRO'], repo: 'https://github.com/Ismael-1105/frontend-ecologia', tag: 'Multimedia & Ecología', desc: 'Educación ambiental tecnológica.' }
        ],
        emergentes: [
            { id: 'e1', title: 'Tecnologías Emergentes', members: ['JARAMILLO GUACHON DANNY FRANCISCO'], repo: 'https://github.com/Dannyjar1/tecnologiasEmergentes-/', tag: 'Emergentes', desc: 'Investigación en fronteras de IA.' }
        ],
        otros: [
            "Lugares Turísticos Loja", "Afriganja Piuntza", "NTOP Gestión", "Servidor Web", "Lumi & Gumi Learning", "Parques Loja App",
            "Flujo Total", "Consultorio Psicológico Web", "Robot Asistente", "Catálogo Electrodomésticos", "Mapa Dibujo", "Code Quiz",
            "Portal Institucional UIDE", "Denuncias Anónimas", "SmartFoodSafe", "FoodFlow", "Tech Talks", "Turismo Loja", "Ventas Naturales",
            "Marketplace Artesanal", "Gestor Importación", "Gastronomía Loja", "Bienestar Comunitario", "Intercambio U", "Calendario Cultural",
            "Estacionamiento Smart", "Servidor Seguro ACL", "Honeypot Cowrie", "Ciberseguridad Smart Bin", "Flipper Zero", "EduCTF",
            "Raspberry License", "Honeypot Web", "Face IoT", "NFC Assistance", "Monitoreo Gases", "SMART BIN Loja", "ECG Monitor",
            "Cultivos IoT", "Apoyo Psicológico IoT", "Co-creación", "Sorteos UIDE", "Trabajos Titulación", "Piano Gestual", "Ajedrez Vision",
            "Carrera Vision", "Uidemarket Vision", "Trivia NLP", "RA Luz", "Predicción Esfuerzo", "Cáncer Piel AI", "Precio Ropa AI",
            "Game Trivia", "Spam Classifier", "Eco-Chrun", "IDS Intrusos", "Stressly", "Rendimiento Académico", "Spotify AI", "Precio Autos AI",
            "SOC Open Source", "Vulnerabilidades Web", "OSINT Automatizado", "Phishing Aware", "Banda 2.4GHz", "Triaje Sim", "911 Sim",
            "Shuar App", "Carpool UIDE", "Uideverse", "Forense Digital", "SOC+IA", "Deepfake Detect", "Docker Forense", "OCR Query",
            "Calorie AI", "Content AI", "Campus IoT", "DigitalBooks", "Invest Academy", "Coffee Connect", "Fiesta Fácil"
        ]
    };

    const MENTORS = [
        "Lorena Conde", "Milton Palacios", "Darío Valarezo", "Jonathan Soto", "Juan Sanmartín",
        "Wilson Valverde", "Charlie Cárdenas", "Byron Acaro", "Leonardo Chuquiguanca", "Richard Armijos"
    ];

    const SCHEDULE_DATA = [
        {
            day: 'Lunes', items: [
                { time: '08:00 - 10:00', sem: '1ro A', room: 'Lab 1', subject: 'Lógica / Arq / SO' },
                { time: '10:00 - 12:00', sem: '3ro', room: 'Aula B4', subject: 'OOP / DBMS' },
                { time: '16:00 - 18:00', sem: '5to', room: 'Lab 1', subject: 'AI / Data Mining' }
            ]
        },
        {
            day: 'Martes', items: [
                { time: '08:00 - 10:00', sem: '1ro B', room: 'Lab 1', subject: 'Lógica / Arq / SO' },
                { time: '10:00 - 14:00', sem: '4to', room: 'Lab 2', subject: 'Web / Middleware / Seguridad DB' },
                { time: '15:00 - 18:00', sem: '5to', room: 'Lab 1/2', subject: 'Móvil / Ing. Software' }
            ]
        },
        {
            day: 'Miércoles', items: [
                { time: '08:00 - 13:00', sem: '6to', room: 'Aula B8 / Lab 3', subject: 'Minería / Seguridad / Multimedia / Ecología' },
                { time: '15:00 - 18:00', sem: '7mo', room: 'Lab 3', subject: 'Interacción / QA / Forense / Nube' }
            ]
        },
        {
            day: 'Jueves', items: [
                { time: '08:00 - 10:00', sem: '3ro', room: 'Lab 3', subject: 'IoT / Fund. Seguridad' },
                { time: '10:00 - 12:00', sem: '8vo', room: 'Aula C11', subject: 'Emergentes / Negocios / Titulación' }
            ]
        }
    ];

    // UI elements
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const simContent = document.getElementById('simulation-content');
    const mentorsList = document.getElementById('mentors-list');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const viewScheduleBtn = document.getElementById('view-schedule-btn');

    // Schedule Modal
    if (viewScheduleBtn) {
        viewScheduleBtn.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal-card wide">
                    <div class="modal-header">
                        <div>
                            <h3>Cronograma de Aulas</h3>
                            <p style="font-size: 0.7rem; color: var(--uide-maroon); font-weight: 700;">USO INSTITUCIONAL - SEMANA 14</p>
                        </div>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="schedule-table-wrap">
                        <table class="schedule-table">
                            <thead>
                                <tr>
                                    <th>Día</th>
                                    <th>Hora</th>
                                    <th>Semestre</th>
                                    <th>Aula/Lab</th>
                                    <th>Materias</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${SCHEDULE_DATA.map(day => day.items.map((item, i) => `
                                    <tr>
                                        ${i === 0 ? `<td rowspan="${day.items.length}" class="day-cell">${day.day}</td>` : ''}
                                        <td>${item.time}</td>
                                        <td>${item.sem}</td>
                                        <td><span class="room-badge">${item.room}</span></td>
                                        <td class="subject-cell">${item.subject}</td>
                                    </tr>
                                `).join('')).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            setTimeout(() => modal.classList.add('visible'), 10);
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.classList.remove('visible');
                setTimeout(() => modal.remove(), 300);
            });
        });
    }

    // Mobile Menu
    if (hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // Render Mentors
    if (mentorsList) {
        mentorsList.innerHTML = MENTORS.map(m => `
            <div class="mentor-card">
                <div class="mentor-avatar">${m.split(' ').map(n => n[0]).join('')}</div>
                <h4>${m}</h4>
                <p>Docente</p>
            </div>
        `).join('');
    }

    // Modal Helper
    const showMembers = (members) => {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-card">
                <div class="modal-header">
                    <h3>Equipo del Proyecto</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <ul class="members-list">${members.map(m => `<li>${m}</li>`).join('')}</ul>
            </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('visible'), 10);
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.classList.remove('visible');
            setTimeout(() => modal.remove(), 300);
        });
    };

    const renderProjects = (category) => {
        simContent.style.opacity = '0';
        simContent.style.transform = 'translateY(10px)';

        setTimeout(() => {
            if (category === 'otros') {
                simContent.innerHTML = PROJECTS_DATA.otros.map(p => `
                    <div class="mini-card">
                        <span class="dot"></span> ${p}
                    </div>
                `).join('');
            } else {
                const projects = PROJECTS_DATA[category] || [];
                simContent.innerHTML = projects.map((p, i) => `
                    <div class="premium-card ${i === 0 ? 'featured' : ''}">
                        <div class="card-tag">${p.tag}</div>
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="card-footer">
                            <div class="btn-group">
                                <button class="btn-secondary small view-members" data-id="${p.id}" data-cat="${category}">Integrantes</button>
                                ${p.repo ? `<a href="${p.repo}" target="_blank" class="btn-primary small">Ver Proyecto</a>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('');
            }

            simContent.style.opacity = '1';
            simContent.style.transform = 'translateY(0)';

            document.querySelectorAll('.view-members').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    const cat = btn.getAttribute('data-cat');
                    const project = PROJECTS_DATA[cat].find(p => p.id === id);
                    if (project) showMembers(project.members);
                });
            });
        }, 300);
    };

    // Timeline/Category functionality
    timelineSteps.forEach(step => {
        step.addEventListener('click', () => {
            timelineSteps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
            renderProjects(step.getAttribute('data-category'));
        });
    });

    renderProjects('movil');

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
