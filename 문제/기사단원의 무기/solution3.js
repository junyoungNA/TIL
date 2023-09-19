// https://school.programmers.co.kr/learn/courses/30/lessons/136798
https://velog.io/@yeonsubaek/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B8%B0%EC%82%AC%EB%8B%A8%EC%9B%90%EC%9D%98-%EB%AC%B4%EA%B8%B0-JavaScript
//math.sqrt 코드를 사용해서 시간 복잡도를 줄인다고 함!  
/* i가 4인 경우
// j가 1인 경우

4 % 1 === 0이므로 계속 진행
4 / 1 === 4이므로 약수의 개수는 +2
j가 2인 경우

4 % 2 === 0이므로 계속 진행
4 / 2 === 2이므로 약수의 개수는 +1
약수의 개수 : 3개

i가 10인 경우
j가 1인 경우

10 % 1 === 0이므로 계속 진행
10 / 1 === 10이므로 약수의 개수는 +2
j가 2인 경우

10 % 2 === 0이므로 계속 진행
10 / 2 === 5이므로 약수의 개수는 +2
j가 3인 경우

10 % 3 === 1이므로 건너 뛰기
약수의 개수 : 4개 */
function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        let divisor = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j === j) divisor += 1;
                else divisor += 2;
                
                console.log(answer, divisor, i, j);
            }
            if (divisor > limit) {
                divisor = power;
                break;
            }
        }
        answer += divisor;
    }
    return answer;
}

// number	limit	power	result
// 5	3	2	10
// 10	3	2	21

// console.log(solution(5,3,2)) //10
console.log(solution(10,3,2)) //21
console.log(solution(4,2,1)) //6