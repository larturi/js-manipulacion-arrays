const words = ['spray', 'elites', 'limit', 'apple', 'exuberant'];
const newWords = [];

const rta = words.filter((item) => item.length >= 6);
console.log(rta);

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

const rta2 = orders.filter((item) => item.delivered && item.total >= 100);
console.log(rta2);
console.log(orders);

const search = (query) => {
   return orders.filter((item) => {
      return item.customerName.includes(query);
   });
};

console.log(search('Nico'));
