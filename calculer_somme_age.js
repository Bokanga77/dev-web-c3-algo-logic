// Trier les utilisateurs par ordre alphabétique
//  Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 20 }
  ];
  const ageMinimum = 25;
  /**
   * Ex: Somme des âges : 75
   */
  // Trier les utilisateurs par ordre alphabétique
personnes.sort((a, b) => a.nom.localeCompare(b.nom));

// Écrire une fonction qui calcule la somme de tous les âges dans le tableau
function calculerSommeAges(personnes) {
  let somme = 0;
  personnes.forEach(personne => {
    somme += personne.age;
  );
  return somme;


console.log(calculerSommeAges(personnes));

