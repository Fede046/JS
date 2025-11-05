

let ages = 25;

if(ages >=18){
    console.log("You are old enough to enter this site")
}else{
    console.log("You must be 18+ to enter this site");
}

let haslicense = true;

if(ages>=16 && haslicense){
    console.log("You can drive");
}else{
    console.log("You can'dirve")
}

/*------------------*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resolutElement = document.getElementById("resolutElement");
let age = 0;

mySubmit.onclick = function(){
age = myText.value;
age = Number(age);
if(age >= 100){
resolutElement.textContent = 'You are TOO OLD to enter this site';
}else if(age == 0){

resolutElement.textContent = 'You cant enter. You were just born.';

}else if(age >= 18){
resolutElement.textContent = 'You are old enough to enter this site';

}else if(age < 0){
resolutElement.textContent = 'Your age cant be below 0';

}
else {
resolutElement.textContent = 'You must be 18+ to enter this site';

}

}