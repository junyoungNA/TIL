// https://programmers.co.kr/learn/courses/30/lessons/12935

//success
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    const answer = arr.length > 1 ? arr: [-1]
    return answer;
}

console.log(solution([4,3,2,1])) // [4,3,2]
console.log(solution([10])) // [-1]
