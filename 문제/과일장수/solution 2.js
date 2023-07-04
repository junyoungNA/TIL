// https://school.programmers.co.kr/learn/courses/30/lessons/135808

//답봄
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let arr=[];
  for(let i=0; i<score.length; i+=m) {
      arr.push(score.slice(i, i+m)); 
  }
  for(let j=0; j<arr.length; j++){
      if(arr[j].length ===m){
        answer+= arr[j][m-1]*m; 
      }
  }
  return answer;
}

console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1])) //8
console.log(solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])) //33