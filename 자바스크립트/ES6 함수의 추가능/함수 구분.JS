const foo = function () {
    return 1;
}

//일반적인 함수 호출

console.log(foo()); //1

//생성자 함수로 호출
console.log(new foo()) //foo {}

//메서드로서 호출
const obj = {foo : foo};
console.log(obj.foo()); // 1

//ES6 이전의 함수는 사용 목적에 따라 명확히 구분되지 않는다?
// 일반 함수로서 호출할 수 있으며 생성자 함수로서 호출 가능하다
//ES6 이전의 모든함수는 callable이면서 constructor 이다.


const onj = {
    x: 10,
    f : function () {return this.x}
}
/// 프로퍼티 f에 바인딩된 함수를 메서드로 호출
console.log(obj.f());

//프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
const bar = obj.f
console.log(bar());

//프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f()); //f {}

//콜백함수를 사용하는 고차 함수 map, 콜백함수도 constructor이며 프로토타입을 생성한다.
[1,2,3].map(function(item) {
    console.log(item * 2); //2, 4, 6
});


// ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.
const methodObj = {
    x:1,
    //foo는 메서드
    foo() {return this.x;},
    //bar는 일반함수
    bar : function () {return this.x}
}

new methodObj.foo(); //TypeError: methodObj.foo is not a constructor
new methodObj.bar();

//화살표 함수
//화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다.
//호출방식은 기존함수와 동일하다.
const arrow = (x, y) => { return x + y};

//매개변수 한개인 경우 () 소괄호 생략
const arrow1 = x => { return x };

//함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감사는 중괄호를 생략가능
const arrow2 = x => x * 2;

console.log(arrow2(1)); //2

//함수 몸체의 문이 표현식이 아닌 문이라면 중괄호를 생략할 수 없다.
// const arrow3 = () => const x = 1 //SyntaxError : Unexpected token const
const arrow3 = () => { const x = 1}; //Unreachable code detected.

//객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호로 감싸 주어야 한다.
const create = (id, content) = ({id, content});

const nonArrow = () => {};
console.log(new nonArrow()); //TypeError: nonArrow is not a constructor
//화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 
//프로토타입도 생성하지 않는다.

const fooArrow = (a, a) => a + a; 
//SyntaxError: Duplicate parameter name not allowed in this context

//만약 화살표 함수가 전역 함수라면 화살표 함수의 this는 전역 객체를 가리킨다.
//전역 함수의 상위 스코프는 전역이고 전역에서 this는 전역 객체를 가리킨다.

const allArrow = () => console.log(this);
allArrow(); //window

//프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 
// 함수 중에서 화살표 함수가아닌 함수의 this를 참조한다.

//increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킴
const counter = {
    num : 1,
    increase : () => ++this.num
}

console.log(counter.increase()); //NaN




