// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    const answer = sort(s)
    return answer;
}

function sort(str) {
    const arr = [...str];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return String(arr.join(''));
}


console.log(solution("Zbcdefg"))
// s	return
// "Zbcdefg"	"gfedcbZ"