//.filter() -> crea un nuovo array filtrando gli elementi


let numbers = [1,2,3,4,5,6,7];

//crea un nuovo array in base al valore del booleano 
// di quell'elemento
let evenNumbs = numbers.filter(isEven);

console.log(evenNumbs);

function isEven(element){
    return element%2 === 0;
}