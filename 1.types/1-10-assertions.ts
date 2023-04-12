{
  // Type Assertions

  // 반환값이 정의해주지 않으면 any이다.
  function jsStrFun(): any {
    return 'hello';
  }
  const result = jsStrFun(); // result 타입은 any
  // any 타입이라 lengh가 자동완성이 되지 않는다.
  // 그래서 문자타입으로 강제 시켜줄수 있다.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  //console.log((wrong as Array<number>).push(1)); // Error

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers?.push(2);  // 이러면 에러가 안나는데
  numbers!.push(2); // 이렇게 !로 강제화 하면 에러가난다.
}
