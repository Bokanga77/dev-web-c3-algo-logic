// Fusionner deux tableaux d'objets
// Écrire (s'il y en a) et en conservant l'ordre.
// ________________________________

const tableau1 = [
  { id: 1, nom: 'Alice' },
  { id: 2, nom: 'Bob' }
];
const tableau2 = [
  { id: 2, nom: 'Bob' },
  { id: 3, nom: 'Charlie' }
];

/**
 * Ex: [{ id: 1, nom: 'Alice' }, { id: 2, nom: 'Bob' }, { id: 3, nom: 'Charlie' }]
 */
function fusionnerTableaux(tableau1, tableau2) {
  return Array.from(new Set([...tableau1, ...tableau2].map(obj => obj.id))
      .map(id => [...tableau1, ...tableau2].find(obj => obj.id === id));
}

const tableauFusionne = fusionnerTableaux(tableau1, tableau2);
console.log(tableauFusionne);