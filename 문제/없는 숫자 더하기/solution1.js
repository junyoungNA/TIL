// https://school.programmers.co.kr/learn/courses/30/lessons/86051


function solution(numbers) {
    let answer = 0
    for(let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }
    return 45 - answer;
}

console.log(solution([1,2,3,4,6,7,8,0])) //14
console.log(solution([5,8,4,0,6,7,9])) //6