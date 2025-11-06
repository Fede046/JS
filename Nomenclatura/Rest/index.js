//rest -> opposto di spread operator 


function openFridge(...foods) {
    //Restitusce una sequenza di elementi come
    // un array
    console.log(foods);
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

const food1 = 'Pizza';
const food2 = 'Hotdog';
const food3 = 'Hamburgher';
const food4 = 'Pasta';
const food5 = 'Ramen';

openFridge(food1, food2, food3, food4, food5);


const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

//-------------------------

function combineString(...strings) {
    return strings.join(" ");
}



const fullName = combineString('Marco', 'Toni', 'Andrea')

console.log(fullName);











