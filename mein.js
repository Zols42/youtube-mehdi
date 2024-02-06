
let isClicked = false;

let bouton = document.getElementById('btn');

let body = document.querySelector("body");

bouton.addEventListener('click',function() {
if (isClicked == false) {
    isClicked = true;

body.style.backgroundColor = "black";
}


else {

    isClicked = false;
    body.style.backgroundColor = "white";
}
})




function save() {
    let iframe = document.getElementById("iframeCode").value;
    window.localStorage.setItem("iframe" + +new Date(), iframe);
    window.location.reload();
}

// 2. Chargement des vidéos déjà enregistrées //
window.onload = function load() {
    // Transformer le LocalStorage en objet clé:valeur que l'on peut lire facilement
    let iframes = {
    ...localStorage,
    };
    // Création d'une variable vide qui va 'recevoir' l'iframe
    let html = "";
    
    // Transformer les iframes en tableau, en faire une seule chaine de caractère géante,
    // puis ajouter le bouton de suppression après chaque iframe avec un attribut contenant la clé
    for ([key, iframe] of Object.entries(iframes)) {
    html +=
    iframe +
    `<button class="delete" style="position:relative;left:-30px;top:-10px" data-key="${key}">X</button>`;
    }
    
    // Ajouter le code HTML généré dans le div vide
    document.querySelector(".video-play").innerHTML = html;
    
    // Enregistrer l'événement de suppression de vidéo
    document.querySelectorAll("button.delete").forEach((button) => {
    // Au clic sur le bouton de suppression
    button.addEventListener("click", () => {
    // Suppression effective de l'iframe dans le localStorage
    // expliquer dataset
    window.localStorage.removeItem(button.dataset.key);
    // Recharger la page pour voir les changements
    window.location.reload();
    });
    });
    };