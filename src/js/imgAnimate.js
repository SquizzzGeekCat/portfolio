const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img4 = document.querySelector("#img4");

img2.addEventListener(
  "mouseover",
  (event) => {
    // Étape 1 : Appliquer le flou et changer le z-index
    img1.style.filter = "blur(0px)";
    img1.style.zIndex = 2; // img1 à z-index 1
    img2.style.filter = "blur(3px) ";
    img2.style.zIndex = 1; // img2 à z-index 0
    img4.style.filter = "blur(3px)";
    img4.style.zIndex = 0; // img4 à z-index 2

    // Étape 2 : Changer les styles après un délai
    setTimeout(() => {
      // Transition vers l'état intermédiaire
      img1.style.filter = "blur(3px)";
      img1.style.zIndex = 1; // img1 à z-index 1
      img2.style.filter = "blur(3px)";
      img2.style.zIndex = 0; // img2 à z-index 0
      img4.style.filter = "blur(0px)";
      img4.style.zIndex = 2; // img4 à z-index 2

      // Étape 3 : Réinitialiser après un autre délai
      setTimeout(() => {
        img1.style.filter = "blur(3px)";
        img1.style.zIndex = 1; // img1 à z-index 2
        img2.style.filter = "blur(0px)";
        img2.style.zIndex = 2; // img2 à z-index 1
        img4.style.filter = "blur(3px)";
        img4.style.zIndex = 0; // img4 à z-index 0
      }, 1500); // Délai avant de revenir à l'état normal
    }, 1500); // Délai avant de changer à l'état intermédiaire
  },
  false
);
