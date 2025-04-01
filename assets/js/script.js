function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

window.onload = function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 200,  // 🔥 Increase particles count
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.8,
                random: true,
                anim: { enable: true, speed: 2, opacity_min: 0.2, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
            },
            move: {
                enable: true,
                speed: 4,  // 🚀 Increase speed for smooth effect
                direction: "none",
                random: true,  // 🔄 Random movement
                straight: false,
                out_mode: "out",  // 🏃 Particles will not disappear
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            },
            line_linked: { enable: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },  // 
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: { distance: 200 },
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
                remove: { quantity: 2 }
            }
        }
    });

};

// function responsivenav() {

// }
// responsivenav()

gsap.registerPlugin(ScrollTrigger);

// First GSAP animation for loading sequence
window.addEventListener("load", (event) => {
    let tl = gsap.timeline({
        onComplete: homeAnimation
    });

    tl.to(".wrapper-one", {
        right: "60%",
        delay: 2,
        duration: 4,
    }, "a");

    tl.to(".wrapper-two", {
        left: "60%",
        delay: 2,
        duration: 4,
    }, "a");

    tl.to(".loader-div", {
        opacity: 0,
        y: "-100%",
        duration: 0.1,
    }, 'b');
});

function menuToggleFunction() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Menu Animation
    const menuIcon = document.querySelector('.menu-icon');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-link');
    const brandText = document.querySelector('.brand-text');
    menuIcon.addEventListener("click", () => {
        console.log("hello nav");

    })

}
menuToggleFunction();

// Function to handle home page animations after the loading animation
function homeAnimation() {
    gsap.from(".nav-link", {
        y: -100,
        stagger: 0.1,
    });

    gsap.from(".banner h4", {
        x: 100,
        opacity: 0,
        duration: 0.6,
    });

    gsap.from(".banner h5", {
        x: -100,
        opacity: 0,
        duration: 0.6,
    });
}
homeAnimation()

function herosection() {


    if (typeof Shery !== "undefined") {
        Shery.imageMasker(".dev-img img", {
            mouseFollower: true,
            text: "Joni",
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            debug: true,
            duration: 1,
        });
    } else {
        console.error("Shery.js is not loaded properly.");
    }

    let cursor = document.querySelector('.cursor');
    gsap.from(".about-right h3", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".about-section",
            scroller: `main`,
            scrub: 2,
            top: "top 50%",
            end: "bottom 100%"
        }
    })
}
herosection()

function AboutTextAnimation() {
    // Select the text
    let text = document.querySelector(".about-text");
    let clutter = "";
    // Build the clutter string
    text.textContent.split("").forEach((elem) => {
        clutter += `<span>${elem}</span>`;
    });

    // Update the innerHTML once after the loop
    text.innerHTML = clutter;

    // GSAP animation logic controlled by ScrollTrigger
    gsap.to(".about-text span", {

        // Customize easing
        scrollTrigger: {
            trigger: ".about-text",
            scroller: `main`,
            start: `top 80%`,
            end: `bottom 50%`,
            // markers: true,
            scrub: 3,

        },
        stagger: .2,
        color: `#000`,
    });
}
AboutTextAnimation()

function SkillAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skill-section",
            scroller: `main`,
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

function socialIconsAnimation() {
    let elems = document.querySelectorAll(".elem");

    elems.forEach((element) => {
        // Select the image element directly
        let imgElement = element.querySelector("img");

        if (imgElement) { // Check if the img element exists
            // Add event listener for mouseenter
            element.addEventListener("mouseenter", () => {
                // Animate the img element (opacity and scale)
                imgElement.style.opacity = "1";
                imgElement.style.transform = "scale(1)";

            });

            // Add event listener for mouseleave
            element.addEventListener("mouseleave", () => {
                // Animate the img element (reset opacity and scale)
                imgElement.style.opacity = "0";
                imgElement.style.transform = "scale(0)";

            });

            // Add event listener for mousemove
            // element.addEventListener("mousemove", (event) => {
            //     console.log(event);
            //     const rect = element.getBoundingClientRect(); // Get the position of .elem relative to the viewport
            //     const offsetX = event.clientX - rect.left; // Calculate X position relative to .elem
            //     const offsetY = event.clientY - rect.top; // Calculate Y position relative to .elem

            //     if (animationTimer) {
            //       clearTimeout(animationTimer);
            //     }

            //     animationTimer = setTimeout(() => {
            //       gsap.to(imgElement, {
            //         x: offsetX,
            //         y: offsetY,
            //         duration: 0.3, // Duration of the transition in seconds
            //         ease: "power2.out"
            //       });
            //     }, 16); // 16ms = ~60fps
            //   });

        }
    });
}
socialIconsAnimation()

