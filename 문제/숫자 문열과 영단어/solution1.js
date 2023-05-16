// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const num = '0123456789';
    const numStr = ['zero','one', 'two','three','four','five','six','seven','eight', 'nine']
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < numStr.length; j++) {
            if(s.indexOf(numStr[j]) !== -1) {
                answer += String(j);
                i += numStr[j].length;
                break;
            }
        }
        console.log('현제인덱스',i)
        answer += String(i);
    }
    return answer;
}


// s	result
console.log(solution("one4seveneight"));	//1478
// console.log("23four5six7")	234567
// console.log("2three45sixseven")	234567
//  console.log("123")	123