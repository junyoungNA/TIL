// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {  
    while(goal.length !== 0) {
        if(cards1[0] === goal[0]) {
            goal.splice(0,1);
            cards1.splice(0,1);
            continue;
        } 
        if(cards2[0] === goal[0]){
            goal.splice(0,1);
            cards2.splice(0,1);
            continue;
        }
        break;
    }
    return goal.length === 0 ? 'Yes' : 'No';
}

// console.log(solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]));//"Yes"
console.log(solution(["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]));//""No""
// cards1	cards2	goal	result
