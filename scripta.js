const rating = document.getElementsByName('star');
const ratingText = document.getElementById('ratingText');

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', function () {
        // Réinitialisez l'état de toutes les étoiles
        for (let j = 0; j < rating.length; j++) {
            if (j <= i) {
                rating[j].checked = true; // Cochez les étoiles jusqu'à celle cliquée
            } else {
                rating[j].checked = false; // Décochez les étoiles après celle cliquée
            }
        }
        for (let i = 0; i < rating.length; i++) {
            rating[i].addEventListener('change', function () {
                ratingText.innerHTML = `Votre évaluation : ${i + 1} étoiles`;

                ratingText.innerHTML = `Votre évaluation : ${i + 1} étoiles`;
            });
        }
