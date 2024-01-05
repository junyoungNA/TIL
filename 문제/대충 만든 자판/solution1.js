// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
    const answer = new Array(targets).fill(0);
    const joinKeys = [...new Set([...keymap].join(''))];
    console.log(joinKeys,'합침');
    for(let i = 0; i < targets.length; i++) {
        const splitTarget = targets[i].split('');
        for(let j = 0; j < splitTarget.length; j++) {
            const findIDX = joinKeys.indexOf(splitTarget[j]);
            console.log(findIDX, '찾음');
            if(findIDX === -1) {
                answer[i] = findIDX;    
                continue;
            }
            answer[i] += findIDX + 1;
            console.log(answer);
        }
    }
    return answer;
}

console.log(solution(["ABACD", "BCEFD"],["ABCD","AABB"])) //[9, 4]
// console.log(solution(["AA"],["B"])) //	[-1]
// console.log(solution(["AGZ", "BSSS"],["ASA","BGZ"])) //	[4, 6]


