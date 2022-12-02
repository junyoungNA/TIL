// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    const result = [0, 0, 0];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4 ,5, 5];
    for(let i = 0; i < answers.length; i++) {
        if(first[i % 5] === answers[i]) result[0]++;
        if(second[i % 8] === answers[i]) result[1]++;
        if(third[i % 10] === answers[i]) result[2]++;
    }

    const maxNum = Math.max(...result);
    const answer = [];

    for(let i = 0; i < result.length; i++) {
        if(result[i] === maxNum) answer.push(i + 1);
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));

// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]