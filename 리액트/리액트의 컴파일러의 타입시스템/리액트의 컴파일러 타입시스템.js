// 출처: https://junghan92.medium.com/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC%EC%9D%98-%ED%83%80%EC%9E%85-%EC%8B%9C%EC%8A%A4%ED%85%9C-177486489096

// Greeting은 프로퍼티인 user가 변경될 때마다 다시 렌더링 됩니다.
//  리액트는 프로퍼티가 변경되었는지 확인하기 위해 얕은 비교를 사용합니다.

// const Greeting = memo(function Greeting({ user }) {
//     return (
//       <h1>
//         Hello, {user.firstName} {user.lastName}!
//       </h1>
//     );
//   });

// 자바스크립트에서 객체는 얕은 비교를 위해 자신의 동일성(identity)을 유지해야 합니다.
//  그렇기 때문에 메모이제이션(memoization)이 매우 중요할 수 있습니다. 
// 반면 원시값은 동일성과 연관되어 있지 않기 때문에 직접 비교할 수 있습니다.

console.log(Object.is({}, {})); // false
console.log(Object.is(3, 3)); // true


function Price({ items, state }) {
    const subTotal = calculateSubTotal(items);
    const tax = calculateTax(subTotal, state);
    const total = subTotal + tax;
    return <Text text={total} />;
}

// Text 컴포넌트가 불필요하게 다시 렌더링 되는 것을 방지하는 
// 리액트에서 가장 단순한 방법 중 하나는 아래 코드처럼 모든 것을 메모이제이션 하는 것입니다.

// function Price({ items, state }) {
//     const subTotal = useMemo(() => calculateSubTotal(items), [items]);
//     const tax = useMemo(() => calculateTax(subTotal, state), [subTotal, state]);
//     const total = useMemo(() => subTotal + tax, [subTotal, tax]);
//     return <Text text={total} />;
//   }

// 얕은 비교를 위해 원시값을 굳이 기억할 필요는 없습니다. 
// 여기서 메모이제이션 하는 것은 메모리와 번들 크기 측면에서 모두 낭비입니다.
// 이 값이 원시값이라는 것을 리액트 컴파일러에게 알려줄 수 있을까? 
// 리액트 컴파일러는 calculateSubTotal과 calculateTax가 포함된 
// 모든 파일을 컴파일하여 숫자를 반환한다는 것을 이해함으로써 전체 프로그램 분석을 수행할 수 있습니다. 
// 하지만 단일 파일 분석의 성능 향상, 점진적 롤 아웃, 컴파일러 복잡성 감소 같은 좋은 장점이 사라지게 됩니다.

// 자바스크립트 소스코드에서 컴파일러의 
// 중간 표현(Intermediate Representation, IR)으로 초기 변환하는 과정에서, 
// 모든 식별자는 타입을 저장하기 위한 연결된 Type 변수를 얻습니다. 
// Type 변수는 다른 변수와 비슷하지만, 값을 저장하는 대신 타입을 저장합니다.

// type Type = { kind: "type"; id: number } | { kind: "Primitive" };
// { kind: "Type", id: number } represents a type variable
// { kind: "Primitive" } represents a primitive type

// let total; // identifier: { name: 'total', type: { kind: "Type", id: 0 } }
// -------------------------------------------------------


// const subTotal = calculateSubTotal(items);
// subTotal을 정의하는 시점에서는 그 타입을 알 수 없습니다. 
// subTotal 사용법을 살펴본 후에야 이것이 원시값이라는 것을 유추할 수 있습니다

// 하지만 이 타입 추론에서는 타입이 정의까지 돌아갑니다.
// calculateSubTotal 함수의 반환 타입이 subTotal과 같은 타입이어야 한다는 것을 알게 됩니다. 
// calculateSubTotal의 반환 타입이 원시값이어야 한다는 것을 추론할 수 있습니다.

// 이것을 통해 구현을 보지 않고도 별도의 컴파일 단위에 존재하는 함수의 반환 타입을 추론할 수 있었습니다.
// 타입 시스템은 종종 이러한 추론을 사용하여 타입이 지정되지 않은 코드베이스에 대한 추론을 빠르게 확장합니다.
// 하지만 만약 추론이 잘못되면 예기치 않은 “원격 작용(action-at-a-distance)” 동작이 발생합니다. 
// 이것이 Flow가 더 나은 에러를 위해 타입 명시를 늘리는 대신 로컬 타입 추론으로 전환한 이유입니다.

// 프로퍼티를 메모이제이션 하지 마세요!
// 컴파일러는 모든 값이 원시값임을 추론할 수 있습니다. 컴파일러는 Price 컴포넌트에서 total, 
// subTotal 그리고 tax를 메모이제이션 할 필요가 없으므로 번들 크기와 메모리를 절약할 수 있습니다!

// function Price(t0) {
//     const $ = useMemoCache(2);
//     const { items, state } = t0;
//     const subTotal = calculateSubTotal(items);
//     const tax = calculateTax(subTotal, state);
//     const total = subTotal + tax;
//     let t1;
  
//     if ($[0] !== total) {
//       t1 = <Text text={total} />;
//       $[0] = total;
//       $[1] = t1;
//     } else {
//       t1 = $[1];
//     }
//     return t1;
//   }

//밑에는 하지말라는 이유?
// | const [state, setState] = useState({ foo: { bar: {} } });
// 2 | const foo = state.foo;
// > 3 | foo.bar = 1;
//   | ^^^ InvalidReact: Mutating a value returned from 'useState()',
//         which should not be mutated. Use the setter function to
//         update instead.

// foo.bar를 수정할 때 발생 
// foo 변수는 여전히 이전에 메모이제이션된 state.foo의 참조를 유지하고 있으므로,
//  foo.bar를 수정하는 것은 사실 state.foo.bar를 직접 수정하는 것과 같다. 
//  이는 리액트에서 상태를 직접 수정하는 것으로.
// 상태를 직접 변경하는 것은 옳지않으며, setState 함수를 사용하여 상태를 변경해야 하며, 
// 메모이제이션된 변수를 사용하여 상태를 변경하지 않아야 합니다. 
//  메모이제이션된 변수를 사용하면 상태의 불변성을 유지하기 어려워지므로, 
