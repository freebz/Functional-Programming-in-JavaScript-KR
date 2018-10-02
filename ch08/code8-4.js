// 코드 8-4 연속체 전달 스타일(CPS)로 학생 조회 프로그램을 리팩터링

var selector = document.querySelector;

selector('#search-button').addEventListener('click', handleClickEvent);

const processGrades = function (grades) {
    // ... 학생의 점수 리스트를 처리 ...
};

const handleMouseMovement = () =>
      getJSON(`/students/${info.ssn}/grades`, processGrades);

const showStudent = function (info) {
    selector('#student-info').innerHTML = info;
    selector('#student-info').addEventListener(
	'mouseover', handleMouseMovement);
};

const handleError = error =>
      console.log('에러 발생: ' + error.message);

const handleClickEvent = function (event) {
    event.preventDefault();

    let ssn = selector('#student-ssn').value;
    if(!ssn) {
	alert('잘못된 SSN입니다!');
	return;
    }
    else {
	getJSON(`/students/${ssn}`, showStudent).fail(handleError);
    }
};
