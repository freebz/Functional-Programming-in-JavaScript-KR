// 코드 6-1 computeAverageGrade 프로그램 테스트

const fork = (join, func1, func2) =>
      (val) => {
	  join(func1(val), func2(val));
      };
};

const toLetterGrade = (grade) => {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
};

const computeAverageGrade =
      R.compose(toLetterGrade, fork (R.divide, R.sum, R.length));

QUnit.test('평균 학점을 계산', function(assert) {
    assert.equal(computeAverageGrade([80, 90, 100]), 'A');
});
