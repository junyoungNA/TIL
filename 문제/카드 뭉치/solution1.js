// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {  
    for(let i = 0; i < cards1.length; i++) {
        
        const findIDX = goal.findIndex((item) =>  item === cards1[i]);
        if(findIDX !== -1) {
            goal.splice(findIDX, 1);
        };
        if(goal.length === 0) return 'Yes';
    }
    for(let i = 0; i < cards2.length; i++) {
        const findIDX = goal.findIndex((item) =>  item === cards2[i]);
        if(findIDX !== -1) {
            goal.splice(findIDX, 1);
        };
        if(goal.length === 0) return 'Yes';
    }
    return 'No';
}

// console.log(solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]));//"Yes"
console.log(solution(["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]));//""No""
// console.log(,); //"No"
// cards1	cards2	goal	result
