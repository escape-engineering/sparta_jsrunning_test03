// 2. Async / Await 다뤄보기
// 위 1번 문제에서 다루었던 비동기 처리를 async, await 키워드를 사용하여 코드를 수정해서 작성해주세요.

// async await 를 사용한 코드로 변경해보기
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function timeout(url) {
    return new Promise((resolve, reject) =>
        setTimeout(function () {
            if (url === API_URL) {
                resolve("올바른 url입니다!");
            } else {
                reject("올바르지 않은 url입니다.");
            }
        }, 3000)
    );
}

async function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    const result = await timeout(url);
    return result;
}

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
getData(WRONG_URL)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
