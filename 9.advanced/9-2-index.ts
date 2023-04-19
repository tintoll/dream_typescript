{
  const obj = {
    name: 'ellie',
  };
  // object의 값에 접근하려면 2가지 방식이 있다.
  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'mail' | 'female';
  };

  // index types
  type Name = Animal['name']; // string
  const text: Name = 'aaa';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'ellie',
    gender: 'female',
  };
}
