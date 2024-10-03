const dialog = document.querySelector("#modal_theme");
const showButton = document.querySelector("#btn_open_theme");
const closeButton = document.querySelector("#btn_close_theme");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});
