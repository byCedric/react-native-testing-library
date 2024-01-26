"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[494],{2063:(e,n,i)=>{i.d(n,{Z:()=>o});i(7294);var t=i(1351);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var s=i(5893);function o(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:o}=e;return(0,s.jsx)("div",{className:r.tableOfContentsInline,children:(0,s.jsx)(t.Z,{toc:n,minHeadingLevel:i,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},1351:(e,n,i)=>{i.d(n,{Z:()=>p});var t=i(7294),r=i(6793);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),i=Array(7).fill(-1);n.forEach(((e,n)=>{const t=i.slice(2,e.level);e.parentIndex=Math.max(...t),i[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:i,...r}=e;i>=0?n[i].children.push(r):t.push(r)})),t}function o(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:i,maxHeadingLevel:t});return function(e){return e.level>=i&&e.level<=t}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){var i;let{anchorTopOffset:t}=n;const r=e.find((e=>l(e).top>=t));if(r){var s;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:null!=(s=e[e.indexOf(r)-1])?s:null}return null!=(i=e[e.length-1])?i:null}function d(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function a(e){const n=(0,t.useRef)(void 0),i=d();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:i}=e;const t=[];for(let r=n;r<=i;r+=1)t.push("h"+r+".anchor");return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),d=c(l,{anchorTopOffset:i.current}),a=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,i){i?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===a)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,i])}var h=i(8746),u=i(5893);function x(e){let{toc:n,className:i,linkClassName:t,isChild:r}=e;return n.length?(0,u.jsx)("ul",{className:r?void 0:i,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.Z,{to:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(x,{isChild:!0,toc:e.children,className:i,linkClassName:t})]},e.id)))}):null}const m=t.memo(x);function p(e){let{toc:n,className:i="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:h,...x}=e;const p=(0,r.L)(),j=null!=d?d:p.tableOfContents.minHeadingLevel,g=null!=h?h:p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:r}=e;return(0,t.useMemo)((()=>o({toc:s(n),minHeadingLevel:i,maxHeadingLevel:r})),[n,i,r])}({toc:n,minHeadingLevel:j,maxHeadingLevel:g});return a((0,t.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:j,maxHeadingLevel:g}}),[l,c,j,g])),(0,u.jsx)(m,{toc:v,className:i,linkClassName:l,...x})}},3762:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=i(5893),r=i(1151),s=i(2063);const o={id:"migration-v2",title:"Migration to 2.0"},l=void 0,c={id:"migration-v2",title:"Migration to 2.0",description:"This guide describes steps necessary to migrate from React Native Testing Library v1.x to v2.0.",source:"@site/docs/MigrationV2.md",sourceDirName:".",slug:"/migration-v2",permalink:"/react-native-testing-library/docs/migration-v2",draft:!1,unlisted:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/MigrationV2.md",tags:[],version:"current",frontMatter:{id:"migration-v2",title:"Migration to 2.0"},sidebar:"docs",previous:{title:"Migration to 7.0",permalink:"/react-native-testing-library/docs/migration-v7"}},d={},a=[{value:"Dropping Node 8",id:"dropping-node-8",level:2},{value:"Auto Cleanup",id:"auto-cleanup",level:2},{value:"WaitFor API changes",id:"waitfor-api-changes",level:2},{value:"Removed global <code>debug</code> function",id:"removed-global-debug-function",level:2},{value:"Removed global <code>shallow</code> function",id:"removed-global-shallow-function",level:2},{value:"Removed functions",id:"removed-functions",level:2},{value:"Some <code>ByTestId</code> queries behavior changes",id:"some-bytestid-queries-behavior-changes",level:2},{value:"Deprecated <code>flushMicrotasksQueue</code>",id:"deprecated-flushmicrotasksqueue",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This guide describes steps necessary to migrate from React Native Testing Library ",(0,t.jsx)(n.code,{children:"v1.x"})," to ",(0,t.jsx)(n.code,{children:"v2.0"}),"."]}),"\n","\n","\n",(0,t.jsx)(s.Z,{toc:a}),"\n",(0,t.jsx)(n.h2,{id:"dropping-node-8",children:"Dropping Node 8"}),"\n",(0,t.jsx)(n.p,{children:"Node 8 reached its EOL more than 5 months ago, so it's about time to target the library to Node 10. If you used lower version, you'll have to upgrade to v10, but we recommend using the latest LTS version."}),"\n",(0,t.jsx)(n.h2,{id:"auto-cleanup",children:"Auto Cleanup"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cleanup()"})," function is now called automatically after every test if your testing framework supports ",(0,t.jsx)(n.code,{children:"afterEach"})," hook (like Jest, Mocha, and Jasmine)."]}),"\n",(0,t.jsxs)(n.p,{children:["You should be able to remove all ",(0,t.jsx)(n.code,{children:"afterEach(cleanup)"})," calls in your code."]}),"\n",(0,t.jsxs)(n.p,{children:["This change might break your code, if you tests are not isolated, i.e. you call ",(0,t.jsx)(n.code,{children:"render"})," outside ",(0,t.jsx)(n.code,{children:"test"})," block. Generally, you should ",(0,t.jsx)(n.a,{href:"https://kentcdodds.com/blog/test-isolation-with-react",children:"keep your tests isolated"}),". But if you can't or don't want to do this right away you can prevent this behavior using any of the following ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["by importing ",(0,t.jsx)(n.code,{children:"'react-native-testing-library/pure'"})," instead of ",(0,t.jsx)(n.code,{children:"'react-native-testing-library'"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["by importing ",(0,t.jsx)(n.code,{children:"'react-native-testing-library/dont-cleanup-after-each'"})," before importing ",(0,t.jsx)(n.code,{children:"'react-native-testing-library'"}),". You can do it in a global way by using Jest's ",(0,t.jsx)(n.code,{children:"setupFiles"})," like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "setupFiles": ["react-native-testing-library/dont-cleanup-after-each"];\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["by setting ",(0,t.jsx)(n.code,{children:"RNTL_SKIP_AUTO_CLEANUP"})," env variable to ",(0,t.jsx)(n.code,{children:"true"}),". You can do this with ",(0,t.jsx)(n.code,{children:"cross-evn"})," like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cross-env RNTL_SKIP_AUTO_CLEANUP=true jest\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"waitfor-api-changes",children:"WaitFor API changes"}),"\n",(0,t.jsxs)(n.p,{children:["We renamed ",(0,t.jsx)(n.code,{children:"waitForElement"})," function to ",(0,t.jsx)(n.code,{children:"waitFor"})," for consistency with React Testing Library. Additionally, the signature has slightly changed from:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"export default function waitForElement<T>(\n  expectation: () => T,\n  timeout?: number,\n  interval?: number\n): Promise<T> {}\n"})}),"\n",(0,t.jsx)(n.p,{children:"to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"export default function waitFor<T>(\n  expectation: () => T,\n  options: {\n    timeout?: number,\n    interval?: number,\n  }\n): Promise<T> {}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both changes should improve code readibility."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"waitFor"})," calls (and hence also ",(0,t.jsx)(n.code,{children:"findBy"})," queries) are now wrapped in ",(0,t.jsx)(n.code,{children:"act"})," by default, so that you should no longer need to use ",(0,t.jsx)(n.code,{children:"act"})," directly in your tests."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can usually avoid ",(0,t.jsx)(n.code,{children:"waitFor"})," by a proper use of ",(0,t.jsx)(n.code,{children:"findBy"})," asynchronous queries. It will result in more streamlined testing experience."]})}),"\n",(0,t.jsxs)(n.h2,{id:"removed-global-debug-function",children:["Removed global ",(0,t.jsx)(n.code,{children:"debug"})," function"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"debug()"})," method returned from ",(0,t.jsx)(n.code,{children:"render()"})," function is all you need. We removed the global export to avoid confusion."]}),"\n",(0,t.jsxs)(n.h2,{id:"removed-global-shallow-function",children:["Removed global ",(0,t.jsx)(n.code,{children:"shallow"})," function"]}),"\n",(0,t.jsx)(n.p,{children:"Shallow rendering React component is usually not a good idea, so we decided to remove the API. But, if you find it useful or need to support legacy tests, feel free to use this implementation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import ShallowRenderer from 'react-test-renderer/shallow';\n\nexport function shallow(instance: ReactTestInstance | React.Element<any>) {\n  const renderer = new ShallowRenderer();\n  renderer.render(React.createElement(instance.type, instance.props));\n\n  return { output: renderer.getRenderOutput() };\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"removed-functions",children:"Removed functions"}),"\n",(0,t.jsx)(n.p,{children:"Following query functions have been removed after being deprecated for more than a year now:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"getByName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"getAllByName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"queryByName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"queryAllByName"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"*ByType"})," and ",(0,t.jsx)(n.code,{children:"*ByProps"})," queries has been prefixed with ",(0,t.jsx)(n.code,{children:"UNSAFE_"}),". These ",(0,t.jsx)(n.code,{children:"UNSAFE_"})," functions are not planned for removal in future versions but their usage is discouraged. You can rename them using global search/replace in your project:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getByType"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_getByType"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getAllByType"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_getAllByType"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryByType"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_queryByType"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryAllByType"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_queryAllByType"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getByProps"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_getByProps"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getAllByProps"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_getAllByProps"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryByProps"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_queryByProps"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryAllByProps"})," -> ",(0,t.jsx)(n.code,{children:"UNSAFE_queryAllByProps"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"some-bytestid-queries-behavior-changes",children:["Some ",(0,t.jsx)(n.code,{children:"ByTestId"})," queries behavior changes"]}),"\n",(0,t.jsxs)(n.p,{children:["In version ",(0,t.jsx)(n.code,{children:"1.x"})," the ",(0,t.jsx)(n.code,{children:"getByTestId"})," and ",(0,t.jsx)(n.code,{children:"queryByTestId"})," queries could return non-native instances. This was a serious bug. Other query functions like ",(0,t.jsx)(n.code,{children:"getAllByTestId"}),", ",(0,t.jsx)(n.code,{children:"queryAllByTestId"}),", ",(0,t.jsx)(n.code,{children:"findByTestId"})," and ",(0,t.jsx)(n.code,{children:"findAllByTestId"})," didn't have this issue. These correctly returned only native components instances (e.g. ",(0,t.jsx)(n.code,{children:"View"}),", ",(0,t.jsx)(n.code,{children:"Text"}),", etc) that got the ",(0,t.jsx)(n.code,{children:"testID"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In v2 we fixed this inconsistency, which may result in failing tests, if you relied on this behavior. There are few ways to handle these failures:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["pass the ",(0,t.jsx)(n.code,{children:"testID"})," prop down so it can reach a native component, like ",(0,t.jsx)(n.code,{children:"View"})," or ",(0,t.jsx)(n.code,{children:"Text"})]}),"\n",(0,t.jsxs)(n.li,{children:["replace ",(0,t.jsx)(n.code,{children:"testID"})," with proper ",(0,t.jsx)(n.code,{children:"accessibilityHint"})," or ",(0,t.jsx)(n.code,{children:"accessibilityLabel"})," if it benefits the user"]}),"\n",(0,t.jsxs)(n.li,{children:["use safe queries like ",(0,t.jsx)(n.code,{children:"*ByText"})," or ",(0,t.jsx)(n.code,{children:"*ByA11yHint"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"deprecated-flushmicrotasksqueue",children:["Deprecated ",(0,t.jsx)(n.code,{children:"flushMicrotasksQueue"})]}),"\n",(0,t.jsxs)(n.p,{children:["We have deprecated ",(0,t.jsx)(n.code,{children:"flushMicrotasksQueue"})," and plan to remove it in the next major. We have better alternatives available for helping you write async tests \u2013 ",(0,t.jsx)(n.code,{children:"findBy"})," async queries and ",(0,t.jsx)(n.code,{children:"waitFor"})," helper."]}),"\n",(0,t.jsx)(n.p,{children:"If you can't or don't want to migrate your tests, don't worry. You can use the same implementation we have today:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function flushMicrotasksQueue() {\n  return new Promise((resolve) => setImmediate(resolve));\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);