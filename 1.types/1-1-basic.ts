{
  // number
  const num: number = 6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 그냥 undefined만 사용하는 경우가 없다
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: null; // 그냥 null만 사용하는 경우가 없다
  let person2: string | null;

  // unknown : 알수 없는 타입으로 여러 타입을 다 사용할 수 있다.
  // 되도록 사용하지 말자
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any : 어떤것이든 담을수 있는 타입
  // 사용하지 말자
  let anything: any = 0;
  anything = 'hello';

  // void : 메서드 반환값으로 많이 사용됨
  // 생략해도 상관없음.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 변수에도 사용할수 있지만 undefined 밖에 사용못함.

  // never : 절대 반환값이 반환되지 않을때 사용
  // 에러처리나 while같이 무한 반복문을 돌때
  function throwError(message: string): never {
    throw new Error(message);
    // while (true) {}
  }
  let neverEnding: never; // 사용안함

  // object
  let obj: object; // 아무것도 다 담을수 있기 때문에 사용하지 말자.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'Elle' });
  acceptSomeObject({ animal: 'dog' });
}
