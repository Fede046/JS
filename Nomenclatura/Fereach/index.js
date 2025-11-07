let numbers = [1,2,3,4,5];

//foreach diventa un metodo dell'array
//fa una callback di una funzione specifica per ogni elemento

numbers.forEach(double);
numbers.forEach(display);

//element,index,array sono dati automaticamente
//l'ordine è importante
function double(element,index,array){
    array[index] = element *2;
}

function display(element){
    console.log(element);
}

