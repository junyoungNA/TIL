// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    let answer = 0;
    let sameCount = 0;
    let difCount = 0;
    let k = '';
    for (let str of s) {
        console.log(str);
        if(sameCount === difCount) {
            answer += 1
            k = str;
        }
        if(k === str) {
            sameCount += 1;
        } else {
            difCount += 1;
        }
    }
    return answer;
}

// console.log(solution('banana'));//3
// console.log(solution('abracadabra'));//6
console.log(solution('aaabbaccccabba')); //3
