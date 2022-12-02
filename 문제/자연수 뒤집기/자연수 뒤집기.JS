// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    const answer = [];
    const num = String(n);
    for(let i = num.length - 1; i >= 0; i--) {
        answer.push(Number(num[i]));
    }
    return answer;
}

// 12345	[5,4,3,2,1
console.log(solution(12345));