function solution(X, Y) {
    //검색으로 찾은 답 신기해서 가져옴!
    //기존 방법에서 filter를 통해 반복 횟수를 줄인 듯?
    //해당 숫자의 length x , y 를 비교해서 더 작은 값을 aswer에 추가
    let answer = ''
    X = X.split("")
    Y = Y.split("")
    // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
    for(let i = 0 ; i < 10 ; i ++) {
        const curX = X.filter(a => Number(a) === i).length
        const curY = Y.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(curX, curY))
    }
    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"
    // 내림차순으로 정렬해 반환하면 최댓값
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}
