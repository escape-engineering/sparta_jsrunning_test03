// 3. PromiseAll 다뤄보기 (빈칸 채우기)
// 세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다.
// 아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요. (총 빈칸 3개)

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 Complete");
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 Complete");
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 Complete");
        }, 3000);
    });
}

async function runTasksSequential() {
    console.time("Sequential");
    try {
        const result1 = await task1();
        console.log(result1);
        const result2 = await task2();
        console.log(result2);
        const result3 = await task3();
        console.log(result3);
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Sequential");

    // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
    //6초가량 예상합니다. 각 task함수가 awiat가 따로 달려있기 때문입니다.
}

async function runTasksParallel() {
    console.time("Parallel");
    try {
        // 병렬로 promise들을 한 번에 처리하는 코드
        // const results = < 빈칸 2 >
        const results = await Promise.all([task1(), task2(), task3()]);
        results.forEach((result) => console.log(result));
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Parallel");
    //   예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
    // 3초가 걸릴 것이라고 생각됩니다. 병렬적으로 task들을 처리하고 그 중 가장 긴 것이 3초이기 때문입니다.
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
