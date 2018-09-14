// 코드 3-10 재귀적 덧셈

function sum(arr) {
    if (_.isEmpty(arr)) {
	return 0;
    }
    return _.first(arr) + sum(_.rest(arr));
}
sum([]); //-> 0
sum([1,2,3,4,5,6,7,8,9]); //-> 45
