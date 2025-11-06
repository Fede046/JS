/*
spread operator ...
*/





let numbers = [1, 2, 3, 4, 5];
//dobbiamo unpacks the elements
// è come se separasse gli elementi di array
//Inizialmente sono in formato array (oggetto grande)
//vine considerato come singoli elementi
//IPOTIZZO
let max = Math.max(...numbers);

console.log(max);

//vale anche per sitringhe


let usr = 'Fede';

let letters = [...usr];

console.log(letters);

//posso mettere un separatore 
//utilizzando join tra le lttere che 
//ho aperto

let letters2 = [...usr].join('-');

console.log(letters2);

//possimo unire o copiare un array

let fruits = ['Apple', 'Banana'];
let veg = ['Carrots', 'potato'];

let foods = [...fruits, ...veg, 'Milk'];

console.log(foods);

