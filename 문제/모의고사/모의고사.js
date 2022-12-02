// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    let answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4 ,5, 5];
    const arr = [first, second ,third];
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j = 0; j < answers.length; j++) {
            if(answers[j] === arr[i][j]) {
                count += 1;
            }
        }
        answer.push(count);
    }
    const num = Math.max(...answer);
    answer = answer.filter((e, index) => (e === num)).map((e, index) => index + 1);
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));

// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]