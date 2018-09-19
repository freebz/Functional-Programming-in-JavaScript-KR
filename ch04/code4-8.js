// 코드 4-8 compose 구현부

function compose(/* 함수 */) {
    let args = arguments;
    let start = args.length - 1;
    return function() {
	let i = start;
	let result = args[start].apply(this, arguments);
	while (i--)
	    result = args[i].call(this, result);
	return result;
    };
}
