// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const numStr = ['zero','one', 'two','three','four','five','six','seven','eight', 'nine']
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        // console.log('s시작',s[i] === 'e')
        for(let j = 0; j < numStr.length; j++) {
            if(s.search(numStr[j]) === 'eight') {
                console.log(s.search(numStr[j]) === 'eight');
                console.log('찾았나?',s.search(numStr[j]));
                answer += String(j);
                s = s.slice(numStr[j].length);
                console.log('answer',answer);
                console.log('s',s);
                break;
            }
        }
        answer += String(s[i]);
        console.log('끝?',i);
    }
    return answer;
}


// s	result
console.log(solution("one4seveneight"));	//1478
// console.log("23four5six7")	234567
// console.log("2three45sixseven")	234567
//  console.log("123")	123