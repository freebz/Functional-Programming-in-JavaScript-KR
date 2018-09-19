// 코드 4-1 trim과 normalize로 함수 파이프라인ㅇ르 수동으로 구성

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

normalize(trim(' 444-44-4444 ')); //-> '444444444'
