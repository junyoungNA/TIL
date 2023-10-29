// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
    const common = [];
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);

    for(x of X) {
        countX[x]++;
    }

    for(y of Y) {
        countY[y]++;
    }

    for(let i = 0; i < countX.length; i++) {
        if(countX[i] !== 0 && countY[i] !== 0) {
            common.push(String(i).repeat(Math.min(countX[i], countY[i])));
        }
    }

    if(common.length === 0) return "-1";
    if(common.length === 1 && parseInt(common[0], 10) === 0) return "0"

    return common.sort((a, b) => b - a).join('');
}

console.log(solution("100","2345")) //-1
// console.log(solution("100","203045")) //0
// console.log(solution("100","123450")) //10
// console.log(solution("12321","42531")) //321
// console.log(solution("5525","1255")) //552