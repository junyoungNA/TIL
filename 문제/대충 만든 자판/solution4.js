
function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    console.log(map,'map')
    // for (const items of targets) {
    //     answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    // }
    return answer;
}

console.log(solution(["ABACD","BCEFD"]	,["ABCD","AABB"])) //[9, 4]

