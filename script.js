// Définition de la fonction closeNavigation
function closeNavigation() 
{
    var nav = document.getElementById('navigation');            // Récupération de l'élément 'navigation'
    var navItems = document.getElementsByClassName('nav');      // Récupération des éléments avec la classe 'nav'
    var button = document.querySelector('button');              // Récupération du bouton

    if (nav.style.height === '100vh')                           // Si la hauteur de 'nav' est égale à '100vh'
    {
        nav.style.height = '70px';                              // Réduction de la hauteur de 'nav' à '70px'
        for (var i = 0; i < navItems.length; i++)               // Parcours des éléments 'navItems' pour les cacher
        {
            navItems[i].style.display = 'none';
        }
        button.textContent = 'Ouvrir Navigation';               // Modification du texte du bouton
    } 

    else 
    {
        nav.style.height = '100vh';                             // Augmentation de la hauteur de 'nav' à '100vh'
        for (var i = 0; i < navItems.length; i++)               // Parcours des éléments 'navItems' pour les afficher
        {
            navItems[i].style.display = 'block';
        }
        button.textContent = 'Fermer Navigation';               // Modification du texte du bouton
    }
}

window.addEventListener('resize', function()                    // Ajout d'un écouteur d'événement sur le redimensionnement de la fenêtre
{
    var nav = document.getElementById('navigation');            // Récupération de l'élément 'navigation'
    var navItems = document.getElementsByClassName('nav');      // Récupération des éléments avec la classe 'nav'
    var button = document.querySelector('button');              // Récupération du bouton

    if (window.innerWidth > 600)                                // Si la largeur de la fenêtre est supérieure à 600px
    {
        nav.style.height = '100px';                             // Réglage de la hauteur de 'nav' à '100px'
        for (var i = 0; i < navItems.length; i++)               // Parcours des éléments 'navItems' pour les afficher
        {
            navItems[i].style.display = 'block';
        }
        button.textContent = 'Fermer Navigation';               // Modification du texte du bouton

    } 

    else 
    {
        nav.style.height = '70px';                              // Réglage de la hauteur de 'nav' à '70px'
        for (var i = 0; i < navItems.length; i++)               // Parcours des éléments 'navItems' pour les cacher
        {
            navItems[i].style.display = 'none';
        }
        button.textContent = 'Ouvrir Navigation';               // Modification du texte du bouton
    }
});



