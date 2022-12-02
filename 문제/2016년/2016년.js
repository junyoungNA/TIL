// https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    let days = b
    for(let i=0 ; i < a-1; i++)
        days += monthDay[i];

    return weekDay[days%7];
}
console.log(solution(5,24)) // "TUE"
