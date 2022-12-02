

// // function add(x, y) {
// //     //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// //     //즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
// //     console.log(x, y) // 2 5
// //     return x + y
// // }

// // add(2, 5);
// // //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// // console.log(x, y); //ReferenceError: x is not defined



const x = 'global'; //전역 변수 x

function foo() {
    const x ='local'; //지역 변수 x
    console.log(x); // 1번
    //"local"출력
}

foo() //foo함수를 호출
console.log(x); // 2번
//"global" 출력

//자바스크립트는 두 개의 같이 이름은 가진 변수 중에서 어떤 변수를 참조할 것인지를 결정하는데
//이를 식별자 결정이라한다.
//스코프란 자바스크립트 엔진이 식별자를 검색할때 사용하는 규칙!이라고 할 수 있다.


// var i = 10;

// //for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// for(var i = 0; i < 5; i++) {
//     console.log(i); // 0 1 2 3 4
// }
// //의도치 않게 변수의 값이 변경되었다
// console.log(i)//5


// // //렉시컬 스코프
// var x = 1;
// function foo() {
//     var x = 10;
//     bar();
// }

// function bar() {
//     console.log(x);
// }
// foo(); // 1
// bar(); //1