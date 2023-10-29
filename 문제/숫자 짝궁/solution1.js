// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
    let answer;
    const xStr = X.split('');
    const yStr = Y.split('');
    const result = xStr.map((xItem) => {    
        const findItem = yStr.findIndex((yItem) => yItem === xItem); 
        if(findItem === -1) return '';
        yStr.splice(findItem, 1);
        return xItem;
    });
    console.log(result, 'result');
    console.log(Number(result.sort((a,b) => b - a).join('')), '찾기');
    // answer=  Number(result.sort((a,b) => b - a).join(''));
    return answer;
}

console.log(solution("100","2345")) //-1
console.log(solution("100","203045")) //0
// console.log(solution("100","123450")) //10
// console.log(solution("12321","42531")) //321
// console.log(solution("5525","1255")) //552