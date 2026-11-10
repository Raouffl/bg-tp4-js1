"use strict"; // mode strict, vu dans le slide 52

// Ici on utilise un tableau de tableaux, vu dans le slide 39
// (matricule, nom, prénom, note1, note2)
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction A : appelée au clic sur "Délibération", elle calcule la moyenne et appelle B
// (fonctions, vu dans le slide 46)
function A() {
  // boucle for...of, vu dans le slide 45
  for (const s of Students) {
    // opérateurs arithmétiques, vu dans le slide 42 (coefficients 3 et 1)
    const moyenne = (s[3] * 3 + s[4] * 1) / 4;
    // notation ternaire, vu dans le slide 43
    console.log(s[0] + ": " + (B(moyenne) ? "ADMIS" : "AJOURNÉ"));
  }
}

// Fonction B : un seul paramètre (float) et retourne un booléen avec return, vu dans le slide 46
function B(moyenne) {
  return moyenne >= 10; // opérateur de comparaison, vu dans le slide 42
}
