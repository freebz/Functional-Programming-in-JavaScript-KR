// 코드 8-7 Promise.all()로 여러 항목을 한 번에 조회

const average = R.compose(Math.ceil,
			  fork(R.divide, R.sum, R.length));

getJSON('/students')
    .then(hide('spinner'))
    .then(R.map(student => '/grades?ssn=' + student.ssn))
    .then(gradeUrls =>
	  Promise.all(R.map(getJSON, gradUrls)))
    .then(R.map(average))
    .then(average)
    .then(grade => IO.of(grade).map(console.log).run())
    .catch(error => console.log('에러 발생: ' + error.message));
