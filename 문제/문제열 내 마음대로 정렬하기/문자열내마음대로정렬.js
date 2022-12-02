// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    console.log(strings[0], strings[1]);
    console.log(strings[0] > strings[1]);

    for(let i = 0; i < strings.length; i++) {
        for(let j = i + 1; j < strings.length; j++) {
            console.log(i, '번째 실행중입니다.');
            if(strings[i][n] === strings[j][n] && strings[i] > strings[j]){
                console.log(strings[i], strings[j]);
                const temp = strings[i]
                strings[i] = strings[j];
                strings[j] = temp;
                console.log('같을때', strings);
                continue;
            }
            if(strings[i][n] > strings[j][n]){
                console.log(strings[i], strings[j + 1]);
                const temp = strings[i]
                strings[i] = strings[j + 1];
                strings[j + 1] = temp;
                console.log('비교가능할때',strings);
            }
        } 
    }

    return strings;
}

console.log(solution(['sun','bed','car'], 1)); //[car, bed, sun]
console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]

// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]