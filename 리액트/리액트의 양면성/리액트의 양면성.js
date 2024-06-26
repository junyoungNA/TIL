// 출처 :https://velog.io/@typo/the-two-reacts?utm_source=substack&utm_medium=email
// import { useState } from "react";

// export function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <button
//       className="px-2 py-1 font-sans font-semibold text-white bg-purple-700 rounded-lg dark:color-white focus:ring active:bg-purple-600"
//       onClick={() => setCount(count + 1)}
//     >
//       You clicked me {count} times


//     </button>
//   );
// 컴포넌트가 여러분의 컴퓨터에서 실행되어야 한다는 주장 
// count는 클라이언트 상태의 일부분으로, 버튼을 누를 때마다 업데이트되는 컴퓨터 메모리의 정보 조각입니다. 
// 버튼을 몇 번이나 누를지 모르기 때문에 컴퓨터에서 가능한 출력을 모두 예측하고 준비할 수는 없습니다. 
// 컴퓨터에서 준비할 수 있는 최대한은 초기 렌더링 출력("여러분이 저를 0번 클릭 했습니다")을 HTML로 전송할 뿐입니다. 
// 하지만 그 이후부터는 컴퓨터가 이 코드를 실행해야 합니다.
// 그럼에도 이 코드를 여러분의 컴퓨터에서 실행할 필요는 없다고 주장할 수도 있습니다. 
// 대신 서버에서 실행하면 어떨까요? 버튼을 누를 때마다 컴퓨터가 서버에 다음 렌더링 출력을 요청할 수 있습니다.
// 그게 바로 클라이언트 사이드 자바스크립트 프레임워크가 등장하기 전에 웹사이트가 작동한 방식 아닌가요?

// 내생각
// 서버사이드렌더링 방식을 말하는 걸까? 리액트를 예시로 들면 리액트는 자바스크립트를 다운로드 받기전에
// 미리 ui를 사용자에게 보여줄 수 있다. 그러고 사용자가 버튼클릭이나 특정 이벤트를 발생시켰을때를 기억하고
// 자바스크립트가 다운로드 되면 기억하고 있던 이벤트를 발생시키니깐?

// 사용자가 링크를 클릭할 때처럼 어느 정도 지연이 예상되는 경우 서버에 새 UI를 요청하는 것이 좋다.
// 사용자가 앱의 다른 위치로 이동하고 있다는 것을 안다면 기다릴 것입니다. 
// 그러나 직접적인 조작(슬라이더 드래그, 탭 전환, 글 입력, 좋아요 클릭, 카드 스와이프, 메뉴에 마우스 올리기,
// 차트 드래그 등)을 수행했을 때 최소한의 어떤 즉각적인 피드백을 안정적으로 제공하지 않으면(사용자가 요청한 이벤트)
// 사용자는 불안정하다고 느낄 수 있습니다.
// 
// 예를 들어, 엘리베이터 버튼을 누르는 즉시 다음 층으로 이동하리라고 기대하지는 않을 것입니다. 
// 하지만 문손잡이를 누를 때는 손의 움직임에 따라 바로 움직이거나 멈춰 있는 느낌이 들 것이라고 기대합니다. 
// 실제로 엘리베이터 버튼 또한 특정한 즉각적인 피드백이 필요합니다.(사용자를 위한 버튼에 반응) 
// 손의 압력에 따라 반응하며, 누른 것을 인식할 수 있도록 버튼에 불이 들어와야 합니다.

// !!!사용자 인터페이스를 구축할 때는 최소한의 상호작용에 대해 지연 시간이 짧고 !!!!
// !!!네트워크 왕복이 없는 상태로 응답할 수 있어야 합니다!!!!!.

// 리액트의 멘탈 모델이 UI는 상태의 함수이거나, 
// UI = f(상태) 등 일종의 방정식으로 설명되는 것을 본 적이 있을 것입니다. 
// -----이것은 여러분의 UI 코드가 상태를 인수로 하는 단일 함수여야 한다는 것을 의미하는 것이 아닙니다----. 
// ------단지 현재 상태가 UI를 결정한다는 것을 의미합니다. 상태가 변경되면 UI를 다시 계산해야 합니다----. 
// 상태가 컴퓨터에 "살아있기" 때문에 UI를 계산하는 코드(여러분의 컴포넌트)도 여러분의 컴퓨터에서 실행되어야 합니다.

// 즉 상태에 따라 UI는 변화해야 하며 UI코드가 상태를 인수로 하는 단일 함수여야 한다는것은 아니다
// 이 데이터는 사용자를 위해 사용자와 공유된다


// 컴포넌트가 제 컴퓨터에서 실행되어야 한다는 주장

// import { readFile } from "fs/promises";
// import matter from "gray-matter";
// export async function PostPreview({ slug }) {
//   const fileContent = await readFile("./public/" + slug + "/index.md", "utf8");
//   const { data, content } = matter(fileContent);
//   const wordCount = content.split(" ").filter(Boolean).length;

