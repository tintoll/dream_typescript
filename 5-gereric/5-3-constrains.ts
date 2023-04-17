interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log('FullTime');
  }
  workFullTime(): void {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log('Part Time');
  }
  workPartTime(): void {}
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);
ellieAfterPay.workFullTime();

/////////
const obj = {
  name: 'ellie',
  age: 20,
};
const obj2 = {
  animal: '강아지',
};

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
