// 코드 4-9 가장 똑똑한 학생 구하기

const smartestStudent = R.compose(
    R.head,
    R.pluck(0),
    R.reverse,
    R.sortBy(R.prop(1)),
    R.zip);

smartestStudent(students, grades); //-> 'Turing'
