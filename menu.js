// Sélectionne l'élément du bouton de menu par son ID "menu-btn"
// et l'élément de la barre de navigation par sa classe "navbar"
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Lorsque le bouton de menu est cliqué, cette fonction anonyme (flèche) est déclenchée
menu.onclick = () => {
    // Alterne la classe "fa-times" sur l'élément du bouton de menu
    // Cela peut servir à changer l'icône en "X" pour fermer le menu
    menu.classList.toggle('fa-times');
    
    // Alterne la classe "active" sur l'élément de la barre de navigation
    // Cela peut servir à afficher ou masquer le menu lorsque le bouton est cliqué
    navbar.classList.toggle('active');
}

// Lorsque la page est défilée (scroll), cette fonction anonyme (flèche) est déclenchée
window.onscroll = () => {
    // Supprime la classe "fa-times" de l'élément du bouton de menu
    // Ceci permet de réinitialiser l'icône du bouton lorsque la page est défilée
    menu.classList.remove('fa-times');
    
    // Supprime la classe "active" de l'élément de la barre de navigation
    // Cela permet de masquer le menu lorsque l'utilisateur fait défiler la page
    navbar.classList.remove('active');
}
