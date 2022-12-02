// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let maxWin = 6;
    let minWin = 6;
    let count = 0;
    lottos = sort(lottos);
    win_nums = sort(win_nums);
    console.log(lottos, win_nums);
    for(let i = 0; i < lottos.length; i++) {
        if(lottos[i] === 0) {
            count += 1;
            if(count > 1) {
                maxWin -= 1;
            }
            continue;
        }
        if(lottos[i] === win_nums[i]) {
            console.log(lottos[i], win_nums[i]);
            count += 1;
            if(count > 1) {
                maxWin -= 1;
                minWin -= 1; 
            }
        }
    }
    const answer = [maxWin, minWin];
    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
// [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]

function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 당첨 번호	31	10	45	1	6	19	결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등