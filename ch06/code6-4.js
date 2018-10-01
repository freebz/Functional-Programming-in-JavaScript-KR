// 코드 6-4 computeAverageGrade의 속성 기반 테스트

JSC.clear();
JSC.on_report((str) => console.log(str));

JSC.test(
    '평균 학점 계산',
    function (verdict, grades, grade) {
	return verdict(computeAverageGrade(grades) === grade);
    },
    [
	JSC.array(JSC.integer(20), JSC.number(90,100)),
	'A'
    ],
    function (grades, grade) {
	return '평균 ' + grade + ' 학점에 관한 테스트: ' + grades;
    }
);

	
