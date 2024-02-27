<?php
session_start();

$serveur = 'localhost';
$user = 'root';
$pass = 'hawa'; // votre mot de passe
$bdd = 'projet'; // votre base de données

// Créer une connexion
$conn = new mysqli($serveur, $user, $pass, $bdd);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['Se_connecter'])) {
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['mot_de_passe'];
    $recupMedecine = $conn->prepare('SELECT * FROM medecin WHERE email=?');
    $recupMedecine->bind_param('s', $email);
    $recupMedecine->execute();
    $result = $recupMedecine->get_result();

    if($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user;
            header("Location: page_admin.php"); // Redirige vers la page après connexion réussie
            exit(); // Assurez-vous d'arrêter l'exécution du script après la redirection
        } else {
            echo "Mot de passe incorrect";
        }
    } else {
        echo "Adresse email incorrecte";
    }
    $recupMedecine->close();
}

$conn->close();
?>
