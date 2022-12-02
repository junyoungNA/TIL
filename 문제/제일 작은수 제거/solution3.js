// https://programmers.co.kr/learn/courses/30/lessons/12935

//success
function solution(arr) {
    var answer = [];
    arr.forEach(e => {
        if(e > Math.min(...arr)) {
            answer.push(e)
        }
        if(arr.length === 1) answer.push(-1);
    });
    return answer;
}

console.log(solution([4,3,2,1])) // [4,3,2]
console.log(solution([10])) // [-1]