//   return (
//     <section className="p-2 rounded-md bg-black/5">
//       <h5 className="font-bold">
//         <a href={"/" + slug} target="_blank">
//           {data.title}
//         </a>
//       </h5>
//       <i>{wordCount} words</i>
//     </section>
//   );
// }

// 이 컴포넌트는 전체 컴포넌트의 들어간 문자들의 개수를 데이터로 가져와 보여준다.
// 그럼 이 페이지의 컴포넌트가 다른 페이지의 단어 수를 어떻게 알 수 있을까요?

// 네트워크 탭을 확인해 보면 추가적인 네트워크 요청이 보이지 않으며, 
// 다른 글의 단어 수를 세기 위해 GitHub에서 해당 글 전체를 다운로드하지 않는다. 
// 또한 이 페이지에서 해당 블로그 글의 콘텐츠도 임베드하지 않으며 단어 수를 세기 위해 API를 호출하는 것도 아니다

// 그렇다면 이 컴포넌트는 어떻게 작동하는 걸까?

// 이 컴포넌트는 나의 컴퓨터에서 실행됩니다.파일을 읽고 싶을 때는 fs.readFile로 파일을 읽습니다. 
// 마크다운 헤더를 파싱 하고 싶을 때는 gray-matter로 파싱합니다.
// 단어 수를 세고 싶을 때는 텍스트를 분할하여 셉니다. 
// !!! 이 코드는 데이터가 있는 곳에서 바로 실행되기 때문에 추가 작업이 필요하지 않습니다 !!!.

// React 컴포넌트가 렌더링되기 전에 파일을 읽습니다. 
// 이 과정은 React 컴포넌트가 브라우저에서 DOM 요소를 생성하기 전에 발생합니다.
// React 컴포넌트가 렌더링되기 전에 파일을 읽는 것은 주로 서버 측에서 이루어집니다.
//  이 코드에서 파일을 읽는 것은 Node.js 환경에서 실행되는 것으로 가정합니다. 
//  서버 측에서 파일을 읽고 그 내용을 처리한 후에 React 컴포넌트가 생성되고 클라이언트에 전달됩니다

// 이 코드는 여러분의 컴퓨터에서 실행될 필요가 없으며, 실제로 사용자 컴퓨터에 제 파일이 없기 때문에 실행될 수 없습니다.
//  이 코드가 언제 실행되었는지 확인해 보시죠.

{/* <p className="font-bold text-purple-500">
  {new Date().toString()}
</p> */}
// Fri Jan 05 2024 00:50:25 GMT+0000 (Coordinated Universal Time)

// 블로그를 정적 웹 호스팅에 마지막으로 배포할 때 생성됩니다
// 빌드 과정에서 컴포넌트가 실행되었기 때문에 제 게시글에 대한 전체 권한이 있었습니다.
// 제 컴포넌트를 데이터 소스 가까이에서 실행하면 해당 정보를 기기로 전송하기 전에 데이터를 읽고 사전에 처리할 수 있습니다.
// 이 페이지를 로드할 때쯤에는, 더 이상 <PostList>와 <PostPreview>도 없었고,
//  fileContent와 dir도 없었으며, fs와 gray-matter도 없었습니다. 
//  대신 <div>와 그 내부에 각각 <a>와 <i>가 있는 몇 개의 <section>만 있었습니다. 
//  여러분의 기기는 컴포넌트가 해당 UI를 계산하는 데 사용한 전체 원시 데이터(실제 글)가 아니라 실제로 보여주어야 하는 
//  UI(렌더링된 글 제목, 링크 URL, 단어 수)만 받았습니다.

// 이 멘탈 모델에서 UI는 서버 데이터의 함수, 즉 UI = f(data)입니다.
//  이 데이터는 제 기기에만 존재하므로, 컴포넌트가 실행되어야 하는 장소가 됩니다

// 결론은 이 경우 UI는 서버 데이터의 함수로 정의됩니다. UI는 데이터에 따라 동적으로 생성되며,
//  데이터가 변경되면 UI도 그에 맞게 업데이트되며
// 이 데이터는 사용자의 기기에 직접 존재하지 않고 서버에서 제공됩니다.
// --------------------------------------------------------
// UI는 컴포넌트로 구성되어 있지만, 우리는 서로 다른 두 관점의 주장을 살펴보았습니다.

// UI = f(state), state는 클라이언트 측이며 f는 클라이언트에서 실행됩니다. 
// 이 접근법으로 <Counter />와 같이 즉각적으로 상호작용하는 컴포넌트를 작성할 수 있습니다. 
// (여기서 f는 HTML을 생성하기 위해 초기 상태를 가지고 서버에서도 실행될 것입니다.)
// -------------------------------------------------------------
// UI = f(data), data는 서버 측이며 f는 서버에서만 실행되어야 합니다. 
// 이 접근법으로 <PostPreview />와 같이 데이터 전처리를 수행하는 컴포넌트를 작성할 수 있습니다. 
// (여기서 f는 범주에 따라 서버에서만 실행됩니다. 빌드 시간은 "서버"로 간주합니다.)


