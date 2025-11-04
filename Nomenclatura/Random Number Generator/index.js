//random numeber

//numero casuale da 0 a 1
let randomNumb = Math.random();

console.log(randomNumb);

//numero casuale intero da 1 a 6
//aggiungo il +1 per non contare lo 0
console.log(Math.floor(Math.random()*6)+1)

/*-------------------*/
const min = 50;
const max = 100;

console.log(Math.floor(Math.random()*(max-min))+min);

/*-------------------------*/
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");




const nmin =1 ;
const nmax = 6;


let numrand;

myButton.onclick = function(){
    numrand=Math.floor(Math.random()*(nmax))+nmin;
    label1.textContent = numrand;
    numrand=Math.floor(Math.random()*(nmax))+nmin;
    label2.textContent = numrand;
    numrand=Math.floor(Math.random()*(nmax))+nmin;
    label3.textContent = numrand;
}