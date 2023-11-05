// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
    let answer = 1;
    const words = babbling.join('');
    console.log(words);
    for(let i = 0; i < babbling.length; i++) {
        let makeWord = babbling[i];
        console.log(makeWord,'시작')
        while(makeWord.length !== 0) {
            const findWordIdx = words.indexOf(babbling[i]);
            console.log(findWordIdx,'찾음?', babbling[i]);
            console.log(makeWord.slice(0,babbling[i].length));
            console.log(makeWord,'수정뒤');
            if(findWordIdx === -1) break;
        }
    }
    return answer;
}




console.log(solution(["aya", "yee", "u", "maa"]))//1
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))//2