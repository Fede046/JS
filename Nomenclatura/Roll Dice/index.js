

function rollDice() {
    const numOfDice = document.getElementById("myInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);

        if (value == 1) {
            images.push(`<img src="img/1.svg">`);
        } else if (value == 2) {
            images.push(`<img src="img/Dice-2.svg">`);
        } else if (value == 3) {
            images.push(`<img src="img/Dice-3.png">`);
        } else if (value == 4) {
            images.push(`<img src="img/Dice-4.svg">`);
        } else if (value == 5) {
            images.push(`<img src="img/Dice-5.svg">`);
        } else {
            images.push(`<img src="img/Dice-6-b.png">`);
        }
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    //utlizzo il metodo innerHTML per mettere HTML all'interno della pagina
    diceImages.innerHTML = images.join('')

}









