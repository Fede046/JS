//.reduce() -> riduce gli elementi di un array in un
//          singolo elemento


const prices = [20,12,44,5,70];

const total = prices.reduce(sum);
const maximun = prices.reduce(getMax);


console.log(total.toFixed(2));
console.log(maximun);


function getMax(accumulator,element){
    return Math.max(accumulator,element);
}


//il return ritorna come accumulator
function sum(accumulator,element){
    return accumulator+element;
}
