// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const result = [];
    const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    while(true){
        if(Number.isNaN(Number(s[0])) === false) {
            result.push(Number(s[0]));
            s = s.substring(1);
            console.log('숫자문자열',s);
            continue;
        };
        for(let j = 0; j < str.length; j++) {
            if(s.includes(str[j])) {
                const start = s.indexOf(str[j]);
                const end = str[j].length;
                result.push(j);
                console.log("짜르기", s.substring(s.substring(start, end).length));
                s = s.substring(s.substring(start, end).length);
                console.log('문자열', s);
                break;
            }
        }
        if(s.length === 0) {
            break;
        }
    }
    console.log(result);
    return Number(result.join(''));
}

// console.log(solution("one4seveneight")); //1478
// console.log(solution("oneoneonetwotwo")); //11122
// console.log(solution("23four5six7")); //234567
console.log(solution("2three45sixseven")); //234567
console.log(solution("123")); //123
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