// 코드 7-2 시간을 재는 호출을 tap으로 추가

const start = () => now();
const runs = [];
const end = function (start) {
    let end = now();
    let result = (end - start).toFixed(3);
    runs.push(result);
    return result;
};

const test = function (fn, input) {
    return () => fn(input);
};

const testRot13 = IO.from(start)
      .map(R.tap(test(rot13, 'functional_js_50_off')))
      .map(end);

testRot13.run(); // 0.733 m (times may vary)
testRot13.run(); // second time: 0.021 ms
assert.ok(runs[0] >= runs[1]);
