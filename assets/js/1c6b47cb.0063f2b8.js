"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[671],{1638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(5893),i=t(1151);const o={id:"testing-env",title:"Testing Environment"},r=void 0,a={id:"testing-env",title:"Testing Environment",description:"This document is intended for a more advanced audience who want to understand the internals of our testing environment better, e.g., to contribute to the codebase. You should be able to write integration or component tests without reading this.",source:"@site/docs/TestingEnvironment.md",sourceDirName:".",slug:"/testing-env",permalink:"/react-native-testing-library/docs/testing-env",draft:!1,unlisted:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/TestingEnvironment.md",tags:[],version:"current",frontMatter:{id:"testing-env",title:"Testing Environment"},sidebar:"docs",previous:{title:"ESLint Plugin Testing Library Compatibility",permalink:"/react-native-testing-library/docs/eslint-plugin-testing-library"},next:{title:"Understanding Act function",permalink:"/react-native-testing-library/docs/understanding-act"}},c={},d=[{value:"React renderers",id:"react-renderers",level:2},{value:"React Test Renderer",id:"react-test-renderer",level:2},{value:"Element tree",id:"element-tree",level:2},{value:"Host and composite components",id:"host-and-composite-components",level:2},{value:"Differentiating between host and composite elements",id:"differentiating-between-host-and-composite-elements",level:3},{value:"Tree nodes",id:"tree-nodes",level:2},{value:"Asserting props",id:"asserting-props",level:3},{value:"Tree navigation",id:"tree-navigation",level:2},{value:"Queries",id:"queries",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This document is intended for a more advanced audience who want to understand the internals of our testing environment better, e.g., to contribute to the codebase. You should be able to write integration or component tests without reading this."})}),"\n",(0,s.jsx)(n.p,{children:"React Native Testing Library allows you to write integration and component tests for your React Native app or library. While the JSX code used in tests closely resembles your React Native app, things are not as simple as they might appear. This document will describe the key elements of our testing environment and highlight things to be aware of when writing more advanced tests or diagnosing issues."}),"\n",(0,s.jsx)(n.h2,{id:"react-renderers",children:"React renderers"}),"\n",(0,s.jsxs)(n.p,{children:["React allows you to write declarative code using JSX, write function or class components, or use hooks like ",(0,s.jsx)(n.code,{children:"useState"}),". You need to use a renderer to output the results of your components. Every React app uses some renderer:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React Native is a renderer for mobile apps,"}),"\n",(0,s.jsx)(n.li,{children:"React DOM is a renderer for web apps,"}),"\n",(0,s.jsxs)(n.li,{children:["There are other more ",(0,s.jsx)(n.a,{href:"https://github.com/chentsulin/awesome-react-renderer",children:"specialized renderers"})," that can e.g., render to console or HTML canvas."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you run your tests in the React Native Testing Library, somewhat contrary to what the name suggests, they are actually ",(0,s.jsx)(n.strong,{children:"not"})," using React Native renderer. This is because this renderer needs to be run on an iOS or Android operating system, so it would need to run on a device or simulator."]}),"\n",(0,s.jsx)(n.h2,{id:"react-test-renderer",children:"React Test Renderer"}),"\n",(0,s.jsx)(n.p,{children:"Instead, RNTL uses React Test Renderer, a specialized renderer that allows rendering to pure JavaScript objects without access to mobile OS and can run in a Node.js environment using Jest (or any other JavaScript test runner)."}),"\n",(0,s.jsx)(n.p,{children:"Using React Test Renderer has pros and cons."}),"\n",(0,s.jsx)(n.p,{children:"Benefits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"tests can run on most CIs (Linux, etc) and do not require a mobile device or emulator"}),"\n",(0,s.jsx)(n.li,{children:"faster test execution"}),"\n",(0,s.jsx)(n.li,{children:"light runtime environment"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Disadvantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tests do not execute native code"}),"\n",(0,s.jsx)(n.li,{children:"Tests are unaware of the view state that would be managed by native components, e.g., focus, unmanaged text boxes, etc."}),"\n",(0,s.jsx)(n.li,{children:"Assertions do not operate on native view hierarchy"}),"\n",(0,s.jsx)(n.li,{children:"Runtime behaviors are simulated, sometimes imperfectly"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It's worth noting that the React Testing Library (web one) works a bit differently. While RTL also runs in Jest, it has access to a simulated browser DOM environment from the ",(0,s.jsx)(n.code,{children:"jsdom"})," package, which allows it to use a regular React DOM renderer. Unfortunately, there is no similar React Native runtime environment package. This is probably because while the browser environment is well-defined and highly standardized, the React Native environment constantly evolves in sync with the evolution of underlying OS-es. Maintaining such an environment would require duplicating countless React Native behaviors and keeping them in sync as React Native develops."]}),"\n",(0,s.jsx)(n.h2,{id:"element-tree",children:"Element tree"}),"\n",(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.code,{children:"render()"})," function creates an element tree. This is done internally by invoking ",(0,s.jsx)(n.code,{children:"TestRenderer.create()"}),' method. The output tree represents your React Native component tree, and each node of that tree is an "instance" of some React component (to be more precise, each node represents a React fiber, and only class components have instances, while function components store the hook state using fibers).']}),"\n",(0,s.jsxs)(n.p,{children:["These tree elements are represented by ",(0,s.jsx)(n.code,{children:"ReactTestInstance"})," type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"interface ReactTestInstance {\n  type: ElementType;\n  props: { [propName: string]: any };\n  parent: ReactTestInstance | null;\n  children: Array<ReactTestInstance | string>;\n\n  // Other props and methods\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Based on: ",(0,s.jsx)(n.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-test-renderer/index.d.ts",children:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-test-renderer/index.d.ts"})]}),"\n",(0,s.jsx)(n.h2,{id:"host-and-composite-components",children:"Host and composite components"}),"\n",(0,s.jsx)(n.p,{children:"One of the most important aspects of the element tree is that it is composed of both host and composite components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactnative.dev/architecture/glossary#react-host-components-or-host-components",children:"Host components"})," will have direct counterparts in the native view tree. Typical examples are ",(0,s.jsx)(n.code,{children:"<View>"}),", ",(0,s.jsx)(n.code,{children:"<Text>"})," , ",(0,s.jsx)(n.code,{children:"<TextInput>"}),", and ",(0,s.jsx)(n.code,{children:"<Image>"})," from React Native. You can think of these as an analog of ",(0,s.jsx)(n.code,{children:"<div>"}),", ",(0,s.jsx)(n.code,{children:"<span>"})," etc on the Web. You can also create custom host views as native modules or import them from 3rd party libraries, like React Navigation or React Native Gesture Handler."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactnative.dev/architecture/glossary#react-composite-components",children:"Composite components"})," are React code organization units that exist only on the JavaScript side of your app. Typical examples are components you create (function and class components), components imported from React Native (",(0,s.jsx)(n.code,{children:"View"}),", ",(0,s.jsx)(n.code,{children:"Text"}),", etc.), or 3rd party packages."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["That might initially sound confusing since we put React Native's ",(0,s.jsx)(n.code,{children:"View"})," in both categories. There are two ",(0,s.jsx)(n.code,{children:"View"})," components: composite and host. The relation between them is as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["composite ",(0,s.jsx)(n.code,{children:"View"})," is the type imported from the ",(0,s.jsx)(n.code,{children:"react-native"})," package. It is a JavaScript component that renders the host ",(0,s.jsx)(n.code,{children:"View"})," as its only child in the element tree."]}),"\n",(0,s.jsxs)(n.li,{children:["host ",(0,s.jsx)(n.code,{children:"View"}),", which you do not render directly. React Native takes the props you pass to the composite ",(0,s.jsx)(n.code,{children:"View"}),", does some processing on them and passes them to the host ",(0,s.jsx)(n.code,{children:"View"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The part of the tree looks as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"* <View> (composite)\n  * <View> (host)\n    * children prop passed in JSX\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A similar relation exists between other composite and host pairs: e.g. ",(0,s.jsx)(n.code,{children:"Text"})," , ",(0,s.jsx)(n.code,{children:"TextInput"}),", and ",(0,s.jsx)(n.code,{children:"Image"})," components:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"* <Text> (composite)\n  * <Text> (host)\n    * string (or mixed) content\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Not all React Native components are organized this way, e.g., when you use ",(0,s.jsx)(n.code,{children:"Pressable"})," (or ",(0,s.jsx)(n.code,{children:"TouchableOpacity"}),"), there is no host ",(0,s.jsx)(n.code,{children:"Pressable"}),", but composite ",(0,s.jsx)(n.code,{children:"Pressable"})," is rendering a host ",(0,s.jsx)(n.code,{children:"View"})," with specific props being set:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"* <Pressable> (composite)\n  * <View accessible={true} {...}> (host)\n    * children prop passed in JSX\n"})}),"\n",(0,s.jsx)(n.h3,{id:"differentiating-between-host-and-composite-elements",children:"Differentiating between host and composite elements"}),"\n",(0,s.jsxs)(n.p,{children:["Any easy way to differentiate between host and composite elements is the ",(0,s.jsx)(n.code,{children:"type"})," prop of ",(0,s.jsx)(n.code,{children:"ReactTestInstance"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["for host components, it's always a string value representing a component name, e.g., ",(0,s.jsx)(n.code,{children:'"View"'})]}),"\n",(0,s.jsx)(n.li,{children:"for composite components, it's a function or class corresponding to the component"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can use the following code to check if a given element is a host one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function isHostElement(element: ReactTestInstance) {\n  return typeof element.type === 'string';\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tree-nodes",children:"Tree nodes"}),"\n",(0,s.jsx)(n.p,{children:"We encourage you to only assert values on host views in your tests because they represent the user interface view and controls which the user can see and interact with. Users cannot see or interact with composite views as they exist purely in the JavaScript domain and do not generate any visible UI."}),"\n",(0,s.jsx)(n.h3,{id:"asserting-props",children:"Asserting props"}),"\n",(0,s.jsxs)(n.p,{children:["For example, suppose you assert a ",(0,s.jsx)(n.code,{children:"style"})," prop of a composite element. In that case, there is no guarantee that the style will be visible to the user, as the component author can forget to pass this prop to some underlying ",(0,s.jsx)(n.code,{children:"View"})," or other host component. Similarly ",(0,s.jsx)(n.code,{children:"onPress"})," event handler on a composite prop can be unreachable by the user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function ForgotToPassPropsButton({ title, onPress, style }) {\n  return (\n    <Pressable>\n      <Text>{title}</Text>\n    </Pressable>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, user-defined components accept both ",(0,s.jsx)(n.code,{children:"onPress"})," and ",(0,s.jsx)(n.code,{children:"style"})," props but do not pass them (through ",(0,s.jsx)(n.code,{children:"Pressable"}),") to host views, so they will not affect the user interface. Additionally, React Native and other libraries might pass some of the props under different names or transform their values between composite and host components."]}),"\n",(0,s.jsx)(n.h2,{id:"tree-navigation",children:"Tree navigation"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"You should avoid navigating over the element tree, as this makes your testing code fragile and may result in false positives. This section is more relevant for people who want to contribute to our codebase."})}),"\n",(0,s.jsxs)(n.p,{children:["You will encounter host and composite elements when navigating a tree of react elements using ",(0,s.jsx)(n.code,{children:"parent"})," or ",(0,s.jsx)(n.code,{children:"children"})," props of a ",(0,s.jsx)(n.code,{children:"ReactTestInstance"})," element. You should be careful when navigating the element tree, as the tree structure for third-party components can change independently from your code and cause unexpected test failures."]}),"\n",(0,s.jsxs)(n.p,{children:["Inside RNTL, we have various tree navigation helpers: ",(0,s.jsx)(n.code,{children:"getHostParent"}),", ",(0,s.jsx)(n.code,{children:"getHostChildren"}),", etc. These are intentionally not exported, as using them is not recommended."]}),"\n",(0,s.jsx)(n.h2,{id:"queries",children:"Queries"}),"\n",(0,s.jsx)(n.p,{children:"All recommended Testing Library queries return host components to encourage the best practices described above."}),"\n",(0,s.jsxs)(n.p,{children:["Only ",(0,s.jsx)(n.code,{children:"UNSAFE_*ByType"})," and ",(0,s.jsx)(n.code,{children:"UNSAFE_*ByProps"})," queries can return both host and composite components depending on used predicates. They are marked as unsafe precisely because testing composite components makes your test more fragile."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);