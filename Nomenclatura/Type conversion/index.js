/*
type coversion -> cambia il datatype of a value to another
                (strings, boolean, numbers)
*/
/*Il testo che viene scritto è una stringa*/

let age = window.prompt("How old are you?");

/*questo è un typer conversion -> permette di convertire da
                                stringa a numero  */
age = Number(age);

age +=1;


console.log(age,typeof age);

/*-------------------*/

let x = 'Pizza';
let x1 = '0';
let y = 'Pizza';
let z = ' ';

x1 = Number(x1);
x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x,typeof x);
console.log(x1,typeof x1);
console.log(y,typeof y);
/*se contine una parola allora sarà true
altrimenti fale*/
console.log(z, typeof z);