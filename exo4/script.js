"use strict"; // mode strict, vu dans le slide 52

// ===== Question 1 =====
// Ici on déclare un objet, vu dans le slide 40
const produit = { nom: "Clavier", prix: 1500, quantite: 20 };
const valeurStock = produit.prix * produit.quantite; // opérateur *, vu dans le slide 42

console.log("Produit : " + produit.nom);
console.log("Valeur totale du stock : " + valeurStock + " DA");

// ===== Question 2 =====
// tableau d'objets, vu dans le slide 41
const catalogue = [
  { nom: "Clavier", prix: 1500,  quantite: 20 },
  { nom: "Souris",  prix: 1200,  quantite: 25 },
  { nom: "Écran",   prix: 18000, quantite: 4  },
  { nom: "Casque",  prix: 4000,  quantite: 8  },
  { nom: "Webcam",  prix: 3500,  quantite: 6  }
];

// reduce pour faire la somme, vu dans le slide 39, avec une fonction fléchée, vu dans le slide 47
const prixMoy = catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;

// fonction avec paramètres et return, vu dans le slide 46
function filter(catalogue, prixMoy) {
  const result = [];
  // boucle for...of, vu dans le slide 45
  for (const p of catalogue) {
    // condition if, vu dans le slide 43
    if (p.prix > prixMoy) {
      result.push(p); // push ajoute à la fin du tableau, vu dans le slide 39
    }
  }
  return result;
}

const chers = filter(catalogue, prixMoy);
console.log("Les produits chers sont :");
console.log(chers);

// ===== Question 3 =====
// reduce pour additionner les quantités, vu dans le slide 39
const totalArticles = catalogue.reduce((somme, p) => somme + p.quantite, 0);
// reduce pour additionner prix * quantite de chaque produit, vu dans les slides 39 et 42
const valeurGlobale = catalogue.reduce((somme, p) => somme + p.prix * p.quantite, 0);

console.log("Nombre total d'articles en stock : " + totalArticles);
console.log("Valeur globale du stock : " + valeurGlobale + " DA");

// ===== Question 4 =====
// fonction avec un paramètre (un objet produit) et un return, vu dans le slide 46
function calculerValeurStock(p) {
  return p.prix * p.quantite;
}

// on vérifie sur plusieurs produits du catalogue (accès par indice, vu dans le slide 39)
console.log("Valeur du stock de " + catalogue[0].nom + " : " + calculerValeurStock(catalogue[0]) + " DA");
console.log("Valeur du stock de " + catalogue[2].nom + " : " + calculerValeurStock(catalogue[2]) + " DA");
console.log("Valeur du stock de " + catalogue[4].nom + " : " + calculerValeurStock(catalogue[4]) + " DA");

// ===== Question 5 =====
// fonction qui reçoit un callback (une fonction passée en paramètre), vu dans le slide 48
function appliquer(catalogue, traitement) {
  for (const p of catalogue) { // boucle for...of, vu dans le slide 45
    traitement(p); // appel du callback sur chaque produit
  }
}

// callbacks écrits avec des fonctions fléchées, vu dans le slide 47
console.log("Noms des produits :");
appliquer(catalogue, (p) => console.log(p.nom));

console.log("Prix des produits :");
appliquer(catalogue, (p) => console.log(p.prix + " DA"));
