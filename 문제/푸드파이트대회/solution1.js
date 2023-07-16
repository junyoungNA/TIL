// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    let answer = '';
    let str = '';
    for(let i = 1; i < food.length; i++) {
        for(let j = 0; j < Math.floor(food[i] / 2); j++)  {
            str += String(i);  
        }
    }
    answer = str;
    for (let i = 0; i < food[0]; i++) {
        answer += '0';
    }
    answer +=  str.split("").reverse().join("");;
    return answer;
}

console.log(solution([1,3,4,6]));
console.log(solution([1,7,1,2]));
// food	result
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"