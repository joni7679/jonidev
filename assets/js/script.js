
function locomotion() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("main").style.transform
          ? "transform"
          : "fixed"*/
    });



    tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
        .from(
            ".line-3",
            { scaleX: 0, transformOrigin: "left center", ease: "none" },
            0
        )
        .to(".purple", { backgroundColor: "#28a92b" }, 0);

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

};

// locomotion()


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
        scroller: `body`,
        scrub: 2,
        top: "top 50%",
        end: "bottom 100%"
    }
})


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
            scroller: `body`,
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

function elementAnimation() {
    gsap.from(".elem", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".elem",
            scroller: `body`,
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