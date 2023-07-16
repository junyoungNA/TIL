// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}

console.log(solution([1,3,2,5,4], 9));
console.log(solution([2,2,3,3], 10));


// d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4