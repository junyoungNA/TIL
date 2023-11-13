// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// n 전체 수
// 잃어버린 학생 수
// 여벌 학새 수

function solution(n, lost, reserve) {
    let answer = n;
    let failNum = 0;

    const newLost = lost.filter((item) => (!reserve.includes(item)));
    const newReserve = reserve.filter((item) => (!lost.includes(item)));
    console.log('어케됨?', newLost);
    if(newLost.length < 1 ) return answer - failNum;

    for(let i = 0; i < newLost.length; i++) {
        if(newLost[i] > n || newLost[i] < 1 ) continue;
        if(newLost[i] > 1)  {
            const findIdx = newReserve.findIndex((item) => item === newLost[i] - 1);
            console.log('들어옴', i, newLost[i], findIdx);
            if(findIdx !== -1){
                newReserve.splice(findIdx, 1);
                continue;
            } 
        }; 
        if(newLost[i] < n){
            const findIdx = newReserve.findIndex((item) => item === newLost[i] + 1);
            console.log('2들어옴', i, newLost[i], findIdx);
            if(findIdx !== -1) {
                newReserve.splice(findIdx, 1);
                continue;
            }
        } 
        failNum += 1;
    }
    console.log(failNum,'봅시다');
    return answer - failNum;
}


// console.log(solution(5,[2, 4],[1, 3, 5])) //5
// console.log(solution(5,[2, 4],	[3]	)) //4
// console.log(solution(5, [3, 4], [1, 2, 5])) //5
// console.log(solution(5, [1, 2], [3, 4])) //4
// console.log(solution( 5, [4, 5], [3, 4]))//4
console.log(solution( 10, [1, 2, 3, 4, 5, 6], [1, 2, 3]))//7
console.log(solution( 5,[1, 2, 3],[2, 3, 4])) //4
// console.log(solution(3, [3],[1])) //2

