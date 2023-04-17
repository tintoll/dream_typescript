type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: true },
];
const result = students.every((student) => student.passed);
console.log(result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animails: Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

console.log(animails.every<Cat>(isCat));