// 코드 5-10 모든 컨테이너에서 작동하는 일반화한 map, chain 함수

// map :: (ObjectA -> ObjectB), Monad -> Monad[ObjectB]
const map = R.curry((f, container) => container.map(f));

// chain :: (ObjectA -> ObjectB), Monad -> ObjectB
const chain = R.curry((f, container) => container.chain(f));
