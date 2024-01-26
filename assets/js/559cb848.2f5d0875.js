"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[618],{2063:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var s=n(1351);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};var r=n(5893);function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.jsx)("div",{className:i.tableOfContentsInline,children:(0,r.jsx)(s.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}},1351:(e,t,n)=>{n.d(t,{Z:()=>j});var s=n(7294),i=n(6793);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){var n;let{anchorTopOffset:s}=t;const i=e.find((e=>l(e).top>=s));if(i){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function o(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=o();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push("h"+i+".anchor");return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),o=c(l,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var h=n(8746),m=n(5893);function u(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(h.Z,{to:"#"+e.id,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(u,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(u);function j(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:h,...u}=e;const j=(0,i.L)(),v=null!=o?o:j.tableOfContents.minHeadingLevel,g=null!=h?h:j.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>a({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[l,c,v,g])),(0,m.jsx)(x,{toc:f,className:n,linkClassName:l,...u})}},4635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(5893),i=n(1151),r=n(2063);const a={id:"migration-jest-native",title:"Migration from Jest Native matchers"},l=void 0,c={id:"migration-jest-native",title:"Migration from Jest Native matchers",description:"This guide describes the steps necessary to migrate from legacy Jest Native matchers v5 to built-in Jest matchers.",source:"@site/docs/MigrationJestMatchers.md",sourceDirName:".",slug:"/migration-jest-native",permalink:"/react-native-testing-library/docs/migration-jest-native",draft:!1,unlisted:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/MigrationJestMatchers.md",tags:[],version:"current",frontMatter:{id:"migration-jest-native",title:"Migration from Jest Native matchers"},sidebar:"docs",previous:{title:"Community Resources",permalink:"/react-native-testing-library/docs/community-resources"},next:{title:"Migration to 12.0",permalink:"/react-native-testing-library/docs/migration-v12"}},o={},d=[{value:"General notes",id:"general-notes",level:2},{value:"Usage",id:"usage",level:2},{value:"Gradual migration",id:"gradual-migration",level:3},{value:"Migration details",id:"migration-details",level:2},{value:"Matchers not requiring changes",id:"matchers-not-requiring-changes",level:3},{value:"Replaced matchers",id:"replaced-matchers",level:3},{value:"Added matchers",id:"added-matchers",level:3},{value:"Noteworthy details",id:"noteworthy-details",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This guide describes the steps necessary to migrate from ",(0,s.jsx)(t.a,{href:"https://github.com/testing-library/jest-native",children:"legacy Jest Native matchers v5"})," to ",(0,s.jsx)(t.a,{href:"jest-matchers",children:"built-in Jest matchers"}),"."]}),"\n","\n","\n",(0,s.jsx)(r.Z,{toc:d}),"\n",(0,s.jsx)(t.h2,{id:"general-notes",children:"General notes"}),"\n",(0,s.jsxs)(t.p,{children:["All of the built-in Jest matchers provided by the React Native Testing Library support only host elements. This should not be an issue, as all RNTL v12 queries already return only host elements. When this guide states that a given matcher should work the same it assumes behavior only host elements. If you need to assert the status of composite elements use Jest Native matchers in ",(0,s.jsx)(t.a,{href:"#gradual-migration",children:"legacy mode"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the built-in matchers by adding the following line to your ",(0,s.jsx)(t.code,{children:"jest-setup.ts"})," file (configured using ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array",children:(0,s.jsx)(t.code,{children:"setupFilesAfterEnv"})}),"):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import '@testing-library/react-native/extend-expect';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"gradual-migration",children:"Gradual migration"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the built-in matchers alongside legacy Jest Native matchers by changing their import in your ",(0,s.jsx)(t.code,{children:"jest-setup.ts"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Replace this:\n// import '@testing-library/jest-native/extend-expect';\n\n// With this:\nimport '@testing-library/react-native/extend-expect';\nimport '@testing-library/jest-native/legacy-extend-expect';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this case legacy matchers will be available using the ",(0,s.jsx)(t.code,{children:"legacy_"})," prefix, e.g.:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).legacy_toHaveAccessibilityState({ busy: true });\n"})}),"\n",(0,s.jsx)(t.h2,{id:"migration-details",children:"Migration details"}),"\n",(0,s.jsx)(t.h3,{id:"matchers-not-requiring-changes",children:"Matchers not requiring changes"}),"\n",(0,s.jsx)(t.p,{children:"The following matchers should work the same:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tobeemptyelement",children:(0,s.jsx)(t.code,{children:"toBeEmptyElement()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"jest-matchers#tobeenabled",children:[(0,s.jsx)(t.code,{children:"toBeEnabled()"})," / ",(0,s.jsx)(t.code,{children:"toBeDisabled()"})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tobeonthescreen",children:(0,s.jsx)(t.code,{children:"toBeOnTheScreen()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tobevisible",children:(0,s.jsx)(t.code,{children:"toBeVisible()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tocontainelement",children:(0,s.jsx)(t.code,{children:"toContainElement()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tohaveaccessibilityvalue",children:(0,s.jsx)(t.code,{children:"toHaveAccessibilityValue()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tohavedisplayvalue",children:(0,s.jsx)(t.code,{children:"toHaveDisplayValue()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tohaveprop",children:(0,s.jsx)(t.code,{children:"toHaveProp()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tohavestyle",children:(0,s.jsx)(t.code,{children:"toHaveStyle()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"jest-matchers#tohavetextcontent",children:(0,s.jsx)(t.code,{children:"toHaveTextContent()"})})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"replaced-matchers",children:"Replaced matchers"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"toHaveAccessibilityState()"})," matcher has been replaced by the following matchers:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["enabled state: ",(0,s.jsxs)(t.a,{href:"jest-matchers#tobeenabled",children:[(0,s.jsx)(t.code,{children:"toBeEnabled()"})," / ",(0,s.jsx)(t.code,{children:"toBeDisabled()"})]})]}),"\n",(0,s.jsxs)(t.li,{children:["checked state: ",(0,s.jsxs)(t.a,{href:"jest-matchers#tobechecked",children:[(0,s.jsx)(t.code,{children:"toBeChecked()"})," / ",(0,s.jsx)(t.code,{children:"toBePartiallyChecked()"})]})]}),"\n",(0,s.jsxs)(t.li,{children:["selected state: ",(0,s.jsx)(t.a,{href:"jest-matchers#tobeselected",children:(0,s.jsx)(t.code,{children:"toBeSelected()"})})]}),"\n",(0,s.jsxs)(t.li,{children:["expanded state: ",(0,s.jsxs)(t.a,{href:"jest-matchers#tobeexpanded",children:[(0,s.jsx)(t.code,{children:"toBeExpanded()"})," / ",(0,s.jsx)(t.code,{children:"toBeCollapsed()"})]})]}),"\n",(0,s.jsxs)(t.li,{children:["busy state: ",(0,s.jsx)(t.a,{href:"jest-matchers#tobebusy",children:(0,s.jsx)(t.code,{children:"toBeBusy()"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The new matchers support both ",(0,s.jsx)(t.code,{children:"accessibilityState"})," and ",(0,s.jsx)(t.code,{children:"aria-*"})," props."]}),"\n",(0,s.jsx)(t.h3,{id:"added-matchers",children:"Added matchers"}),"\n",(0,s.jsxs)(t.p,{children:["New ",(0,s.jsx)(t.a,{href:"jest-matchers#tohaveaccessiblename",children:(0,s.jsx)(t.code,{children:"toHaveAccessibleName()"})})," has been added."]}),"\n",(0,s.jsx)(t.h3,{id:"noteworthy-details",children:"Noteworthy details"}),"\n",(0,s.jsx)(t.p,{children:"You should be aware of the following details:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.a,{href:"jest-matchers#tobeenabled",children:[(0,s.jsx)(t.code,{children:"toBeEnabled()"})," / ",(0,s.jsx)(t.code,{children:"toBeDisabled()"})]})," matchers also check the disabled state for the element's ancestors and not only the element itself. This is the same as in legacy Jest Native matchers of the same name but differs from the removed ",(0,s.jsx)(t.code,{children:"toHaveAccessibilityState()"})," matcher."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"jest-matchers#tobechecked",children:(0,s.jsx)(t.code,{children:"toBeChecked()"})})," matcher supports only elements with a ",(0,s.jsx)(t.code,{children:"checkbox"})," or ",(0,s.jsx)(t.code,{children:"radio"})," role"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"jest-matchers#tobechecked",children:(0,s.jsx)(t.code,{children:"toBePartiallyChecked()"})})," matcher supports only elements with ",(0,s.jsx)(t.code,{children:"checkbox"})," role"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);