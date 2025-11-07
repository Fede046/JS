//callback -> funzione che passa il ragionamento ad un altra funzione
//Concettualemnte quando ha finito di fare questa azione fa questa successivemente
//es. Quando finisci di leggere il file fai questo
// argument usata per avere operazioni asincrone:
//1. Leggere un file
//2. Richiesta network
//3. Interazioni con DB

function hello(callback){
    console.log("Hello");
    callback();
}

function leave(){
    console.log("Leave");
}

function goodbye(callback){
    console.log("Goodbye!")
    callback();
}

// Call them in sequence
hello(function() {
    goodbye(leave);
});