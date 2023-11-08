// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript
function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"]
    let answer = 0;

    // 주어진 단어를 하나씩 테스트 해봅니다.
    babbling.map(babyword => {
        let progress = true; //while 문을 종료할 값
        let before = "";

        while (progress) {
            for (let i = 0; i < words.length; i++) {
                // 단어의 맨 앞이 머쓱이가 읽을 수 있는 부분인가?
                if (babyword.indexOf(words[i]) === 0) {
                    console.log(babyword.indexOf(words[i]), words[i],'뭐가나오지?');
                    if (before !== words[i]) {
                         // 읽을 수 있더라도 연속하지는 않는가?
                        before = words[i]; //검사한 단어를 중복체크하기하기위해 before에 대입
                        babyword = babyword.slice(words[i].length);
                        console.log('짤린', babyword);
                        break;
                    } else {
                        progress = false;
                        break;
                    }
                } else {
                    console.log(words[i], babyword,'현재단어');
                    if (i == words.length - 1) {
                        progress = false;
                        break;
                    }
                }
            }
            // 한 차례 판별이 끝난 후, 끝까지 다 읽었다면 발음 가능한 단어의 수(answer) + 1
            if (babyword.length === 0) {
                answer++;
                progress = false;
            }
        }
    })
    return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]))//1
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	))//2