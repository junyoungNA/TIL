// //함수는 값이다 => 함수 = > 매개변수 => return

// //    이름      값
// const name = '준영';

// // const 물어보기 = if(true) {}
// // const 반복문돌리기 = for(let i = 0; i < 10; i ++) {}


// //익명함수 //이름이 없는 함수
// // const 함수 = function () {};

// //선언적 함수
// //function 함수2 () {}

// //리터럴은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기 방식!
// //함수는 값이므로 함수 리터럴이라고도 부릅니다!
// function 함수3(매개변수1, 매개변수2) { //함수를 정의하는 부분
        // console.log(arguments);
        // console.log(매개변수1, 매개변수2);
        // return 매개변수1;
// }

// 함수3(1, '이름', false); // < -- 인자  함수를 실행시켜주는 부분, 함수를 호출한다고부름!

// 함수3(1,  '이름', false);

//함수를 호출한 곳에서 매개변수를 보낸만큼! 
//함수가 정의된 곳에서 함수가 호출된 곳에서 준 인자의 갯수만큼
//매개변수가 정의되어있다면! 
//그 매개변수 값들을 사용할 수 있다.!

// //더하기를 하는 함수를 만들어서 이용해보기
// function 더하기공장(첫번째 , 두번째, 세번째) { //매개변수
//     console.log(args);
//     for(let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
//     // console.log(arguments);
//     // console.log(첫번째, 두번째, 세번째);
//     const 결과값 = 첫번째 + 두번째;
//     // console.log(결과값);
//     return 결과값; //리턴값이라고 부릅니다
//     //함수안에서 return 키워드를 만나는 순간!
//     // 그함수를 즉시 종료하고 return 옆에 있는 값을 호출 했던 곳!
//     //즉 실행시켰던 곳으로 돌려줍니다!;
// }

// // const 아무거나 = '에라 모르겠디';
// // console.log(더하기공장(1,2));
// const 공장결과 = 더하기공장(1,2,'아 숫자 극혐');
// console.log('공장결과: ', 공장결과);
// // console.log(더하기공장(1,2,'아 숫자 극혐', false, 1, '아 배고파', 아무거나));

// function 리턴좀봅시다() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i, '번째 실행중이에요!');
//         if(i === 3) {
//             return ;
//         }
//     }
// } 
// const 끝낫나요 = 리턴좀봅시다();
// console.log(끝낫나요);

