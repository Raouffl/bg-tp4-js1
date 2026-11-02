 const Students = [
      [1000, "JOHN", "DOE", 14, 5],
      [2000, "BOB", "CARLTON", 7, 1],
      [3000, "RAYANE", "SMITH", 13, 3]
    ];

    // Fonction A : calcule la moyenne, appelle B et affiche le résultat
    function A() {
      for (const s of Students) {
        const moyenne = (s[3] * 3 + s[4] * 1) / 4; // coefficients 3 et 1
        console.log(s[0] + ": " + (B(moyenne) ? "ADMIS" : "AJOURNÉ"));
      }
    }

    // Fonction B : un seul paramètre float, retourne un booléen
    function B(moyenne) {
      return moyenne >= 10;
    }