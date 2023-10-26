
// Données fictives : nombre de rendez-vous en fonction des jours de la semaine
var jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
var rendezVous = [8, 12, 10, 14, 6, 4, 2]; // Remplacez ces valeurs par les données réelles

// Obtenez l'élément canvas
var ctx = document.getElementById('myChart').getContext('2d');

// Créez le diagramme à barres
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: jours, // Jours de la semaine
        datasets: [{
            label: 'Nombre de rendez-vous',
            data: rendezVous, // Données fictives du nombre de rendez-vous
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de fond des barres
            borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la bordure des barres
            borderWidth: 1 // Largeur de la bordure des barres
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // L'axe Y commence à zéro
            }
        }
    }
});




// Sélectionnez tous les boutons "accepter" dans la classe box-premier
const acceptButtons = document.querySelectorAll('.box-premier .accepter-btn');

// Parcourez chaque bouton "accepter" et ajoutez un gestionnaire d'événements
acceptButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Obtenez l'élément parent de cet élément (box1)
        const parentBox1 = this.parentElement.parentElement;

        // Clonez l'élément box1 pour le déplacer
        const clonedBox1 = parentBox1.cloneNode(true);

        // Supprimez le bouton "accepter" du clone
        clonedBox1.querySelector('.accepter-btn').remove();

        // Ajoutez le clone à la classe box
        const acceptedAppointmentsContainer = document.querySelector('.box');
        acceptedAppointmentsContainer.appendChild(clonedBox1);

        // Supprimez l'élément original de la classe box-premier
        parentBox1.remove();
    });
});




// Sélectionnez tous les boutons "refuser" dans la classe box-premier
const refuserButtons = document.querySelectorAll('.box-premier .reffuser-btn');

// Parcourez chaque bouton "refuser" et ajoutez un gestionnaire d'événements
refuserButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Obtenez l'élément parent de cet élément (box1)
        const parentBox1 = this.parentElement.parentElement;

        // Supprimez l'élément box1
        parentBox1.remove();
    });
});

// Si vous avez également des boutons "refuser" dans la classe box, ajoutez un gestionnaire d'événements similaire pour eux
const refuserButtonsBox = document.querySelectorAll('.box .reffuser-btn');

refuserButtonsBox.forEach(button => {
    button.addEventListener('click', function () {
        // Obtenez l'élément parent de cet élément (box1)
        const parentBox1 = this.parentElement.parentElement;

        // Supprimez l'élément box1
        parentBox1.remove();
    });
});



const bellIcon = document.querySelector('.bell-icon');
const notificationsContainer = document.querySelector('.notifications');

let notificationsVisible = false;

// Simulation de données de notification (remplacez ceci par vos données réelles)
const notificationsData = [
    'Rendez-vous avec dieng',
    'paiment recu',
    'hawa tall a laisse un avis'
];

// Fonction pour afficher/cacher les notifications
function toggleNotifications() {
    if (notificationsVisible) {
        notificationsContainer.innerHTML = '';
    } else {
        notificationsData.forEach(notification => {
            const notificationElement = document.createElement('div');
            notificationElement.classList.add('notification-item');
            notificationElement.textContent = notification;
            notificationsContainer.appendChild(notificationElement);
        });
    }
    notificationsVisible = !notificationsVisible;
}

// Ajouter un gestionnaire d'événements pour le clic sur l'icône de la cloche
bellIcon.addEventListener('click', toggleNotifications);
