

// const menuBtn = document.getElementById('humbuger');
// const mobileMenu = document.getElementById('mobile-menu');
// let isOpen = false;

// menuBtn.addEventListener('click', () => {
//     isOpen = !isOpen;
//     mobileMenu.classList.toggle('hidden', !isOpen);
// });




Shery.imageMasker(".dev-img img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Joni",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    debug: true,
    duration: 1,
});

function homeAnimation() {
    gsap.from(".nav-link", {
        y: -100,
        stagger: 0.1,

    })

    gsap.from(".banner h4", {
        x: 100,
        opacity: 0,
        duration: 0.6

    })

    gsap.from(".banner h5", {
        x: -100,
        opacity: 0,
        duration: 0.6


    })
}

homeAnimation()

let cursor = document.querySelector('.cursor');
gsap.from(".about-right h3", {
    x: -100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".about-section",
        // markers: true,
        scrub: 2,
        top: "top 50%",
        end: "bottom 100%"
    }
})


function AboutTextAnimation() {
    // Select the text
    let text = document.querySelector(".about-right h4");
    let clutter = "";
    // Build the clutter string
    text.textContent.split("").forEach((elem) => {
        clutter += `<span>${elem}</span>`;
    });

    // Update the innerHTML once after the loop
    text.innerHTML = clutter;

    // GSAP animation logic controlled by ScrollTrigger
    gsap.from(".about-right h4 span", {
        y: 100,
        scale: 1,
        opacity: 0,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)", // Customize easing
        scrollTrigger: {
            trigger: ".about-section",
            scroller: `body`,
            start: "top 50%",
            end: "bottom 100%",
            scrub: 3,

        },
        stagger: 0.1, // Adjusted to smaller stagger for better timing
    });
}
AboutTextAnimation()

function SkillAnimation() {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skill-section",
            scroller: `body`,
            start: "top 50%",
            end: "bottom 100%",
            markers: false,
            scrub: 2,
            stagger: 0.2,
        }
    })

    tl.from(".skill-iteam", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    })

    tl.from(".skill-box img", {
        y: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.4

    })

    tl.from(".skill-box h3", {
        y: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.5

    })
}

SkillAnimation()


let cards = document.querySelectorAll(".card")
cards.forEach((card) => {
    gsap.to(card, {
        scale: 0.7,
        opacity: 0.6,

        scrollTrigger: {
            trigger: ".serives-section",
            scroller: `body`,
            start: "top 15%",
            end: "bottom 100%",
            markers: true,
            // pin: true,
            scrub: true,
            stagger:0.2,
        }
    })
})
