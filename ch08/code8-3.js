// 코드 8-3 서버에서 SSN으로 학생 레코드를 조회

var selector = document.querySelector;
selector('#search-button').addEventListener('click',
  function (event) {
      event.preventDefault();

      let ssn = selector('#student-ssn').value;
      if(!ssn) {
	  console.log('경고: 올바른 SSN이 필요합니다!');
	  return;
      }
      else {
	  getJSON(`/students/${ssn}`, function (info) {
	      selector('#student-info').innerHTML = info;
	      selector('#student-info').addEventListener('mouseover',
		function() {
		    getJSON(`/students/${info.ssn}/grades`,
		      function (grades) {
			  // ... 학생의 점수 리스트를 처리 ...
		      });
		});
	  })
	  .fail(function() {
	      console.log('에러 발생!');
	  });
      }
  });
