// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Menu Animation
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-link');
const brandText = document.querySelector('.brand-text');

let menuTl = gsap.timeline({ 
    defaults: { duration: 1, ease: 'expo.inOut' },
    paused: true 
});

// Build the timeline
menuTl
    .to('.mobile-menu', {
        right: 0
    })
    .to('.mobile-menu', {
        height: '100vh'
    }, '-=0.1')
    .to('.mobile-link', {
        opacity: 1,
        stagger: 0.2,
        pointerEvents: 'all'
    }, '-=0.8')
    .to('.close-btn', {
        opacity: 1,
        pointerEvents: 'all'
    }, '-=0.8')
    .to('.brand-text', {
        opacity: 1
    }, '-=1');

// Event Listeners
menuIcon.addEventListener('click', () => {
    if(menuTl.reversed()) {
        menuTl.play();
    } else {
        menuTl.play(0);
    }
});

closeBtn.addEventListener('click', () => {
    menuTl.reverse();
});

// Optional: Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuTl.reverse();
    });
}); 