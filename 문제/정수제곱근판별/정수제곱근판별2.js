// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let result = -1;

    for(let i = 1; i <= n; i++) {
        if(i * i === n) {
            const x = i + 1;
            result = x * x;
            break;
        }
    }

    return result;
}


// 121	144
// 3	-1

console.log(solution(121)) // 144