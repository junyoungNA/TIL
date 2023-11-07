// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
    //실패
    let answer = 0;

    for(let i = 0; i < babbling.length; i++) {
        let standWord =[...new Set(babbling[i].split(''))].join('');

        console.log(standWord, '중복제거');
        for(let j = 0; j < babbling.length; j++) {
            if(standWord === babbling[j]) continue;
            const splitArr = babbling[j].split('');
            
            standWord = standWord.replace(babbling[j],'');
            console.log(standWord, '수정');
            if(standWord.length === 0) {
                answer += 1;
                break;
            }
        }
    }
    return answer;
}


console.log(solution(["aya", "yee", "u", "maa"]))//1
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))//2