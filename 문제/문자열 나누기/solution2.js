// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        console.log(s[i], i);
        let difCount = 0;
        let sameCount = 0;
        for(let j = i; j < s.length; j++) {
            if(s[i] === s[j]) {
                sameCount += 1;
            } else {
                difCount += 1;
            }
            if(sameCount === difCount) break;
        }
        const result = Math.min(difCount, sameCount);
        const spliceStr = s.slice(i, result + 1);
        console.log(spliceStr,'자른후', difCount, sameCount, i, result);
        i = i + result;
    }
    return answer;
}

console.log(solution('banana'));//3
// console.log(solution('abracadabra'));//6
// console.log(solution('aaabbaccccabba')); //3
