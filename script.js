"use strict";
// Recuperate le premier <h2> du document
let compteur = 0;


const compteurEl = document.getElementById("compteur-el");
const sauvegardeEl = document.getElementById("sauvegarde-el");

document.getElementById("capturer-btn").addEventListener("click", capturer);
document.getElementById("sauvegarder-btn").addEventListener("click", sauvegarder);

function capturer() {
    compteur++;
    compteurEl.textContent = compteur;
    // Change la couleur du texte en fonction du nombre de Pokémons capturés
    if (compteur < 5) {
        compteurEl.style.color = 'green';
    } else if (compteur < 10) {
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

function sauvegarder() {
    sauvegardeEl.textContent += compteur + " Pokémons" + " - ";
    // remettre le compteur à zéro
    localStorage.setItem("captures", sauvegardeEl.textContent);
    compteur = 0;
    compteurEl.textContent = compteur;
}

// Quand l'onglet du navigateur à fini de se charger
window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem('captures') || "Mes captures : ";
});