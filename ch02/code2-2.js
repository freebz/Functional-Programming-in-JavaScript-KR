// 코드 2-2 재귀 함수로 객체를 깊이 동결함

var isObject = (val) => val && typeof val === 'object';

function deepFreeze(obj) {
    if(isObject(obj)
       && !Object.isFrozen(obj)) {

	Object.keys(obj).
	    forEach(name => deepFreeze(obj[name]));

	Object.freeze(obj);
    }
    return obj;
}
