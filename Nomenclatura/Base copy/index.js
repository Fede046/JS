
function generatePsw(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVZ";
    const numberChars = "0123456789";
    const symbolsChars = ")!@#$%^&*(_?" 

    let allowedChars = "";
    let psw = "";

    allowedChars += includeLowercase ? lowercaseChars :"";
    allowedChars += includeUppercase ? uppercaseChars :"";
    allowedChars += includeNumbers ? numberChars :"";
    allowedChars += includeSymbols ? symbolsChars :"";


    if(passwordLength<=0){
        return 'psw must be at least 1';
    }
    if(allowedChars.length ===0){
        return 'Almeno un parametro deve essere selezionato';
    }
    for(let i=0;i<passwordLength;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        psw +=allowedChars[randomIndex];
    }
    return psw;
}




const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const psw = generatePsw(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);


console.log(psw);