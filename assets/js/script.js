'use strict';
// Mobile navigation
document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('.nav-mobile').classList.toggle('hidden');
});

// Accordion
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les boutons de l'accordéon
    const accordionButtons = document.querySelectorAll("[data-te-collapse-init]");

    // Ajoutez un écouteur d'événement à chaque bouton
    accordionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Récupérez la cible de l'élément de données
            const targetId = button.getAttribute("data-te-target");
            const targetElement = document.querySelector(targetId);

            // Fermez tous les éléments de l'accordéon sauf celui cliqué
            document.querySelectorAll("[data-te-collapse-item]").forEach(function (item) {
                if (item !== targetElement) {
                    item.classList.add("hidden");
                    item.setAttribute("aria-expanded", "false");
                    item.previousElementSibling.querySelector("span").classList.remove("rotate-0");
                }
            });

            // Basculez la visibilité de la cible cliquée
            if (targetElement.classList.contains("hidden")) {
                // Affichez la cible, mettez à jour l'attribut aria-expanded et ajoutez la classe pour tourner la flèche
                targetElement.classList.remove("hidden");
                button.setAttribute("aria-expanded", "true");
                button.querySelector("span").classList.add("rotate-0");
            } else {
                // Masquez la cible, mettez à jour l'attribut aria-expanded et ajoutez la classe pour réinitialiser la flèche
                targetElement.classList.add("hidden");
                button.setAttribute("aria-expanded", "false");
                button.querySelector("span").classList.remove("rotate-0");
            }
        });
    });
});
