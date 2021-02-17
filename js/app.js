
'use strict';
let greetMasseage = prompt('Enter your name please :)');
console.log(greetMasseage);
alert('welcome ' + greetMasseage );

let myAge = prompt('Is my age 29?(Yes/No)or (y/n)');

console.log(myAge);

if (myAge.toUpperCase() === 'YES' || myAge.toLowerCase() === 'y'){
  alert('Thats right you have done good');
} else if (myAge.toLowerCase() === 'no' || myAge.toLowerCase() === 'n') {
  alert('It is ok it is Hard to gusse some time');
}

