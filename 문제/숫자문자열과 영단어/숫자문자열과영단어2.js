// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    //와 샷건칠뻔했다..
    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr);
        answer = arr.join(i);
        console.log(answer);
    }

    return Number(answer);
}

console.log(solution("one4seveneight")); //1478
console.log(solution("oneoneonetwotwo")); //11122
console.log(solution("23four5six7")); //234567
// console.log(solution("2three45sixseven")); //234567
// console.log(solution("123")); //123
// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine


// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123