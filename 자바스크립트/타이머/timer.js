
//1초 후 타이머가 만료되며 콜백함수가 호출 hi를 출력
//생성된 타이머를 식별할 수 있는 id를 반환
//id 브라우저 환경인 경우 숫자, Node.js 화경인 경우 객체
// const id = setTimeout(() => console.log('hi'), 1000);
// // console.log(id , 'id');



// //seTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소
// //타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않음!
// clearTimeout(id);


let count = 1; //setInterval함수를 끝내기 위한 변수

//2초 단위로 계속해서 반복동작
const timerId = setInterval(() => {console.log('hi'); 
if(count++ ===3) clearInterval(timerId)},//count 증가시키면서 3에 도달하면 setInterval함수 제거
2000)




