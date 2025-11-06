const PI= 3.14;


//guarda se il conenuto è identico,
//senza considerare il tipo 
if(PI=="3.14"){
    console.log("That is PI");
}else{
    console.log("Thai is not PI");
}

if(PI!="3.14"){
    console.log("non è pigreco");
}else{
    console.log(`è pigreco`);
}

//NOTA -> User input è sempre una stringa
//strict equality -> controlla se il contenuto
// e il tipo sono uguali se si (true)
if(PI==="3.14"){
    console.log("That is PI");
}else{
    console.log("Thai is not PI");
}

if(PI!=="3.14"){
    console.log("non è pigreco");
}else{
    console.log(`è pigreco`);
}
