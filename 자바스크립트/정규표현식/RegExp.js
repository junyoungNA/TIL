// // const target = 'Is this all time there is?'

// // //플래그 i => 대소문자를 구별하지 않고 검색
// // const regExp = /is/i

// // //매칭결과를 불리언 값으로 반환
// // console.log(regExp.test(target)); //true

// // const target2 = 'Is this all time there is?'
// // //생성자 함수로 객체 생성
// // const regExp2 = new RegExp(/is/i)
// // console.log(regExp.test(target)); //true
// // const regExp2 = /is/i


//

// //is문자열을 대소문자를 구별하여 한 번만 검색한다.
// console.log(target3.match(/is/)); 
// // [
// //     'is',
// //     index: 5,
// //     input: 'Is this all time there is?',
// //     groups: undefined
// //   ]

// //is문자열을 대소문자를 구별하지 않고 한 번만 검색한다
// console.log(target3.match(/is/i)); 
// // [
// //     'Is',
// //     index: 0,
// //     input: 'Is this all time there is?',
// //     groups: undefined
// //   ]
// //is문자열을 대소문자를 구별하여 전역 검색한다
// console.log(target3.match(/is/g)); 
// // [ 'is', 'is' ]
// //is문자열을 대소문자를 구별하지 않고 전역 검색한다
// console.log(target3.match(/is/ig)); 
// // [ 'Is', 'is', 'is' ]

// const target3 = 'Is this all time there is?';
// //문자의 내용의 상관없이 3자리 문자열과 매치한다.
// const regExp = /.../g
// console.log(target3.match(regExp));
// // ['Is ', 'thi','s a', 'll ','tim', 'e t','her', 'e i']

// //{n}은 패턴이 n번 반복되는 문자열을 의미, {n} 은 {n,n}과 같다
// const target4 = 'A AA B BB Aa Bb AAA';
// //'A'기 최소 1번  최대2번 반복되는 믄지열을 전역 검색한다.
// const regExp2 = /A{1,2}/g;
// // console.log(target4.match(regExp2)); //[ 'A', 'AA', 'A', 'AA', 'A' ]

// // //A가 최소 2번이상 반복되는 문자열을 전역 검색한다.
// // const regExp3 = /A{2,}/g;
// // console.log(target4.match(regExp3)); //[ 'AA', 'AAA' ]

// // //+는 최소 한번 이상 반복되는 문자열을 의미한다. +는 {1,} 과 같다.

// // //'A'가 최소 한 번 이상 반복되는 문자열 ('A, 'AA', 'AAA', ...)을 전역 검색
// // const regExp4 = /A+/g;
// // console.log(target4.match(regExp4)); //[ 'A', 'AA', 'A', 'AAA' ]


// // //?는 패턴이 최대 한번 이상 반복되는 문자열을 의미한다. ? {0,1} 과 같다.
// // const target5 = 'color colour';
// // //'colo' 다음 'u'가 최대 한번 이상 반복 되는 'r'이 이어지는
// // //문자열 'color', 'colour'를 전역 검색한다.
// // const regExp5 = /colou?r/g;
// // console.log(target5.match(regExp5)); //[ 'color', 'colour' ]

// // // |은 or의 의미를 갖는다. 'A'또는 'B'의 의미
// // const regExp6 = /A|B/g;

// // console.log(target4.match(regExp6)); 
// // //[
// // //     'A', 'A', 'A', 'B',
// // //     'B', 'B', 'A', 'B',
// // //     'A', 'A', 'A'
// // //   ]

// const target = 'A AA B BB Aa Bb AAA';
// //분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용한다.
// //'A' 또는 'B'가 한번 이상 반복되는 문자열을 전역 검색한다.
// //'A', 'AA', 'AAA', 또는 'B', BB','BBB'
// const regExp = /A+|B/g;
// console.log(target.match(regExp)); 
// // [
// //     'A', 'AA',  'B',
// //     'B', 'B',   'A',
// //     'B', 'AAA'
// //   ]

// //[]내의 문자로 or로 동작한다. 그 뒤에 +를 붙이면 앞선패턴을 한번 이상 반복한다.
// //'A' 또는 'B'가 한번 이상 반복되는 문자열을 전역 검색한다.
// const regExp2 = /[AB]+/g;
// console.log(target.match(regExp2));
// // [
// //     'A',   'AA',
// //     'B',   'BB',
// //     'A',   'B',
// //     'AAA'
// //   ]

