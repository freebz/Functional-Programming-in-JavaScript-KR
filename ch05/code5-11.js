// 코드 5-11 프로그래밍 가능한 콤마를 쓴 모나드

const showStudent = R.compose(
    R.tap(trace('HTML 페이지에 학생 정보 추가')),
    map(append('#student-info')),
    R.tap(trace('학생 정보를 CSV 형식으로 변환')),
    map(csv),
    map(R.props(['ssn', 'firstname', 'lastname'])),
    R.tap(trace('레코드 조회 성공!')),
    chain(findStudent),
    R.tap(trace('입력값이 정상입니다.')),
    chain(checkLengthSsn),
    lift(cleanInput));
