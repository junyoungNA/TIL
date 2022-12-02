// https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
    const answer = [-1];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j ++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    arr.pop();
    return  arr.length === 0 ? answer : arr;
}
console.log(solution([4,3,2,1]));
console.log(solution([10]));
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]