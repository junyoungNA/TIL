// let numObj = new Number('10');
// console.log(numObj); //[Number: 10]

// numObj = new Number('edqewq');
//  console.log(numObj); //[Number: NaN]

// console.log(Number('0'))// 0
// console.log(Number('10'))// 10
// console.log(Number('-999'))// -999
// console.log(Number('10.32'))// 10.32



// console.log(isFinite(0))//true
// console.log(isFinite(Number.MAX_VALUE))//true
// console.log(isFinite(Number.MIN_VALUE))//true
// console.log(isFinite(Infinity))//false
// console.log(isFinite(-Infinity)) //false


// console.log(Number.isInteger(0))//true
// console.log(Number.isInteger(123))//true
// console.log(Number.isInteger(-123))//true

// //0.5는 정수가 아님
// console.log(Number.isInteger(0.5)) //false
// //암묵적 타입변환하지않음
// console.log(Number.isInteger(false)) //false

// console.log(Number.isNaN(NaN));//true
// //암묵적 타입 변환한다.
// console.log(Number.isNaN(undefined)); //true
// //숫자로 암묵적 타입 변환하지 않는다
// console.log(Number.isNaN(false));


// console.log((12345.6789).toFixed(0));//12346
// //소수점 이하 1 자리수 유효 나머지 반올림
// console.log((12345.6789).toFixed(1));//12345.7
// //소수점 이하 2 자리수 유효 나머지 반올림
// console.log((12345.6789).toFixed(2));//12345.68
// //소수점 이하 3 자리수 유효 나머지 반올림
// console.log((12345.6789).toFixed(3));//12345.679

//10진수
console.log((10).toString());//"10"
//2진수
console.log((16).toString(2)); //"10000"
//8진수
console.log((16).toString(8));//"20"
//16진수
console.log((16).toString(10));//"16"