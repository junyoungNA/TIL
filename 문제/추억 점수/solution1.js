// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    const answer = [];
    const score = {};
    for (let i = 0; i < name.length; i++) {
        score[name[i]]= yearning[i];
    }
    const keysOfPerson = Object.keys(score);
    for(let i = 0; i < photo.length; i++) {
        let num = 0;
        for(let j = 0; j < photo[i].length; j++) {
            const findP = keysOfPerson.find((key) => key === photo[i][j]);
            if(findP) num += score[findP];
        }
        answer.push(num);
    }
    return answer;
}

// console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],
// [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]] )) ;
//[19, 15, 6]
console.log(solution(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]));
//[67, 0, 55]

console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may"],["kein", "deny", "may"], ["kon", "coni"]]));
// [5, 15, 0]