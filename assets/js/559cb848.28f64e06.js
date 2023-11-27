"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,h=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3901:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(3743);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};function l(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:l}=e;return n.createElement("div",{className:i.tableOfContentsInline},n.createElement(r.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),i=a(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){var a;let{anchorTopOffset:n}=t;const r=e.find((e=>o(e).top>=n));if(r){var i;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(i=e[e.indexOf(r)-1])?i:null}return null!=(a=e[e.length-1])?a:null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),a=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:l}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),o=c(s,{anchorTopOffset:a.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?r.createElement("ul",{className:i?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const p=r.memo(u);function h(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const f=(0,i.L)(),v=null!=m?m:f.tableOfContents.minHeadingLevel,g=null!=u?u:f.tableOfContents.maxHeadingLevel,k=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>s({toc:l(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return d((0,r.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[o,c,v,g])),r.createElement(p,(0,n.Z)({toc:k,className:a,linkClassName:o},h))}},1317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=a(3901);const l={id:"migration-jest-native",title:"Migration from Jest Native matchers"},s=void 0,o={unversionedId:"migration-jest-native",id:"migration-jest-native",title:"Migration from Jest Native matchers",description:"This guide describes the steps necessary to migrate from legacy Jest Native matchers v5 to built-in Jest matchers.",source:"@site/docs/MigrationJestMatchers.md",sourceDirName:".",slug:"/migration-jest-native",permalink:"/react-native-testing-library/docs/migration-jest-native",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/MigrationJestMatchers.md",tags:[],version:"current",frontMatter:{id:"migration-jest-native",title:"Migration from Jest Native matchers"},sidebar:"docs",previous:{title:"Understanding Act function",permalink:"/react-native-testing-library/docs/understanding-act"},next:{title:"Migration to 12.0",permalink:"/react-native-testing-library/docs/migration-v12"}},c={},m=[{value:"General notes",id:"general-notes",level:2},{value:"Usage",id:"usage",level:2},{value:"Gradual migration",id:"gradual-migration",level:3},{value:"Migration details",id:"migration-details",level:2},{value:"Matchers not requiring changes",id:"matchers-not-requiring-changes",level:3},{value:"Replaced matchers",id:"replaced-matchers",level:3},{value:"Added matchers",id:"added-matchers",level:3},{value:"Noteworthy details",id:"noteworthy-details",level:3}],d={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide describes the steps necessary to migrate from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-native"},"legacy Jest Native matchers v5")," to ",(0,r.kt)("a",{parentName:"p",href:"jest-matchers"},"built-in Jest matchers"),"."),(0,r.kt)(i.Z,{toc:m,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"general-notes"},"General notes"),(0,r.kt)("p",null,"All of the built-in Jest matchers provided by the React Native Testing Library support only host elements. This should not be an issue, as all RNTL v12 queries already return only host elements. When this guide states that a given matcher should work the same it assumes behavior only host elements. If you need to assert the status of composite elements use Jest Native matchers in ",(0,r.kt)("a",{parentName:"p",href:"#gradual-migration"},"legacy mode"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can use the built-in matchers by adding the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-setup.ts")," file (configured using ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array"},(0,r.kt)("inlineCode",{parentName:"a"},"setupFilesAfterEnv")),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import '@testing-library/react-native/extend-expect';\n")),(0,r.kt)("h3",{id:"gradual-migration"},"Gradual migration"),(0,r.kt)("p",null,"You can use the built-in matchers alongside legacy Jest Native matchers by changing their import in your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-setup.ts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Replace this:\n// import '@testing-library/jest-native/extend-expect';\n\n// With this:\nimport '@testing-library/react-native/extend-expect';\nimport '@testing-library/jest-native/legacy-extend-expect';\n")),(0,r.kt)("p",null,"In this case legacy matchers will be available using the ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy_")," prefix, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"expect(element).legacy_toHaveAccessibilityState({ busy: true });\n")),(0,r.kt)("h2",{id:"migration-details"},"Migration details"),(0,r.kt)("h3",{id:"matchers-not-requiring-changes"},"Matchers not requiring changes"),(0,r.kt)("p",null,"The following matchers should work the same:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeemptyelement"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeEmptyElement()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeEnabled()")," / ",(0,r.kt)("inlineCode",{parentName:"a"},"toBeDisabled()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeonthescreen"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeOnTheScreen()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobevisible"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeVisible()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tocontainelement"},(0,r.kt)("inlineCode",{parentName:"a"},"toContainElement()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tohaveaccessibilityvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveAccessibilityValue()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tohavedisplayvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveDisplayValue()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tohaveprop"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveProp()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tohavestyle"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveStyle()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tohavetextcontent"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveTextContent()")))),(0,r.kt)("h3",{id:"replaced-matchers"},"Replaced matchers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toHaveAccessibilityState()")," matcher has been replaced by the following matchers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enabled state: ",(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeEnabled()")," / ",(0,r.kt)("inlineCode",{parentName:"a"},"toBeDisabled()"))),(0,r.kt)("li",{parentName:"ul"},"checked state: ",(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobechecked"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeChecked()")," / ",(0,r.kt)("inlineCode",{parentName:"a"},"toBePartiallyChecked()"))),(0,r.kt)("li",{parentName:"ul"},"selected state: ",(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeselected"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeSelected()"))),(0,r.kt)("li",{parentName:"ul"},"expanded state: ",(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeexpanded"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeExpanded()")," / ",(0,r.kt)("inlineCode",{parentName:"a"},"toBeCollapsed()"))),(0,r.kt)("li",{parentName:"ul"},"busy state: ",(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobebusy"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeBusy()")))),(0,r.kt)("p",null,"The new matchers support both ",(0,r.kt)("inlineCode",{parentName:"p"},"accessibilityState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-*")," props."),(0,r.kt)("h3",{id:"added-matchers"},"Added matchers"),(0,r.kt)("p",null,"New ",(0,r.kt)("a",{parentName:"p",href:"jest-matchers#tohaveaccessiblename"},(0,r.kt)("inlineCode",{parentName:"a"},"toHaveAccessibleName()"))," has been added."),(0,r.kt)("h3",{id:"noteworthy-details"},"Noteworthy details"),(0,r.kt)("p",null,"You should be aware of the following details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobeenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeEnabled()")," / ",(0,r.kt)("inlineCode",{parentName:"a"},"toBeDisabled()"))," matchers also check the disabled state for the element's ancestors and not only the element itself. This is the same as in legacy Jest Native matchers of the same name but differs from the removed ",(0,r.kt)("inlineCode",{parentName:"li"},"toHaveAccessibilityState()")," matcher."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobechecked"},(0,r.kt)("inlineCode",{parentName:"a"},"toBeChecked()"))," matcher supports only elements with a ",(0,r.kt)("inlineCode",{parentName:"li"},"checkbox")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"radio")," role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"jest-matchers#tobechecked"},(0,r.kt)("inlineCode",{parentName:"a"},"toBePartiallyChecked()"))," matcher supports only elements with ",(0,r.kt)("inlineCode",{parentName:"li"},"checkbox")," role")))}p.isMDXComponent=!0}}]);