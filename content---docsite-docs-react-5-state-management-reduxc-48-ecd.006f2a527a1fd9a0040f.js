(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return o}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(537);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={id:"redux",title:"Redux",sidebar_label:"Redux"},u=[{value:"\u601d\u60f3\u7cbe\u534e\u4e00\uff1a\u5de7\u7528 reduce \u51fd\u6570",id:"\u601d\u60f3\u7cbe\u534e\u4e00\uff1a\u5de7\u7528-reduce-\u51fd\u6570",children:[{value:"\u4ec0\u4e48\u662f reduce",id:"\u4ec0\u4e48\u662f-reduce",children:[]},{value:"\u5b9e\u73b0\u4e00\u4e2a reduce",id:"\u5b9e\u73b0\u4e00\u4e2a-reduce",children:[]},{value:"\u4ece reduce \u5230 redux",id:"\u4ece-reduce-\u5230-redux",children:[]}]},{value:"Redux \u4e09\u5927\u7406\u5ff5",id:"redux-\u4e09\u5927\u7406\u5ff5",children:[]}],i={rightToc:u},l="wrapper";function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u601d\u60f3\u7cbe\u534e\u4e00\uff1a\u5de7\u7528-reduce-\u51fd\u6570"},"\u601d\u60f3\u7cbe\u534e\u4e00\uff1a\u5de7\u7528 reduce \u51fd\u6570"),Object(a.b)("h3",{id:"\u4ec0\u4e48\u662f-reduce"},"\u4ec0\u4e48\u662f reduce"),Object(a.b)("h3",{id:"\u5b9e\u73b0\u4e00\u4e2a-reduce"},"\u5b9e\u73b0\u4e00\u4e2a reduce"),Object(a.b)("p",null,"\u5148\u770b\u4e00\u4e0b\u6700\u57fa\u672c\u7684 reduce \u51fd\u6570\u662f\u5982\u4f55\u5b9e\u73b0\u7684"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// reduce :: (a -> b -> a) -> a -> [b] -> a\nfunction reduce(reducer, initialData, allData) {\n  let accumulator = initialData;\n  for (let i = 0; i < allData.length; i++) {\n    let curData = allData[i]\n    accumulator = reducer(accumulator, curData)\n  }\n  return accumulator;\n}\nreduce((a, b) => a + b, 0, [1, 2, 3, 4, 5]) // 15\nreduce((a, b) => a + b, 10, [1, 2, 3, 4, 5]) // 25\n")),Object(a.b)("h3",{id:"\u4ece-reduce-\u5230-redux"},"\u4ece reduce \u5230 redux"),Object(a.b)("p",null,"\u6b64\u65f6\u66ff\u6362\u51e0\u4e2a\u6982\u5ff5\uff0c\u672c\u8d28\u4e0a\u662f\u4e0d\u53d8\u7684\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"accumulator -> state"),Object(a.b)("li",{parentName:"ul"},"allData -> eventStream"),Object(a.b)("li",{parentName:"ul"},"curData -> action")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// redux :: (a -> b -> a) -> a -> [b] -> a\nfunction redux(reducer, initialState, eventStream) {\n  let state = initialState;\n  let action;\n  for (let i = 0; i < eventStream.length; i++) {\n    let action = eventStream[i];\n    state = reducer(state, action);\n  }\n  return state;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// reducer :: a -> b -> a\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'SET_NAME':\n      return {\n        ...state,\n        name: action.payload.name\n      }\n    case 'SET_AGE':\n      return {\n        ...state,\n        age: action.payload.age\n      }\n  }\n}\n\nconst initialState = {name: 'Kimi', age: 18};\n\nconst eventStream = [\n  {type: 'SET_NAME', payload: {name: 'Robbie'}},\n  {type: 'SET_AGE', payload: {age: 16}}\n];\n\nredux(reducer, initialState, eventStream) // {name: 'Robbie', age: 16}\n")),Object(a.b)("p",null,"\u4ee5\u4e0a\u5c31\u662f Redux \u6700\u6700\u6700\u57fa\u672c\u7684\u4e00\u4e2a\u96cf\u5f62\uff0c\u5f53\u7136\u6709\u8fd9\u4e9b\u80af\u5b9a\u8fd8\u662f\u4e0d\u591f\u7684\uff0c\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u6211\u4eec\u518d\u4e00\u6b65\u6b65\u7ed9\u5b83\u52a0\u5f3a\u3002\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa Redux \u7684\u547d\u540d\u4e5f\u53ef\u80fd\u53d6\u81ea ",Object(a.b)("inlineCode",{parentName:"p"},"reduce + x")," \u7684\u7ec4\u5408\uff0c\u4e00\u822c\u548c React \u76f8\u5173\u7684\u4f1a\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"x")," \u6bd4\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"jsx"),", ",Object(a.b)("inlineCode",{parentName:"p"},"mdx")," \u7b49\u3002\u867d\u7136\u73b0\u5728\u7684 redux \u4e5f\u4e0d\u4f9d\u8d56 react \uff0c\u4f46\u4e0d\u53ef\u5426\u8ba4\u5176\u5174\u8d77\u548c react \u7684\u6d41\u884c\u4e5f\u606f\u606f\u76f8\u5173\u3002"),Object(a.b)("h2",{id:"redux-\u4e09\u5927\u7406\u5ff5"},"Redux \u4e09\u5927\u7406\u5ff5"),Object(a.b)("p",null,"Redux\u662f\u6709\u81ea\u5df1\u7684",Object(a.b)("strong",{parentName:"p"},"\u4e09\u5927\u7406\u5ff5\u7684\uff08Three Principles\uff09"),"\uff0c\u6240\u4ee5\u6211\u4eec\u7684\u6700\u4f73\u5b9e\u8df5\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e09\u4e2a\u7406\u5ff5\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Single source of truth"),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709 state \u5e94\u8be5\u88ab\u4fdd\u5b58\u5728\u5355\u4e2a store \u4e2d\u3002"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"State is read-only"),": state \u4e0d\u80fd\u88ab\u76f4\u63a5\u4fee\u6539\uff0c\u53ea\u80fd\u901a\u8fc7\u89e6\u53d1 action \u6765\u4fee\u6539\u3002 "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Changes are made with pure functions"),": \u4f7f\u7528",Object(a.b)("strong",{parentName:"li"},"\u7eaf\u51fd\u6570\u5f0f"),"\u7684 reducer \u6765\u5904\u7406\u6570\u636e\u4fee\u6539\u903b\u8f91\u3002\u7eaf\u51fd\u6570\u610f\u5473\u7740\u6ca1\u6709 side effect\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u903b\u8f91\u4e0d\u80fd\u4f9d\u8d56\u4e8e\u5168\u5c40\u53d8\u91cf\uff0c\u53ea\u80fd\u4f9d\u8d56\u4e8e\u4f20\u5165\u7684\u53c2\u6570\uff1b\u4e0d\u80fd\u4fee\u6539\u4f20\u5165\u7684\u53c2\u6570\uff0c\u8fd4\u56de\u7684\u5e94\u8be5\u662f\u4e00\u4e2a\u5168\u65b0\u7684\u5bf9\u8c61\u3002")))}o.isMDXComponent=!0},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var l="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d[i+"."+b]||d[b]||o[b]||c;return n?r.a.createElement(p,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(p,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,u=new Array(c);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[l]="string"==typeof e?e:a,u[1]=i;for(var b=2;b<c;b++)u[b]=n[b];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);