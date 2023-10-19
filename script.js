function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


  // Initialize ScrollReveal
  ScrollReveal().reveal('.title', {
    delay: 200,         // Délai en millisecondes avant la révélation de l'élément
    duration: 800,      // Durée de l'animation de révélation en millisecondes
    origin: 'bottom',   // Point d'origine de l'animation (en haut, en bas, à gauche, à droite, etc.)
    distance: '20px',   // Distance de l'animation
    easing: 'cubic-bezier(0.5, 0, 0, 1)', 
  });

  // Initialize ScrollReveal
  ScrollReveal().reveal('.experience-details-container', {
    delay: 200,         // Délai en millisecondes avant la révélation de l'élément
    duration: 800,      // Durée de l'animation de révélation en millisecondes
    origin: 'bottom',   // Point d'origine de l'animation (en haut, en bas, à gauche, à droite, etc.)
    distance: '20px',   // Distance de l'animation
    easing: 'cubic-bezier(0.5, 0, 0, 1)', 
  });