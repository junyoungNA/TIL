// https://school.programmers.co.kr/learn/courses/30/lessons/68644
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
    return arr;
}

function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + arr[j]);
            answer.push(arr[i] + arr[j]);
        }
    }
    answer = sort(answer);
    console.log(answer);
    const result = [answer[0]];
    let temp = answer[0]
    for(let i = 1; i < answer.length; i++) {
        if(temp !== answer[i]) {
            result.push(answer[i]);
        }
        temp = answer[i];
    }
    return result;
}

console.log(solution([2,1,3,4,1]));



// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]