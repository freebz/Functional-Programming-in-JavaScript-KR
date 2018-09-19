// 코드 5-7 IO 모나드

class IO {
    constructor(effect) {
	if (!_.isFunction(effect)) {
	    throw 'IO 사용법: 함수는 필수입니다!';
	}
	this.effect = effect;
    }

    static of(a) {
	return new IO( () => a );
    }

    static from(fn) {
	return new IO(fn);
    }

    map(fn) {
	let self = this;
	return new IO(() => fn(self.effect()));
    }

    chain(fn) {
	return fn(this.effect());
    }

    run() {
	return this.effect();
    }
}
