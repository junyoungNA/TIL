// https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] !== arr[j]) {
                    result.push(arr[i]);
                    i = j;
                    break;
                }
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(solution([1,1,3,3,0,1,1])) //[1,3,0,1]
console.log(solution([4,4,4,3,3])) //[4, 3] 
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,3]