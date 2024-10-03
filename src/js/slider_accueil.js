document.getElementById("slideBtn").onclick = function () {
  var container = document.querySelector(".container");

  // Ajoute la classe 'hidden' pour lancer l'animation
  container.classList.add("hidden");

  // Attends la fin de l'animation avant de cacher l'élément avec display: none
  setTimeout(function () {
    container.style.display = "none";
  }, 1500); // Correspond à la durée de la transition
};
