// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if(charCode > 64 && charCode < 91) {
            charCode  += n;
            // if(charCode > 90) {
            //     charCode = isOver(charCode, 64, 90, 91);
            // } 
            //삼함연산자를 활용해서 더 간단하게
            charCode = charCode > 90 ?  isOver(charCode, 64, 90, 91) : charCode;
            answer += String.fromCharCode(charCode);
            continue;
        }

        if(charCode > 96 && charCode < 123) {
            charCode += n;
            // if(charCode > 122) {
            //     charCode = isOver(charCode, 96, 122, 123);
            // } 
            //삼함연산자를 활용해서 더 간단하게
            charCode = charCode > 122 ?  isOver(charCode, 96, 122, 123) : charCode;
            answer += String.fromCharCode(charCode);
            continue;
        }
        answer += s[i];
    }
    return answer;
}


function isOver(charCode, start,end, over) {
    while(charCode > end) {
        if(charCode < over) {
            break;
        }
        charCode = start + (charCode - end);
    }
    return charCode;
}
console.log(solution("P", 15)); //E
console.log(solution("AB", 1));
console.log(solution("a B z", 4));
console.log(solution("z", 1));
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"