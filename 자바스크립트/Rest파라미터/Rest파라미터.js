function foo(...rest) {
    //매개변수 reest는 인수들의 목록을 배열로 전달받는 Rest파라미터다
    console.log(rest);
}

foo(1,2,3,4,5); //[ 1, 2, 3, 4, 5 ]

function foo2(param, ...rest) {
    //일반 매개변수와 Rest파라미터는 함께 사용가능
    //함수에 전달된 인수들은 매개변수 Rest파라미터에 순차적으로 할당된다.
    console.log(param);
    console.log(rest);
}

foo(1,2,3,4,5); //[ 1, 2, 3, 4, 5 ]


//매개변수의 개수를 사전에 알 수 없는 가변인자 함수
function sum() {
    console.log(arguments);
}
 
sum(1,2) //[Arguments] { '0': 1, '1': 2 }