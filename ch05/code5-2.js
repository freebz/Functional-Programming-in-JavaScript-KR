// 코드 5-2 주어진 콘텍스트에 추가 로직을 적용하기 위해 함수자를 체이닝

const two = wrap(2);
two.fmap(plus3).fmap(R.tap(infoLogger)); //-> Wrapper(5)
