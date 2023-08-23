// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    const answer = [score[0]];
    let fooArr = [score[0]]
    for(let i = 1; i < score.length; i++) {
        if(i < k) {
            fooArr.push(score[i]);
        }else {
            fooArr.push(score[i]);
            fooArr.sort((a, b) => a - b);
            if(fooArr[0] > fooArr[1]) fooArr.splice(1,1);
            fooArr.shift();
        }
        answer.push(Math.min(...fooArr));
    }
    return answer;
}

console.log(solution(3,[10, 100, 20, 150, 1, 100, 200])); //[10, 10, 10, 20, 20, 100, 100]
console.log(solution(4,[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); //[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]