// 💡 화면상에 보여지는 데이터(View)와 브라우저 메모리에 있는 데이터(Model)를 묶어서(Binding) 서로 간의 데이터를 동기화하는 것을 의미합니다.

// 💡 예를 들어서 HTML에서 서버 혹은 스크립트상에서 받아온 데이터를 화면상에 그려주고 있다고 가정을 했을 때, 
// 해당 값이 변경이 될 경우 다시 HTML 상에 데이터(값)를 변경된 값에 따라서 맞추어 주는 동작을 '데이터 바인딩'이라고 합니다.



// 포넌트 내에서 '단방향 데이터 바인딩'은 Javascript(Model)에서 HTML(View)로 한 방향으로만 데이터를 동기화하는 것을 의미합니다. [JS(Model) -> HTML(View)]

// 💡 단방향 데이터 바인딩이기에 역으로 HTML(View)에서 JS(Model)로의 직접적인 데이터 갱신은 불가능합니다.
//  '이벤트 함수(onClick, onChange,...)'를 주고 함수를 호출한 뒤 Javascript에서 HTML로 데이터를 변경해야 합니다. [HTML(View) -> xJS(Model)]

// 💡 컴포넌트 간에서 단방향 데이터 바인딩은 부모 컴포넌트에서 자식 컴포넌트로만 데이터가 전달되는 구조입니다.

// 💡 대표적으로 SPA Framework에서는 React에서 단방향 데이터 바인딩을 합니다.

// 장점 : 코드의 사용면에서 코드량을 크게 줄여줌
// 단점 : 변화에 따라 DOM 객체 전체를 렌더링해주거나 데이터를 바꿔주므로, 성능이 감소되는 경우가 있음
// 컨트롤러에서 model이 변경됨 -> view변경됨
// view에서 scope model이 변경됨 -> 컨트롤러에서 model이 변경됨

// 이렇게 컨트롤러와 뷰 양쪽의 데이터 일치가 모두 가능한 것이 양방향 데이터 바인딩이다. 
// 데이터의 변화를 감지해 템플릿과 결합해 화면을 갱신, 화면의 입력에 따라 데이터를 갱신하는 것이다. (HTML -> JS, JS -> HTML 양쪽 모두 가능)
// 양방향 데이터 바인딩은 데이터의 변경을 프레임워크에서 감지하고 있다가, 데이터가 
// // 변경되는 시점에 DOM 객체에 렌더링을 해주거나 페이지 내에서 모델의 변경을 감지해 JS 실행부에서 변경한다. 입력된 값이나 변경된 값에 따라 내용이 바로 바뀌기 때문에 따로 체크해주지 않아도 된다.
// 양방향 데이터 바인딩은 웹 애플리케이션의 복잡도가 증가하면 증가할수록 빛을 발한다. 수많은 코드의 양을 줄여줄 뿐만 아니라 유지보수나 코드를 관리하기 매우 쉽게 해주기 때문이다.


// 장점 : 데이터 변화에 따른 성능 저하 없이 DOM 객체 갱신 가능,
// 데이터 흐름이 단방향(부모->하위 컴포넌트)이라, 코드를 이해하기 쉽고 데이터 추적과 디버깅이 쉬움
// 단점: 변화를 감지하고 화면을 업데이트 하는 코드를 매번 작성해야 함
// 대표적으로 React가 단방향 데이터 바인딩을 한다.
// 단방향 데이터 바인딩은 데이터와 템플릿을 결합해 화면을 생성하는 것이다. (JS -> HTML만 가능)
// 사용자의 입력에 따라 데이터를 갱신하고 화면을 업데이트 해야 하므로 단방향 데이터 바인딩으로 구성하면, 
// 데이터의 변화를 감지하고 화면을 업데이트 하는 코드를 매번 작성해주어야 한다.
// 리액트는 자바스크립트 기반으로, 부모 뷰->자식 뷰 바뀐 내용을 직접 전달한다.