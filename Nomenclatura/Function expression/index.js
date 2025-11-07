//function expression -> un modo per definire una funzione
// come un valore o una variabile

const hello = function(){
    console.log('Hiiii');
}

hello();


/*----------------*/

// setTimeout(cancelIdleCallback,time)

setTimeout(function(){
    console.log("Matteo")
},3000)

/*------------------------*/

/*consiglia prima fare una funzione declaration (normale blocco)
poi successivemente fare una funzione expression*/

const numb = [1,2,3,4,5,6];

const squares = numb.map(function(element){
    return Math.pow(element,2);   
})

console.log(squares);











