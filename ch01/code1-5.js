// 코드 1-5 함수 체인으로 프로그래밍

_.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .pluck('grade')
    .average()
    .value(); //-> 90
