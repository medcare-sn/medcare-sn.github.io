


const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('ratingText');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        ratingText.textContent = `Votre évaluation : ${rating} étoile(s)`;

        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }
    });
});


