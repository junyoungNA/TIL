// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    if(Math.sign(left) === -1) {
        left = left * Math.sign(left);
    }
    if(Math.sign(right) === -1) {
        right = right * Math.sign(right);
    }
    console.log(left, right);
    const numArr = [];
    const result = [[], []];
    for(let i = left; i <= right; i ++) {
        numArr.push(i);
    }
    for(let i = 0; i < numArr.length; i++) {
        let count = 0;
        for(let j = 1; j <= numArr[i]; j++) {
            if(numArr[i] % j === 0) {
                count += 1;
            }
            if(j === numArr[i]) {
                if(count % 2 === 0) {
                    result[0].push(numArr[i]);
                } else {
                    result[1].push(numArr[i]);
                }
            }
        }
    }
    console.log(result);
    for(let i = 0; i < result.length; i++) {
        if(result[i].length <= 1) {
            result[i] = result[i];
            console.log(result);
        } else {
            result[i] = result[i].reduce((sum, current) => (sum + current));
        }
    }
    return result[0] > result[1] ? result[0] - result[1] : result[1] - result[0];
}

console.log(solution(13, 17)); //43
console.log(solution(24, 27));  //52
console.log(solution(-1, -2));  //1
// console.log(solution(13, 17));



// left	right	result
// 13	17	43
// 24	27	52