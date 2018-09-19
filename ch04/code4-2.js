// 코드 4-2 형식화한 튜플 자료형

const Tuple = function( /* 형식 */ ) {
    const typeInfo = Array.prototype.slice.call(arguments);
    const _T = function( /* 값 */ ) {
	const values = Array.prototype.slice.call(arguments);
	if (values.some(
	    val => val === null || val === undefined)) {
	    throw new ReferenceError('튜플은 null 값을 가질 수 없습니다!');
	}
	if (values.length !== typeInfo.length) {
	    throw new TypeError('튜플 항수가 프로토타입과 맞지 않습니다!');
	}
	values.forEach((val, index) => {
	    this['_' + (index + 1)] = checkType(typeInfo[index])(val);
	}, this);
	Object.freeze(this);
    };
    _T.prototype.values = () => {
	return Object.keys(this)
	    .map(k => this[k], this);
    };
    return _T;
};
