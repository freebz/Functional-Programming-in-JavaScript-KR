// 코드 6-6 커스텀 JSC.SSN 특정자

/**
* 올바른 SSN 문장려(대시 포함)을 생성한다
* @param param1 지역 번호 -> JSC.integer(100, 999)
* @param param2 그룹 번호 -> JSC.integer(10, 99)
* @param param3 일련 번호 -> JSC.integer(1000,9999)
* @returns {Function} 특정자 함수
*/
JSC.SSN = function (param1, param2, param3) {
    return function generator() {
	const part1 = typeof param1 === 'function'
	      ? param1(): param1;
	const part2 = typeof param2 === 'function'
	      ? param2(): param2;
	const part3 = typeof param3 === 'function'
	      ? param3(): param3;
	return [part1, part2, part3].join('-');
    };
};
