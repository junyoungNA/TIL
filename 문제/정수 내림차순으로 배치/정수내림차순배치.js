// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    const arr = [];
    
    for(let i = 0; i < String(n).length; i++) {
        arr.push(String(n)[i]);
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return Number(arr.join(""));
}

console.log(solution(118372)) //873211
// n	return
// 118372	873211