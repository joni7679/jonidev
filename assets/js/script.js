

// const menuBtn = document.getElementById('humbuger');
// const mobileMenu = document.getElementById('mobile-menu');
// let isOpen = false;

// menuBtn.addEventListener('click', () => {
//     isOpen = !isOpen;
//     mobileMenu.classList.toggle('hidden', !isOpen);
// });




// Shery.imageMasker(".dev-img img" /* Element to target.*/, {
//     //Parameters are optional.
//     mouseFollower: true,
//     text: "Joni",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     debug: true,
//     duration: 1,
// });

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
        console.log(val.deltaY)
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
    gsap.from(".contact-tittle h2 span", {
        y: 100,
        scale: 1,
        opacity: 0,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)", // Customize easing
        scrollTrigger: {
            trigger: ".contact-section",
            scroller: `body`,
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