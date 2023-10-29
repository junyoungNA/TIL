function solution(X, Y) {
    //객체를 만들어서 문자열로 만든 x, y배열을 순회
    // 프로퍼티값에 배열의 있는 값을 추가해줌
    //다른 x or y 배열을 순회하며 기존 객체에 추가했던 프로퍼티 값에
    //값이 이미 있다면 값을 감소하며 answer 문자열 추가
    let answer = '';
    const arrX = X.split('');
    const arrY = Y.split('');
    const yObj = {};

    arrX.sort((a,b)=>b-a);

    arrY.forEach((y)=> {
        if(yObj[y] === undefined)
            yObj[y] = 1;
        else
            yObj[y]++;
    });

    arrX.forEach(x=> {
        if(yObj[x] !== undefined && yObj[x] !== 0) {
            yObj[x]--;
            answer = answer.concat(x);
        }
    });

    if(answer.length === 0)
        return "-1";
    if(answer[0] === "0")
        return "0";
    return answer
}

console.log(solution("100","2345")) //-1
console.log(solution("100","203045")) //0
console.log(solution("100","123450")) //10
console.log(solution("12321","42531")) //321
console.log(solution("5525","1255")) //552