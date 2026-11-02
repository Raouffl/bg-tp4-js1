const Etudiants = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
  const tab = ["Etudiant1", "Etudiant2", "Etudiant3"];
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
}

function f2() {
  const etu = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etu);
}

function f3() {
  for (let i = 0; i < Etudiants.length; i++) {
    console.log(Etudiants[i].nom + "-" + Etudiants[i].prenom + "-" + Etudiants[i].age);
  }
}