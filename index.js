const feladatModule = require('./Feladat8');

const testArr = [1, 2, 3, 4, 5];
const testArr2 = [4, 5, 6, 7, 8];
const testObject = [
  {
    name: 'Feri',
    age: 25
  },
  {
    name: 'Józsi',
    age: 26
  },
  {
    name: 'Kiscica',
    age: 72
  },
  {
    name: 'Klárika',
    age: 102
  }

];

// -------------------1-------------------
// változó
const valtozo = 1;
// tömb
const tomb = [];
// object
const object = {
  name: 'kiscica'
};

// -------------------2-------------------
// a const konstans ezért nem felülírható az értéke, míg a let-nek igen
const a = 0;
let b;
b = 2;
b = 3;

// -------------------3-------------------

// -------------------4-------------------
const containsElement = (arr, num) => {
  for (const i in arr) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

// -------------------5-------------------

const oldestPerson = (objArr) => {
  let oldestIndex = 0;
  for (const i in objArr) {
    if (objArr[i].age > objArr[oldestIndex].age) {
      oldestIndex = i;
    }
  }
  return objArr[oldestIndex];
};

// -------------------6-------------------
const odds = () => {
  for (let i = 9; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// -------------------7-------------------
const metszet = (arrA, arrB) => {
  const arrMetszet = [];
  for (let i = 0; i < arrA.length; i++) {
    for (const k in arrB) {
      if (arrA[i] === arrB[k]) {
        arrMetszet.push(arrB[k]);
      }
    }
  }
  return arrMetszet;
};

// -------------------8-------------------
console.log('-------------------8-------------------');
console.log(feladatModule.osszead(2, 4));
console.log(feladatModule.szorzas(2, 4));
console.log(feladatModule.hatvany(2, 4));
