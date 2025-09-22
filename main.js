window.onload = function () {

  /* Inicio de Pantalla de carga */

  const text = new SplitType(".loading-title", { types: "chars" });

  let timeline = gsap.timeline();

  gsap.to('.loading-title', { opacity: 1, stagger: 0.2 });

  timeline
    .from(".loading-title .char", {
      y: "100%",
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
      delay: 1,
    })
    .to(".loading-title span", {
      y: "100%",
      duration: 0.5,
      ease: "power4.in",
      stagger: 0.05,
      delay: 0.5,
    });

  timeline.to(".loading-screen", {
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    onComplete: () => {
      document.querySelector(".loading-screen").style.display = "none";
    },
  });

  /* Fin de Pantalla de carga */

  /* Inicio de Landing Page */

  const title = new SplitType(".title", { types: "words" }, ".span-title");
  gsap.from(".span-title .word", {
    y: "150%",
    duration: 1,
    ease: "sine.out",
    stagger: 0.05, // Ajusta el tiempo entre palabras
    delay: 6.5,
  });

  gsap.from(".subtitle", {
    opacity: 0,
    duration: 1,
    ease: "none",
    delay: 6.5,
  });

  gsap.from(".Background", {
    scale: 1.1,
    duration: 5,
    ease: "none",
    delay: 6.5,
  });

  /* Fin de Landing Page */

  /* Inicio Costa Rica Background */

  const costaRica = document.querySelector(".CostaRica");
  const costaRicaBackground = document.querySelector(".costaRicaBackground");

  const TL = gsap.timeline({ paused: true });

  TL.to(costaRicaBackground, {
    opacity: 1,
    duration: 0.6,
    ease: "power1.inOut",
  });

  costaRica.addEventListener("mouseenter", () => {
    TL.play();
  });
  costaRica.addEventListener("mouseout", () => {
    TL.reverse();
  });

  /* Fin Costa Rica Background */

  /* Inicio Button Animation */

  gsap.to(".btn", {
    scale: 1,
    duration: 5,
    ease: "power1.inOut",
    delay: 7,
  });
};
