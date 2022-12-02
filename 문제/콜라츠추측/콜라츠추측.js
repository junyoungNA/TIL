// https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
    let answer = 0;
    while(true) {
        if(num % 2 === 0) {
            num /= 2;
            console.log(num);
        } 
        if(num % 2 !== 0) {
            num *= 3;
            num += 1; 
            console.log(num);
        }
        if(num === 1) {
            console.log(num);
            break;
        }
        
    }
    return answer;
}
console.log(solution(6)) //8
console.log(solution(16)) //4


// 6	8
// 16	4
// 626331	-1