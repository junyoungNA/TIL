// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    const answer = 0;
    const arr = [[], []];
    for(let i = 0; i < sizes.length; i++) {
        for(let j = 0; j < sizes[i].length; j++) {
            arr[j].push(sizes[i][j]);
        }
    }
    arr[0] = sort(arr[0]);
    arr[1] = sort(arr[1]);
    for(let i = 0; i < arr[0].length; i++) {
        if(arr[0][i] > arr[1][i]) {

        }
        if(arr[1][i] > arr[0][i]) {

        }
    }

    return answer;
}

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

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); //4000


// 명함 번호	가로 길이	세로 길이
// 1	60	50                   
// 2	30	70
// 3	60	30
// 4	80	40

// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133
