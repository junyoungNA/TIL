// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    const answer = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}

//  arr           divisor   return
console.log(solution([5, 9, 7, 10], 5));	//[5, 10]
console.log(solution([2, 36, 1, 3],	1));    // 	[1, 2, 3, 36]
console.log(solution([3, 2, 6], 10 ));    // 	[-1]




// function divided(arr, divisor) {
//     const answer = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % divisor === 0) {
//             answer.push(arr[i]);
//         }
//     }

//     return answer
// }

// function sort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[i] < arr[j]) {
//                 const temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function solution(arr, divisor) {
//     const diviedArr = divided(arr, divisor);

//     if(diviedArr.length === 0) {
//         return [-1];
//     } else {
//         return sort(diviedArr);
//     }
// }