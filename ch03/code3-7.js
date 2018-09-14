// 코드 3-7 배열을 순차적으로 연산 (함수형)

_.chain(names)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq()
    .map(_.startCase)
    .sort()
    .value();
// -> [ 'Alonzo Church', 'Haskell Curry', 'John Von Neumann', 'Stephen Kleene' ]
