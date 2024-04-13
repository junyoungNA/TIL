// https://school.programmers.co.kr/learn/courses/30/lessons/12921

//테스트 10, 11, 12 오류
function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++) {
        let count = 0;
        for(let j = 2; j <= i; j++) {
            // console.log(i, j);
                if(i % j === 0) {
                    count += 1;
                    if(count > 1) break;
                    if(i == j) answer += 1;
                };
            } 
        }
    return answer;
}

console.log(solution(10)) // 4
console.log(solution(5)) // 3