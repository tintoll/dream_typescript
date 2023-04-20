console.log(this); // window

function simpleFunc() {
    console.log(this);
}

window.simpleFunc(); // window

class Counter {
    count = 0;
    increase = function () {
        console.log(this)
    }
}

const counter = new Counter();
counter.increase(); // Counter

const caller = counter.increase;
caller(); // undefined

const caller2 = counter.increase.bind(Counter); // 이렇게 바인딩주면 this가 연결된다. 
caller2() // Counter 를 가르킨다.
// 바인드가 아니고 고정하려면 함수를 Arrorw Function으로 만들어주면 된다.


class Bob { }
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob