//object에서 자료 뽑을때 일어나는 일

//prototype 을 쓰면 부모 object가 자식 object에게 데이터를 물려줄 수 있음
//클래스 문법
// 부모;
// function 기계() {
//     // 생성자 함수
//     // this를 이용해서 어떤한 값들을 설정해주고있고 있음!
//     // console.log(this.getNangjango);
//     this.name = "냉장고";
//     this.nangjango = "김치냉장고";
//     this.getNangjango = function () {
//     console.log(this.name);
//       // console.log(this.nangjango);
//       // console.log(this.juzzel);
//     };
//     // console.log(this);
// }
//   // 기계();
//   console.log(기계); //애도 function임 다만 안에서 사용되는
  //모던 자바스크립트 265페이지 prototype내부 슬롯에는 직접 접근할 수없지만,
  //접근자 프로퍼티를 통해 자신의 프로토타입, 즉 자신의 내부 슬롯이 가리키는 프로토타입에
  //간접적으로 접근할 수 있다.
  //프로토타입은 자신의 constructor프로퍼티를 통해 생성자 함수에 접근할 수 있고,
  //생성자 함수는 자신의 prototype프로퍼티를 통해 프로토타입에 접근 할 수 있다.
  //변수들은 다른형태로 저정되어있음 this.키워드를 이용해서 기계라는 함수자체와 연결되어있는것임

class Person {
    constructor() {
        this.name='name'
    }
    hi() {
        console.log('hi');
    }
}
const foo = new Person();
console.dir(foo);

  // function 기계() {
  //   //함수이고  그안에 지역변수들이 들어가있음
  //   const name = "냉장고";
  //   const nangjango = "어쩔냉장고";
  //   console.log(this);
  // }
  // console.log(기계); //Function : 기계
  // // 기계();
  // 기계.prototype.nangjango = "저쩔냉장고";
  // 기계.prototype.juzzel = "저쩔냉장고";
  // // console.log(기계());
  // console.log(기계.aa); //undefined
  // //호이스팅에 문제일까요?
  // // //  // 자식
//   const 저쩔냉장고 = new 기계(); //인스턴스
//   console.log(저쩔냉장고.getNangjango());
  
  // console.log(저쩔냉장고.juzzel);
  // const juzzel = 저쩔냉장고.juzzel;
  // console.log(juzzel);
  
  // console.log(저쩔냉장고.nangjango);
  // console.log(저쩔냉장고.nangjango);

// const Person = name => {
//     this.name = name;
// }

//화살표 함수는 prototype 프로퍼티를 소유하지 않는다.
// console.log(Person.hasOwnProperty('prototype')); //false

// console.log(Person.constructor);//생성자 함수는 존재!
// console.log(Person.prototype);//undefined
// //화살표 함수는 프로토타입을 가지지 않는다?


// function Person(name) {
//     this.name = name;
// }
// console.log(Person.constructor);//function
// console.log(Person.prototype);//{}  object 객체 prototype  존재확인!

// const me = new Person('Lee');
// //me객체의 생성자 함수는 Person이다.
// console.log(me.constructor === Person); //true
// console.log(me.constructor); //Person부모를 가리키고
// console.log(Person.constructor); //함수자체를 자기자신?

// // const obj = new Object();
// const obj = {}

// //함수 리터럴
// // const add = new Function('a', 'b', 'return a + b');
// const add = function (a, b) {return a + b};

// //배열 리터럴
// // const arr = new Array(1,2,3);
// const arr = [1, 2, 3];


// obj객체는 Object생성자 함수로 생성한 객체가 아니라 객체 리터럴에 의해 생성된 객체다.
// obj객체는 object생성자 함수와 constructor 프로퍼티로 연결되어 있다.

// console.log(obj.constructor === Object); //true

// Object생성자 함수에 인수를 전달하지 않거나 undefined 또는 null을 인수로 전달하면서 
// 호출하면 내부적으로 추상 연산를 호출하여 Object.prototype을 프로토타입으로 갖는 빈 객체를 생성한다.

// let obj = new Object();
// console.log(obj) // {}

// class Foo extends Object {}
// console.log(new Foo()); //Foo{}

// obj = new Object(123);
// console.log(obj); //Number 123 //넘버 타입객체로 설정된다!


// obj = new Object("123");
// console.log(obj); //String 123

// console.log(foo.prototype); //{}
// console.log(foo.constructor); //Function
// function foo() {}
// console.log(foo.constructor === Function); //true
//프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다.!
//리터럴 표기법에 의해 생성된 객체는 생성자 함수에 의해 생성된 객체는 아니다
//하지만 리터럴 표기법으로 생성한 객체는 생성자 함수로 생성한 객체와 본질적인 면세어 큰차이는 없다.
//생성 과정과 클로저 등의 차이가 있지만 결국 함수로서 동일한 특성을 갖는다.
//생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에
//프로토 타입도 더불어 생성된다.


//생성된 프로토타입은 오직 constructor 프로퍼티만을 갖는 객체다. 
//프로토타입도 객체이고 모든 객체는 프로토타입을 가지므로 자신의 프로토타입을 갖는다.

//전역객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진의 의해 생성되는 특수한 객체다
//저역객체는 클라이언트 사이드 환경에서는 window 
//서버사이드 환경에서는 global 객체를 의미

//객체가 생성되기 이전에 생성자 함수와 프로토 타입은 이미 객체화되어 존재한다.


//객체리터럴과 object 생성자 함수에 의한 객체 생성 방식의 차이는 프로퍼티를 추가하는 방식에 있다.
//객체 리터럴 방식은 객체 리터럴 내부에 프로퍼티를 추가하지만 object 생성자 함수 방식은 일단 빈 객체를 
//생성한 이후 프로퍼티를 추가해야 한다.


//자바스크립트는 객체의 프로퍼티(메서드 포함) 에 접근하려고 할때 해당 객체에 접근하려는 프로퍼티가
//없다면 프로토타입 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 
//순차적으로 검색한다. 이를 포로토타입 체인이라 한다.
//프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을
//구현하는 매커니즘이다!!

// function Person(name) {
//     this.name = name;
// }

// //프로토타입 메서드
// Person.prototype.sayHello = function () {
//     console.log(`my name is ${this.name}`);
// }
// const me = new Person('lee');

// //hasOwnProperty는 Object.prototype의 메서드이다
// //me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
// console.log(me.hasOwnProperty('name')); // true/
// me.sayHello(); //me의 this.name = 'lee'이다
//프로토 타입의 최상위에 위치하는 객체는 언제나 Object.prototype이며
//모든 객체는 Object.prototype을 상속받는다.
//Object.prototype을 프로토타입 체인의 종점(end of prototype chain)이라 한다.

// console.log(me.foo); //undefined
//자바스크립트 엔진은 프로토타입 체인을 따라 프로퍼티/메서드를 검색한다.
//객체간의 상속 관계로 이루어진 프로토타입의 계층적인 구조에서 객체의 프로퍼티를 검색!
//프로토타입 체인은 상속과 프로퍼티 검색을 위한 매커니즘이라고 할 수 있다.

//프로퍼티가 아닌 식별자(원시값?)는 스코프 체인에서 검색한다!
//스코프의 계층적 구조에서 식별자를 검색한다. 스코프 체인은 식별자 검색을 위한 매커니즘이라고 할 수 있다!

//스코프체인과 프로토 타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 협력하여
//프로퍼티를 검색하는데 사용된다!

// let name = 'ZOON'

// function changeName () {
//     name = '준영';
//     console.log(name);
// }
// changeName();

//오버라이딩이란 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식!
//오버로딩이란 함수의 이름을 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고
//매개변수에 의해 메서드를 구별하여 호출하는 방식이다. 


// //정적 프로퍼티 /메서드
// function Person(name) {
//     this.name = name;
//     this.say  = function () {
//         console.log(name);
//     }
// }
// // console.log(Person.say);//undefinded

// //프로토타입 메서드
// Person.prototype.sayHello = function () {
//     console.log(`hi my name ${this.name}`);
// }

// //정적프로퍼티
// Person.staticProp = 'static prop';

// //정적 메서드 
// Person.static = function () {
//     console.log('staticMethod');
// }

// const you = new Person('Lee')
// //생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
// Person.static(); //staticMethod

//정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출 할 수 없다.
//인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야한다.
// you.static();//TypeError: you.staticMethod is not a function