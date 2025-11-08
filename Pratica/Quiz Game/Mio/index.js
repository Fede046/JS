const domande={
    easy :[
        {
            question: "Qual è la capitale dell'Italia?",
            answers: ["Roma", "Milano", "Napoli", "Torino"],
            correct: 0
        },
        {
            question: "Quanti giorni ha un anno bisestile?",
            answers: ["364", "365", "366", "367"],
            correct: 2
        }
    ],
    midium :[
        {
            question: "Mid Qual è la capitale dell'Italia?",
            answers: ["Roma", "Milano", "Napoli", "Torino"],
            correct: 0
        },
        {
            question: "Mid Quanti giorni ha un anno bisestile?",
            answers: ["364", "365", "366", "367"],
            correct: 2
        }
    ],
    hard :[
        {
            question: "Hard Qual è la capitale dell'Italia?",
            answers: ["Roma", "Milano", "Napoli", "Torino"],
            correct: 0
        },
        {
            question: "Hard Quanti giorni ha un anno bisestile?",
            answers: ["364", "365", "366", "367"],
            correct: 2
        }
    ]
}

/*-------------------------*/


let currentDifficulty = 'easy';


//Difficulty selection
document.querySelectorAll('.btnDiff').forEach(btn =>{
    console.log('currentDifficulty');
    btn.addEventListener('click',() =>{
        document.querySelectorAll('.btnDiff').forEach(btn => rimuoviSelector(btn))
        btn.classList.add('selected');
        //dataset.name -> specifico per gli attributi che iniziano per data-name
        currentDifficulty = btn.dataset.difficulty;
        console.log('currentDifficulty');
    });
});

function rimuoviSelector(element){
    element.classList.remove('selected');
}
/*----------------------------*/

function startQuiz(){
    const menu = document.querySelector('.menu');
    menu.classList.add('disactiv');
    document.querySelector(".quiz").classList.add('active');
    console.log(domande.easy.length)
    
    if(currentDifficulty=='easy'){

        for(let i=0;i<domande.easy.length;i++){
            document.getElementById('nDomanada').textContent = `Domanda ${i} di ${domande.easy.length}`;
            console.log(i);
            let temp=20;
            while(temp>=0){
                setTimeout(function(){
                document.getElementById('nTempo').textContent = temp;
                temp--;
                console.log('test')
            },1000)
            }
            
        }
    }else if(currentDifficulty=='midium'){
        for(let i=0;i<domande.midium.length;i++){
            document.getElementById('nDomanada').textContent = `Domanda ${i} di ${domande.midium.length}`;

        }
    }else{
        for(let i=0;i<domande.hard.length;i++){
            document.getElementById('nDomanada').textContent = `Domanda ${i} di ${domande.hard.length}`;

        }       
    }
    
}

function testoBanner(){
    const nDomanada = document.getElementById('nDomanada');
}







/*-------------------------------*/



