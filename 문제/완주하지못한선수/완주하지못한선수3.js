// https://school.programmers.co.kr/learn/courses/30/lessons/42576
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
    // console.log(arr);
    return arr
}

function solution(participant, completion) {
    let answer = [];
    // participant =sort(participant);
    // completion =sort(completion);
    participant.sort();
    participant.sort();
    let compleLength = completion.length;
    for(let i = 0; i < participant.length; i++) {
        for(let j = 0; j < compleLength; j++) {
            if(participant[i] === completion[j]) {
                completion.splice(j, 1);
                break;
            }
            if(j === compleLength - 1) {
                answer.push(participant[i]);
                console.log(answer, '값이들어갔습니다.')
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