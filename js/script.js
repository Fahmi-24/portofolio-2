/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (document.querySelector('header nav a[href*=' + id + ']')) {
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            });
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/*==================== scroll reveal ====================*/
// Inisialisasi ScrollReveal
const sr = ScrollReveal({
    distance: '50px',  // Jarak animasi
    duration: 1000,    // Durasi animasi
    easing: 'ease-in-out', // Tipe easing
    reset: true       // Menentukan apakah animasi akan diulang setiap kali elemen terlihat
});

// Terapkan efek ScrollReveal ke elemen
sr.reveal('.header', { origin: 'top' });
sr.reveal('.home-content', { origin: 'top', delay: 200 });
sr.reveal('.home-image', { origin: 'top', delay: 400 });
sr.reveal('.about', { origin: 'bottom', delay: 200 });
sr.reveal('.services-container', { origin: 'bottom', delay: 200 });
sr.reveal('.portofolio-container', { origin: 'bottom', delay: 200 });
sr.reveal('.contact', { origin: 'bottom', delay: 200 });
sr.reveal('.footer', { origin: 'bottom', delay: 200 });
sr.reveal('.home-content h1', { origin: 'left', delay: 200 });
sr.reveal('.about-img', { origin: 'bottom', delay: 200 });


// Initialize Typed.jss
var typed = new Typed('.multiple-text', {
    strings: ["Mechanical Engineering", "CNC Programmer", "PLC Programmer", "Piping Engineering"],
    typeSpeed: 15,        // Kecepatan mengetik
    backSpeed: 25,         // Kecepatan menghapus
    backDelay: 2000,       // Waktu tunggu sebelum menghapus
    startDelay: 500,       // Waktu tunggu sebelum memulai
    loop: true
});
