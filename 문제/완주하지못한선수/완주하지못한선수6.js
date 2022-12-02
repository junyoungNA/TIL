// https://school.programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
    let answer = [];
    participant = sort(participant)
    completion= sort(completion);
    console.log(completion);
    console.log(participant);
    for(let i = 0; i < participant.length; i++) {
            if(participant[i] !== completion[i]){
                answer.push(participant[i]);
                break;
            }
        }
    return answer.length === 1 ? answer = answer[0] : answer;
}
function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"])); //"leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"] )); //"vinko"
// ["leo", "kiki", "eden"]	["eden", "kiki"]	
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"