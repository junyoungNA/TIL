// const circle1 = {
//     radius : 3,
//     getDiameter() {
//         return 2* this.radius;
//     }
// }

// console.log(circle1.getDiameter()); //6

// const circle2 = {
//     radius : 10,
//     getDiameter() {
//         return 2* this.radius;
//     }
// }

// console.log(circle2.getDiameter()); //20

// const circle1 = new Circle(5) 
// const circle2 = new Circle(10) 

// console.log(circle1.getDiameter()) //10
// console.log(circle2.getDiameter()) //20


function Circle(radius) {
    // 1 암묵적으로 인스턴스가 생성되고 this에 바인딩
    console.log(this) //Circle {}

    // 2. this에 바인딩 되어 있는 인스턴스를 초기화 한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }

    return 100
    //명시적으로 원시 값을 반환하면 원시 값 반환은 무시되며 암묵적으로 this가 반환
}
const newFun =  new Circle(15); 
console.log(newFun); //Circle { radius: 15, getDiameter: [Function (anonymous)] }

// Circle {}

// console.log(nomalFun); //undefined

// //일반 함수로서 호출된 Circle 반환문이 없으므로 암묵적으로 undefined를 반환한다.
// const nomalFun =  Circle(15); 
// //인스턴스 생성


