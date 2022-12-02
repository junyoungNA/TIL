// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    const temp = String(x);
    let plusNum = 0;
    let answer = true;

    for(let i = 0; i < temp.length; i++) {
        plusNum += Number(temp[i]);
    }
    if(x % plusNum !== 0) {
        answer = false
    }
    
    return answer;
}

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));

// arr	return
// 10	true
// 12	true
// 11	false
// 13	fals