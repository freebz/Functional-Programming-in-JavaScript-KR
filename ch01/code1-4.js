// 코드 1-4 showStudent 프로그램을 분해

var find = curry((db, id) => {
    let obj = db.find(id);
    if(obj === null) {
	throw new Error('객체를 찾을 수 없습니다!');
    }
    return obj;
});

var csv = student =>
    `${student.ssn}, ${student.firstname}, ${student.lastname};

var append = curry((selector, info) => {
    document.querySelector(selector).innerHTML = info;
});
