// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    const answer = [];

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let num = nums[i] + nums[j] + nums[k]
                    if(checkPrime(num) && answer.indexOf(num) === -1) {
                        answer.push(num);
                    }
            }
        }
    }
    return answer.length;
}

function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for(let i = 2; num > i; i++) {
        if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
            return false;
        }
    }
   // 소수는 1보다 큰 정수임으로
   // 1보다 작으면 false를 리턴한다
    return num > 1;
}

function checkPrime(num) {
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i+=2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(solution([1,2,3,4]));
console.log(solution([1,2,7,6,4]));
// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4