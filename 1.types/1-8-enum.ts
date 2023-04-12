{
  // Enum : 연관된 상수들을 모아서 표현하는 방법
  // javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // typescript
  //   enum Days {
  //     Monday = 'mon',
  //     Tuesday = 'tue',
  //     Wednesday = 'wed',
  //   }
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
  }
  // 기본값으로는 0부터 시작한다.
  // 기본값을 변경하려면 직접 입력할수도 있다.
  console.log(Days.Monday);
  let day: Days = Days.Wednesday;
  day = Days.Monday;
  day = 10; // 최신버전에는 등록이 안되는거같다.
  console.log(day);
}
