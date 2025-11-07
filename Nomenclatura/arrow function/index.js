/*
errow function -> una formula concisa che permette
di scrivere una funzione che viene esata solo una volta 
(parametri) => some code
*/

//sostituisce una normale implementazione di una funzione
function hello(){
    console.log("Hello");
}

hello();

//per fare più righe si mette dentro le greffe altrimenti
//non serve
const ciao = (name) => {console.log(`ciao ${name}`)
                        console.log('vai')};

ciao('Oscar');


