//object = {key: value,function()} 
//
const person ={
    firstName:"Marco",
    lastName:"Rossi",
    age:30,
    isEmployed:true,
    sayHello:function(){
        console.log('Hi');
    },
    sayEat: () => console.log('eat') 
};

console.log(person.firstName);
person.sayHello();
person.sayEat();
