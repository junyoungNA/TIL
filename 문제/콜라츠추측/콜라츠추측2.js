// https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
    const answer = [num, 0];
    while(true) {
        if(answer[0] === 1) {
            break;
        }
        if(answer[0] % 2 === 0) {
            answer[0] = answer[0] / 2;
            answer[1] += 1; 
        } else {
            answer[0] = (answer[0] * 3) + 1;
            answer[1] += 1; 
        }

        if(answer[1] >= 500) {
            console.log('횟수를 넘어감!');
            break;
        }
    }
    
    return answer[1];
}
console.log(solution(6)) //8
console.log(solution(16)) //4


// 6	8
// 16	4
// 626331	-1