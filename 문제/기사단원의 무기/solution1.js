// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 시간초과및 테스트케이스 실패?

function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i <= number; i++) {
        let divideCount = 0;
        for(let j = 1; j <= number; j++) {
            if( i % j !== 0) continue;
            divideCount += 1;
        }
        divideCount = divideCount > limit ? limit - 1 : divideCount;
        answer += divideCount;
    }
    return answer;
}

// number	limit	power	result
// 5	3	2	10
// 10	3	2	21

// console.log(solution(5,3,2)) //10
// console.log(solution(10,3,2)) //21
console.log(solution(4,2,1)) //21