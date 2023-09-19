// https://school.programmers.co.kr/learn/courses/30/lessons/136798
//https://school.programmers.co.kr/questions/51080 참고 사이트
//math.sqrt 코드를 사용해서 시간 복잡도를 줄인다고 함!  
function solution(number, limit, power) {
    const numberArray = Array(number).fill(0).map((_,idx)=>idx+1);
    const answer = numberArray.map(number=>{
        let divideCount = 0
        for(let i = 1; i < Math.sqrt(number); i++){
            (number % i === 0) && divideCount++
        }
        divideCount = (divideCount * 2 + Number.isInteger(Math.sqrt(number)));
        return divideCount > limit ? power : divideCount
    }).reduce((acc,val)=>acc+val,0)

    return answer;
}

// number	limit	power	result
// 5	3	2	10
// 10	3	2	21

// console.log(solution(5,3,2)) //10
console.log(solution(10,3,2)) //21
console.log(solution(4,2,1)) //6