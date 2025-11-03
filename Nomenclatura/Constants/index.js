//const -> a variable that can't be changed
//viene usata per gestire meglio le costanti,
//come forma di sicurezza/buona pratica 
//inoltre le costanti è buona pratica metterle in maiuscolo
//(questo delle variabili in maiuscolo vale solo per numeri no stringhe)
const PI = 3.14;

let radius;
let circumference;

/* questo da errore
PI = 2;
*/



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius=Number(radius);
    circumference = radius *2 * PI;

    document.getElementById("myH3").textContent = circumference +" cm";
}