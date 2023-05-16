// https://school.programmers.co.kr/learn/courses/30/lessons/70128
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
function solution(a, b) {
    let answer = 0;
    for(let i = 0; i < a.length; i++) {
        answer += a[i] * b[i]; 
    }
    return answer;
}


// a	b	            result
console.log(solution([1,2,3,4] ,[-3,-1,0,2]))//3
console.log(solution([-1,0,1], [1,0,-1])) //-2