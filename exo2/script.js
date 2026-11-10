"use strict"; // mode strict, vu dans le slide 52

// Ici on utilise un tableau d'objets, vu dans le slide 41
const Etudiants = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

// fonction appelée au clic sur "Tableau Etudiants" (fonctions, vu dans le slide 46)
function f1() {
  const tab = ["Etudiant1", "Etudiant2", "Etudiant3"]; // tableau, vu dans le slide 39
  // boucle for, vu dans le slide 45
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]); // accès à un élément du tableau par son indice, vu dans le slide 39
  }
}

// fonction appelée au clic sur "Objet Etudiant"
function f2() {
  const etu = { nom: "John", prenom: "DOE", age: 30 }; // objet, vu dans le slide 40
  console.log(etu);
}

// fonction appelée au clic sur "Tableau d'objets Etudiants"
function f3() {
  for (let i = 0; i < Etudiants.length; i++) {
    // accès aux propriétés de l'objet (Etudiants[i].nom), vu dans les slides 40 et 41
    console.log(Etudiants[i].nom + "-" + Etudiants[i].prenom + "-" + Etudiants[i].age);
  }
}
