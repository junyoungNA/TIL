// 라이프 사이클은 위 그림과 같이 총 9개가 존재한다.

//  크게 세가지 유형으로 나눌 수 있는데 생성 될때, 업데이트 할 때, 제거할 때이다. 
//  이를 리액트에서는 마운트, 업데이트, 언마운트라고 한다.

// 여기서 마운트는 DOM이 생성되고 웹 브라우저 상에서 나타나는 것을 뜻하고, 반대로 언마운트는 DOM에서 제거되는 것을 뜻한다.

// 주의하여 볼 것은 업데이트 부분인데, 업데이트는 다음과 같은 4가지 상황에서 발생한다.

// props가 바뀔 때
// state가 바뀔 때
// 부모 컴포넌트가 리렌더링 될 때
// this.forceUpdate로 강제로 렌더링을 트리거할 때

//class에서 라이프사이클은
//리액트 돔에서 컴포넌트가 생성되면  getDefaultProps()라는 함수 -> getInitalState()함수
//-> componentWillMount()함수  mount즉 돔이 생성되기전에 처리해야될일 있다면componentWillMount()함수를 통해실행
//-> render()함수가 실행되면 mount가 된다-> mount가 된 후 화면에 보여지게된후 해야 될일은 componentDidmount()

//state업데이트가 되면 shoulComponentUpdate()함수는  render를 호출할 필요가 있냐 없나를 확인 해줌
// componentWillupdate()컴포넌트가 렌더되기전에 해야할 일을 여기서 작성
//render가 되면 그후에 실행시킬 동작을
//componentDidUpdate() 에서 작성


//hooks에서 함수형 라이프사이클
//useEffect 라는 훅은 웹페이지가 처음으로 렌더가 끝낫을때 실행되고
//렌더가 또 실행될때마다 실행됨 componentDidMount & componentDidUpdate 와 같은효과
//업데이트가 될때마다도 useEffect가 실행된다.
//Effect라는 말은 sideEffect가 생략된 말!
//여러개를 사용할 수 있다!


//cleanup이란
//useEffect 안에서 return 값으로 함수로 한번더 주면!
//return 값인 함수는 처음 렌더링된 이후에! 업데이트가 될떼?
//return값에 넣어준 함수가 실행된다. 일종의 정리 정돈이 가능하다!
//useEffct함수에서 실행되는 두번째 인자의 배열타입이 들어가고
//그 배열안에 useEffect에 사용되는 어떠한 값이 들어간다면
//그 useEffect는 그 데이터값이 변할때만! 작동합니다
// useEffect(() => {
    // const number = 10;
//     //         return () => {
//     //             ...
//     //         }
//     //     }, [number]);
//두번째인자 배열이 없다면 componentDidMount와 componentDidUpdate와 똑같다.
//두번째 인자에 배열은 있는데 그 안에 값이 없다면!
//첫번째 1회만 실행만된다. 
//컴포넌트가 사라질때 useEffect안에있는 retrun값이 함수인 부분이 동작한다!
//unmount될때! return 함수가 동작! componentWillUnmount()




// 1. constructor
// constructor(생성자)이다. 이것은 자바와 마찬가지로 컴포넌트를 만들 때 처음으로 실행된다. 이 메서드에서는 초기 state를 정할 수 있다.
// // Class
// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
// }

// // Hooks
// const Example = () => {
//     const [count,setCount] = useState(0);
// }
// 클래스형에서는 초기 state를 정할 때 constructor를 사용해야한다. 하지만 훅에서는 useState hook을 사용하면 초기 상태를 쉽게 설정해줄 수 있다.
// /

// 2. getDerivedStateFromProps

// 이 메서드는 리액트 16.3버전 이후에 생긴 메서드이다. props로 받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트 될 때 호출된다.

// // Class
// class Example extends React.Component {
//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.value !== prevState.value) {
//       return { value: nextProps.value }
//     }
//     return null
//   }
// }

// 3. shouldComponentUpdate
// 이 메서드는 props나 state를 변경했을 때, 리렌더링을 할지 말지 결정하는 메서드이다. 
// 이 메서드에서는 반드시 true나 false를 반환해야한다. 
// 이 메서드는 오직 성능 최적화만을 위한 것이며 렌더링 목적을 방지하는 목적으로 사용하게된다면 버그로 이어질 수 있다.

// // Class
// class Example extends React.Component {
//   shouldComponentUpdate(nextProps) {
//     return nextProps.value !== this.props.value
//   }
// }

// // Hooks
// const Example = React.memo(() => {
//       ...
//   },
//   (prevProps, nextProps) => {
//     return nextProps.value === prevProps.value
//   }
// )

// 4. render
// 이는 가장 기초적인 메서드이기도하고 가장 중요한 메서드이기도 하다
// 컴포넌트를 렌더링할 때 필요한 메서드로 유일한 필수 메서드이기도 하다. 함수형 컴포넌트에서는 render를 안쓰고 컴포넌트를 렌더링할 수 있다.

// // Class
// class Example extends React.Component {
//   render() {
//     return <div>컴포넌트</div>
//   }
// }

// // Hooks
// const example = () => {
//   return <div>컴포넌트</div>


// 6. componentDidMount
// 이 메서드는 컴포넌트를 만들고 첫 렌더링을 마친 후 실행한다. 함수형 Hooks 에서는 useEffect를 활용하여 다음의 기능을 구현할 수 있다.

// // Class
// class Example extends React.Component {
//     componentDidMount() {
//         ...
//     }
// }

// // Hooks
// const Example = () => {
//     useEffect(() => {
//         ...
//     }, []);
// }
// 여기서 useEffect의 [] 의존성 배열을 비워야지만 똑같은 메소드를 구현할 수 있다.

// useEffect에 익숙하지 않으신 분들이라면 리액트 공식문서-useEffect를 참조하면 좋을 것 같다.

// 7. ComponentDidUpdate
// 이것은 리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로, DOM관련 처리를 해도 무방하다.

// // Class
// class Example extends React.Component {
//     componentDidUpdate(prevProps, prevState) {
//         ...
//     }
// }

// // Hooks
// const Example = () => {
//     useEffect(() => {
//         ...
//     });


// 8. componentWillUnmount
// 이 메서드는 컴포넌트를 DOM에서 제거할 때 실행한다. 
// componentDidMount에서 등록한 이벤트가 있다면 여기서 제거 작업을 해야한다. 함수형 컴포넌트에서는 useEffect CleanUp 함수를 통해 해당 메서드를 구현할 수 있다.

// // Class
// class Example extends React.Component {
//     coomponentWillUnmount() {
//         ...
//     }
// }

// // Hooks
// const Example = () => {
//     useEffect(() => {
//         return () => {
//             ...
//         }
//     }, []);
// }

// 9. componentDidCatch

//componentDidCatch라는 메서드가 존재한다. 이 메서드는 컴포넌트 렌더링 도중에 에러가 발생 했을 때 애플리케이션이 멈추지 않고 오류 UI를 보여줄 수 있게 해준다.

// // Class
// class Example extends React.Component {
//   componentDidCatch(error, info) {
//     console.log('에러가 발생했습니다.')
//   }
// }


