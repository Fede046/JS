/*
.map -> accettano una callback e applicano quella 
        funzione a ogni elemento di un array,
        quindi returnano un nuovo array

*/


const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
console.log(squares)
console.log(numbers)


function square(element){
    return Math.pow(element,2);
}