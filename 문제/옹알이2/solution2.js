// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
    let answer = 0;

    for(let i = 0; i < babbling.length; i++) {
        let curWordArr = babbling[i].split('');
        for(let j = 0; j < babbling.length; j++) {
            const splitArr = babbling[j].split('');
            if(i === j) continue;
            console.log(curWordArr,'기준',babbling[j],'현재')
            const findWordArr = splitArr.filter((item) => curWordArr.indexOf(item) !== -1);
            console.log(findWordArr,'찾음');
            if(findWordArr.length > 0 ) curWordArr = curWordArr.filter((item) => !splitArr.includes(item) )
            if(curWordArr.length === 0) {
                console.log(curWordArr,'수정');
                answer += 1;
                console.log(curWordArr,'수정', answer);
                break;
            }
        }
    }
    return answer;
}




// console.log(solution(["aya", "yee", "u", "maa"]))//1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))//2