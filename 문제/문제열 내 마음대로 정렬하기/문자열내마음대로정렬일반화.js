// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    console.log(strings[0], strings[1]);
    console.log(strings[0] > strings[1]);

    for(let i = 0; i < strings.length; i++) {
        for(let j = i + 1; j < strings.length; j++) {
            if(strings[i][n] === strings[j][n] && strings[i] > strings[j]){
                strings = changeIndex(strings,i, j);
                // const temp = strings[i]
                // strings[i] = strings[j];
                // strings[j] = temp;
            }
            if(strings[i][n] > strings[j][n]){
                strings = changeIndex(strings,i, j+1);
                // const temp = strings[i]
                // strings[i] = strings[j + 1];
                // strings[j + 1] = temp;
            }
        } 
    }

    return strings;
}

function changeIndex(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}
console.log(solution(['sun','bed','car'], 1)); //[car, bed, sun]
console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]

// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]