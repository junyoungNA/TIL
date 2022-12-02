// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
// localCompare()
// 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴

// / "a"는 "c"의 앞에 오기 때문에 음수 값을 리턴
// 'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

//알파벳 순으로 "check"는 "against"의 뒤에 오기 때문에 양수 값을 리턴
// 'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a"는 "a"와 같기 때문에 0
'a'.localeCompare('a'); // 0
console.log(solution(['sun','bed','car'], 1)); //[car, bed, sun]
console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]

// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]