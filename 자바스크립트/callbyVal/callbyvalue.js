// // 매개변수와 인자
// function 함수 (매개변수) {}//parameter 함수 선언부에 정의!
// 함수(인자) // 실인자 arguments 함수 호출부 사용
// 변경가능한 값과 변경 불가능한 값에
// 원시 타입의 값 즉 원시 값은 변경 불가능한 값이다.
// 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값이다!
// 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장된다.
// 이에 비해 객체를 변수에 할당하면 변수(확보된 공간)에는 참조값이 저장된다.
//원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다.
// 이를 값에 의한 전달이라 한다.

// 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어
// 전달되며 이를 참조에 의한 전달이라고 부른다
// let num = 1;
// let one = num; //one이라는 변수에 num값을 할당 선언
// one = 2; //one에 값을 2로 바꿈
// one 과 num 은 다른 메모리 공간에 저장된 별개의 값이다!
// console.log(num);
// console.log(one);

// const arr = [1, 2, 3, 4 , 5]; //arr변수에 배열 할당
// const copyArr = arr; //copyArr은 arr을(배열) 할당
// copyArr[1] = 10; //copyArr 의 두번째 값을 10으로 변경
// console.log('arr', arr);
// console.log('copyArr',copyArr);

// // call by value
// 값에 의한 전달이라고 부른다! 중요~!
// // arguments로 값이 넘어온다.
// // 값이 넘어올 때 복사된 값이 넘어온다.
// // caller(호출하는 녀석)가 인자를 복사해서
// //  넘겨줬으므로 callee(호출당한 녀석)에서 
// // 해당 인자를 지지고 볶아도 caller는 영향을 받지 않는다.


// let a = 1; //원시값 number!
// let func = function(a) { // callee
//      a = a + 1;  //인자로 받은 b값을  b + 1 재할당하고 있다 
// }
// func(a) // 1값을 인자로 전달한다. caller
// console.log(a); //1d이 출력 a값은 변하지 않았다.

// //함수안에서는 받은 인자를 즉 a를(1값) b= b+1 기존에있던값 1에 1을 더해서
// // 다시 재할당하고있다

// console.log(a); // 1
// // 하지만 a는 변하지않았다.

// // call by reference
// // arguments로 reference(값에 대한 참조 주소, 메모리 주소를 담고있는 변수)를 넘겨준다.
// // reference를 넘기다 보니 해당 reference가 가리기는 값을 복사하지는 않는다.
// // caller(호출하는 녀석)가 인자를 복사해서 넘기지 않았으므로 
// // callee(호출당한 녀석)에서 해당 인자를 지지고 볶으면 caller는 영향을 받는다

// const b = {}; //b라는 객체(참조값)를 선언!
// const fun = function(b) { // callee
//     b.a = 1; //b안에 있는 a (key)에 값으로 (value) 1을 할당, 생성! (동적생성)
//     // b = {a : 1}
// }
// fun(b); // caller //인자로 b라는 비어있는 객체 참조값을 함수로 전달!
// console.log(b); // {a : 1}



// console.log(b.a); // 1

// // 기본적으로 자바스크립트는 참조 타입을 arguments로 넘겨주면
// //  call by reference의 형태로 작동한다.
// // 따라서 caller가 객체 a를 parameter로 넘겼을 때 
// // 실제 arguments로 넘어오는 값은 객체 a에 대한 reference이지 복사된 객체 a가 아니다.
// // 따라서 callee 내부에서 지지고 볶고 하면 영향을 
// // 받기 때문에 조심해서 사용해야한다.라고들 오해하고 있다



// const b = {};
// const func = function(b) { // callee
//     b = 1;  //재할당하는 부분
// }
// func(b); // caller
// console.log(b); // {}
// // 참조 타입을 넘겼는데 값이 변하지 않았다.
// // 바로 자바스크립트에서는 무조건 call by value로 작동하기 때문이다.
// // = 연산자로 참조값을 재할당하기 때문에 기존에 참조하던 {}에서 1로 참조 대상이 변경되었다.

const a = {};
const func = function(b) {
    b = (b.a=1);
    b.b = 2;
    console.log(b);
}
func(a);
console.log(a)

// 자바스크립트에서 call by reference는 존재하지 않고 call by value만 존재한다.
// 참조 타입을 인자로 넘기면 참조값에 대한 복사본이 넘어간다.
// 이러한 혼동을 줄이고자 call by sharing이란 용어로 부르기도 한다.\\\
//값에 의한 전달이이라는 용어는 자바스크립트를 위한 용어가 아니므로 오해가 있을 수 있다
//엄격하게 표현하면 변수에는 값이 전달되는 것이 아니라 메모리 주소가 전달되기 때문이다.
//이는 변수와 같은 식별자는 값이 아니라 메모리 주소를 기억하고 있기 때문이다.

// function foo() {
//     console.log('전역 함수입니다.');
// }
// function bar() {
//     function foo () {
//         console.log('bar함수 안에있는 foo함수입니다.')
//     }
//     foo();
// }

// bar();
