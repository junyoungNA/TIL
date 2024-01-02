// https://school.programmers.co.kr/learn/courses/30/lessons/160586

// function processArrayWithDuplicates(inputArray) {
//     const resultArray = [];
//     inputArray.forEach((item, index) => {
//         const existingIndex = resultArray.findIndex(existingItem => existingItem === item);
//         if (existingIndex !== -1) {
//         // 중복된 문자열이 발견되면 더 낮은 인덱스의 문자열을 결과 배열에 추가
//             resultArray[existingIndex] = index < existingIndex ? item : resultArray[existingIndex];
//         } else {
//         // 중복된 문자열이 없으면 현재 문자열을 결과 배열에 추가
//             resultArray.push(item);
//         }
//     });
//     return resultArray;
// }

function solution(keymap, targets) {
    const answer = new Array(targets).fill(0);
    const countKey = [];
    const splitStr = keymap.join('').split('');
    // const result = processArrayWithDuplicates(splitStr);  
    console.log(result, '중복제거 배열');
    for(let i = 0; i < targets.length; i++) {
        const splitTarget = targets[i].split('');
        for(let j = 0; j < splitTarget.length; j++) {
            // console.log(splitTarget[j], targets[i][j]);
            const findIDX = splitStr.findIndex((item) => item === splitTarget[j]);
            if(findIDX === -1) return -1;
            // console.log(findIDX + 1,'먼데');
            answer[i] += findIDX + 1;
            
            console.log(answer,i,'진행중');
        }
    }
    console.log(countKey,'카운트키');
    return answer;
}

console.log(solution(["ABACD","BCEFD"]	,["ABCD","AABB"])) //[9, 4]
// console.log(solution(["AA"],["B"])) //	[-1]
// console.log(solution(["AGZ", "BSSS"],["ASA","BGZ"])) //	[4, 6]


