const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ == y.__proto__); // true


const array = [];
console.log(array); // array => Array => Object

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;

    // instance member level
    // this.makeCoffee = shots => {
    //     console.log('making ...')
    // }
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = shots => {
    console.log('making ...')
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1)
console.log(machine2)


function LatteMachine(milk) {
    this.milk = milk;
}
// CoffeeMachine을 상속한다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine)
latteMachine.makeCoffee(); // CoffeeMachine메서드를 사용할수 있다.