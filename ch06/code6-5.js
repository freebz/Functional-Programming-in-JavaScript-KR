// 코드 6-5 checkLengthSsn의 JSCheck 테스트

QUnit.test('SSN에 대한 JSCheck 커스텀 특정자', function (assert) {
    JSC.clear();

    JSC.on_report((report) => trace('Report'+ str));
      JSC.on_pass((object) => assert.ok(object.pass));

    JSC.on_fail((object) =>
      assert.ok(object.pass || object.args.length === 11,
	'테스트 실패: ' + object.args));

    JSC.test('SSN 길이를 체크',
      function (verdict, ssn) {
	  return verdict(checkLengthSsn(ssn));
      },
      [
	  JSC.SSN(
	      JSC.integer(100, 999),
	      JSC.integer(10, 99),
	      JSC.integer(1000,9999))
      ],
      function (ssn) {
	  return '커스텀 SSN 테스트: ' + ssn;
      }
  );
});
