// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    let answer = [];

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            const indexing = [];
            if(nums[i] !== nums[j]) {
                let result  = nums[i] + nums[j];
                if(nums[j + 1] !== nums[i] ) {
                    console.log('더하기 전', result);
                    result += nums[j + 1];
                    console.log('더하기 후', result);
                };
                if(isPrime(result)) answer.push(result);;
                
            }
        }
    }
    return answer;
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
console.log(solution([1,2,3,4]));
// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4