// https://school.programmers.co.kr/learn/courses/30/lessons/82612


function solution(price, money, count) {
    let answer = price;

    for(let i = 2; i <= count; i++) {
        answer += price * i
    }
    answer = money - answer >= 0 ? 0 : Math.abs(money - answer);
    return answer;
}


console.log(solution(3,20,4)) // 10