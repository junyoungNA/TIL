// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function decimalToBinary(decimal, digit) {
  if (decimal === 0) {
    return "0".padStart(digit, "0");
  }

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary.padStart(digit, "0");
}

function solution(n, arr1, arr2) {
    // const concantArr = [arr1, arr2];
    const answer = [];

    for(let i = 0 ; i < n; i++) {
        let result = '';
        for(let j = 0; j < arr1.length; j ++) {
          const foo1 = decimalToBinary(arr1[i], n);
          const foo2 = decimalToBinary(arr2[i], n);
            if(foo1[j] === '0' &&  foo1[j] === foo2[j]) {    
                result += ' ';
                continue;
            }
            result +='#';
        }
        answer.push(result);
    }
    return answer;
}


console.log(solution(5,[9, 20, 28, 18, 11], [30, 1, 21, 17, 28])) 
// console.log(solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10])) 
// ["#####","# # #", "### #", "# ##", "#####"]
