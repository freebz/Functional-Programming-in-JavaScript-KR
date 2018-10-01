// 코드 7-1 로대시JS의 느긋한 평가 및 단축 융합

const square = (x) => Math.pow(x, 2);
const isEven = (x) => x % 2 === 0;
const numbers = _.range(200);

const result =
      _.chain(numbers)
      .map(square)
      .filter(isEven)
      .take(3)
      .value(); //-> [0,4,16]

result.length; //-> 3
