<?php
// Vérifie si la requête est de type POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère les données du formulaire
    $nom_utilisateur = $_POST['hawa'];
    $mot_de_passe = $_POST['hawa'];

    // Vous pouvez ajouter la logique pour hacher le mot de passe ici
    // $mot_de_passe_hache = password_hash($mot_de_passe, PASSWORD_DEFAULT);

    // Connexion à la base de données MySQL (remplacez ces valeurs par les vôtres)
    $mysqli = new mysqli("localhost", "hawa", "hawa", "mabase");

    // Vérifie si la connexion à la base de données a réussi
    if ($mysqli->connect_error) {
        die("La connexion à la base de données a échoué : " . $mysqli->connect_error);
    }

    // Prépare et exécute la requête SQL pour insérer l'utilisateur
    $stmt = $mysqli->prepare("INSERT INTO inscription (nom_utilisateur, mot_de_passe) VALUES (?, ?)");
    $stmt->bind_param("ss", $nom_utilisateur, $mot_de_passe);

    if ($stmt->execute()) {
        echo "Inscription réussie !";
    } else {
        echo "Une erreur s'est produite lors de l'inscription : " . $stmt->error;
    }

    // Ferme la connexion à la base de données
    $stmt->close();
    $mysqli->close();
}
?>



