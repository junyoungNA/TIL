// https://school.programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
    let answer = '';
    const arr = s.split(" ");
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(j % 2 === 0){
                answer +=arr[i][j].toUpperCase(); 
            } else {
                answer +=arr[i][j].toLowerCase(); 
            }
        }
        if(i === arr.length - 1){
            break;
        }
        answer += " ";
    }
    return answer;
}

// "try hello world"	"TrY HeLlO WoRlD"
console.log(solution("try hello world")) //"TrY HeLlO WoRlD"