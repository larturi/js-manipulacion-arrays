const pets = ['cat', 'dog', 'bat'];

const rta1 = pets.includes('cat');
console.log({ rta1 });

// Input:
// ["ana", "santi", "nico", "anastasia"], "ana"
// Ouput:
// ["ana", "santi", "anastasia"]
function filterByTerm(words, term) {
   return words.filter((item) => item.includes(term));
}

rta2 = filterByTerm(['ana', 'santi', 'nico', 'anastasia'], 'ana');
console.log({ rta2 });
