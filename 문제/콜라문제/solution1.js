// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript
function solution(a, b, n) {
    let answer = 0;
        
    while(n >= a)  {
        const receive= Math.floor(n / a) * b;
        console.log(receive,'받은');
        answer += receive;
        console.log(answer,'받은 총');
        n = receive + n % a;
        console.log(n, '남은');
    }
    return answer;
}

console.log(solution(2, 1, 20)) //19
// console.log(solution(3, 1, 20)) //9