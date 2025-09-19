window.onload = function() {
  /* Inicio de Pantalla de carga */
  
const text = new SplitType(".loading-title", { types: "chars" });

let timeline = gsap.timeline();

timeline.from(".loading-title .char", {
  y: "100%",
  duration: 1,
  ease: "power4.out",
  stagger: 0.1,
  delay: 1
})
.to(".loading-title span", {
  y: "100%",
  duration: 0.5,
  ease: "power4.in",
  stagger: 0.1,
  delay: 0.5
});

let timelinebackground = gsap.timeline();

timelinebackground.to('.loading-screen', {
  delay: 6,
  yPercent: -1000,
  duration: 1,
  ease: "sine.in"
}) 

/* Fin de Pantalla de carga */

/* Inicio de Landing Page */

const title = new SplitType('.title', { types: 'words' }, '.span-title');
gsap.from('.span-title .word', {
  y: '150%',
  duration: 1,
  ease: "sine.out",
  stagger: 0.05, // Ajusta el tiempo entre palabras
  delay: 6.5
});

gsap.from('.subtitle', {
  opacity: 0,
  duration: 1,
  ease: "none",
  delay: 6.5
});

/* Fin de Landing Page */

/* Inicio Costa Rica Background */

const costaRica = document.querySelector('.CostaRica');
const costaRicaBackground = document.querySelector('.costaRicaBackground');

const TL = gsap.timeline({ paused: true });

TL.to(costaRicaBackground, {
  opacity: 1,
  duration: 0.6,
  ease: "power1.inOut"
});

costaRica.addEventListener("mouseenter", () => {
  TL.play();
});
costaRica.addEventListener("mouseout", () => {
  TL.reverse();
});

/* Fin Costa Rica Background */

/* Inicio Button Animation */

gsap.to('.btn', {
  scale: 1,
  duration: 1,
  ease: "power1.out",
  delay: 6.5
});


}



