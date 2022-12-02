// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let maxWin = 7;
    let minWin = 7;
    let locount = 0;
    for(let i = 0; i < win_nums.length; i++) {
        if(lottos[i] === 0 && win_nums[i] === 0) {
            locount += 1;
        }
        console.log(locount);
    }
    if(locount >= 5)  {
        const result = [6, 6];
        return result;
    }

    for(let i = 0; i < lottos.length; i++) {
        if(lottos[i] === 0) {
            maxWin -= 1;
            continue;
        }
        for(let j = 0; j < win_nums.length; j++) {
            if(lottos[i] === win_nums[j]) {
                maxWin -=1;
                minWin -=1;
            }
        }
    }
    if(minWin > 6) minWin = 6;
    if(minWin === 7 && maxWin === 7) return [6, 6];
    const answer = [maxWin, minWin];
    return answer;
}

// console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
// [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]
// 당첨 번호	31	10	45	1	6	19	결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등