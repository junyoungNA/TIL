//요구사항: 버튼들이 보여지고 더보기 버튼을 클릭하면 현재 화면에서 몇가지의 버튼들이 더 추가되야함
// 즉 반응형을 요구함

// 사용 가능한 공간에 맞는 아이템의 수를 계산해야 함
// 문자 수를 세는 것과 같이 여기서부턴 어떤 것도 미리 가정할 수 없습니다. 
// 브라우저에서 텍스트가 렌더링 되는 것은 사용된 글꼴, 언어,
// 브라우저에 많은 영향을 받을 뿐만 아니라
// 그 밖에 다양한 이유로 예측할 수 없는 결과들이 발생할 수 있음.
// getBoundingClientRect와 같은 네이티브 자바스크립트 API를 통해 크기를 추출한다.

// const Component = ({ items }) => {
// const [lastVisibleMenuItem, setLastVisibleMenuItem] = useState(-1);

//   useEffect(() => {
    // const itemIndex = getLastVisibleItem(ref.current);
    // getLastVisibleItem 함수는 모든 계산을 수행하고 단일 숫자, 즉, 
    // 사용할 수 있는 공간에 맞는 마지막 링크의 인덱스를 반환합니다.
    // 실제 인덱스 상태 업데이트합니다.
    // setLastVisibleMenuItem(itemIndex);
//   }, [ref]);
      // div의 하위 항목을 배열로 변환
    //   const children = [...div.childNodes];
      // 모든 너비 값들
    //   const childrenWidths = children.map(child => child.getBoundingClientRect().width)
    // }, [ref]);
//   return ...
// }

// 마지막 링크의 인덱스를 가지고 있음. 
// 이걸 그대로 둔다면, 모든 링크와 "더 보기" 버튼이 보일 것입니다. 
// 컴포넌트를 업데이트하고 존재하면 안 되는 컴포넌트들은 모두 제거해야 합니다.
// 해당 인덱스를 얻었을 때 인덱스 상태를 저장하는 것?.

// const Component = ({ items }) => {

//     // 첫 번째 패스와 여전히 기본값인 경우 모든 것을 렌더링합니다.
//     if (lastVisibleMenuItem === -1) {
//       // 이전과 동일하게 여기서 모두 렌더링합니다.
//       return ...
//     }

//     // 마지막으로 표시할 항목이 배열의 마지막 항목이 아닌 경우 "더 보기" 버튼을 표시합니다.
//     const isMoreVisible = lastVisibleMenuItem < items.length - 1;

//     // 인덱스가 마지막으로 표시된 항목보다 큰 항목을 필터링합니다.
//     const filteredItems = items.filter((item, index) => index <= lastVisibleMenuItem);

//     return (
//       <div className="navigation">
//         <!-- 보이는 항목만 렌더링 -->
//         {filteredItems.map(item => <a href={item.href}>{item.name}</a>)}
//         <!-- "더 보기"를 조건부 렌더링 -->
//         {isMoreVisible && <button id="more">...</button>}
//       </div>
//     )
//   }

// 해당 코드를 통해 기능은 구현하였지만 cpu 속도가 느려진 상태에서는 화면 전체가 깜빡이는 문제가 발생?
// 방법으로는 모든 버튼박을 렌더링하되 눈에 보이지 않게 할 수 있음
// 투명도를 0으로 설정하거나 눈에 보이지 않게 만드는 방법 
// 그리고 여러 영역과 매직 넘버를 추출한 후에만 보이게 만듭니다.

// 리액트 ~16.8 버전부터는(훅이 있는 버전) 모든 useEffect를 useLayoutEffect로 교체하기만 하면 해결?.

// const Component = ({ items }) => {
//     // 정확히 모든 것이 똑같고, 훅 이름만 다릅니다.
//     useLayoutEffect(() => {
//       // 여기에 똑같이 코드를 작성하세요.
//     }, [ref]);
//   };

// 하지만!
// useLayoutEffect는 성능 저하를 일으킬 수 있으므로 피해야 한다고 명시적으로 나와 있습니다. 
// 이는 "브라우저가 화면을 리페인팅하기 전"에 실행된다고 하는데 
// 이는 useEffect가 이후에 실행된다는 의미입니다.

// 여기서 가장 필요한 것은 "브라우저 렌더링"입니다. 
// 리액트 세계에서는 리액트의 렌더링과 구별하기 위해 "페인팅"이라고도 알려졌지만 
// 브라우저는 화면에 실시간으로 표시되는 모든 것들을 지속해서 업데이트하지 않습니다. 
// 화이트보드에 선을 긋고, 지우고, 글을 쓰거나 올빼미를 그리는 것과는 다르며
// 대신에 사람들에게 슬라이드를 보여주는 것과 비슷하다. 
// 하나의 슬라이드를 보여주고, 사람들이 그 기발한 아이디어를 이해할 때까지 기다린 후 다음 슬라이드로 전환하는 방식입니다.

// 일반적으로 최신 브라우저에는 60FPS 속도, 초당 60프레임을 유지하려고 합니다. 한 슬라이드가 다음 슬라이드로 바뀌는 데는 약 13밀리초가 걸립니다. 
// 이것이 리액트에서 "페인팅"이라고 부르는 것입니다


// "작업"(task) 은 무엇일까요? 일반적인 자바스크립트인 경우, 
// script 태그에 넣고 동기적으로 실행하는 모든 것을 말합니다. 

// const app = document.getElementById("app");
// const child = document.createElement("div");
// child.innerHTML = "<h1>Heyo!</h1>";
// app.appendChild(child);

