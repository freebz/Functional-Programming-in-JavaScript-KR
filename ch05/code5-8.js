// 코드 5-8 Either로 함수를 리팩터링

// validLength :: Number, String -> Boolean
const validLength = (len, str) => str.length === len;

// checkLengthSsn :: String -> Either(String)
const checkLengthSsn = ssn =>
      validLength(9, ssn) ? Either.right(ssn)
                          : Either.left('잘못된 SSN입니다.');

// safeFindObject :: Store, string -> Either(Object)
const safeFindObject = R.curry((db, id) => {
    const val = find(db, id);
    return val ? Either.right(val) : Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
});

// findStudent :: String -> Either(Student)
const findStudent = safeFindObject(DB('students'));

// csv :: Array => String
const csv = arr => arr.join(',');
