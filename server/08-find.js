const numbers = [1, 30, 41, 33, 29, 50, 60];

const rta1 = numbers.find((item) => item === 33);
console.log({ rta1 });

const products = [
   {
      name: 'Pizza',
      price: 12,
      id: '🍕',
   },
   {
      name: 'Burger',
      price: 23,
      id: '🍔',
   },
   {
      name: 'Hot dog',
      price: 34,
      id: '🌭',
   },
   {
      name: 'Hot cakes',
      price: 355,
      id: '🥞',
   },
];

const rta2 = products.find((item) => item.id === '🍔');
console.log({ rta2 });
