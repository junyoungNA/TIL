// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    const answer = [];
    const splitS = s.split('');
    while(splitS.length > 0) {
        let sameCount = 0;
        let difCount = 0;
        let sameIDX = 0;
        let difIDX = 0;
        for(let j = sameIDX; j < splitS.length; j++) {
            if(splitS[0] === splitS[j]) {
                sameCount += 1;
            } 
        }
        for(let j = 0; j < splitS.length; j++) {
            if(splitS[0] !== splitS[j]) {
                difCount += 1;
            }
            if(sameCount <= difCount) {
                difIDX = j + 1;
                console.log(difIDX,'끝난인덱스');
                break;
            };
        }
        console.log(sameCount, difCount);
        answer.push(splitS.slice(0, difIDX).join(''));
        splitS.splice(0,difIDX);
        console.log(splitS, answer);
    }
    return answer;
}

console.log(solution('banana'));//3
// console.log(solution('abracadabra'));//6
// console.log(solution('aaabbaccccabba')); //3
