// console.log(Array.isArray([])); //true
// console.log(Array.isArray("")); //false

// const arr = [1, 2, 3];

// console.log(arr.indexOf(2)); //1
// //인덱스 1번째에 해당 요소가 있음

// console.log(arr.indexOf(10)); //-1 해당요소 없음

// const food = ["apple", "pasta"];

// //해당요소를 포함하는지 검색
// console.log(food.includes("pasta")); //true

// arr.push(3);
// console.log(arr); //[ 1, 2, 3 ]

// const newArr = [...arr, 3, 4];
// console.log(newArr); //[ 1, 2, 3, 3, 4 ]

// const arr = [1, 2];
// arr.pop();
// console.log(arr); //[ 1 ]
// arr.pop();
// console.log(arr.pop()); //undefined

// const arr1 = [1, 3, 2, 5, 4];
const arr1 = ["hello", "world"];

console.log(arr1.map(x => x.split("")).flat());
console.log(arr1.flatMap(x => x.split("")));
//[
// 'h', 'e', 'l', 'l',
// 'o', 'w', 'o', 'r',
// 'l', 'd'
//]

//모든 요소를 조건에 맞는지 확인
// console.log(arr1.every(item => item > 2)); //false
// console.log(arr1.every(item => item > 0)); //false

// const result = arr1.reduce((acc, curr, index, arr) => acc + curr, 0);

// console.log(result); // 15

// const newArr = arr1.map(item => Math.sqrt(item));
// console.log(newArr);
// [1, 1.7320508075688772, 1.4142135623730951, 2.23606797749979, 2 ]

// const str = ["orange", "apple", "banan"];

// //오름차순 //기본 요소가 숫자일때
// console.log(arr1.sort()); //[ 1, 2, 3, 4, 5 ]
// console.log(str.sort()); //[ 'apple', 'banan', 'orange' ]
// //오름차순
// console.log(arr1.sort((a, b) => a - b)); //[ 1, 2, 3, 4, 5 ]
// //내림차순
// console.log(arr1.sort((a, b) => b - a)); //[ 5, 4, 3, 2, 1 ]

// console.log(arr1.flat()); //[ 1, 1, [ 2, [ 3, [Array] ] ] ]
// console.log(arr1.flat(2)); //[ 1, 1, 2, [ 3, [ 4, 5 ] ] ]
// console.log(arr1.flat(Infinity)); //[ 1, 1, 2, 3, 4, 5 ]

// arr1.fill(1);

// console.log(arr1); //[ 1, 1, 1, 1, 1 ]
// arr1.fill(2, 3); //3번째 인덱스부터 2로 채우기
// console.log(arr1); //[ 1, 1, 1, 2, 2 ]
// arr1.fill(3, 1, 2); //첫번째 인덱스부터 2번째 인덱스까지 3으로
// console.log(arr1); //[ 1, 3, 1, 2, 2 ]

// const newArr = arr1.reverse();
// console.log(arr1); //[ 5, 4, 3, 2, 1 ]
// console.log(newArr); //[ 5, 4, 3, 2, 1 ]

// console.log(arr1.join()); //1,2,3,4,5
// console.log(arr1.join(":")); //1:2:3:4:5
// console.log(arr1.join("")); //12345

//2인덱스부터 4인덱스까지 복사
// const copy = arr1.slice(2, 4);
// console.log(copy); //[1]
// const arr2 = [
//   { id: 1, text: "테스트" },
//   { id: 2, text: "배열" },
//   { id: 3, text: "메소드" },
// ];

// console.log(arr2.findIndex(item => item.id === 1)); //0
// console.log(arr2.findIndex(item => item.id === 10)); //-1
// const find = arr2.findIndex(item => item.id === 1);
// console.log(find); //0

// const arr3 = arr2.slice();
// console.log(arr2 == arr3); //false;
// console.log(arr2[0] == arr3[0]); //true; //얕은복사

//원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20,30을 추가한다.
// const newArr = arr1.splice(1, 2, 20, 30);
// console.log(newArr); //[ 2, 3 ]
// console.log(arr1); //[ 1, 20, 30, 4, 5 ]

// const newArr = arr1.concat(arr2);
// console.log(newArr); //[ 1, 2, 3, 4 ]

// const newArr2 = arr1.concat(arr2, 5);
// console.log(newArr2); //[ 1, 2, 3, 4, 5 ]

// console.log(arr.shift()); //1
// console.log(arr); //[ 2 ]

// console.log(arr.unshift(1, 2, 3)); //5
// console.log(arr); //[ 1, 2, 3, 1, 2 ]

// const newArr = [3, ...arr]; //[ 3, 1, 2, 3, 1, 2 ]
// console.log(newArr);
