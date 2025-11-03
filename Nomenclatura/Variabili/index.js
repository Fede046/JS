
//Non si può dichiarare due volte la stessa variabile

let x;
x=100;

console.log(x);

let y = 400;
console.log(y);

/*due tipi di variabili*/
/*numeri*/
let age = 25;
console.log(age);

/*numeri con la virgola col punto*/
let price = 4.22;

/*come inserire una variabile in un datatype*/
console.log(`You are ${price} feet`);

/*mi ritorna il tipo di della variabile*/
console.log(typeof price);

/*String*/

let firstName = "Fede";

console.log(firstName);
console.log(typeof firstName);
console.log(`My name is ${firstName}`);

/*Booleans*/

let online = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`);

/*------------------------------------*/


let fullName = "Bro Code";
let ages =25;
let student = true;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `Your age is ${ages}`;
document.getElementById("p3").textContent = student;
