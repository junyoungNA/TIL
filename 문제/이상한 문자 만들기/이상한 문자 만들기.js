// https://school.programmers.co.kr/learn/courses/30/lessons/12930


function solution(s) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
            continue;
        }
        if(i % 2 === 0) {
            answer += s[i].toUpperCase();
            continue;
        }
        answer += s[i].toLowerCase();
    }
    return answer;
}

// "try hello world"	"TrY HeLlO WoRlD"
console.log(solution("try hello world")) //"TrY HeLlO WoRlD"