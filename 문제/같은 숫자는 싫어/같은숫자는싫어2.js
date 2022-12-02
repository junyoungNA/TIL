// https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
    const result = [];
    let temp = arr[0];
    result.push(temp);
    for(let i = 1; i < arr.length; i++) {
        if(temp !== arr[i]) {
            result.push(arr[i]);
        }
        temp = arr[i];
    }
    return result;
}
console.log(solution([1,1,3,3,0,1,1])) //[1,3,0,1]
console.log(solution([4,4,4,3,3])) //[4, 3] 
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,3]