// 우리가 <Counter />처럼 즉각적인 상호 작용을 허용하려면 컴포넌트를 클라이언트에서 실행해야 합니다.
// !초반 엘리베이터 사용자를 위한 버튼에 대한 상호작용 처리 예시!
//  그러나 <PostPreview />와 같은 컴포넌트는 readFile과 같은 서버 전용 API를 사용하기 때문에 원칙적으로 클라이언트에서 실행할 수 없습니다. 
//  (이것이 서버에서 실행되는 컴포넌트의 목적입니다! 그렇지 않으면 클라이언트에서 실행하는 것이 낫겠죠.)

// 그렇다면 모든 컴포넌트를 서버에서 실행하면 어떨까요? 
// 그러나 서버에서는 <Counter />와 같은 컴포넌트는 초기 상태만 렌더링 할 수 있습니다. 
// 서버는 현재 상태를 알지 못하며, 서버와 클라이언트 간에 그 상태를 전달하는 것은 너무 느리고(URL과 같이 작은 경우를 제외하고) 항상 가능한 것도 아닙니다. 
// (예: 제 블로그의 서버 코드는 배포될 때만 실행되므로 "전달"할 수 없습니다).

// 또 다시 두 리액트 중 하나를 선택해야 하는 것처럼 보입니다.

{/* <Counter />를 작성할 수 있는 "클라이언트" UI = f(state) 패러다임 */}
{/* <PostPreview />를 작성할 수 있는 "서버" UI = f(data) 패러다임 */}
// 현실 세계에서 실제 "공식"은 UI = f(데이터, 상태)에 더 가깝습니다. data가 없거나 state가 없는 경우, 이 공식은 위에서 설명한 두 경우로 일반화됩니다. 
// 하지만 이상적으로는 다른 추상화를 선택할 필요 없이, 두 가지 경우를 모두 처리할 수 있는 프로그래밍 패러다임을 선호합니다. 여러분 중 적어도 몇 명은 이를 원하고 있습니다.

// 그렇다면 남은 문제는 이 "f"를 아주 다른 두 프로그래밍 환경에 어떻게 분할할 것인가입니다. 
// 가능할까요? 
// !!!!!!!!!여기서 f는 모든 컴포넌트를 나타내는 함수가 아니라 실제 함수에 관해 이야기하고 있다는 점을 기억하세요!!!!!!!.

// 리액트의 장점을 유지하면서 컴포넌트를 여러분의 컴퓨터와 제 컴퓨터에서 분리할 방법이 있을까요? 
// 서로 다른 두 환경의 컴포넌트를 결합하고 중첩할 수 있을까요? 어떻게 하면 될까요?
// 궁금해서 chat gpt 에게 물어봄
// 컴포넌트 분리 및 조합: 클라이언트와 서버에서 실행되는 컴포넌트를 분리하여 필요에 따라 조합합니다. 
// 예를 들어, 서버에서 실행되는 컴포넌트는 서버 사이드 렌더링을 통해 초기 UI를 생성하고 클라이언트에서는 이를 받아서 
// 상호 작용 가능한 UI로 확장합니다.

// 데이터 및 상태 관리: 서버에서는 데이터를 기반으로 하는 컴포넌트를 사용하고, 
// 클라이언트에서는 상태를 기반으로 하는 컴포넌트를 사용합니다. 
// 이를 위해 Redux나 React Context API와 같은 상태 관리 라이브러리를 활용하여
//  서로 다른 환경에서 데이터 및 상태를 효과적으로 관리합니다.

// API 통신: 클라이언트와 서버 간에 API를 통해 데이터를 주고받습니다. 
// 이를 통해 서로 다른 환경에서 컴포넌트의 데이터를 동기화하고 상호 작용할 수 있습니다.

// 서버 사이드 렌더링 (SSR): 서버 사이드 렌더링을 통해 초기 UI를 생성하고 전송하여 성능을 향상시킬 수 있습니다. 
// 클라이언트에서는 이를 받아서 상호 작용 가능한 UI로 확장합니다.

// 코드 분할: 클라이언트 및 서버에서 실행되는 코드를 분할하여 필요한 부분만 로드하고 실행할 수 있습니다. 
// 이를 통해 초기 로딩 시간을 최적화하고 성능을 향상시킬 수 있습니다.

// 등등 내가 드는 생각은 리액트에서 suspense같은 기능등을 활용하고 서버와 클라이언트코드를 분할? 
// 아 잘모르겠다..그래도 데이터와 상태에 대해 생각할 수 있는 글이여서 정말 좋은 글이었다.