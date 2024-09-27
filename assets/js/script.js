gsap.from(".nav-link",{
    y:-100,
    stagger:0.1,
    
})

gsap.from(".banner h4",{
    x:100,
    opacity:0,
    duration:0.6

})

gsap.from(".banner h5",{
    x:-100,
    opacity:0,
    duration:0.6

})

let circle = document.querySelector(".cricle");
let textCenter = document.querySelector(".text-center");

textCenter.addEventListener("mousemove", (e) => {
    // Get mouse coordinates
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Move the circle to follow the mouse with smooth animation
    gsap.to(circle, {
        x: mouseX ,
        y: mouseY ,
        scale: 1,        // Scale up the circle when hovering
        duration: 0.3,
        // opacity: 0.5,
    });
});

textCenter.addEventListener("mouseleave", () => {
    // Scale down and hide the circle when the mouse leaves the area
    gsap.to(circle, {
        scale: 0,
        duration: 0.5,
        // opacity: 0,
    });
});
