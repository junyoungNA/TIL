// // var x = 1;
// // var y  =1;

// // //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용
// // //초기화 문이 있는 변수 선언문은 자바스크립트 엔진의 의해 var 키워가 없는 것처럼 동작한다.
// // var x = 100;
// // //초기화문이 없는 변수 선언문은 무시된다.
// // var y;

// // console.log(x); //100
// // console.log(y) // 1



// // //이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다(1. 선언 단계)
// // //변수 foo는 undefined로 초기된다(2. 초기화 단계)
// // console.log(foo) //undefined

// // //변수에 값을할당 (3. 할당 단계)
// // foo = 123;

// // console.log(foo) //123
// // //변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
// // var foo;

// // var foo = 123;
// // //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용
// // //아래 변수 선언문은 자바스크립트 엔진의 의해 var 키워드가 없는 것처럼 동작
// // var foo = 456;

// // let bar = 123;
// // //let이나 const키워드로 선언한 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// // let bar = 456; //SyntaxError: Identifier 'bar' has already been declared



let foo = 1; //전역 변수

{
    //이경우 변수 호이스팅이 발생하지 않는다면 전역변수 foo의 값을 출력해야한다!.
    //하지만 변수 호이스팅으로 인해 참조에러가 발생!
    console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
    let foo = 2; //지역 변수
    let bar = 3; //지역 변수
}

console.log(foo); //1
// console.log(bar) //ReferenceError: bar is not defined


// // var x = 1;

// // function foo() {
// //     var x = 10;
// //     bar();
// // }

// // function bar() {    
// //     console.log(x);
// // }

// // foo(); //1
// // bar(); //1



// console.log(bar); //ReferenceError: Cannot access 'bar' before initialization
// let bar;

// //var 키워드로 선언한 변수는 런타임 이전에 선언단계와 초기화 단계가 실행된다.
// //따라서 변수 선언문 이전에 변수를 참조할 수 있다.
// console.log(foo) //undefined

// var foo;
// console.log(foo); //undefined

// foo = 1; //할당문에서 할당 단계가 실행된다.
// console.log(foo) // 1


// //런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// //초기화 이전에 일시적 사각지대에서는 변수를 참조할 수 없다.
// console.log(foo);

// let foo; //변수 선언문에서 초기화 단계가 실행된다.
// console.log(foo) //undefined

// foo = 1; //할당문에서 할당 단계가 실행된다.
// console.log(foo); // 



// let foo = 1; //전역 변수

// {
//     console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//     let foo = 2; //지역 변수
// }


// const foo; //SyntaxError: Identifier 'foo' has already been declared
//const 키워드는 할당과 선언을 동시에 해야함!

// {      
    //const키워드도 변수 호이스팅이 발생한다!
//     //console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
//     const foo = 1;
//     console.log(foo);//1
// }
// //블록 레벨 스코프를 갖는다.
// console.log(foo) //ReferenceError: foo is not defined


const person = {
    name : 'Lee'
}
//객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다
person.name = 'kim';
console.log(person); // {name : "kim"}
