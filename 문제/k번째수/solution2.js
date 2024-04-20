// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++) {
        const copyArr = [...array]
        const firstSlice = commands[i][0] - 1 > 0 ? commands[i][0] - 1 : 0
        const sliceArr = copyArr.slice(firstSlice, commands[i][1]).sort((a, b) => a - b)
        const checkIndex = commands[i][2] - 1 > 0 ? commands[i][2] - 1 : 0
        console.log(copyArr,firstSlice, checkIndex )

        answer.push(sliceArr[checkIndex])
    }
    return answer;
}

// array	commands
// console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
//[5, 6, 3]
console.log(solution([10, 2], [[1, 2, 1]]))
// console.log([1, 2, 3, 5, 10, 3, 4, 5, 6, 7, 8, 9].sort())
// [2]
