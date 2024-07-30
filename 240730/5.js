// 5. [선택 문제] 가장 먼저 완료된 비동기 함수를 찾아라.
// 5번 문제는 선택 문제로 전 날 수업에서 배운지 않은 것을 활용하여 풀어야 합니다.
// 필수 문제가 아니니 시간이 남을 경우 도전해보세요. (검색이 허용됩니다.)
// 세 개의 비동기 작업이 있습니다. 각 작업은 랜덤한 시간 후에 완료됩니다.
// 이 중 가장 먼저 완료되는 작업의 결과를 반환하는 함수를 작성하세요.
// taskA, taskB, taskC라는 세 개의 비동기 함수를 작성하세요. 각 함수는 랜덤한 시간 후에
// "Task A Complete", "Task B Complete", "Task C Complete" 메시지를 반환합니다.
// 가장 먼저 완료된 작업의 결과를 반환하는 findFirstCompletedTask라는 함수를 작성하세요.

function taskA() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task A Complete");
        }, time);
    });
}

function taskB() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task B Complete");
        }, time);
    });
}

function taskC() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task C Complete");
        }, time);
    });
}

function findFirstCompletedTask() {
    return Promise.race([taskA(), taskB(), taskC()]);
}
findFirstCompletedTask().then((res) => console.log(res));
// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
