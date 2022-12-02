// 10. useRef 로 특정 DOM 선택하기
// JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택합니다.

// 리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다. 
// 예를 들어서 특정 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지, 
// 또는 포커스를 설정해줘야된다던지 등 정말 다양한 상황이 있겠죠. 추가적으로 Video.js, 
// JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도
//  특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 하는 상황이 발생 할 수 있습니다.

// 그럴 땐, 리액트에서 ref 라는 것을 사용합니다.

// 함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용합니다. 
// 우리가 만든 InputSample 에서는 초기화 버튼을 누르면 포커스가 초기화 버튼에 그대로 남아있게 됩니다.
    // InputSample.js
// import React, { useState, useRef } from 'react';

// function InputSample() {
//     const [inputs, setInputs] = useState({
//         name: '',
//         nickname: ''
//     });
//     const nameInput = useRef();

//     const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

//     const onChange = e => {
//         const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
//         setInputs({
//         ...inputs, // 기존의 input 객체를 복사한 뒤
//         [name]: value // name 키를 가진 값을 value 로 설정
//         });
//     };

//     const onReset = () => {
//         setInputs({
//         name: '',
//         nickname: ''
//         });
//         nameInput.current.focus();
//     };

//     return (
//         <div>
//         <input
//             name="name"
//             placeholder="이름"
//             onChange={onChange}
//             value={name}
//             ref={nameInput}
//         />
//         <input
//             name="nickname"
//             placeholder="닉네임"
//             onChange={onChange}
//             value={nickname}
//         />
//         <button onClick={onReset}>초기화</button>
//         <div>
//             <b>값: </b>
//             {name} ({nickname})
//         </div>
//         </div>
//     );
// }
// useRef 함수는 current 속성을 가지고 있는 객체를 반환하는데, 인자로 넘어온 초기값을 current 속성에 할당합니다.
//  이 current 속성은 값을 변경해도 상태를 변경할 때 처럼 React 컴포넌트가 다시 랜더링되지 않습니다.
//  React 컴포넌트가 다시 랜더링될 때도 마찬가지로 이 current 속성의 값이 유실되지 않습니다.

// 컴포넌트에서 특정 DOM 을 선택해야 할 때, ref 를 사용해야 한다고 배웠었습니다. 
// 그리고, 함수형 컴포넌트에서 이를 설정 할 때 useRef 를 사용하여 설정한다고 배웠었습니다.


// useRef Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데요,
//  바로, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.

// useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 
// 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 
// 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, 
// useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.
// 이 변수를 사용하여 다음과 같은 값을 관리 할 수 있습니다.
// setTimeout, setInterval 을 통해서 만들어진 id
// 외부 라이브러리를 사용하여 생성된 인스턴스
// scroll 위치
// 우리는, App 컴포넌트에서 useRef 를 사용하여 변수를 관리해볼건데요,
//  용도는 우리가 앞으로 배열에 새 항목을 추가할건데, 새 항목에서 사용 할 고유 id 를 관리하는 용도입니다.

// useRef 를 사용하여 변수를 관리하기 전에 해야 할 작업이 있습니다.

// 지금은 우리가 UserList 컴포넌트 내부에서 배열을 직접 선언해서 사용을 하고 있는데요, 
// 이렇게 UserList 에서 선언해서 사용하는 대신에, 
// 이 배열을 App 에서 선언하고 UserList 에게 props 로 전달을 해주겠습니다.

// import React from 'react';

// function User({ user }) {
//     return (
//         <div>
//         <b>{user.username}</b> <span>({user.email})</span>
//         </div>
//     );
// }

// function UserList({ users }) {
//     return (
//         <div>
//         {users.map(user => (
//             <User user={user} key={user.id} />
//         ))}
//         </div>
//     );
// }   

//     export default UserList;
//     // 이제 App 에서 useRef() 를 사용하여 nextId 라는 변수를 만들어보겠습니다.

//  // App.js
// import React, { useRef } from 'react';
// import UserList from './UserList';

// function App() {
//     const users = [
//         {
//         id: 1,
//         username: 'velopert',
//         email: 'public.velopert@gmail.com'
//         },
//         {
//         id: 2,
//         username: 'tester',
//         email: 'tester@example.com'
//         },
//         {
//         id: 3,
//         username: 'liz',
//         email: 'liz@example.com'
//         }
//     ];

//     const nextId = useRef(4);
//     const onCreate = () => {
//         // 나중에 구현 할 배열에 항목 추가하는 로직
//         // ...

//         nextId.current += 1;
//     };
//     return <UserList users={users} />;
// }


