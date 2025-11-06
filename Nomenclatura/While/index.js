/*let username="";

while(username==="" || username ===null){
    //non possiamo chidere la finestra
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);
*/


let loggedIn = false;
let username;
let psw;

while(!loggedIn){
    username = window.prompt(`Enter your usr`);
    psw = window.prompt(`Enter your psw`);

    if(username ==='myUsr' && psw==="myPsw"){
        loggedIn = true;
        console.log("Benvenuto");
    }else{
        console.log("Credenziali errate");
    }

}