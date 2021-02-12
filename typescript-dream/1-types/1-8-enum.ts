{
  /**
   * Enum => 상수용 => 타입이 보장되지 않고 정해진 enum외에 다른 값으로 할당할 수 있어서 잘안쓰고 union type으로 대체해서 많이 사용한다.
   */
  // JavaScript

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 40;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1, // initial, auto-increment
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  type DaysOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

  console.log(Days.Monday);
  let dayofweek: DaysOfWeek = 'Saturday';
  console.log(dayofweek);
  dayofweek = 'Friday';
  console.log(dayofweek);
}
