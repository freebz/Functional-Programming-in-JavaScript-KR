// 코드 6-3 findStudent의 외부 디펜던시를 모의

var studentStore, mockContext;

QUnit.module('6장 모의 테스트',
{
    beforeEach: function() {
	studentStore = DB('students');
	mockContext = sinon.mock(studentStore);
    },
    afterEach: function() {
	mockContext.verify();
	mockContext.restore();
    }
});

QUnit.test('showStudent: findStudent는 null을 반환한다', function (assert) {
    mockContext.expects('find').once().returns(null);
    const findStudent = safefetchRecord(studentStore);

    assert.ok(findStudent('xxx-xx-xxxx').isLeft);
});

QUnit.test('showStudent: findStudent는 올바른 객체를 반환한다', function (assert) {

    mockContext.expects('find').once().returns(
	new Student('Alonzo', 'Church', 'Princeton').setSsn('444-44-4444'));
    const findStudent = safefetchRecord(studentStore);

    assert.ok(findStudent('444-44-4444').isRight);
});
