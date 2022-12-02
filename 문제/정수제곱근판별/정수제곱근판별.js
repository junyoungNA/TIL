// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++) {
        if(i * i === n) {
            answer = (i + 1) * (i + 1);
            break;
        }
    }
    return answer === 0 ? answer = - 1 : answer; 
}

// 121	144
// 3	-1

console.log(solution(121)) // 144