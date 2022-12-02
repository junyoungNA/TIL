// https://school.programmers.co.kr/learn/courses/30/lessons/68935
function solution(n) {
    let answer = '';
    let hex = n.toString(3);
    for(let i = hex.length - 1; i >= 0; i--) {
        answer += hex[i];
    }
   answer = parseInt(answer, 3);

    return answer;
}
console.log(solution(45)) //7

// n	result
// 45	7
// 125	229