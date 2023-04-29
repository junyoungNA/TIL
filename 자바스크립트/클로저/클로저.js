//클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.
//자바스크립트는 함수를 어디서 호출했는지가 아니라
//어디서 함수를 정의했는지에 따라 상위 스코프를 결정한다.

const x = 1;

function foo() {
    const x = 10;
    bar();
}

function bar() { 
    //bar는 전역에서 정의돤 함수!
    //x는 전역변수를 가리킨다!
    console.log(x);
}
foo();
bar();
//렉시컬 환경의 외부 렉시켤 환경에 대한 참조에 저장할 참조값,
//즉 상위 스코프에 대한 참조는 함수정의가/
//평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다
//이것을 렉시컬 스코프라고 부른다!

//393페이지
//외부 함수보다 중첩함수가 더 오래 유지되는 경우 중첨함수는 이미 생명주기가 
//종료된 외부함수의 변수를 참조할 수 있다. 
//이러한 중첨 함수룰 클로저라고 부른다.

function makeAdder(x) {
    return function plus(y) {
        return 숫자 + y;
    }
}

const add3 = makeAdder(3);
//mkaeAdder이실행된다면 add3은 plus함수가 된다!;
console.log(add3(2));
//이상황은 plus(2)를 한 상황이다!
//이때 plus가 함수가 정의된 위치를 파악해야 한다!
// plus 내부에는 x라는 값을 이용해 y값과 연산을 시도한다.
//하지만 plus내부에는 x라는 값이 없다!
//그러므로 makeAdder함수의 렉시컬 환경으로 가서(plus함수 입장에서는 외부 렉시컬 환경을 참조)
///x를 찾는다!! x가 있으므로(add3 = makeAdder(3)이므로 x = 3 이된다);
// 3 + 2 가 된다  //5

console.log(add3(2)); 
console.log(add3(2)); 
console.log(add3(2)); 


//함수 객체의 내부 슬롯에 저장된  현재 실행중인 컨텍스트의 렉시컬 환경의 참조가 바로 상위 스코프다.
//또한 자신의 호출 되었을 때 생성된 함수 렉시컬 환경의 외부 렉시컬 환경에 대한 참조에 저장될
// 참조값이다. 함수객체는 내부 슬롯에 저장한 렉시컬 환경의 참조, 즉 상위 
// 스코프를 자신이 존재하는 한 기억이다.


// 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉 하고 
//특정 함수에게게만 상태와 변경을 허용하여 상태를 안전하게 변경하고
//유지하기 위해 사용한다.

// const counter = (function () {
//     let num = 0;
        //num은 이 함수 스코프 안에서만 영항을 받는다.
//     return {
//         increase() {
//             return num ++
//         },
//         decrease() {
//             return num --;
//         }
//     }
// }());

// console.log(counter.increase());// 0
// console.log(counter.increase()); // 1
// console.log(counter.increase()); // 2
// console.log(counter.increase()); // 3
// console.log(counter.decrease()); // 4
// console.log(counter.decrease()); // 3
// console.log(counter.decrease()); /// 2 

