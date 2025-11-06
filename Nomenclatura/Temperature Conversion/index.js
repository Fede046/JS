const myOutput = document.getElementById("myOutput");
const myInput = document.getElementById("myInput");
const toFahre = document.getElementById("toFahre");
const toCelsius = document.getElementById("toCelsius");
const myButton = document.getElementById("myButton");


myButton.onclick = function(){

    let temp = Number(myInput.value);
    console.log(temp)
    if(typeof(temp)=="number"){

        if(toFahre.checked){
            result=temp*(9/5)+32;
        }
        if(toCelsius.checked){
            result=(temp-32)*(5/9);
        }
        console.log(temp);
        myOutput.textContent = result.toFixed(2);
    }
}







