//식별자 -> 함수는 값이다? -> 중괄호 밖에서 안에있는건 접근 불가능! ->  코드는 위에서 아래로 -> 함수의 동작원리 함수이름과 식별자 -> 함수 호이스팅

// const myName = '준영' // 변수를 선언

// console.log(myName); 

// const arr = [1, 2, 3, 4];

// console.log(arr[0]) // 1

// const 변수 = function () {}

// function 선언적함수 () {} 

// //익명함수
// const 함수 = function () { //함수는 값이다! //조건문 반복문 과 달리 함수는 리터럴 함수리터럴이라고부릅니다. 
//     const person = '준영';
//     const result = 1 + 1;
//     console.log(person);
//     return result
// }
// console.log(함수.person);이런식으로는 함수안에 변수에는 접근불가능
//함수 안에 있는 값을 확인할려면 함수를 실행시키므로서 함수가 무엇을 가지고있고
//무슨 동작을 하는지 알 수 있다.
// const 리턴값 = 함수();
// console.log(함수());
// console.log(리턴값);


// 함수 리터럴의 함수의 이름은 오직 함수 몸체 내에서만 참조할 수 있는 식별자이다.
//for문안에서 생성산 변수 i는 밖에서 접근, 즉 참조 할 수 있을까?
// for(let i = 0; i < 3; i++) {
//     // console.log(i);
//     //0
//     //1
//     //2
// }
// console.log(i); //i변수는 선언되지않았습니다!


//익명함수
함수이름2() //함수이름이라는 함수가 정의 되기도 전에 실행시켜보기
const 함수이름 = function () {
    console.log('함수이름 실행되었습니다!');
    return
};

//기명함수 선언적함수
function 함수이름2() { // 함수이름2 정의 되기전에 실행시켜보기
    console.log('함수이름2 실행되었습니다!')
    return
}
//선언적함수를 사용시(이름있는 함수) 에 자바스크립트는 함수의 이름과 똑같이 식별자, 즉 변수를 만들어서
//익명함수가 변수를 만들어서 함수 값을 담아주듯이 만들어줍니다!!


// //함수 이름은 함수 몸체 내부에서만 유효한 식별자입니다.
//코드는 위에서 아래로 흐릅니다!
//그런데 선언적함수가 사용시에 정의되기도 전에 오류가 나지 않았던 이유는!
// 선언적함수를 사용시에 자바스크립트는 위에서 아래라는 흐름을 무시하고 자바스크립트가 강제적으로
//런타임 전!, 즉 코드를 읽고 실행하기도 이전에 선언적함수에서 사용된 함수이름을 가지고 변수를 만들어서
//그 변수에 함수를 담아줍니다!

// let 함수이름2 = function 함수이름2() { //함수이름과 똑같은 변수이름을 가진 변수를 자바스크립트는 강제로 만들어주는 것입니다!
//     return 
// }

//함수이름에 대한 식별자는 자바스크립트가 대신 강제적으로 만들어주는 것입니다.!


// let 함수 = function () {
//     console.log('익명 함수입니다.');
// }

// function 함수 () {
//     console.log('선언적함수'); // 함수 호이스팅
// }


//기명 함수 표현식
// var add = function foo (x, y) {
//     return x + y;
// }

// //함수 객체를 가리키는 식별자로 호출
// console.log(add(2, 5)); //7

// //함수 이름은 호출하면 ReferenceError가 발생한다.
// console.log(foo(2, 5)); //RefernceError : foo is not defined


// //변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다
// let num;
// // 1, 2, 1 + 2 = 1 + 2 는 모두 표현식이다.
// // x = 1 + 2 는 표현식이면서 완전한 문이기도 하다.
// num = 1 + 2; 

// const num = 1 + 2; //표현식인 문은 값으로 평가되므로 변수에 할당 가능
// // const num = let x;  //SyntaxError: Unexpected identifier

// //표현식인 문은 값처럼 사용할 수 있다.
// const foo = x = 100;
// console.log(foo) //100

// console.dir의 경우 전체 요소가 출력된다.


// //함수 참조
// console.dir(add) // f add(x, y);
// console.dir(sub) // undefined

// //함수 호출
// console.log(add(2, 5)) //7
// console.log(sub(2, 5)) //TypeError: sub is not a function

// //함수 선언문
// function add (x, y) {
//     return x - y;
// }

// var sub = function (x, y) {
//     return x - y;
// }