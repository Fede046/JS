/* .checked -> proprietà che mi determina se lo stato 
di checke di un html chackbox o riadio button*/


const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = 'You are subscribed';
    } else{
        subResult.textContent='You are not subscribed';
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'You are paying with Visa';
    }
    if(masterCardBtn.checked){
        paymentResult.textContent = 'You are paying with MasterCard';
    }
    if(payPalBtn.checked){
        paymentResult.textContent = 'You are paying with PayPal';
    }
    else{
        paymentResult.textContent = 'You must select a payment type';
    }
}