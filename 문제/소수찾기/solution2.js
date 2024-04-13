// https://school.programmers.co.kr/learn/courses/30/lessons/12921

//에라토스테네스의 체
function solution(n) {
    let answer = 0;
    let curMin = 0;
    for(let i = 1; i <= n; i++) {
        if(i === 2 || i === 3 || i === 5) {
            answer += 1; 
            continue;
        }
        if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0) continue;
        
        if( i % curMin === 0) {
            console.log(i);
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(10)) // 4
// console.log(solution(5)) // 3