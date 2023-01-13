const numbers = [10, 12, 14, 44, 55, 78];

const rta1 = numbers.every((item) => item > 0);
console.log({ rta1 });

const team = [
   {
      name: 'Nicolas',
      age: 12,
   },
   {
      name: 'Andrea',
      age: 8,
   },
   {
      name: 'Zulema',
      age: 2,
   },
   {
      name: 'Santiago',
      age: 18,
   },
];

const rta2 = team.every((item) => item.age > 18);
console.log({ rta2 });
