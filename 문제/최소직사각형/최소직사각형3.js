// https://school.programmers.co.kr/learn/courses/30/lessons/86491
function max(arr) {
    let num = arr[0];
    // console.log(arr);
    for(let i = 1; i < arr.length; i++) {
        if(num < arr[i]) {
            num = arr[i];
        }
    } 
    // console.log('max',num);
    return num;
}

function min(arr) {
    let num = arr[0];
    console.log(arr);
    for(let i = 1; i < arr.length; i++) {
        if(num > arr[i]) {
            num = arr[i];
        }
    } 
    // console.log('min', num);
    return num;
}

function solution(sizes) {
    const arr = [[], []];
    //arr[0] 번째에 max값들 arr[1]번째에 min값들
    for(let i = 0; i < sizes.length; i++) {
        arr[0].push(max(sizes[i]));
        arr[1].push(min(sizes[i]));
    }
    // console.log('arr', arr);
    // console.log(max(arr[0]));
    // console.log(max(arr[1]));
    return max(arr[0]) * max(arr[1]);
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); //4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])) //120

// 명함 번호	가로 길이	세로 길이
// 1	60	50                   
// 2	30	70
// 3	60	30
// 4	80	40

// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133
