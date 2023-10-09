// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript
function solution(a, b, n) {
    let answer = 0;
        
    while(n >= a)  {
        const receive= Math.floor(n / a) * b;
        answer += receive;
        n = n - (receive * a) + receive;
    }
    return answer;
}

console.log(solution(2, 1, 20)) //19
console.log(solution(3, 1, 20)) //9