// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    if(n === 0) return 0;
    let result = 1;
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) {
            result += i;
        }
    }
    return result;
}


console.log(solution(12))// 28
console.log(solution(5))// 6