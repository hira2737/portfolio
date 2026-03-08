document.addEventListener('DOMContentLoaded', () => {

    // ===== Mobile Navigation Toggle =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a nav item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });


    // ===== Header shadow on scroll =====
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '0';
        }
    });


    // ===== Highlight active nav link =====
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {

        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }

        });

        navItems.forEach(item => {
            item.classList.remove('active');

            if (item.getAttribute('href').includes(current) && current !== '') {
                item.classList.add('active');
            }
        });

    });


    // ===== Resume button =====
    const downloadBtn = document.getElementById('download-resume');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume upload is pending. The owner will upload it soon!');
        });
    }


    // ===== Scroll reveal animation =====
    const revealElements = document.querySelectorAll('.card, .section-title');

    const revealCallback = (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }

        });

    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {

        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        revealObserver.observe(el);

    });

});