// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const reportArr = [];
    const nameArr = Array(id_list.length).fill(0);
    const answer = Array(id_list.length).fill(0);
    report.forEach(element => {
        reportArr.push( element.split(' '));
    });
    console.log('reportArr', reportArr);
    // 신고당한 횟수 세기
    for(let i = 0 ; i < id_list.length; i++) {
        for(let j = 0; j < reportArr[i].length; j++) {
            const findIndex = id_list.findIndex((item) => reportArr[i][j] === item );
            if(findIndex < id_list.length - 1) {
                nameArr[findIndex] += 1;
            }
            if(nameArr[findIndex] >= k) {
                nameArr[findIndex] = id_list[findIndex];    
                break;
            }
        }
    }
    
    console.log(countArr);
    //이메일 보내기 위한 검수
    for(let i = 0; i < reportArr.length; i++) {

    }
    return answer;
}


console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))//[2,1,1,0]
// console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3))//[0,0]