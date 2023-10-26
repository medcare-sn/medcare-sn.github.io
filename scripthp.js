// Sélectionnez les éléments
const helpLinks = document.getElementById("help-links");
const helpContent = document.getElementById("help-content");

// Les données de vos sections d'aide
const helpData = {
    section1: "Si vous êtes médecin, une fois sur la page d'accueil, veuillez cliquer sur Médecin. Si vous n'avez pas encore de compte, cliquez sur 'Inscrivez-vous', puis remplissez le formulaire d'inscription et appuyez sur 'Inscription' pour soumettre le formulaire. Si vous avez déjà un compte, renseignez votre email et mot de passe, puis cliquez sur 'Connexion'.",
    section2: "Pour annuler ou modifier un rendez-vous, rendez-vous dans la section 'Réservation'. Vous verrez les réservations que vous avez déjà effectuées. Cliquez sur 'Annuler' si vous souhaitez annuler le rendez-vous, ou sur 'Modifier' si vous souhaitez le modifier.",
    section3: "Une fois que l'utilisateur est connecté sur la page des services nous lui présentons tous les services disponibles sur cette pages ensuite dés qu'il voit les informations il peut effectué un choix pour un service en cliquant sur le bouton En savoir plus ce lien le ménera vers la page des réservations.Sur cette pages il s'y trouve tous les médecins spécialistes pour ce service avec les informations telles que ses contacts, sa plage horaire ,le nombre limite des patients qu'il prend par jour et les jours disponibles.Aprés avoir eu les infomations nècessaires par rapport à chaque médecin, pour finaliser sa réservation il peut cliquer sur un médecin et il est amené sur la page de confirmation.une fois sur cette page c'est à lui de choisir le jour et l'heure qui lui conviendra et validé sa réservation à l'aide d'un bouton de validation.En bas de cette page ,s'il souhaite voir ses réservation passées et à venir,il s'y trouve un lien pour aller sur cette page.",
    section4: "Pour accéder à cette page, il suffit de cliquer ici. Pour laisser un commentaire, les utilisateurs doivent remplir un formulaire demandant leur nom, leur adresse e-mail , leurs commentaire  et leur évaluation s'ils le souhaitent et puis apuier sur envoyer pour envoyer vos Avies."
    

};


// Ajoutez des gestionnaires d'événements pour les liens
helpLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const target = e.target.getAttribute("data-target");
        if (target in helpData) {
            helpContent.innerHTML = helpData[target];
            helpContent.classList.add("active");
        }
    }
});





