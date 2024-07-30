// Promise 다뤄보기
// getData 라는 주어진 url을 인자로 받는 함수를 만들어주세요.
// getData 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
// then과 catch를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (url === API_URL) {
                resolve("올바른 url입니다!");
            } else {
                reject("올바르지 않은 url입니다.");
            }
        }, 3000);
    });
}

// ...

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
getData(WRONG_URL)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
