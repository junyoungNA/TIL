// 클래스형 컴포넌트의 생성, 제거(clean up)

text.current.addEventListener('mouseover', hoverEvnet); 
// 생성하는 방법
text.current.removeEventListener('mouseover', hoverEvnet);  
// 삭제하는 방법
// 함수형 컴포넌트의 생성, 제거(clean up)
// => 리액트 훅 useEffect()를 이용한다!

React.useEffect(() => {
    text.current.addEventListener("mouseover", hoverEvent);
    // rendering이 실행될 구문이 들어가는 부분
    // componentDidMount, componentDidUpdate일 때 동작하는 부분   
    return () => {text.current.removeEventListener("mouseover", hoverEvent);
        // 여기가 clean up 부분 componentWillUnmount 때 동작하는 부분
    };
  }, [text]);

//   클래스형 컴포넌트에서 componentDidMount() 역할 → 
// 함수형 컴포넌트에서 useEffect()훅
// useEffect의 return구문에서 clean up함수 적용 
// (useEffect()에서 parameter로 넣은 함수의 return 함수) 
// component의 unmount이전 / update직전에 어떤 작업을 수행하고 싶다면 
// clean-up함수를 반환해 주어야한다.
// unmount 될 때useEffect(func, [])
// 특정값 update 직전useEffect(func, [특정값])
