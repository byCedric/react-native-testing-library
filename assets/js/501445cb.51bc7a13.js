"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[381],{1690:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=s(5893),i=s(1151);const l={id:"user-event",title:"User Event"},r=void 0,o={id:"user-event",title:"User Event",description:"User Event interactions require RNTL v12.2.0 or later.",source:"@site/docs/UserEvent.md",sourceDirName:".",slug:"/user-event",permalink:"/react-native-testing-library/docs/user-event",draft:!1,unlisted:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/UserEvent.md",tags:[],version:"current",frontMatter:{id:"user-event",title:"User Event"},sidebar:"docs",previous:{title:"Queries",permalink:"/react-native-testing-library/docs/api-queries"},next:{title:"Jest Matchers",permalink:"/react-native-testing-library/docs/jest-matchers"}},c={},d=[{value:"Comparison with Fire Event API",id:"comparison-with-fire-event-api",level:2},{value:"<code>setup()</code>",id:"setup",level:2},{value:"Options",id:"setup-options",level:3},{value:"<code>press()</code>",id:"press",level:2},{value:"<code>longPress()</code>",id:"longpress",level:2},{value:"Options",id:"longpress-options",level:3},{value:"<code>type()</code>",id:"type",level:2},{value:"Options",id:"type-options",level:3},{value:"Sequence of events",id:"sequence-of-events",level:3},{value:"<code>clear()</code>",id:"clear",level:2},{value:"Sequence of events",id:"sequence-of-events-1",level:3},{value:"<code>scrollTo()</code>",id:"scrollto",level:2},{value:"Options",id:"scroll-to-options",level:3},{value:"Sequence of events",id:"sequence-of-events-2",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"User Event interactions require RNTL v12.2.0 or later."})}),"\n",(0,t.jsx)(n.h2,{id:"comparison-with-fire-event-api",children:"Comparison with Fire Event API"}),"\n",(0,t.jsxs)(n.p,{children:["Fire Event is our original event simulation API. It can invoke ",(0,t.jsx)(n.strong,{children:"any event handler"})," declared on ",(0,t.jsx)(n.strong,{children:"either host or composite elements"}),". Suppose the element does not have ",(0,t.jsx)(n.code,{children:"onEventName"})," event handler for the passed ",(0,t.jsx)(n.code,{children:"eventName"})," event, or the element is disabled. In that case, Fire Event will traverse up the component tree, looking for an event handler on both host and composite elements along the way. By default, it will ",(0,t.jsx)(n.strong,{children:"not pass any event data"}),", but the user might provide it in the last argument."]}),"\n",(0,t.jsxs)(n.p,{children:["In contrast, User Event provides realistic event simulation for user interactions like ",(0,t.jsx)(n.code,{children:"press"})," or ",(0,t.jsx)(n.code,{children:"type"}),". Each interaction will trigger a ",(0,t.jsx)(n.strong,{children:"sequence of events"})," corresponding to React Native runtime behavior. These events will be invoked ",(0,t.jsx)(n.strong,{children:"only on host elements"}),", and ",(0,t.jsx)(n.strong,{children:"will automatically receive event data"})," corresponding to each event."]}),"\n",(0,t.jsx)(n.p,{children:"If User Event supports a given interaction, you should always prefer it over the Fire Event counterpart, as it will make your tests much more realistic and, hence, reliable. In other cases, e.g., when User Event does not support the given event or when invoking event handlers on composite elements, you have to use Fire Event as the only available option."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:(0,t.jsx)(n.code,{children:"setup()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"userEvent.setup(options?: {\n  delay: number;\n  advanceTimers: (delay: number) => Promise<void> | void;\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const user = userEvent.setup();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Creates a User Event object instance, which can be used to trigger events."}),"\n",(0,t.jsx)(n.h3,{id:"setup-options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delay"})," controls the default delay between subsequent events, e.g., keystrokes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"advanceTimers"})," is a time advancement utility function that should be used for fake timers. The default setup handles both real timers and Jest fake timers."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"press",children:(0,t.jsx)(n.code,{children:"press()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"press(\n  element: ReactTestInstance,\n): Promise<void>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const user = userEvent.setup();\nawait user.press(element);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This helper simulates a press on any pressable element, e.g. ",(0,t.jsx)(n.code,{children:"Pressable"}),", ",(0,t.jsx)(n.code,{children:"TouchableOpacity"}),", ",(0,t.jsx)(n.code,{children:"Text"}),", ",(0,t.jsx)(n.code,{children:"TextInput"}),", etc. Unlike ",(0,t.jsx)(n.code,{children:"fireEvent.press()"}),", a more straightforward API that will only call the ",(0,t.jsx)(n.code,{children:"onPress"})," prop, this function simulates the entire press interaction in a more realistic way by reproducing the event sequence emitted by React Native runtime. This helper will trigger additional events like ",(0,t.jsx)(n.code,{children:"pressIn"})," and ",(0,t.jsx)(n.code,{children:"pressOut"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"longpress",children:(0,t.jsx)(n.code,{children:"longPress()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"longPress(\n  element: ReactTestInstance,\n  options: { duration: number } = { duration: 500 }\n): Promise<void>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const user = userEvent.setup();\nawait user.longPress(element);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Simulates a long press user interaction. In React Native, the ",(0,t.jsx)(n.code,{children:"longPress"})," event is emitted when the press duration exceeds the long press threshold (by default, 500 ms). In other aspects, this action behaves similarly to regular ",(0,t.jsx)(n.code,{children:"press"})," action, e.g., by emitting ",(0,t.jsx)(n.code,{children:"pressIn"})," and ",(0,t.jsx)(n.code,{children:"pressOut"})," events. The press duration is customizable through the options. This should be useful if you use the ",(0,t.jsx)(n.code,{children:"delayLongPress"})," prop. When using real timers, this will take 500 ms, so it is highly recommended to use that API with fake timers to prevent the test from taking a long time to run."]}),"\n",(0,t.jsx)(n.h3,{id:"longpress-options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"duration"})," - duration of the press in milliseconds. The default value is 500 ms."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"type",children:(0,t.jsx)(n.code,{children:"type()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type(\n  element: ReactTestInstance,\n  text: string,\n  options?: {\n    skipPress?: boolean\n    submitEditing?: boolean\n  }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const user = userEvent.setup();\nawait user.type(textInput, 'Hello world!');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This helper simulates the user focusing on a ",(0,t.jsx)(n.code,{children:"TextInput"})," element, typing ",(0,t.jsx)(n.code,{children:"text"})," one character at a time, and leaving the element."]}),"\n",(0,t.jsxs)(n.p,{children:["This function supports only host ",(0,t.jsx)(n.code,{children:"TextInput"})," elements. Passing other element types will result in throwing an error."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This function will add text to the text already present in the text input (as specified by ",(0,t.jsx)(n.code,{children:"value"})," or ",(0,t.jsx)(n.code,{children:"defaultValue"})," props). To replace existing text, use ",(0,t.jsx)(n.a,{href:"#clear",children:(0,t.jsx)(n.code,{children:"clear()"})})," helper first."]})}),"\n",(0,t.jsx)(n.h3,{id:"type-options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skipPress"})," - if true, ",(0,t.jsx)(n.code,{children:"pressIn"})," and ",(0,t.jsx)(n.code,{children:"pressOut"})," events will not be triggered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"submitEditing"})," - if true, ",(0,t.jsx)(n.code,{children:"submitEditing"})," event will be triggered after typing the text."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sequence-of-events",children:"Sequence of events"}),"\n",(0,t.jsxs)(n.p,{children:["The sequence of events depends on the ",(0,t.jsx)(n.code,{children:"multiline"})," prop and the passed options."]}),"\n",(0,t.jsxs)(n.p,{children:["Events will not be emitted if the ",(0,t.jsx)(n.code,{children:"editable"})," prop is set to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Entering the element"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pressIn"})," (optional)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"focus"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pressOut"})," (optional)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"pressIn"})," and ",(0,t.jsx)(n.code,{children:"pressOut"})," events are sent by default but can be skipped by passing the ",(0,t.jsx)(n.code,{children:"skipPress: true"})," option."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Typing (for each character)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyPress"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"textInput"})," (optional)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"change"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"changeText"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"selectionChange"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"textInput"})," event is sent only for multiline text inputs."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Leaving the element"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"submitEditing"})," (optional)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"endEditing"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"blur"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"submitEditing"})," event is skipped by default. It can sent by setting the ",(0,t.jsx)(n.code,{children:"submitEditing: true"})," option."]}),"\n",(0,t.jsx)(n.h2,{id:"clear",children:(0,t.jsx)(n.code,{children:"clear()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"clear(\n  element: ReactTestInstance,\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const user = userEvent.setup();\nawait user.clear(textInput);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This helper simulates the user clearing the content of a ",(0,t.jsx)(n.code,{children:"TextInput"})," element."]}),"\n",(0,t.jsxs)(n.p,{children:["This function supports only host ",(0,t.jsx)(n.code,{children:"TextInput"})," elements. Passing other element types will result in throwing an error."]}),"\n",(0,t.jsx)(n.h3,{id:"sequence-of-events-1",children:"Sequence of events"}),"\n",(0,t.jsxs)(n.p,{children:["The sequence of events depends on the ",(0,t.jsx)(n.code,{children:"multiline"})," prop and passed options."]}),"\n",(0,t.jsxs)(n.p,{children:["Events will not be emitted if the ",(0,t.jsx)(n.code,{children:"editable"})," prop is set to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Entering the element"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"focus"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Selecting all content"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"selectionChange"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pressing backspace"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyPress"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"textInput"})," (optional)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"change"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"changeText"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"selectionChange"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"textInput"})," event is sent only for multiline text inputs."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Leaving the element"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"endEditing"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"blur"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scrollto",children:(0,t.jsx)(n.code,{children:"scrollTo()"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scrollTo"})," interaction has been introduced in RNTL v12.4.0."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"scrollTo(\n  element: ReactTestInstance,\n  options: {\n    y: number,\n    momentumY?: number,\n    contentSize?: { width: number, height: number },\n    layoutMeasurement?: { width: number, height: number },\n  } | {\n    x: number,\n    momentumX?: number,\n    contentSize?: { width: number, height: number },\n    layoutMeasurement?: { width: number, height: number },\n  }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const user = userEvent.setup();\nawait user.scrollTo(scrollView, { y: 100, momentumY: 200 });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This helper simulates the user scrolling a host ",(0,t.jsx)(n.code,{children:"ScrollView"})," element."]}),"\n",(0,t.jsxs)(n.p,{children:["This function supports only host ",(0,t.jsx)(n.code,{children:"ScrollView"})," elements, passing other element types will result in an error. Note that ",(0,t.jsx)(n.code,{children:"FlatList"})," is accepted as it renders to a host ",(0,t.jsx)(n.code,{children:"ScrolLView"})," element."]}),"\n",(0,t.jsxs)(n.p,{children:["Scroll interaction should match the ",(0,t.jsx)(n.code,{children:"ScrollView"})," element direction:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["for a vertical scroll view (default or ",(0,t.jsx)(n.code,{children:"horizontal={false}"}),"), you should pass only the ",(0,t.jsx)(n.code,{children:"y"})," option (and optionally also ",(0,t.jsx)(n.code,{children:"momentumY"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["for a horizontal scroll view (",(0,t.jsx)(n.code,{children:"horizontal={true}"}),"), you should pass only the ",(0,t.jsx)(n.code,{children:"x"})," option (and optionally ",(0,t.jsx)(n.code,{children:"momentumX"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Each scroll interaction consists of a mandatory drag scroll part, which simulates the user dragging the scroll view with his finger (the ",(0,t.jsx)(n.code,{children:"y"})," or ",(0,t.jsx)(n.code,{children:"x"})," option). This may optionally be followed by a momentum scroll movement, which simulates the inertial movement of scroll view content after the user lifts his finger (",(0,t.jsx)(n.code,{children:"momentumY"})," or ",(0,t.jsx)(n.code,{children:"momentumX"})," options)."]}),"\n",(0,t.jsx)(n.h3,{id:"scroll-to-options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"})," - target vertical drag scroll position"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x"})," - target horizontal drag scroll position"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"momentumY"})," - target vertical momentum scroll position"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"momentumX"})," - target horizontal momentum scroll position"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"contentSize"})," - passed to ",(0,t.jsx)(n.code,{children:"ScrollView"})," events and enabling ",(0,t.jsx)(n.code,{children:"FlatList"})," updates"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"layoutMeasurement"})," - passed to ",(0,t.jsx)(n.code,{children:"ScrollView"})," events and enabling ",(0,t.jsx)(n.code,{children:"FlatList"})," updates"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"User Event will generate several intermediate scroll steps to simulate user scroll interaction. You should not rely on exact number or values of these scrolls steps as they might be change in the future version."}),"\n",(0,t.jsxs)(n.p,{children:["This function will remember where the last scroll ended, so subsequent scroll interaction will starts from that position. The initial scroll position will be assumed to be ",(0,t.jsx)(n.code,{children:"{ y: 0, x: 0 }"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To simulate a ",(0,t.jsx)(n.code,{children:"FlatList"})," (and other controls based on ",(0,t.jsx)(n.code,{children:"VirtualizedList"}),") scrolling, you should pass the ",(0,t.jsx)(n.code,{children:"contentSize"})," and ",(0,t.jsx)(n.code,{children:"layoutMeasurement"})," options, which enable the underlying logic to update the currently visible window."]}),"\n",(0,t.jsx)(n.h3,{id:"sequence-of-events-2",children:"Sequence of events"}),"\n",(0,t.jsx)(n.p,{children:"The sequence of events depends on whether the scroll includes an optional momentum scroll component."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Drag scroll"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"contentSizeChange"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"scrollBeginDrag"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"scroll"})," (multiple events)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"scrollEndDrag"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Momentum scroll (optional)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"momentumScrollBegin"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"scroll"})," (multiple events)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"momentumScrollEnd"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(7294);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);