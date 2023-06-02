const arr1 = ['apple', 'banana'];

//배열이 가지고 있는 값을 '요소'라고 부름
//배열의 요소는 배열에서 자신의 위치를 나타내는 0이상의 정수인 '인덱스(index)'를 갖는다

//요소의 접급할 때는 대괄호 표기법을 사용한다. 대괄호 내에는 접근하고 싶은 요소의 인덱스를 지정한다.
console.log(arr1[0]); //apple
console.log(arr1[1]); //banana

console.log(arr1.length) 
//2
//배열의 요소의 개수 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다
//이걸 통해 배열은 for문을 통해 순차적으로 요소 접근 가능하다.
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    // apple
    // banana
}

//자바스크립트에 배열이라는 타입은 존재하지 않는다. 배열은 '객체' 타입이다.
console.log(typeof arr1); //object