// 코드 1-3 부수효과를 일으키는 명령형 showStudent 함수

function showStudent(ssn) {
    let student = db.find(ssn);
    if(student !== null) {
	document.querySelector(`#{elementId}`).innerHTML =
	    `${student.ssn},
	     ${student.firstname},
	     ${student.lastname}`;
    }
    else {
	throw new Error('학생을 찾을 수 없습니다!');
    }
}

showStudent('444-44-4444');
