// https://school.programmers.co.kr/learn/courses/30/lessons/17682

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다
function solution(dartResult) {
    let answer = 0;
    const allArr = [];
    for(let i = 0; i < dartResult.length; i++) {
        // 숫자인지 확인하기
        if(isNaN(dartResult[i]) === true) {
            switch(dartResult[i]) {
                case 'S' : allArr[allArr.length - 1] = allArr[allArr.length - 1] ** 1;
                    break;
                case 'D' : allArr[allArr.length- 1] = allArr[allArr.length- 1] ** 2;
                    break; 
                case 'T' : allArr[allArr.length - 1] = allArr[allArr.length - 1] ** 3;
                    break;
                case '*' : allArr[allArr.length - 1] =  allArr[allArr.length - 1] * 2;  allArr[allArr.length - 2] =  allArr[allArr.length - 2] * 2;
                    break; 
                case '#' :  allArr[allArr.length - 1] =  -(allArr[allArr.length - 1]); 
                    break;
                default : break;
            }
        } else {
            //현재 숫자가 아니라면 10인지 확인
            if(dartResult[i] === '1' && dartResult[i + 1] === '0') {
                allArr.push(10);
                i = i + 1 //10이므로 i를 1추가해서 다다음 반복문으로
                continue;
            }
            allArr.push(Number(dartResult[i]));
        }
    }
    allArr.forEach(num => answer += num);
    return answer;
}

// 예제	dartResult	answer	설명
// 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	12 + 21 * (-1) + 101
// 3	1D2S0T	3	12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2

console.log(solution('1S2D*3T'));//37	    11 * 2 + 22 * 2 + 33
console.log(solution('1D2S#10S')); // 9	    12 + 21 * (-1) + 101
console.log(solution('1D2S0T')); //3        12 + 21 + 03
console.log(solution('1S*2T*3S')); // 23	11 * 2 * 2 + 23 * 2 + 31
console.log(solution('1D#2S*3S')); //5	    12 * (-1) * 2 + 21 * 2 + 31
console.log(solution('1T2D3D#')); //-4	    13 + 22 + 32 * (-1)
console.log(solution('1D2S3T*')); //59	    12 + 21 * 2 + 33 * 2