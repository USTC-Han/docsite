(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{390:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,b=s[c+"."+u]||s[u]||l[u]||i;return n?a.a.createElement(b,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));n(0);var r=n(390);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={id:"setTimeout-or-setInterval",title:"为什么使用 setTimeout 模拟 setInterval功能",author:"Robbie Han",authorTitle:"Front End Engineer @ Tradeshift",authorURL:"https://github.com/USTC-Han",authorImageURL:"https://robbie-pic.oss-cn-beijing.aliyuncs.com/IMG_4175.JPG?x-oss-process=style/compress",authorTwitter:null,tags:["setTimeout","setInterval"]},c=[{value:"setTimeout 和 setInterval功能",id:"settimeout-和-setinterval功能",children:[]},{value:"为什么要模拟",id:"为什么要模拟",children:[]}],p={rightToc:c},l="wrapper";function s(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(l,a({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"settimeout-和-setinterval功能"},"setTimeout 和 setInterval功能"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"setTimeout()"),"会在确定的时间调用回调函数，且回调函数只会执行一次。"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"setInterval()"),"会重复调用一个函数，在每次调用之间具有固定的时间延迟。"),Object(r.b)("h2",{id:"为什么要模拟"},"为什么要模拟"),Object(r.b)("p",null,"为什么使用",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout"),"模仿",Object(r.b)("inlineCode",{parentName:"p"},"setInterval"),"呢？这需要通过事件循环机制来解释，如果不清楚的话可以点击查看",Object(r.b)("a",a({parentName:"p"},{href:"https://thinkbucket.github.io/docsite/docs/javascript/8.async-programming/event-loop"}),"事件循环机制"),"和",Object(r.b)("a",a({parentName:"p"},{href:"https://thinkbucket.github.io/docsite/docs/web/13.rendering-engine/rendering-engine"}),"浏览器内核"),"相关内容。"),Object(r.b)("p",null,"由于",Object(r.b)("inlineCode",{parentName:"p"},"setInterval"),"或",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout"),"不是JS中定义的，他们并不会在JS引擎线程中直接执行。当代码执行到",Object(r.b)("inlineCode",{parentName:"p"},"setInterval"),"或",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout"),"时，事件循环机制会为",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout"),"或",Object(r.b)("inlineCode",{parentName:"p"},"setInterval"),"开一个定时器线程并开始计时，等定义的时间过后，将回调函数放到回调队列里，等到函数调用栈空（",Object(r.b)("inlineCode",{parentName:"p"},"JS"),"引擎线程空闲）时，将回调函数放入函数调用栈（使用JS引擎线程）执行。"))}s.isMDXComponent=!0}}]);