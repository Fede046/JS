let userName = "Brocode";


console.log(userName.charAt(0));

console.log(userName.indexOf('c'));
console.log(userName.lastIndexOf('o'));
console.log(userName.length);

userName = "Mattia Rossi               ";
console.log(userName.trim());

console.log(userName.toLocaleLowerCase())
console.log(userName.toUpperCase());
console.log(userName.repeat(3));

console.log(userName.startsWith("F"));
console.log(userName.endsWith(" "));
console.log(userName.includes("o"));

/*-------------------*/

let phone = "123-456-789";

console.log(phone.replaceAll("-","*"));

//aggiunge la stringa/caratte all'inizio fino ad arrivare 
// al numero di caratteri prestabilito
console.log(phone.padStart(15,"a"));
console.log(phone.padEnd(15,"a"));