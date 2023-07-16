// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
    let answer = 0
    let stack = []
    ingredient.forEach((inner)=>{
        console.log(inner, 'inner')
        stack.push(inner)
        const sLength = stack.length
        if(stack[sLength-4] === 1 && stack[sLength-3] === 2 &&  stack[sLength-2] === 3 && stack[sLength-1] === 1){
            console.log(stack, '들어옴');
            for(let i=0;i<4;i++){
                stack.pop()
            }
            answer++
        } 
    })
    return answer
}
  console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2;
//   console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0;
