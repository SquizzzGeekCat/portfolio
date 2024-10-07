const dialog = document.querySelector(".dialog_box");
const showButton = document.querySelector("#btn_open_theme");
const closeButton = document.querySelector(".btn_close");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Sélectionner tous les boutons d'ouverture et de fermeture de modals
const listOpenModal = document.querySelectorAll(".btn_veille"); // boutons d'ouverture
const closeButtons = document.querySelectorAll(".btn_close"); // boutons de fermeture

// Boucle sur chaque bouton pour ajouter l'événement d'ouverture
listOpenModal.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest(".veille_technos").querySelector("dialog"); // Cibler le bon dialog
    dialog.showModal();
  });
});

// Boucle sur chaque bouton de fermeture pour ajouter l'événement de fermeture
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog"); // Cibler le dialog correspondant au bouton de fermeture
    dialog.close();
  });
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});
