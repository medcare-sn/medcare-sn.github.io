
document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comment = document.getElementById("comment").value;
        
        if (name && email && comment) {
            // Créer un nouvel élément li pour le commentaire
            const li = document.createElement("li");
            li.innerHTML = `<strong>${name}:</strong> ${email}: <strong>${comment}`;

            // Ajouter le commentaire à la liste
            commentList.appendChild(li);

            // Réinitialiser le formulaire
            commentForm.reset();
        }
    });
});


