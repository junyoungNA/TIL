// https://school.programmers.co.kr/learn/courses/30/lessons/140108


function solution(s) {
    let answer = 0;
    // const countItem = {};
    for(let i = 0; i < s.length; i++) {
        let difCount = 0;
        let sameCount = 0;
        for(let j = i > 0 ? i - 1 : i; j < s.length; j++) {
            if(s[i] === s[j]) {
                sameCount += 1;
            } else {
                difCount += 1;
            }
        }
        const result = Math.min(difCount, sameCount);
        console.log(s[i]);
        const spliceStr = s.slice(i, result + 1);
        console.log(spliceStr,'자른후', difCount, sameCount, result);
        const stringWithoutSlice = s.slice(0, i) + s.slice(i + result + 1);
        s = stringWithoutSlice;
        console.log(s,'남은 문자열', stringWithoutSlice);
    }
    
    return answer;
}

console.log(solution('banana'));//3
// console.log(solution('abracadabra'));//6
// console.log(solution('aaabbaccccabba')); //3
