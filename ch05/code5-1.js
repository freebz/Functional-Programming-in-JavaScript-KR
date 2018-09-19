// 코드 5-1 값을 함수형 자료형으로 감쌈

class Wrapper {
    constructor(value) {
	this._value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f) {
	return f(this._value);
    };

    toString() {
	return 'Wrapper (' + this._value + ')';
    }
}

// wrap :: A -> Wrapper(A)
const wrap = (val) => new Wrapper(val);
