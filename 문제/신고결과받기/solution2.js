// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const reportedArr = [];
    const reportedCount = Array(id_list.length).fill(0);
    const answer =  Array(id_list.length).fill(0);
    // report 배열에서 중복 요소 제거
    report = [...new Set(report)];
    report.forEach(element => {
        reportedArr.push( element.split(' '));
    });
    // 신고한 횟수 세기
    for(let i = 0; i < reportedArr.length; i++) {
        if(id_list.includes(reportedArr[i][0])) {
            const findIndex = id_list.findIndex((item) => reportedArr[i][1] === item );
            reportedCount[findIndex] += 1;
            console.log(reportedCount, findIndex, '찾은', id_list[findIndex]);
        } 
        continue;
    }

    for(let i = 0; i < reportedArr.length; i++) {
        const usersReportInfoIDX = id_list.findIndex((item) => item === reportedArr[i][1]);
        if(reportedCount[usersReportInfoIDX] < k) continue;
        const userIDX = id_list.findIndex((item) => item === reportedArr[i][0]);
        console.log(usersReportInfoIDX,userIDX, reportedArr[i][0]);
        if(userIDX === -1) continue;
        answer[userIDX] += 1;
    }
    return answer;
}


// console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))//[2,1,1,0]
console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3))//[0,0]