// 코드 4-12 람다JS 함수로 만든 무인수 스타일의 유닉스 프로그램

const runProgram = R.pipe(
    R.map(R.toLower),
    R.uniq,
    R.sortBy(R.identity));

runProgram(['Functional', 'Programming', 'Curry',
	    'Memoization', 'Partial', 'Curry', 'Programming']);

//-> [curry, functional, memoization, partial, programming]
