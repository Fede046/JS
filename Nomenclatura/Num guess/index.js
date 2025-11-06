
const max = 100;
const min = 0;

const myNumb =Math.floor(Math.random(0,1)*(max-min));
let textNumb;


while(myNumb != textNumb ){

    textNumb = window.prompt(`(${myNumb})  Indovina il numero tra ${min} e ${max}`);

    if(myNumb<textNumb){
        window.alert(`Troppo alto, riprova`);
    }else if(myNumb>textNumb && textNumb!==null && textNumb!==""){
        
        window.alert(`${textNumb}Troppo basso, riprova`);
    } else {
        window.alert('Inserisci un numero valido');
    }
}

console.log("Hai vinto!!!");
