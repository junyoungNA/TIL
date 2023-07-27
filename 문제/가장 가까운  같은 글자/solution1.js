function solution(s) {
    // https://school.programmers.co.kr/learn/courses/30/lessons/142086
    const answer = [-1];
    for(let i = 1; i < s.length; i++) {
        const findStrIDX = s.lastIndexOf(s[i], i -1)
        if( findStrIDX !== -1) {
            answer.push(i - findStrIDX) ;
            continue;
        }
        answer.push(-1);
    }
    return answer;
}

console.log(solution('banana'))//[-1, -1, -1, 2, 2, 2]
console.log(solution('foobar'))//[-1, -1, 1, -1, -1, -1]