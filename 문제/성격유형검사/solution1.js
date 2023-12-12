// https://school.programmers.co.kr/learn/courses/30/lessons/118666

// 지표 번호	성격 유형
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// 선택지	성격 유형 점수
// 매우 비동의	네오형 3점
// 비동의	네오형 2점
// 약간 비동의	네오형 1점
// 모르겠음	어떤 성격 유형도 점수를 얻지 않습니다
// 약간 동의	어피치형 1점
// 동의	어피치형 2점
// 매우 동의	어피치형 3점

function solution(survey, choices) {
    const indicators = ['RT', 'CF', 'JM', 'AN']; //순수 지표
    const choiceSurveyPoint = [];
    const choiceSurvey = [];
    const answer = [0, 0, 0, 0];
    
    for(let i = 0; i < choices.length; i++) {
        // console.log(i,choices[i], '번째');
        
        if(choices[i] > 4) {
            choiceSurvey.push(survey[i][1]);
            // console.log('choices', choices[i],'큼'  )
            choiceSurveyPoint.push(choices[i] - 4);
            continue;
        }
        if(choices[i] < 4) {
            choiceSurvey.push(survey[i][0]);
            // console.log('choices',4 - choices[i],'작음')
            choiceSurveyPoint.push(4 - choices[i]);
        }
    }
    // console.log(choiceSurveyPoint,'point');
    // console.log(choiceSurvey,'choice');

    for(let i = 0; i < choiceSurvey.length; i++) {
        const findIDX = indicators.findIndex((item)=> item.includes(choiceSurvey[i]));
        if(findIDX < 0 || findIDX > indicators.length -1) continue;
        // console.log(answer, choiceSurveyPoint[i], indicators[findIDX],'번째');
        if(indicators[findIDX][0] === choiceSurvey[i] ) {
            // console.log('마이너스',choiceSurveyPoint[i],choiceSurvey[i],indicators[findIDX] );
            answer[findIDX] -= choiceSurveyPoint[i];
        } else {
            // console.log('플러스',choiceSurveyPoint[i],choiceSurvey[i],indicators[findIDX] );
            answer[findIDX] += choiceSurveyPoint[i];
        }
    }
    // console.log('계산후', answer);
    for(let i = 0; i < answer.length; i++) {
        //3보다 크면 긍정 -마이너스가 아니라면 부정 +가드렁감
        answer[i] = answer[i] > 0 ? indicators[i][1] : indicators[i][0];
    }
    return answer.join('');
}
// 1 네오형 N,  1점
// 2  콘형  C, 1점
// 3  무지형 M,  2점
// 4  튜브형 T, 3점
// 5 어치피형 A 1점
console.log(solution(["AN", "CF", "MJ", "RT", "NA"],[5, 3, 2, 7, 5])) //TCMA
// console.log(solution(["TR", "RT", "TR"],[7, 1, 3])) //RCJA