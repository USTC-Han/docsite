(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));n(0);var r=n(390);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={title:"数据绑定",sidebar_label:"数据绑定"},u=[{value:"getter/setter",id:"gettersetter",children:[]},{value:"Proxy",id:"proxy",children:[]}],i={rightToc:u},p="wrapper";function l(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(p,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"gettersetter"},"getter/setter"),Object(r.b)("p",null,"当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 ",Object(r.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," 把这些属性全部转为 getter/setter。",Object(r.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因，",Object(r.b)("a",a({parentName:"p"},{href:"https://www.google.com/url?q=https://cn.vuejs.org/v2/guide/reactivity.html&sa=D&ust=1570449321571000"}),"阅读更多"),"。"),Object(r.b)("h2",{id:"proxy"},"Proxy"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-html"}),'<b id="count"></b>\n<button onclick="increase()">+</button>\n<button onclick="decrease()">-</button>\n')),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"const data = { count: 0 };\nconst proxy = new Proxy(data, {\n get(target, property) {\n   return target[property];\n },\n set(target, property, value) {\n   target[property] = value;\n   render(value);\n }\n});\n\nrender(proxy.count);\n\nfunction render(value) {\n document.getElementById('count').innerHTML = value;\n}\n\nfunction increase() {\n proxy.count += 1;\n}\n\nfunction decrease() {\n proxy.count -= 1;\n}\n")))}l.isMDXComponent=!0},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=c(n),s=r,b=l[u+"."+s]||l[s]||p[s]||o;return n?a.a.createElement(b,Object.assign({},{ref:t},i,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=l;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[i]="string"==typeof e?e:r,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);