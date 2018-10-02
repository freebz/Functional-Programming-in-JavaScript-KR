// 코드 8-8 브라우저의 지역 저장소를 이용한 find 함수

// find :: DB, String -> Promise(Student)
const find = function (db, ssn) {
    let trans = db.transaction(['students'], 'readonly');
    const store = trans.objectStore('students');
    return new Promise(function(resolve, reject) {
	let request = store.get(ssn);
	request.onerror = function() {
	    if(reject) {
		reject(new Error('학생이 없습니다!'));
	    }
	};
	request.onsuccess = function() {
	    resolve(request.result);
	};
    });
};
