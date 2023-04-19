type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object (둘다 동일하게 사용 가능)
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
};
// class (둘다 동일하게 사용 가능)
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// extends
interface ZPositionInterface extends PositionInterface {
  x: number;
}
type ZPositionType = PositionType & { z: number };

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';
