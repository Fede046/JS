/* this -> reference to the object where this
    is used (l'oggetto dipende dal contesto attuale)
    person.name = this.name
*/

const person1 = {
    name:"Marco",
    favFood:"Pizza",
    //con le arrow non funziona 
    //sta facendo riferimento alle winwow functtion non all'oggetto
    sayFood: () => console.log(`My favorite food is ${favFood}`),
    //funziona solo con le funzioni non arrow
    sayHello: function()
    {console.log(`Hii i am ${this.name}`)}
}

person1.sayHello();
person1.sayFood();