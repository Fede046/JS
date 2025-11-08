
let currentDifficulty = 'easy';


//Difficulty selection
document.querySelectorAll('.btnDiff').forEach(btn =>{
    console.log('currentDifficulty');
    btn.addEventListener('click',() =>{
        document.querySelectorAll('.btnDiff').forEach(btn => rimuoviSelector(btn))
        btn.classList.add('selected');
        currentDifficulty = btn.dataset.difficulty;
        console.log('currentDifficulty');
    });
});

function rimuoviSelector(element){
    element.classList.remove('selected');
}





/*-------------------------------*/
function startQuiz(){

    const menu = document.querySelector('.menu');

    menu.classList.add('disactiv');
}

/*-------------------------*/


