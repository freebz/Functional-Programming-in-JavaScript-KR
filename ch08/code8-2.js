// 코드 8-2 중첩된 JSON 호출. 둘 다 각자의 성공/에러 콜백을 가집니다.

getJSON('/students',
  function (students) {
      students.sort(function(a, b) {
	  if (a.ssn < b.ssn) return -1;
	  if(a.ssn > b.ssn) return 1;
	  return 0;
      });
      for (let i = 0; i < students.length; i++) {
	  let student = students[i];
	  if (student.address.country === 'US') {
	      getJSON(`/students/${student.ssn}/grades`,
		function (grades) {
		    showStudents(student, average(grades));
		},
		function (error) {
		    console.log(error.message);
		}
	    );
	  }
      }
  },
  function (error) {
      console.log(error.message);
  }
);
