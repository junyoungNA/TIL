const arr1 = ["apple", "banana"];

//배열이 가지고 있는 값을 '요소'라고 부름
//배열의 요소는 배열에서 자신의 위치를 나타내는 0이상의 정수인 '인덱스(index)'를 갖는다

//요소의 접급할 때는 대괄호 표기법을 사용한다. 대괄호 내에는 접근하고 싶은 요소의 인덱스를 지정한다.
console.log(arr1[0]); //apple
console.log(arr1[1]); //banana

console.log(arr1.length);
//2
//배열의 요소의 개수 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다
//이걸 통해 배열은 for문을 통해 순차적으로 요소 접근 가능하다.
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  // apple
  // banana
}

//자바스크립트에 배열이라는 타입은 존재하지 않는다.배열은 '객체' 타입이다.
console.log(typeof arr1); //object

//자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이
//연속적으로 나열된 자료구조를 말한다.
//배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다.
//이를 '밀집배열' 이라고 한다.

//배열의 각 요소가 동일한 크기를 가지고 있고,연속적으로 이어져 있어
//단 한번의 연산으로 요소에 접근(임의 접근, 시간복잡도 O(1))할 수 있다.

//정렬되지 않은 배열에서 특정요소를 찾으려면
//배열의 처음부터 특정 요소를 발견할 때까지 차례대로 검색(선형 검색, 시간 복잡도 O(n)) 해야한다.
//배열의 요소를 삽입하거나 삭제할때 요소를 유지시키기 위해 요소를 이동시키거나 삭제시켜야한다.
//이처럼 배열의 요소가 연속적으로 이어여 있지 않는 배열의 '희소 배열'이라고 한다.

//자바스크립트의 배열은 일반적안 배열의 동작을 '흉내 낸 특수한 객체'다
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// {
//   '0': { value: 1, writable: true, enumerable: true, configurable: true },
//   '1': { value: 2, writable: true, enumerable: true, configurable: true },
//   '2': { value: 3, writable: true, enumerable: true, configurable: true },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

//이처럼 자바스크립트의 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며
//length 프로퍼티를 갖는 특수한 객체다.
//자바스크립트 배열의 요소는 프로퍼티 값이다.
//자바스크립트에서 모든 값은 객체의 프로퍼티 값이 될 수 있으며,
//어떤 값이라도 배열의 요소가 될 수 있다.

//일반적안 배열은 인덱스로 빠르게 접근할 수 있다. 하지만 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않음
//자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 접근하는 경우 일반적인 배열보다 성능적인
//면에서 느릴 수 밖에 없는 구조적인 단점이 있다. 하지만 요소를 삽입또는 삭재해야 하는 경우에는
//일반적인 배열보다 빠른성능을 기대할 수 있다.

//length프로퍼티는 요소의 개수 배열의 길이를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([].length); //0
console.log([1, 2, 3].length); //3

const arr2 = [1, 2, 3];
console.log(arr2.length); //3

//요소 추가하면 length프로퍼티의 값이 자동 갱신된다.
arr2.push(4);
console.log(arr2.length); //4

//요소 삭제하면 length프로퍼티 값이 자동 갱신된다.
arr2.pop();
console.log(arr2.length); //3

const arr3 = [1, 2, 3, 4, 5];
arr3.length = 2;

//배열의 길이가 5에서 2으로 줄음
console.log(arr3.length); //2

//현재 length프로퍼티 값보다 큰 숫자 값을 할당하는 경우 length의 프로퍼티 값은 변경 되지만
//실제로 배열의 길이가 늘어나지는 않는다.
const arr4 = [1];
arr4.length = 3;
//length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
//이 경우에는 배열의 값이 들어가지않고 배열의 크기 변경만 시도한 것으로
//값 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않으며
//빈요소를 생성하지도 않는다
console.log(arr4.length); //3
console.log(arr4); //[ 1, <2 empty items> ]
//이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 희소 배열이라고 한다.
// 자바스크립트는 희소 배열을 문법적으로 허용한다.

