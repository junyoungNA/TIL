// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  const hambuger = [];
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
      if(ingredient[i] === 1) {
        if(ingredient[i - 1] === 3) {
          if(ingredient[i - 2] === 2) {
            if(ingredient[i - 3] === 1) {
              answer += 1;
              ingredient.splice(i, -4);
            }
          }
        }
      }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2;
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0;
