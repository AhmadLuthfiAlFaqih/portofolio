// Menunggu hingga DOM dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Menutup menu saat link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll Navbar Effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Smooth Scrolling untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset untuk navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Nav Link on Scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Download CV Button - Updated to handle direct PDF link
    const downloadCvBtn = document.getElementById('download-cv');
    
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            // No need to prevent default since we want to download the PDF directly
            // But we can add a confirmation dialog
            const confirmed = confirm('Apakah Anda ingin mengunduh CV saya?');
            
            if (!confirmed) {
                e.preventDefault();
            }
        });
    }
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Project Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                const filter = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                        // Add animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Certification Filter
    const certFilterBtns = document.querySelectorAll('#certifications .filter-btn');
    const certificationCards = document.querySelectorAll('.certification-card');
    
    if (certFilterBtns.length > 0 && certificationCards.length > 0) {
        certFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                certFilterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter certifications
                const filter = this.getAttribute('data-filter');
                
                certificationCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                        // Add animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Animasi saat scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .skill-item, .certification-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state untuk animasi
    document.querySelectorAll('.project-card, .skill-item, .certification-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Jalankan animasi saat scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Jalankan sekali saat halaman dimuat
    animateOnScroll();
    
    // Certification Link Handlers
    document.querySelectorAll('.certification-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the href attribute
            const href = this.getAttribute('href');
            
            // If it's a placeholder (#), show alert
            if (href === '#') {
                const title = this.closest('.certification-card').querySelector('h3').textContent;
                alert(`Sertifikat untuk "${title}" akan segera tersedia.`);
            } else {
                // Open the link in a new tab
                window.open(href, '_blank');
            }
        });
    });
    
    // Project Link Handlers (if any project links are added in the future)
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simulasi navigasi ke detail
            const title = this.closest('.project-card').querySelector('h3').textContent;
            alert(`Anda akan diarahkan ke halaman detail untuk: ${title}`);
            
            // Dalam implementasi nyata, Anda dapat menggunakan:
            // window.location.href = 'detail-page.html';
        });
    });
    
    // Skill Level Color Coding
    document.querySelectorAll('.skill-level').forEach(level => {
        const text = level.textContent.trim();
        
        if (text.includes('Advance')) {
            level.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            level.style.color = '#28a745';
        } else if (text.includes('Intermediate')) {
            level.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
            level.style.color = '#ffc107';
        } else if (text.includes('Basic')) {
            level.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
            level.style.color = '#007bff';
        }
    });
});