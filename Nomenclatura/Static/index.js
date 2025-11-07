//static 
/*
viene utilizzata nelle classi per definire metodi e 
proprietà che appartengono alla classe stessa
 piuttosto che alle istanze della classe
 */

class MathUtil{
    static PI=3.14;

    static getDiamet(radius){
        return radius*2;
    }

    static getCrf(radius){
        return this.PI*this.getDiamet(radius);
    }
}



console.log(MathUtil.PI);

console.log(MathUtil.getDiamet(10));
console.log(MathUtil.getCrf(10));
/*---------------------*/

class Usr{
    static userCount=0;

    constructor(username){
        this.username=username;
        Usr.userCount++;
    }
}
const usr1 = new Usr('Davide');

console.log(Usr.userCount)