// child.style = "border: 10px solid red";
// child.style = "border: 20px solid green";
// child.style = "border: 30px solid black";
// id로 요소를 가져와 변수 app에 할당한 뒤 div를 생성합니다.
//  그런 다음 HTML을 업데이트하고 app의 div에 추가한 뒤 div의 테두리(border)를 세 번 변경합니다. 
//  브라우저에서는 모든 작업을 하나의 작업으로 간주합니다. 
//  모든 행을 실행하고, 최종 결과물로 검은 테두리(border)가 있는 div를 그립니다.

// *********** 우리는 화면에서 빨강-초록-검정 전환을 보지 못합니다. ************

// "작업"이 13ms보다 오래 걸리면 어떻게 될까요?
// 브라우저는 이를 중지하거나 분리할 수 없습니다. 
// 완료될 때까지 계속한 다음 최종 결과물을 그릴 것입니다. 
// 테두리 업데이트 사이에서 1초간 동기 지연을 추가하는 경우는 아래와 같습니다.

// const waitSync = (ms) => {
//   let start = Date.now(),
//     now = start;
//   while (now - start < ms) {
//     now = Date.now();
//   }
// };

// child.style = "border: 10px solid red";
// waitSync(1000);
// child.style = "border: 20px solid green";
// waitSync(1000);
// child.style = "border: 30px solid black";
// waitSync(1000);
// 여전히 "중간" 결과를 볼 수 없습니다. 
// 브라우저가 그것을 정렬할 때까지 빈 화면만 바라보다가 마지막에 검은색 테두리가 생기는 것을 볼 수 있습니다. 
// 이것이  "렌더링 차단" 또는 "페인팅 차단" 코드라고 부르는 것입니다.

// 리액트는 단지 자바스크립트일 뿐이지만 단일 작업으로 실행되지는 않습니다. 
// 만약 그렇다면 인터넷은 견딜 수 없을 것입니다. 
// 그렇게 되면 우리는 모두 외부에 실행되고 직접 상호작용 해야 할 텐데, 누가 그것을 원할까요? 
// 전체 앱을 렌더링하는 거대한 작업을 작은 작업으로 "분할"하는 방법은 콜백,
//  이벤트 핸들러, 프로미스 등 다양한 "비동기"적 방법을 사용하는 것입니다.

// 이러한 스타일 조정을 setTimeout으로 감싸기만 하면 됩니다.
// setTimeout(() => {
//   child.style = "border: 10px solid red";
//   wait(1000);
//   setTimeout(() => {
//     child.style = "border: 20px solid green";
//     wait(1000);
//     setTimeout(() => {
//       child.style = "border: 30px solid black";
//       wait(1000);
//     }, 0);
//   }, 0);
// }, 0);
// 그럼 모든 timeout 로직은 새로운 "작업"으로 간주할 것입니다. 
// 따라서 브라우저는 하나의 작업을 마친 후 다음 작업을 시작하기 전에 리페인팅할 수 있습니다.
//  그리고 3초 동안 하얀 화면에서 명상하는 것이 아니라, 느리지만  빨간색에서 초록색으로, 
//  다시 돌아오는 전환을 볼 수 있게 됩니다.

// useLayoutEffect에선 동일한 "작업"으로 실행됩니다. 리액트는 이를 보장합니다.
// 비록 일반적으로 비동기 작업이라고 생각하는 useLayoutEffect 내부에서 상태를 업데이트 하더라도 
// 리액트는 여전히 전체 흐름이 동기적으로 실행되도록합니다.
// ******** 리액트에서 제공하는 batching(배치 처리)를 말하는 것? (확실하지 않음) ************


// 첫 번째는 모든 버튼에 있는 네비게이션의 "초기" 패스를 렌더링합니다. 
// 두 번째는 필요 없는 하위 항목을 제거합니다. 그사이 리페인팅이 진행됩니다!
//  timeout 내에서 테두리를 사용하는 상황과 정확히 일치하는 상황입니다.
// 마지막으로 필요한 것은 전체 리액트 앱이 하나의 거대한 동기식 "작업"으로 바뀐다.

// 요소의 실제 크기에 따라 UI를 조정해야하기 때문에 발생하는 시각적 "결함"을 제거해야하는 경우에만 
// useLayoutEffect를 사용하세요. 다른 모든 경우에는 useEffect를 사용하세요. 
// 그리고 이펙트가 정말 필요하진 다시 생각해야한다.
// https://react.dev/learn/you-might-not-need-an-effect


// setTimeout 내부에 실행되는 useEffect의 멘탈 모델은 그 차이점을 이해하는데 편리하지만, 
// 기술적으로는 옳지 않다?. 
// 리액트는 postMessage와 requestAnimationFrame 트릭을 함께 사용합니다. 
// https://stackoverflow.com/questions/56727477/react-how-does-react-make-sure-that-useeffect-is-called-after-the-browser-has-h/56727837#56727837

// useEffect는 비동기가 동작을 보장하지 않는다. 
// 리액트는 가능한 한 최적화하려고 하지만 브라우저가 페인트 전에 동작하여 결과적으로는 차단될 수도 있습니다. 
// 이러한 현상 중 하나는 useLayoutEffect가 이미 어딘가 업데이트 체인을 가지고 있는 경우입니다
//useEffect는 가끔 페인트 전에 실행된다?. 
// https://thoughtspile.github.io/2021/11/15/unintentional-layout-effect/

//추가로 Next.js 프레임워크로 관련해서 읽어봐야할 것 - 재수화의 위험
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/