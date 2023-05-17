// https://school.programmers.co.kr/learn/courses/30/lessons/81301
//답봄 
//나중에 또풀어보기
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
        console.log(arr.join(''));
        console.log(answer.split(numbers[i]));
    }

    return Number(answer);
}

// s	result
console.log(solution("one4seveneight"));	//1478
// console.log("23four5six7")	234567
// console.log("2three45sixseven")	234567
//  console.log("123")	123