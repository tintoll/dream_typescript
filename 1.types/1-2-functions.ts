{
  // javascript 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }
  //   // typescript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // javascript 💩
  //   function jsFetchNum(id) {
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // Typescript
  //   function fetchNum(id: string): Promise<number> {
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Annna', undefined);

  // Default paramter
  function printMessage(message: string = 'default Message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }

  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
}
