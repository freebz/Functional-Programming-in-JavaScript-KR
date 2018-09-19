// 코드 4-4 StringPair 형식

const StringPair = Tuple(String, String);
const name = new StringPair('Barkley', 'Rosser');

[first, last] = name.values();
first; //-> 'Barkley'
last; //-> 'Rosser'

const fullname = new StringPair('J', 'Barkely', 'Rosser'); // 항수가 맞지 않아 에러가 납니다.
