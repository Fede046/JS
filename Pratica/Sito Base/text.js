let elements = [
    { img: 'img0.png', title: 'Giardino', text: 'I giardini di Bologna sono spesso molto grandi vasti e verdissimi, sono patrimonio italiano da moltissimi anni' },
    { img: 'img1.png', title: 'Pallone', text: 'Il pallone è una grande sfera di simensioni 30 cm 30 cm molto mobita e facile da calciare è spesso usata per giocare' },
    { img: 'img2.jpg', title: 'Animali', text: 'Gli animali sono esservi viventi che vono sul pianeta terra ci snono molte specie tra cui canguri alci e uomini' },
    { img: 'img3.png', title: 'Serpenti', text: 'I serpenti sono rettili lunghi e velensi si infitrano nei buchi e mangiano piccoli animali come topi' }
];

function cambiaSection(num) {
    const myImg = document.getElementById('myImg');
    const myP = document.getElementById('myP');
    const myTit = document.getElementById('myTit');
    myImg.src = elements[num].img;
    myP.textContent = elements[num].text;
    myTit.textContent = elements[num].title;
    console.log(num);

}

function start() {
    const myFu = document.getElementsByTagName('footer')[0];
    myFu.innerHTML = '';
    for (let i in elements) {
        const myDiv = document.createElement('div');
        myDiv.addEventListener('click', function () {
            cambio(i);
        });
        const myImg = document.createElement('img');
        myImg.src = elements[i].img;
        myDiv.appendChild(myImg);
        myFu.appendChild(myDiv);
    }

}

function cambio(num) {
    cambiaSection(num);
    start();
}

start();
cambiaSection(0);