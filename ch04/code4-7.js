// 코드 4-7 partial() 구현부

function partial() {
    let fn = this, boundArgs = Array.prototype.slice.call(arguments);
    let placeholder = <<자리끼우개 객체>>;
    let bound = function() {
	let position = 0, length = boundArgs.length;
	let args = Array(length);
	for (let i = 0; i < length; i++) {
	    args[i] = boundArgs[i] === placeholder
		? arguments[position++] : boundArgs[i];
	}

	while (position < arguments.length) {
	    args.push(arguments[position++]);
	}
	return fn.apply(this, args);
    };
    return bound;
}
