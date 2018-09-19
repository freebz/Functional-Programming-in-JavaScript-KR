// 코드 4-10 알기 쉽게 함수 별칭을 사용

const first = R.head;
const getName = R.pluck(0);
const reverse = R.reverse;
const sortByGrade = R.sortBy(R.prop(1));
const combine = R.zip;

R.compose(first, getName, reverse, sortByGrade, combine);
