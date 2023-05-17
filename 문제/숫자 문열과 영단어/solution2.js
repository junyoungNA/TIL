// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const numStr = ['zero','one', 'two','three','four','five','six','seven','ight', 'nine']
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        console.log(i,'i');
        for(let j = 0; j < numStr.length; j++) {
            console.log(s.includes(numStr[j]))
            if(s.includes(numStr[j])) {
                console.log(s.includes(('eight')));
                answer += j;
                s = s.slice(numStr[j].length);
                console.log('자름',s)
                break;
            }
            console.log('현재',j)
        }
        console.log('안걸림',s.length, s,s[i]);
        answer += String(s[i]);
        s = s.slice(1)
        // console.log('자른후', s)
    }
    return answer;
}


// s	result
console.log(solution("one4seveneight"));	//1478
// console.log("23four5six7")	234567
// console.log("2three45sixseven")	234567
//  console.log("123")	123