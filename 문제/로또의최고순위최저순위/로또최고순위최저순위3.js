// https://school.programmers.co.kr/learn/courses/30/lessons/77484f
function solution(lottos, win_nums) {
    let answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    const zeros = lottos.filter(lotto => lotto === 0).length;
    console.log(correct, zeros);
    
    let min = 7-correct >= 6 ? 6 : 7-correct;
    let max = min-zeros < 1 ? 1 : min-zeros;
    
    answer = [max, min]
    return answer;
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]));
// console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));