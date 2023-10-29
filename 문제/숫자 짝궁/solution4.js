// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
    let answer = '';
    //문자열 형태로 배열만들기
    const arrX = X.split('');
    const arrY = Y.split('');
    // const yObj = {}

    // 내림차순 정렬
    arrX.sort((a,b)=>b-a)

    //내림찬순 정렬된 문자열 x배열에 순회
    //문자열 y배열에 같은 문자열 있을 시
    //y배열 같은 문자열 자르기
    arrX.forEach((v,idx)=>{
        if(arrY.indexOf(v) !== -1){
            arrY.splice(arrY.indexOf(v),1)
            answer = answer.concat(v)
        }
    })

    if(answer === '')
        return "-1"
    if(answer[0] === "0")
        return "0"
    return answer
}

console.log(solution("100","2345")) //-1
// console.log(solution("100","203045")) //0
// console.log(solution("100","123450")) //10
// console.log(solution("12321","42531")) //321
// console.log(solution("5525","1255")) //552