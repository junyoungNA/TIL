// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (const element of s) {
        let currentAlphabet = alphabet;
        const findItem = alphabet.indexOf(element);
        currentAlphabet = alphabet.substring(findItem,index).split('');
        console.log(currentAlphabet);
    }
    var answer = '';
    return answer;
}

// s	skip	index	result
console.log(solution("aukks","wbqd",5)) //happy
