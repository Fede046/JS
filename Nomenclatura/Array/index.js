//Array 

let fruits = ['apple', 'orange', 'banana'];

fruits[0] = 'Coconut';

fruits.push('Pear');

//Toglie l'ultimo elemento inserito
fruits.pop();

//Aggiunge all'inizio
fruits.unshift('mango');

//Toglie il primo
fruits.shift();

console.log(fruits[0]);
console.log(fruits)

let numFruits = fruits.length;
//returna -1 se non è pressente all'
//interno dell'array
let index = fruits.indexOf('orange');
let index2 = fruits.indexOf('Scarpa');
console.log(index);
console.log(index2);

//inizia a contare da 0
//ma la dimensione inizia a contaere da 1
console.log(numFruits);

//sort -> ordina gli elementi in ordine alfabetico
fruits.sort();

//per fare l'ordine inverso dell'ordine alfabetico
fruits.sort().reverse();

//for each
for (let fruit of fruits) {
    console.log(fruit);
}




