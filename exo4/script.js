"use strict"; // mode strict, vu dans le slide 52

// Ici on déclare un objet, vu dans le slide 40
const produit = { nom: "Clavier", prix: 1500, quantite: 20 };
const valeurStock = produit.prix * produit.quantite; // opérateur *, vu dans le slide 42

console.log("Produit : " + produit.nom);
console.log("Valeur totale du stock : " + valeurStock + " DA");

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
