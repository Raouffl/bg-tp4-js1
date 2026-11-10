"use strict"; // mode strict, vu dans le slide 52

// Exercice 1 : chaque bouton appelle une fonction (événement onclick, vu dans le slide 21)

// Ici on déclare une fonction sans paramètres, vu dans le slide 46
function f1() {
  console.log("John"); // affichage dans la console avec console.log, vu dans le slide 34
}

function f2() {
  console.log("Doe"); // chaîne de caractères (string), vu dans le slide 38
}

function f3() {
  console.log("John" + "-" + "Doe"); // concaténation avec +, vu dans le slide 38
}

function f4() {
  console.log(30); // nombre entier (number), vu dans le slide 38
}

function f5() {
  console.log(15); // nombre (number), vu dans le slide 38
}

function f6() {
  const pi = 3.14; // constante déclarée avec const, vu dans les slides 38 et 52
  console.log(pi);
}
