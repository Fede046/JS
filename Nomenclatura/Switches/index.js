let day= 13;


switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("Its tuesday");
    default:
        console.log(`${day} Non è un giorno o è troppo lontano`);
        break;
}
/*-----------------------*/

let testScore = 3;
let letterGrade;

switch(true){
    case testScore >=90:
        letterGrade = "A";
        break;
    case testScore >=80:
        letterGrade = 'B';
        break;
    case testScore >=70:
        letterGrade = "C";
        break;
    case testScore >=60:
        letterGrade = 'D';
        break;
    default:
        letterGrade='F';
    break;
}

console.log(letterGrade)