// //범위를 지정하려면 []내에 -를 사용한다.
// // 'A' ~ 'Z' 가 한번 이상 반복되는 문자열을 문자열을 전역 검색한다.
// const regExp3 = /[A-Z]/g
// console.log(target.match(regExp3));
// // [
// //     'A', 'A', 'A', 'B',
// //     'B', 'B', 'A', 'B',
// //     'A', 'A', 'A'
// //   ]

// //'A' ~ 'Z'또는 'a' ~ 'z' 가 한번 이상 반복되는 문자열을 전역 검색한다.
// const regExp4 = /[A-Za-z]+/g
// console.log(target.match(regExp4));
// // [
//     'A',   'AA',
//     'B',   'BB',
//     'Aa',  'Bb',
//     'AAA'
//   ]

// const target2 = 'AA BB 12,345';
// //'0' - '9' 가 한 번 이상 반복되는 문자열을 전역 검색한다.
// const regExp5 =/[0-9]+/g;

// console.log(target2.match(regExp5)); //[ '12', '345' ]

// // \d 는 숫자를 의미한다. \d는 [0-9] 와 같다. \D 는 \d 와 반대로 동작한다.
// // \D는 문자열을 의미한다
// let regExp6 = /[\d,]+/g;
// console.log(target2.match(regExp6)); //[ '12,345' ]
// regExp6 = /[\D,]+/g;
// console.log(target2.match(regExp6)); //[ 'AA BB ', ',' ]


// \w 알파벳 숫자, 언더스코어를 의미한다. \w는 [A-Za-z0-9_]와 같다 
// \W 는 \w와 반대로 동작한다. \W는알파벳, 숫자, 언더스코어가 아닌 문자를 의미한다

// //알파벳, 숫자, 언더스코어, ',' 가 한번 이상 반복되는 문자열을 전역 검색한다.
// let regExp = /[\w,]+/g;
// console.log(target.match(regExp)); //[ 'Aa', 'Bb', '12,345', '_' ]
// regExp =  /[\W,]+/g;
// console.log(target.match(regExp)); //[ ' ', ' ', ',', ' ', '$%&' ]

// // [] 내에서 ^은 not의 의미를 갖는다. [^0-9]는 숫자를 제외한 문자를 의미한다.
// //[^0-9]는 \D 와 같고 \W는 [^A-Za-z0-9_] 와 같다.
// regExp = /[/^0-9]+/g;
// console.log(target.match(regExp)); //[ '12', '345' ]

// //[] 밖에서 ^은 문자열의 시작을 의미한다.
// const target2 = 'https://poiemaweb.com';
// regExp = /^https/;
// console.log(regExp.test(target2)); //true
// //'com'으로 끝나는지 검사한다.
// regExp = /com$/;
// console.log(regExp.test(target2)); //true

let target = 'https://poiemaweb.com';
//[] 바깥의 ^은 문자열의 시작을 의미하고, ?앞선 패턴이 최대 한번 이상 포함되는지 확인한다.
console.log(/^https:?\/\//.test(target));//true

//특정 단어로 끝나는지 검사
target = 'index.html';
//html로 끝나는지 검사
console.log(/html$/.test(target));//true

//숫자로 이루어진 문자열인지 검사
target = '12345'
//[]바깥의 ^은 문자열의 시작을 $은 문자열의 마지막을 의미한다.
//\d는 숫자를 의미, +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열 의미
console.log(/^\d+$/.test(target));//true

//하나 이상의 공백으로 시작하는 검사
//\s 는 여러가지 공백 문자 (스페이스, 탭)을 의미, [\t\r\n\v\f] 와 같은 의미다.
target = '      hi';
console.log(/^[\s]+/.test(target));//true

//아이디로 사용 가능여부
//알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사
//{4,10} 앞선 패턴이 최소 4번, 최대 10번 반복되는 문자열 의미
target = 'abc123';
console.log(/^[A-Za-z0-9]{4,10}$/.test(target));//true


//메일 주소 형식 검사
target = 'qwer@naver.com';
console.log(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(target));//true

//핸드폰 번호 형식 검사
target = '010-1234-5678';
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(target)); //true

//특수 문자 검사
target = 'abc#123';
console.log(/[^A-Za-z0-9]/gi.test(target)); //true
//특수 문자 제거
console.log(target.replace(/[^A-Za-z0-9]/gi,'')); //abc123


