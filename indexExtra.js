const readlineSync = require('readline-sync');

const firstnum = readlineSync.question('Add meg az első számot');
const secondNum = readlineSync.question('Add meg a második számot');

const arr = [];
for (let i = 0; i < firstnum; i++) {
  arr[i] = [];
  for (let k = 0; k < secondNum; k++) {
    arr[i][k] = i * k;
  }
}
console.log(arr);
