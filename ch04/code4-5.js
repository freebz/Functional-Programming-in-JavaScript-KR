// 코드 4-5 두 인수를 수동으로 커리

function curry2(fn) {
    return function(firstArg) {
	return function(secondArg) {
	    return fn(firstArg, secondArg);
	};
    };
}
