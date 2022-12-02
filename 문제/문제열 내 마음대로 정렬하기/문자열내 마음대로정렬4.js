// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    //문제의 조건이 이해가 잘되지않음
    //n번째의 문자가 서로 같을때 n이하의 숫자번째 알파벳을 기준으로 나눠야함?
    //아니면 서로 같지않을때까지번째의 문자를 기준으로 해야하는지?
    //헉 다 질문을통해 n의 대소비교가 같을때는 그냥 문자열 자체를 비교해서 푼다!
    for(let i = 0; i < strings.length; i++) {
        for(let j = 0; j < strings.length; j++) {
            if(strings[i][n] === strings[j][n]) {
                if(strings[i] < strings[j]){
                    const temp = strings[i];
                    strings[i] = strings[j];
                    strings[j] = temp;
                }
            }
            
            if(strings[i][n] < strings[j][n]) {
                const temp = strings[i];
                strings[i] = strings[j];
                strings[j] = temp;
            }
        }
    }

    return strings;
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
console.log(solution(["abce", "abcd", "cdx"], 0)); // ["abce", "abcd", "cdx"]