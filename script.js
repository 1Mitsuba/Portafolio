// Menú de navegación responsive
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío normal del formulario
            
            // Obtener los valores del formulario
            const nombre = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('subject').value;
            const mensaje = document.getElementById('message').value;
            
            // Crear el mensaje para WhatsApp
            const mensajeWhatsApp = `¡Hola! Soy ${nombre}%0A%0A` +
                                `*Email:* ${email}%0A` +
                                `*Asunto:* ${asunto}%0A%0A` +
                                `*Mensaje:*%0A${mensaje}`;
            
            // Número de WhatsApp (con código de país de Bolivia)
            const numeroWhatsApp = '59169448014';
            
            // Crear el enlace de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;
            
            // Redireccionar a WhatsApp
            window.open(urlWhatsApp, '_blank');
            
            // Limpiar el formulario
            this.reset();
        });
    }

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu li a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Navegación suave al hacer clic en los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cargar proyectos dinámicamente
    loadProjects();

    // Filtros de proyectos
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitar la clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar la clase activa al botón clickeado
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

});

// Función para cargar proyectos
function loadProjects() {
    // Datos de ejemplo - idealmente estos datos vendrían de projects.json
    const projects = [
        {
            name: "VetCare",
            description: "Sitio web para una clínica veterinaria con sistema de gestión de citas.",
            image: "assets/images/vetcare_simple.svg", // Solo dos emojis de patitas
            technologies: ["HTML", "CSS", "JavaScript"],
            demo: "https://1mitsuba.github.io/VetCare",
            code: "https://github.com/1Mitsuba/VetCare",
            category: "html-css"
        },
        {
            name: "Chicas Web",
            description: "Plataforma web para showcasing de servicios.",
            image: "assets/images/chicas_web_simple.svg", // Solo dos emojis de chicas laptop
            technologies: ["HTML", "CSS", "JavaScript"],
            demo: "https://1mitsuba.github.io/Chicas_web",
            code: "https://github.com/1Mitsuba/Chicas_web",
            category: "javascript"
        },
        {
            name: "Proyecto",
            description: "Proyecto web desarrollado con HTML, CSS y JavaScript.",
            image: "assets/images/proyecto_web.svg", // Imagen de desarrollo web
            technologies: ["HTML", "CSS", "JavaScript"],
            demo: "https://1mitsuba.github.io/Proyecto",
            code: "https://github.com/1Mitsuba/Proyecto",
            category: "html-css"
        },
        {
            name: "Mi Repositorio",
            description: "Colección de ejemplos y tutoriales de desarrollo web.",
            image: "assets/images/mi_repositorio.svg", // Imagen con emoji
            technologies: ["CSS", "HTML", "JavaScript"],
            demo: "https://1mitsuba.github.io/Mi_Repositorio",
            code: "https://github.com/1Mitsuba/Mi_Repositorio",
            category: "html-css"
        },
        {
            name: "Web App",
            description: "Aplicación web con funcionalidades de React y C#.",
            image: "assets/images/web_3.svg", // Imagen con emoji
            technologies: ["HTML", "C#", "CSS", "JavaScript", "React"],
            demo: "https://1mitsuba.github.io/Web_3",
            code: "https://github.com/1Mitsuba/Web_3",
            category: "react"
        },
        {
            name: "Proyect",
            description: "Aplicación web para gestión de libros, mangas y revistas.",
            image: "assets/images/proyect.svg", // Imagen con emoji
            technologies: ["HTML", "CSS", "JavaScript"],
            demo: "https://1mitsuba.github.io/proyect",
            code: "https://github.com/1Mitsuba/proyect",
            category: "javascript"
        }
    ];

    renderProjects(projects);
}

// Función para renderizar proyectos
function renderProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                    <a href="${project.code}" target="_blank"><i class="fab fa-github"></i> Código</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Función para filtrar proyectos
function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}