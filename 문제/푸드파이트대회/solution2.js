// https://school.programmers.co.kr/learn/courses/30/lessons/134240

//답안문제
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}

console.log(solution([1,3,4,6]));
console.log(solution([1,7,1,2]));