// https://school.programmers.co.kr/learn/courses/30/lessons/70128
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
//다른 사람 풀이 reduce 활용

function solution(a, b) {
    // initialValue가 없으면 배열의 2번째부터 계산이 시작되는데 
    // 배열이 비어있으면 당연히 TypeError가 발생합니다.
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}


// a	b	            result
console.log(solution([1,2,3,4] ,[-3,-1,0,2]))//3
console.log(solution([-1,0,1], [1,0,-1])) //-2