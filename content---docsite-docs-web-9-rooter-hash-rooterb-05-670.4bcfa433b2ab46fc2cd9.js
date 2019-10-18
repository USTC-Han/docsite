(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{374:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return h}));t(0);var r=t(390);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={id:"hash-rooter",title:"Hash路由",sidebar_label:"Hash路由"},l=[{value:"路由要解决的问题",id:"路由要解决的问题",children:[]},{value:"hash router",id:"hash-router",children:[]}],i={rightToc:l},u="wrapper";function h(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(u,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"路由要解决的问题"},"路由要解决的问题"),Object(r.b)("p",null,"要实现前端路由，需要解决两个核心："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"如何改变 URL 却不引起页面刷新？"),Object(r.b)("li",{parentName:"ul"},"如何检测 URL 变化了？")),Object(r.b)("p",null,"下面分别使用 hash 和 history 两种实现方式回答上面的两个核心问题。"),Object(r.b)("h2",{id:"hash-router"},"hash router"),Object(r.b)("p",null,"原理："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，改变 URL 中的 hash 部分不会引起页面刷新"),Object(r.b)("li",{parentName:"ul"},"通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：通过浏览器前进后退改变 URL、通过",Object(r.b)("inlineCode",{parentName:"li"},"<a>"),"标签改变 URL、通过window.location改变URL，这几种情况改变 URL 都会触发 hashchange 事件")),Object(r.b)("p",null,"实现："),Object(r.b)("p",null,"HTML 部分："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),'<body>\n  <ul>\n    \x3c!-- 定义路由 --\x3e\n    <li><a href="#/home">home</a></li>\n    <li><a href="#/about">about</a></li>\n\n    \x3c!-- 渲染路由对应的 UI --\x3e\n    <div id="routeView"></div>\n  </ul>\n</body>\n')),Object(r.b)("p",null,"JavaScript 部分："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件\nwindow.addEventListener('DOMContentLoaded', onLoad)\n// 监听路由变化\nwindow.addEventListener('hashchange', onHashChange)\n\n// 路由视图\nvar routerView = null\n\nfunction onLoad () {\n  routerView = document.querySelector('#routeView')\n  onHashChange()\n}\n\n// 路由变化时，根据路由渲染对应 UI\nfunction onHashChange () {\n  switch (window.location.hash) {\n    case '#/home':\n      routerView.innerHTML = 'Home'\n      return\n    case '#/about':\n      routerView.innerHTML = 'About'\n      return\n    default:\n      return\n  }\n}\n\n")),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"https://codepen.io/ustc-han/pen/eqzeBe?editors=1010"}),"damo链接")),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/NcNC0d.png",alt:null}))),Object(r.b)("p",null,"演示时，打开控制台，可以使用通过修改location.hash实现home和about的切换。这进一步证明了hash rooter通过监听location.hash来修改路由。每次路由的切换，history的length都会+1。"))}h.isMDXComponent=!0},390:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var i="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),h=c(t),p=r,s=h[l+"."+p]||h[p]||u[p]||o;return t?a.a.createElement(s,Object.assign({},{ref:n},i,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},i))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[i]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);