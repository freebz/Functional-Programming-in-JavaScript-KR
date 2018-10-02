// 코드 8-9 showStudent의 비동기 버전

const showStudentAsync = R.compose(
    catchP(errorLog),
    then(append('#student-info')),
    then(csv),
    then(R.props(['ssn', 'firstname', 'lastname'])),
    chain(findStudentAsync),
    map(checkLengthSsn),
    lift(cleanInput));
