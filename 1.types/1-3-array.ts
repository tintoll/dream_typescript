{
  // Array
  const fruits: string[] = ['사과', '바나나'];
  const scores: Array<number> = [1, 2, 3];
  // 함수 인자에 불변성을 유지하려면 readonly 키워드를 붙일수 있다.
  // -> 아직 Array<number> 형태는 지원하지 않는다.
  function printArray(fruits: readonly string[]) {}

  // Tuple : 배열이긴 배열인데 서로다른 타입을 가질수 있는 배열
  // 사용을 권장하지 않는다(각 인덱스에 어떤값이 들어있는지 확인 힘듬).
  // interface, type alias, class 로 대체해서 사용하자
  // react 의 useState에서 사용된다.
  let student: [string, number];
  student = ['name', 123];
  const [name, age] = student; // destructuring 해주어 가독성을 좋게 해주는게 좋다.
}
