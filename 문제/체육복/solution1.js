// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// n 전체 수
// 잃어버린 학생 수
// 여벌 학새 수

function solution(n, lost, reserve) {
    let answer = n;
    let failNum = 0;
    for(let i = 0; i < lost.length; i++) {
        if(lost[i] > n || lost[i] < 1) continue;
        if(lost[i] > 1)  {
            const findIdx = reserve.findIndex((item) => item === lost[i] - 1);
            // console.log('들어옴', i, lost[i], findIdx);
            if(findIdx !== -1) continue;
            failNum += 1;
            
        }; 
        if(lost[i] < n){
            
            const findIdx = reserve.findIndex((item) => item === lost[i] + 1);
            // console.log('2들어옴', i, lost[i], findIdx);
            if(findIdx !== -1) continue;
            failNum += 1;
        } 
    }
    console.log(failNum,'봅시다');
    return answer - failNum;
}


// console.log(solution(5,[2, 4],[1, 3, 5])) //5
console.log(solution(5,[2, 4],	[3]	)) //4
// console.log(solution(3, [3],[1])) //2

