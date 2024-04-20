// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++) {
        if(commands[i][0] === commands[i][1]) {
            console.log(array[commands[i][0]]);
            answer.push(array[commands[i][0]]);
        } else {
            // console.log(array.slice(commands[i][0] - 1 < 0 ? 0 :commands[i][0] - 1 , commands[i][1]))
            const copyArr = array
            .slice(commands[i][0] - 1 <= 0 ? 0 : commands[i][0] - 1, commands[i][1])
            .slice()
            .sort();        
            console.log(copyArr,`${i}번째`)    
            console.log(copyArr[commands[i][2]], copyArr, commands[i][2 - 1], `${i}번째`);
            answer.push(copyArr[commands[i][2 - 1]])
            // console.log(answer,`${i}번째`)
        }
    }
    return answer;
}

// array	commands
console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
//[5, 6, 3]