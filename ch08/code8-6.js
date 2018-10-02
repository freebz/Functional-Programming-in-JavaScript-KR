// 코드 8-6 학생/점수 데이터를 비동기 호출로 조회

getJSON('/students')
    .then(hide('spinner'))
    .then(R.filter(s => s.address.country == 'US'))
    .then(R.sortBy(R.prop('ssn')))
    .then(R.map(student => {
	return getJSON('/grades?ssn=' + student.ssn)
	    .then(R.compose(Math.ceil,
			    fork(R.divide, R.sum, R.length)))
	    .then(grade =>
		  IO.of(R.merge(student,
				{'grade': grade}))
		  .map(R.props(['ssn', 'firstname',
				'lastname', 'grade']))
		  .map(csv)
		  .map(append('#student-info')).run()
	    );
    }))
    .catch(function(error) {
	console.log('에러 발생: ' + error.message);
    });
