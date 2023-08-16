//에스터리스크(*) function 키워드와 함수 이름 사이라면 어디든지 상관없다고 한다.
//하지만 일관성을 위해 function 키워드 바로 뒤에 붙이는 것을 권장!

//제네레이터 함수 선언문 
// function* getDecFunc() {
//     yield 1;
// }

// //제네레이터 함수 표현식
// const getExpFunc = function * () {
//     yield 1;
// }

// //제네레이터 메서드
// const obj = {
//     * genObjMethod() {
//         yield 1;
//     }
// }

// //제네레이터 클래스 메서드
// class MyClass {
//     *genClsMethod() {
//         yield 1;
//     }
// }

const async = generatorFun => {
    console.log(generatorFun);
    //인자 콜백 함수로 전달!
        const generator = generatorFun() // 2번

        const onResolved = arg => {
            const result = generator.next(arg); // 5번 next메소드로 실행

            return result.done
             ? result.value // 9번
            : result.value.then(res => onResolved(res)) //7번 onResolved 재귀호출함!
        }
}

(async(function* fetchTodo() { //1번
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = yield fetch(url) //6번
    const todo = yield response.json(); //8번
    console.log(todo);
})()); //4번 fetchTodo()실행!



async function fetchTodo () {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url) 
    const todo = await response.json(); 
    console.log(todo);
}