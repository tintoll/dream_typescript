/**
 * Let's make a game 🕹
 */

type Direction = 'up' | 'down' | 'left' | 'right' | 'he';
type Position = {
  x: number;
  y: number;
};
const position: Position = {
  x: 0,
  y: 0,
};
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;

    default:
      // 사용하지 않은 타입이 있으면 컴파일 단계에서 에러를 불러준다.
      const invalid: never = direction;
      throw new Error(`unkown direction ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
