// 코드 5-4 모나드를 눌러 폄

// findObject :: DB -> String -> Wrapper
const findObject = R.curry((db, id) => Wrapper.of(find(db, id)));

// getAddress :: Student -> Wrapper
const getAddress = student => Wrapper.of(student.map(R.prop('address')));

const studentAddress = R.compose(getAddress, findObject(DB('student')));

studentAddress('444-44-4444').join().get(); // 주소
