// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    const answer = [];
    let temp = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(temp > arr[i]) {
            temp = arr[i]
        }
    }
    // console.log(temp);

    for(let i = 0; i < arr.length; i++) {
        if(arr.length === 1) {
            answer.push(-1);
        }
        if(arr[i] !== temp) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
console.log(solution([4,3,2,1])) // [4,3,2]
console.log(solution([10])) // [-1]
// console.log(solution([8,5,9,4,1])) // [8, 5, 9, 4]
// console.log(solution([1,2,3,4])) // [2, 3, 4]
console.log(solution([1,8,2,5,4,3])) // [1, 2, 3]