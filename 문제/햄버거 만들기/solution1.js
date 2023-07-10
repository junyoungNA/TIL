// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let answer = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient[i] === 1) {
      let foo = 2;
      let plus = 1;
      while (foo <= 4) {
        if (foo === 4 && ingredient[i + plus] === 1) {
          answer += 1;
          ingredient.splice(i, 4);
          i = 0;
          console.log(ingredient, "짤린배열");
          break;
        }
        if (ingredient[i + plus] !== foo) break;
        foo += 1;
        plus += 1;
      }
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2;
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0;
