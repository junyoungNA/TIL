// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// //정렬 함수 sort
// function sortArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // 두 요소를 교환
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//큰수 정렬
function customSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

//배열에서 제시한 숫자만큼 요소를 짤라 2중배열 나머지는 버림
function createNestedArray(array, count) {
  const nestedArray = [];
  while (array.length > 0) {
    nestedArray.push(array.splice(0, count));
    if(array.length - count < 0) break;
  }
  return nestedArray;
}

//Math.min 함수
function customMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  } 
  return min;
}


function solution(k, m, score) {
    let answer = 0;
    // 최저 점수 사과 * m(한상제 들어가는 사과갯수) * 상자의 개수 
    const nestArray = createNestedArray(customSort(score), m);
    for(let i = 0; i < nestArray.length; i++) {
      answer += customMin(nestArray[i]) * m;
    } 
    return answer;
}


// console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1])) //8
console.log(solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])) //33