// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    let answer = [];
    for(let i = 0; i < participant.length; i++) {
        for(let j = 0; j < completion.length; j++) {
            if(participant[i] === completion[j]) {
                break;
            } 
            if(j === completion.length - 1) {
                answer.push(participant[i]);
            }
        }
    }
    return answer.length === 1 ? answer = answer[0] : answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"])); //"leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"] )); //"vinko"
// ["leo", "kiki", "eden"]	["eden", "kiki"]	
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"