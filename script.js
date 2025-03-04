// Fonction pour sélectionner un élément et lui ajouter un style de sélection
function scrollCarousel(carouselId, direction) {
    let container = document.getElementById(carouselId);
    let items = container.querySelectorAll('li');
    let selected = container.querySelector('.selected');
    
    if (selected) {
        // Trouver l'index de l'élément sélectionné
        let currentIndex = Array.from(items).indexOf(selected);

        // Calculer l'index suivant/précédent
        let newIndex = currentIndex + direction;

        // Vérifier si l'index est dans les limites
        if (newIndex >= 0 && newIndex < items.length) {
            let targetItem = items[newIndex];
            
            // Mettre à jour la classe 'selected'
            selectItem(container, targetItem);

            // Faire défiler l'élément vers la position cible
            container.scrollBy({
                top: targetItem.offsetTop - container.scrollTop,
                behavior: 'smooth'
            });
        }
    }
}

function selectItem(container, item) {
    // Supprimer la classe 'selected' de tous les éléments
    let items = container.querySelectorAll('li');
    items.forEach(i => i.classList.remove('selected'));
    
    // Ajouter la classe 'selected' à l'élément cliqué
    item.classList.add('selected');
}

function generateOptions(id, min, max, step = 1) {
    let container = document.getElementById(id);
    for (let i = min; i <= max; i += step) {
        let li = document.createElement("li");
        li.textContent = i.toString().padStart(2, '0');
        li.onclick = function () { selectItem(container, li); };  // Utiliser la fonction de sélection
        container.appendChild(li);
    }
}

generateOptions("day-carousel", 1, 31);
generateOptions("year-carousel", new Date().getFullYear(), new Date().getFullYear() + 5);
generateOptions("hour-carousel", 0, 23);
generateOptions("minute-carousel", 0, 55, 5);

// Ajouter les mois à la carrousel
document.querySelectorAll("#month-carousel").forEach(item => {
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    .forEach(mois => {
    let li = document.createElement("li");
    li.textContent = mois;
    li.onclick = function () { selectItem(item, li); };  // Utiliser la fonction de sélection
    item.appendChild(li);
  });
});

function showStep(stepNumber) {
    // Masquer toutes les étapes
    document.querySelectorAll(".step-panel").forEach((panel, index) => {
        panel.classList.toggle("hidden", index !== stepNumber - 1);
    });

    // Mettre à jour la couleur des étapes et des icônes
    document.querySelectorAll(".Group8, .Group6, .Group7").forEach((step, index) => {
        const stepElement = step.querySelector(".step-label");
        const iconElement = step.querySelector(".material-symbols-outlined");

        if (index + 1 === stepNumber) {
            step.classList.add("active"); // Étape active
        } else {
            step.classList.remove("active"); // Étapes inactives
        }
    });
}

// Initialiser l'étape active
showStep(1);

function selectItemAMPM(item) {
    let container = document.getElementById("AMPM-carousel");
    let items = container.querySelectorAll('li');
    items.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
}
document.addEventListener("DOMContentLoaded", function() {
    const payButton = document.querySelector("#pay-btn");
    const popupOverlay = document.querySelector("#popup-overlay");
    const closeButton = document.querySelector("#close-btn");

    if (payButton) {
        payButton.addEventListener("click", () => {
            console.log("Bouton PAY cliqué");
            // Affiche le popup
            popupOverlay.classList.remove("hidden");
            popupOverlay.classList.add("active"); // S'assurer que la classe active est ajoutée
            document.querySelector("#blur-background").style.visibility = "visible";
            document.querySelector("#blur-background").style.opacity = "1";
        });
    } else {
        console.error("Le bouton PAY n'a pas été trouvé !");
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            console.log("Fermeture du popup");
            // Cache le popup
            popupOverlay.classList.remove("active");
            popupOverlay.classList.add("hidden");
            document.querySelector("#blur-background").style.visibility = "hidden";
            document.querySelector("#blur-background").style.opacity = "0";
        });
    }

    // Fermer la popup en cliquant en dehors
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove("active");
            popupOverlay.classList.add("hidden");
            document.querySelector("#blur-background").style.visibility = "hidden";
            document.querySelector("#blur-background").style.opacity = "0";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
      
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Chat popup elements
    const chatButton = document.getElementById('chat-button');
    const chatPopup = document.getElementById('chat-popup');
    const closeChat = document.getElementById('close-chat');
    
    // Open chat popup when chat button is clicked
    chatButton.addEventListener('click', function() {
      chatPopup.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    });
    
    // Close chat popup when close button is clicked
    closeChat.addEventListener('click', function() {
      chatPopup.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close chat popup when clicking outside the chat container
    chatPopup.addEventListener('click', function(event) {
      if (event.target === chatPopup) {
        chatPopup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
    
    // Toggle mobile menu visibility
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  });