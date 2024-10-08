document.querySelectorAll(".img_techno").forEach((img) => {
  img.addEventListener("mouseover", () => {
    const randomX = (Math.random() - 0.5) * 50; // Génère une valeur aléatoire entre -25 et 25
    const randomY = (Math.random() - 0.5) * 50; // Génère une valeur aléatoire entre -25 et 25

    img.style.transform = `translate(${randomX}px, ${randomY}px)`; // Applique la translation aléatoire
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "translate(0, 0)"; // Remet l'image à sa position d'origine
  });
});
