// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const skipArr = skip.split('');
    const skipAlphabet =  (alphabet.filter(item => !skipArr.includes(item))).join('');
    let answer = '';
    console.log(skipAlphabet);
    for (const element of s) {
        const findIndex = skipAlphabet.indexOf(element);
        const plusIndex = findIndex + index;
        const targetIndex = plusIndex >= skipAlphabet.length ? plusIndex % skipAlphabet.length : plusIndex;
        answer +=  skipAlphabet[targetIndex];
        console.log(plusIndex > skipAlphabet.length, skipAlphabet[targetIndex], targetIndex);
    }
    return answer;
}

// s	skip	index	result
console.log(solution("aukks","wbqd",5)) //happy
console.log(solution("a","bcdefghijk",20)) //happy
