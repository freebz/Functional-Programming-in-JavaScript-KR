// 코드 5-9 showStudent에서 발생한 에러를 모나드로 자동 처리

const showStudent = (ssn) =>
      Maybe.fromNullable(ssn)
      .map(cleanInput)
      .chain(checkLengthSsn)
      .chain(findStudent)
      .map(R.props(['ssn', 'firstname', 'lastname']))
      .map(csv)
      .map(append('#student-info'));
