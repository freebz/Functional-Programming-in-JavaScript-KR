// 코드 4-3 튜플을 이용한 isValid 함수

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

// isValid :: String -> Status
const isValid = function (str) {
    if (str.length === 0) {
	return new Status(false,
			  '잘못된 입력입니다. 빈 값일 리 없지요!');
    }
    else {
	return new Status(true, '성공!');
    }
}

isValid(normalize(trim('444-44-4444'))); //-> (true, '성공!')
