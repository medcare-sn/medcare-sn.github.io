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


<!-- <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>MEDECIN</title>
    <link rel="stylesheet" href="style3.css"> 
</head>
<body>
    <div class="accueil">
        <p></p>
        <h1><marquee>CONNEXION</marquee></h1>
        <form action="" method="post">
            <div class="coordonnees">
                <p>
                    <label for="email" class="a">Adresse électronique:</label>
                    <input type="email" id="email" name="email" placeholder="xxx@gmail.com"/>
                </p>
                <p>
                    <label for="mot_de_passe">Mot de passe:</label>
                    <input type="password" id="mot_de_passe" name="mot_de_passe"/>
                </p>
            </div>
            <div class="l">
                <button type="submit" name="Se_connecter">Se connecter</button>
            </div>
            <small>Vous n'avez pas de compte.</small>
            <div class="l">
                <a href="medecin.html">Inscrivez-vous</a>
            </div>
        </form>
    </div>
</body>
</html> -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>MEDECIN</title>
    <link rel="stylesheet" href="style3.css"> 
</head>
<body>
    <div class="accueil">
        <p></p>
        <h1><marquee>CONNEXION</marquee></h1>
        <form action="" method="post">
            <div class="coordonnees">
                <p>
                    <label for="email" class="a">Adresse électronique:</label>
                    <input type="email" id="email" name="email" placeholder="xxx@gmail.com"/>
                </p>
                <p>
                    <label for="mot_de_passe">Mot de passe:</label>
                    <input type="password" id="mot_de_passe" name="mot_de_passe"/>
                </p>
            </div>
            <div class="l">
                <button type="submit" name="Se_connecter">Se connecter</button>
            </div>
            <small>Vous n'avez pas de compte.</small>
            <div class="l">
                <!-- Modifiez le lien ci-dessous pour pointer vers Inscription_medecin.php -->
                <a href="Inscription_medecin.php">Inscrivez-vous</a>
            </div>
        </form>
    </div>
</body>
</html>
