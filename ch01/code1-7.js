// 코드 1-7 학생의 SSN을 읽고 올바른지 검증하는 함수형 프로그램

Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')
    .pluck('srcElement', 'value')
    .map(ssn => ssn.replace(/^\s*|\s*$|\-/g, ''))
    .filter(ssn => ssn !== null && ssn.length === 9)
    .subscribe(validSsn => {
	console.log(`올바른 SSN ${validSsn}!`);
    });
