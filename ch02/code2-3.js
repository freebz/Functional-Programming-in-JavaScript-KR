// 코드 2-3 클로저

var outerVar = 'Outer';
function makeInner(params) {
    var innerVar = 'Inner';

    function inner() {
	console.log(
	    `${outerVar}, ${innerVar}, ${params}이(가) 보여요!`);
    }
    return inner;
}

var inner = makeInner('Params');
inner();
