// 코드 4-11 커링 및 합성을 응용한 showStudent 프로그램

// findObject :: DB -> String -> Object
const findObject = R.curry((db, id) => {
    const obj = find(db, id);
    if (obj === null) {
	throw new Error(`ID가 [${id}]인 객체는 없습니다`);
    }
    return obj;
});

// findStudent :: String -> Student
const findStudent = findObject(DB('students'));

const csv = ({ssn, firstname, lastname}) =>
      `${ssn}, ${firstname}, ${lastname}`;

// append :: String -> String -> String
const append = R.curry((elementId, info) => {
    document.querySelector(elementId).innerHTML = info;
    return info;
});

// showStudent :: String -> Integer
const showStudent = R.compose(
    append('#student-info'),
    csv,
    firstStudent,
    normalize
    trim);

showStudent('444-44-4444'); //-> 444-44-4444, Alonzo, Church