function followmeTextAnimation() {
    window.addEventListener("wheel", (val) => {

        if (val.deltaY > 0) {
            // console.log("shidda scrolling ")
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                duration: 2,
                repeat: -1,
                ease: "none"
            })
        }
        else {
            // console.log("reverse scrolling")
            gsap.to(".marque", {
                transform: "translateX(0%)",
                duration: 2,
                repeat: -1,
                ease: "none"
            })
        }
    })


}

followmeTextAnimation()

function elementAnimation() {
    gsap.from(".elem", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".elem",
            scroller: `main`,
            start: "top 50%",
            end: "bottom 20%",
            scrub: 2,
            // markers: true,
        }
    })
}
elementAnimation()

function TextAnimation() {
    // Select the text
    let text = document.querySelector(".contact-tittle h2");
    let clutter = "";
    // Build the clutter string
    text.textContent.split("").forEach((elem) => {
        clutter += `<span>${elem}</span>`;
    });

    // Update the innerHTML once after the loop
    text.innerHTML = clutter;

    // GSAP animation logic controlled by ScrollTrigger
    gsap.to(".contact-tittle h2 span", {
        scrollTrigger: {
            trigger: ".contact-tittle",
            scroller: `main`,
            start: "top 70%",
            end: "bottom 100%",
            scrub: 3,
            // markers: true,

        },
        stagger: 0.1,
        color: "#000"
    });
}
TextAnimation()

gsap.from(".mobile-navlink", {
    x: "100%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,

})


function circleTextAnimation() {
    const text = "JONI*HALDER*";
    const container = document.querySelector(".circle-text");

    for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.innerText = text[i];
        let angle = (360 / text.length) * i;
        let radius = 50;

        let x = Math.cos((angle * Math.PI) / 180) * radius;
        let y = Math.sin((angle * Math.PI) / 180) * radius;

        span.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        container.appendChild(span);
    }

    // Rotation Animation
    let rotation = 0;
    let speed = 1; // Normal speed
    let interval = setInterval(() => {
        rotation += speed;
        container.style.transform = `rotate(${rotation}deg)`;
    }, 50);

    // Reverse direction on hover
    container.addEventListener("mouseenter", () => {
        speed = -1;
    });

    // Normal direction when mouse leaves
    container.addEventListener("mouseleave", () => {
        speed = 1;
    });

}
circleTextAnimation()

// validation js code
// Add custom method for pattern validation
function validationContact() {
    jQuery.validator.addMethod(
        "pattern",
        function (value, element, param) {
            return this.optional(element) || param.test(value);
        },
        "Invalid format."
    );

    $("#contactForm").validate({
        rules: {
            fname: {
                required: true,
                minlength: 3
            },
            lastname: { // Fixed typo here
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true
            },
            project: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            fname: {
                required: "Please enter your First name",
                minlength: "Your name must be at least 3 characters long"
            },
            lastname: {
                required: "Please enter your Last name",
                minlength: "Your name must be at least 3 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your Phone Number",
                pattern: "Please enter a valid Phone Number (10 digits)"
            },
            project: {
                required: "Please enter a project",
                minlength: "Your project message must be at least 10 characters long"
            }
        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
            form.reset(); // Resets the form after successful submission
        }
    });

}
validationContact()

function ProjectShowcase() {
    gsap.to(".project-wrapper", {
        x: () => -document.querySelector(".project-wrapper").scrollWidth + window.innerWidth,  
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".project-container",
            scroller: "main",
            // markers: true,
            start: "top top",
            end: "+=300px",
            scrub: 3,
            pin: true
        }
    });
}

ProjectShowcase()



