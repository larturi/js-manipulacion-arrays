const numbers = [1, 2, 3, 4];

// Evalua si hay un numero par
// Devuelve siempre true o false
const rta1 = numbers.some((item) => item % 2 === 0);
console.log({ rta1 });

const orders = [
   {
      customerName: 'Nicolas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Nicolas',
      total: 240,
      delivered: true,
   },
];

// Hay alguna orden entregada?
const rta2 = orders.some((item) => item.delivered);
console.log({ rta2 });
