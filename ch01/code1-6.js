// 코드 1-6 학생의 SSN을 일고 올바른지 검증하는 명령형 프로그램

var valid = false;
var elem = document.querySelector('#student-ssn');
elem.onkeyup = function(event) {
    var val = elem.value;
    if(val !== null && val.length !== 0) {
	val = val.replace(/^\s*|\s*$|\-s/g, '');
	if(val.length === 9) {
	    console.log(`올바른 SSN: ${val}`);
	    valid = true;
	}
    }
    else {
	console.log(`잘못된 SSN: ${val}!`);
    }
};
