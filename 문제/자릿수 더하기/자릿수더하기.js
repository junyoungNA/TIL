// https://school.programmers.co.kr/learn/courses/30/lessons/12931
function solution(n) {
    const num = String(n);
    console.log(typeof num);
    let answer = 0;
    for(let i = 0; i < num.length; i++) {
        answer += Number(num[i]);
    }

    return answer;
}

console.log(solution(123)) //6
// console.log(solution(987)) //24
// N	answer
// 123	6
// 987	24