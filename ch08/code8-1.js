// 코드 8-1 네이티브 XMLHttpRequest를 이용한 getJSON 함수

const getJSON = function (url, success, error) {
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url);
    req.onload = function() {
	if(req.status == 200) {
	    let data = JSON.parse(req.responseText);
	    success(data);
	}
	else {
	    req.onerror();
	}
    }
    req.onerror = function () {
	if(error) {
	    error(new Error(req.statusText));
	}
    };
    req.send();
};
