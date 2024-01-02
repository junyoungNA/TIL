// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const reportArr = [];
    const isReportedUserArr = Array(id_list.length).fill(0);
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
                if((isNaN(isReportedUserArr[findIndex]))) continue;
                isReportedUserArr[findIndex] += 1;
            }
            if(isReportedUserArr[findIndex] >= k) {
                isReportedUserArr[findIndex] = id_list[findIndex];    
                break;
            }
        }
    }

    const  reportedArr = isReportedUserArr.filter((item) => id_list.includes(item) );
    
    console.log(reportedArr);
    //이메일 보내기 위한 검수
    for(let i = 0; i < id_list.length; i++) {
        let j = 0;
        while(reportArr[i].length > 0) {
            const findIndex = reportArr[i].findIndex((item) => reportedArr.includes(item));
                console.log(findIndex,'찾은인덱스');
                if(findIndex !== -1) {
                    answer[i] += 1;
                    reportArr[i].splice(findIndex, 1);
                    console.log('현재i', i, reportArr, answer);

                }
                j += 1;
                if(j > reportArr.length) break;
            }
        }
    return answer;
}


console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))//[2,1,1,0]
// console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3))//[0,0]