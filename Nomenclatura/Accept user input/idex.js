// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox


/*-------------------------*/
/*
1.

let usr;

usr = window.prompt("What is your USERNAME?");

console.log(usr);
*/


/*------------------*/

//2

let user

document.getElementById("mySubmit").onclick = function(){
    user = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${user}`;
}