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
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
];

const newArray = orders.map((item) => item.total);

const newArray2 = orders.map((item) => {
   return {
      ...item,
      tax: 0.21 * item.total,
   };
});

console.log({ orders });
console.log({ newArray2 });