const spares = [, 2, , 4];

console.log(spares.length); //4
console.log(spares); //[ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(Object.getOwnPropertyDescriptors(spares));
//인덱스가 0, 2 인 요소가 존재하지 않음
// {
//   '1': { value: 2, writable: true, enumerable: true, configurable: true },
//   '3': { value: 4, writable: true, enumerable: true, configurable: true },
//   length: { value: 4, writable: true, enumerable: false, configurable: false }
// }

// /일반적인 배열의 length는 배열의 요소의 개수, 즉 배열의 길이와 언제난 일치한다. 하지만 희소배열은
// length와 배열의 요소의 개수가 일치하지 않는다. 희소배열의 length는 회소 배열의 실제 요소 개수보다 언제나 크다.
// 자바스크립트는 문법적으로 희소배열을 허용하지만 희소 배열은 사용하지 않는 것이 좋다.
// 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.

//배열 리터럴
//0개 이상의 요소를 쉼펴로 구반하여 대괄호로([]) 묶는다.
const arr5 = [1, 2, 3];
//Array생성자 함수
//Array생성자 함수는 전달된 인수에따라 다르게 동작한다.

const arr6 = new Array(10);
console.log(arr6); // <10 empty items> ]
console.log(arr6.length); // 10
//희소배열이 생성, 배열의 요소는 존재하지 않음

//전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
const arr7 = new Array(1, 2, 3);
console.log(arr7); //[ 1, 2, 3 ]

//전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
const arr8 = new Array({});
console.log(arr8); //[ {} ]

//Array생성자 함수는 new연산자와 함께 호출하지 않더라도, 즉 일반 함수로서 호출해도 배열을 생성하는 생성자
//함수로 동작한다, 이는 Array생성자 함수 내부에서 new.target을 확인하기 때문이다.
console.log(Array(1, 2, 3)); // [ 1, 2, 3 ]

//Array.of
// ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다.
// Array.of 는 Array생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
console.log(Array.of(1)); //[ 1 ]
console.log(Array.of(1, 2, 3)); //[ 1, 2, 3 ]
console.log(Array.of("string")); //[ 'string' ]

//Array.from
//ES6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로
//전달받아 배열로 변환하여 반환한다.

console.log(Array.from({ length: 2, 0: "a", 1: "b" })); //[ 'a', 'b' ]
console.log(Array.from("hello")); //[ 'h', 'e', 'l', 'l', 'o' ]
// Array.from 을 사용하여 두번째 인수로 전달한 콜백함수를  통해 값을 먼면서 요소를 채울 수 있다
//Array.from 메서드는 두번째 인수로 전달한 콜백 함수에 첫 번째 인수에 의해 생성된 배열의 요소 값과
//인덱스를 순차적으로 전달하면서 호출하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다.

console.log(Array.from({ length: 3 }, (_, i) => i)); //[ 0, 1, 2 ]

const arr9 = [0];

//배열 요소 추가
arr9[1] = 1;
console.log(arr9); //[ 0, 1 ]

//현재 배열의 length 프로퍼티 겂보다 큰 인덱스로 새로운 요소를 추가하면 희소배열이 된다.
arr9[100] = 100;
console.log(arr9); //[ 0, 1, <98 empty items>, 100 ]

const arr10 = [];
arr10[0] = 1;
arr10["1"] = 2;

//프로퍼티 추가
arr10["foo"] = "3";
arr10.bar = 4;
arr10[1.1] = 5;
arr10[-1] = 6;
console.log(arr10); // [1, 2, foo: '3', bar: 4, '1.1': 5, '-1': 6 ]
console.log(arr10.length); //2

const arr11 = [1, 2, 3];
console.log(arr11.splice(1, 1)); //[2]
console.log(arr11); //[1,3]
