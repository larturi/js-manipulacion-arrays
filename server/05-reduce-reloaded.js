const items = [5, 6, 7, 6, 5, 7, 7, 8];

const result = items.reduce((accum, item) => {
   if (!accum[item]) {
      accum[item] = 1;
   } else {
      accum[item] = accum[item] + 1;
   }
   return accum;
}, {});

console.log(result);

const data = [
   {
      name: 'Nicolas',
      level: 'low',
   },
   {
      name: 'Andrea',
      level: 'medium',
   },
   {
      name: 'Zulema',
      level: 'hight',
   },
   {
      name: 'Santiago',
      level: 'low',
   },
   {
      name: 'Valentina',
      level: 'medium',
   },
   {
      name: 'Lucia',
      level: 'hight',
   },
];

const rta1 = data
   .map((item) => item.level)
   .reduce((obj, item) => {
      if (!obj[item]) {
         obj[item] = 1;
      } else {
         obj[item] = obj[item] + 1;
      }
      return obj;
   }, {});

console.log(rta1);
