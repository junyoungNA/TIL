// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if(charCode > 64 && charCode < 91) {
            charCode  += n;
            while(charCode > 90) {
                if(charCode < 91) {
                    break;
                }
                charCode = 64 + (charCode - 90);
            }
            answer += String.fromCharCode(charCode);
            continue;
        }

        if(charCode > 96 && charCode < 123) {
            charCode += n;
            while(charCode > 122) {
                if(charCode < 123) {
                    break;
                }
                charCode = 96 + (charCode - 122);
                console.log('while문 후!',charCode);
            }
            answer += String.fromCharCode(charCode);
            continue;
        }
        answer += s[i];
    }
    return answer;
}

// console.log(solution("P", 15)); //E
// console.log(solution("AB", 1));
// console.log(solution("a B z", 4));
console.log(solution("z", 1));
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"