// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    let answer = 0;
    for(let i = 0; i < t.length; i++) {
        const copy = t.slice(i, p.length + i);
        if(copy.length < p.length) break;
        if(copy <= p) {
            console.log(copy)
            answer += 1;
        }
    }

    return answer;
}


// "3141592"	"271"	2
// console.log(solution('3141592', '271')) // 2
// "500220839878"	"7"	8
// console.log(solution('500220839878', '7')) //8

// "10203"	"15"	3
console.log(solution('10203', '15')) //3