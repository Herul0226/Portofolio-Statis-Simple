document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opsional: berhenti mengamati setelah animasi dipicu
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elemen yang akan dianimasikan
    const animatedElements = document.querySelectorAll('.reveal-text, .fade-in, .fade-up');
    animatedElements.forEach(el => observer.observe(el));

    // Animasi Navbar saat scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.padding = '30px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scroll untuk navigasi (sudah ditangani CSS, tapi ini untuk kontrol lebih)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Logika sederhana untuk "Tempat Menambahkan Karya Sendiri"
    // Anda bisa menambahkan data proyek di sini untuk di-render secara dinamis
    const projectData = [
        // { title: 'Proyek Baru', desc: 'Deskripsi...', link: '#' }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectData.length > 0) {
        projectData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card fade-up';
            card.innerHTML = `
                <div class="project-image" style="background-color: #eee;"></div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <a href="${project.link}" class="project-link">Lihat Detail →</a>
                </div>
            `;
            projectsGrid.appendChild(card);
            observer.observe(card);
        });
    }
});
