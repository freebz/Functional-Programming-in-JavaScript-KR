// 코드 5-12 완성된 showStudent 프로그램

const getOrElse = R.curry((message, container) => container.getOrElse(message));

const showStudent = R.compose(
    map(append('#student-info')),
    liftIO,
    getOrElse('삭생을 찾을 수 없습니다!'),
    map(csv),
    map(R.props(['ssn', 'firstname', 'lastname'])),
    chain(findStudent),
    chain(checkLengthSsn),
    lift(cleanInput)
);
