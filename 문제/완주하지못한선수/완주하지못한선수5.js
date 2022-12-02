// https://school.programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
    let answer = [];
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
            if(participant[i] !== completion[i]){
                answer.push(participant[i]);
                break;
            }
        }
    return answer.length === 1 ? answer = answer[0] : answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"])); //"leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"] )); //"vinko"
// ["leo", "kiki", "eden"]	["eden", "kiki"]	
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"