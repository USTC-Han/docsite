(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{147:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},l=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),b=c(r),m=n,u=b[l+"."+m]||b[m]||i[m]||o;return r?a.a.createElement(u,Object.assign({},{ref:t},p,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var m=2;m<o;m++)c[m]=r[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));r(0);var n=r(147);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c={id:"performance",title:"性能分析",sidebar_label:"性能分析"},l=[{value:"React 16 性能分析",id:"react-16-性能分析",children:[]},{value:"React 15 性能分析",id:"react-15-性能分析",children:[]}],p={rightToc:l},i="wrapper";function b(e){var t=e.components,r=o(e,["components"]);return Object(n.b)(i,a({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"react-16-性能分析"},"React 16 性能分析"),Object(n.b)("p",null,"在开发环境下，可以用浏览器 DevTools 中的 ",Object(n.b)("strong",{parentName:"p"},"performance")," 去分析组件的挂载、更新和卸载的性能开销。"),Object(n.b)("p",null,"示例："),Object(n.b)("p",null,Object(n.b)("img",a({parentName:"p"},{src:"https://raw.githubusercontent.com/ThinkBucket/oss/master/performancanalysis.png",alt:"performance analysis"}))),Object(n.b)("p",null,"Chrome浏览器内："),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"在项目地址栏内添加查询字符串 ",Object(n.b)("inlineCode",{parentName:"li"},"?react_perf"),"（例如， ",Object(n.b)("inlineCode",{parentName:"li"},"http://localhost:3000/?react_perf"),"），也可以在代码里面根据不同环境去配置。"),Object(n.b)("li",{parentName:"ol"},"打开Chrome开发工具 ",Object(n.b)("a",a({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool"}),Object(n.b)("strong",{parentName:"a"},"Performance")),"  标签页点击 ",Object(n.b)("strong",{parentName:"li"},"Record"),"."),Object(n.b)("li",{parentName:"ol"},"执行你想要分析的动作。不要记录超过 20s，不然 Chrome 可能会挂起。"),Object(n.b)("li",{parentName:"ol"},"停止记录。"),Object(n.b)("li",{parentName:"ol"},"React 事件将会被归类在 ",Object(n.b)("strong",{parentName:"li"},"User Timing")," 标签下。")),Object(n.b)("p",null,"更多的详细操作，请参考 ",Object(n.b)("a",a({parentName:"p"},{href:"https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad"}),"BenSchwarz 的这篇文章"),"。"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"提示：由于这些数字是相对的，因此组件在生产版本中会运行更快"),"。然而，这也能够帮助你了解何时会有无关的组件被错误的更新，以及你的组件更新的深度和频率。")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"提示"),"：目前浏览器中仅有Chrome，Edge和IE支持此特性，但是 React 官方使用此标准",Object(n.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API"}),"用户Timing API"),"，未来将会有更多的浏览器对其添加支持。")),Object(n.b)("h2",{id:"react-15-性能分析"},"React 15 性能分析"),Object(n.b)("p",null,"低版本的 React 请参考官方文档：",Object(n.b)("a",a({parentName:"p"},{href:"https://reactjs.org/docs/perf.html"}),"react-addons-perf")))}b.isMDXComponent=!0}}]);