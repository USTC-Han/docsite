(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{309:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return i}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(537);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={title:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",sidebar_label:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d"},c=[],l={rightToc:c},u="wrapper";function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(u,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"cloneDeep\uff1a\u5224\u65ad\u6570\u636e\u7c7b\u578b + \u5faa\u73af\u9012\u5f52"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"function deepClone(obj) {\n// Primitive Type\nif (typeof obj !== 'object' || obj === null) {\n  return obj;\n}\nconst Constructor = obj.constructor;\n// Date\nif (obj instanceof Date) {\n  return new Constructor(obj.getTime());\n}\n//RegExp\nif(obj instanceof RegExp) {\n  return new Constructor(obj);\n}\n// Set\nif(obj instanceof Set) {\n  let objClone = new Set();\n  obj.forEach(item => objClone.add(deepClone(item)));\n  return objClone;\n}\n// Map\nif(obj instanceof Map) {\n  let objClone = new Map();\n  obj.forEach((value, key) => objClone.set(deepClone(key), deepClone(value)));\n  return objClone\n}\n// Array Object\nconst keys = Object.keys(obj);\nlet objClone = Array.isArray(obj) ? [] : {};\nif (keys.length < 1) {\n  return objClone\n}\n\nkeys.forEach(key => objClone[key] = deepClone(obj[key]));\nreturn objClone;\n}\n")),Object(r.b)("p",null,"\u8fd9\u91cc\u6709\u4e2a\u70b9\u5927\u5bb6\u8981\u6ce8\u610f\u4e0b\uff0c\u5bf9\u4e8efunction\u7c7b\u578b\uff0c\u8fd9\u91cc\u662f\u76f4\u63a5\u8d4b\u503c\u7684\uff0c\u8fd8\u662f\u5171\u4eab\u4e00\u4e2a\u5185\u5b58\u503c\u3002\u8fd9\u662f\u56e0\u4e3a\u51fd\u6570\u66f4\u591a\u7684\u662f\u5b8c\u6210\u67d0\u4e9b\u529f\u80fd\uff0c\u6709\u4e2a\u8f93\u5165\u503c\u548c\u8fd4\u56de\u503c\uff0c\u800c\u4e14\u5bf9\u4e8e\u4e0a\u5c42\u4e1a\u52a1\u800c\u8a00\u66f4\u591a\u7684\u662f\u5b8c\u6210\u4e1a\u52a1\u529f\u80fd\uff0c\u5e76\u4e0d\u9700\u8981\u771f\u6b63\u5c06\u51fd\u6570\u6df1\u62f7\u8d1d\u3002"),Object(r.b)("p",null,"\u4f46\u662ffunction\u7c7b\u578b\u8981\u600e\u4e48\u62f7\u8d1d\u5462\uff1f"),Object(r.b)("p",null,"javascript\u6df1\u62f7\u8d1d(deepClone) ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.google.com/url?q=https://segmentfault.com/a/1190000006687581&sa=D&ust=1570449321569000"}),"https://www.google.com/url?q=https://segmentfault.com/a/1190000006687581&sa=D&ust=1570449321569000")),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/muwenzi/Program-Blog/issues/62"}),"https://github.com/muwenzi/Program-Blog/issues/62")))}i.isMDXComponent=!0},537:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var u="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=c(t),s=r,b=p[l+"."+s]||p[s]||i[s]||a;return t?o.a.createElement(b,Object.assign({},{ref:n},u,{components:t})):o.a.createElement(b,Object.assign({},{ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);