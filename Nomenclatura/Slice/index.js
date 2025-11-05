//tring slicing -> create a substring from a portion of another string
//string.slice(start,end)


const fullName = "Bro code";

//dal  carattere start al carattere end
let firstName = fullName.slice(0,2);
console.log(firstName);
//end -> la parte end della scritta se omesso considera l'
//ultimo carattere della stringa
let lastName = fullName.slice(4);
console.log(lastName);

//per partire a contare dalla fine possimo 
//usare i numeri negativi

let lastChar = fullName.slice(-1);
console.log(lastChar);

/*--------------------*/

const fullNameB = "Matteo Rossi";

let nome = fullNameB.slice(0,fullNameB.indexOf(" "));
let cognome = fullNameB.slice(fullNameB.indexOf(" ")+1);

console.log(nome);
console.log(cognome);


/*---------------------*/

const email = "prova@gmail.com"

let usr = email.slice(0,email.indexOf("@"));
let extr = email.slice(email.indexOf("@")+1);

console.log(usr);
console.log(extr);