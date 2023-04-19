type Video = {
  title: string;
  author: string;
  description: string;
};

// Video인데 옵션널인 타입을 만드려면 아래 처럼 동일하게 만들어줘야한다.
// 이럴경우 Mappedtype을 사용한다.
// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// };

// [1,2].map(item => item * item);  [1,4]
// 위 VideoOptional이랑 동일한 역할을 한다.
// mapped type을 사용하면 재사용성이 좋다.
type Optional<T> = {
  [P in keyof T]?: T[P]; // for ... in
};
type VideoOptional = Optional<Video>;

type ReadOnly<T> = {
  readonly [P in keyof T]?: T[P]; // for ... in
};
type VideoReadonly = ReadOnly<Video>;
const video: VideoReadonly = {
  title: 'dd',
};
// video.title = 'dd'; // 변경이 안된다.

type Nullable<T> = {
  [P in keyof T]?: T[P] | null;
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
