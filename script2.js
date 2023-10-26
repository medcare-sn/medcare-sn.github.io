  // JavaScript pour masquer/démasquer les sections
  document.getElementById('section1').addEventListener('click', function() {
    document.querySelector('.section:nth-child(1) p').classList.toggle('hidden');
});

document.getElementById('section2').addEventListener('click', function() {
    document.querySelector('.section:nth-child(2) p').classList.toggle('hidden');
});

document.getElementById('section3').addEventListener('click', function() {
    document.querySelector('.section:nth-child(3) p').classList.toggle('hidden');
});
// JavaScript pour masquer/démasquer le contenu d'une section
document.getElementById('section1').addEventListener('click', function() {
    var sectionContent = document.querySelector('.section:nth-child(1) p');
    if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
        sectionContent.style.display = 'block'; // Afficher le contenu
    } else {
        sectionContent.style.display = 'none'; // Masquer le contenu
    }
});

document.getElementById('section2').addEventListener('click', function() {
    var sectionContent = document.querySelector('.section:nth-child(2) p');
    if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
        sectionContent.style.display = 'block'; // Afficher le contenu
    } else {
        sectionContent.style.display = 'none'; // Masquer le contenu
    }
});

document.getElementById('section3').addEventListener('click', function() {
    var sectionContent = document.querySelector('.section:nth-child(3) p');
    if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
        sectionContent.style.display = 'block'; // Afficher le contenu
    } else {
        sectionContent.style.display = 'none'; // Masquer le contenu
    }
});

