const tl = gsap.timeline({default: {ease: "power1.out"}});


tl.to('.text', {y:'0%', duration: 1, stagger: 0.50}); 
tl.to(".slider", {y: '-100%', duration: 1.5});
tl.to(".intro",{y:"-100%",duration : 1},"-=1.5");
tl.fromTo("nav", {opacity :0}, {opacity:1, duration:1},'-=1');
tl.fromTo(".big-text", {opacity :0}, {opacity:1, duration:1.5},'-=1');


const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");

});

   

