function solution(keymap, targets) {
    const answer = [];

    for (const word of targets) {
        let times = 0;
        for (const char of word) {
            console.log(char, '단어');
            let flag = false;
            let time = 101;
            for (const key of keymap) {
                if (key.includes(char)) {
                    time = Math.min(key.indexOf(char) + 1, time);
                    flag = true;
                }
            }
            if (!flag) {
                times = -1;
                break;
            }
            times += time;
        }
        answer.push(times);
    }
    return answer;
}

// Example Usage
console.log(solution(["ABACD","BCEFD"]	,["ABCD","AABB"])) //[9, 4]

