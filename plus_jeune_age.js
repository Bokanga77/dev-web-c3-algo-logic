// Trouver le plus jeune/plus âgé
// Écrire une fonction qui trouve la personne la plus jeune et la plus âgée dans le tableau.
// ______________________________

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];

/**
   * Ex: Plus jeune : { nom: 'Charlie', age: 20 }
         Plus âgé : { nom: 'Bob', age: 30 }

   */
         function trouverPersonnesExtremes(personnes) {
          const plusJeune = personnes.reduce((min, personne) => personne.age < min.age ? personne : min, personnes[0]);
          const plusAge = personnes.reduce((max, personne) => personne.age > max.age ? personne : max, personnes[0]);
          return { plusJeune, plusAge };
      }
      
      const { plusJeune, plusAge } = trouverPersonnesExtremes(personnes);
      console.log("Plus jeune :", plusJeune); 
      console.log("Plus âgé :", plusAge);