(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));t(0);var r=t(388);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={title:"AMD/CMD/UMD",sidebar_label:"AMD/CMD/UMD"},i=[{value:"前言",id:"前言",children:[]},{value:"AMD模块定义规范",id:"amd模块定义规范",children:[{value:"模块定义",id:"模块定义",children:[]},{value:"模块加载",id:"模块加载",children:[]},{value:"应用：RequireJS",id:"应用：requirejs",children:[]}]},{value:"CMD模块定义规范",id:"cmd模块定义规范",children:[{value:"模块定义：",id:"模块定义：",children:[]},{value:"模块加载：",id:"模块加载：",children:[]},{value:"应用： seajs",id:"应用：-seajs",children:[]}]},{value:"CMD和AMD异步加载的区别：",id:"cmd和amd异步加载的区别：",children:[]},{value:"UMD模块定义规范",id:"umd模块定义规范",children:[]}],c={rightToc:i},b="wrapper";function u(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(b,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"前言"},"前言"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CommonJS"),"加载模块是同步的，也就是说只有模块加载完才能执行后续操作。对于",Object(r.b)("inlineCode",{parentName:"p"},"Node.js"),"这种运行在服务器上的编程，所加载的模块一般都是保存在本地文件（缓存是在内存中），加载速度较快，不需要考虑异步加载。而如果是运行在浏览器上的程序，模块的加载需要从服务器获取，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。所以在浏览器端需要一种异步加载模块的机制。这就是下面的",Object(r.b)("inlineCode",{parentName:"p"},"AMD、CMD和UMD"),"。"),Object(r.b)("h2",{id:"amd模块定义规范"},"AMD模块定义规范"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。')),Object(r.b)("h3",{id:"模块定义"},"模块定义"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"define(id?, dependencies?, factory);")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"id 为字符串类型，表示了模块标识（模块名），为可选参数。若不存在则模块标识应该默认定义为在加载器中被请求脚本的标识（JS文件名）。如果存在，那么模块标识必须为顶层的或者一个绝对的标识。"),Object(r.b)("li",{parentName:"ul"},"dependencies ，是个数组，数组里放着所依赖的模块。"),Object(r.b)("li",{parentName:"ul"},"factory，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块初始化的输出值。")),Object(r.b)("h3",{id:"模块加载"},"模块加载"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require([module], callback)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"module 是要加载的模块"),Object(r.b)("li",{parentName:"ul"},"callback是模块加载完成后的回调函数")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"// a.js\ndefine([\"b\", \"require\", \"exports\"], function(b, require, exports) {\n    console.log(\"a.js执行\");\n    console.log(b);\n    // 暴露api可以使用exports、module.exports、return\n    exports.a = function() {\n        return require(\"b\");\n    }\n})\n// b.js\ndefine(function() {\n    console.log('b.js执行');\n    console.log(require);\n    console.log(exports);\n    console.log(module);\n    return 'b';\n})\n// 定义index.js\n// 支持Modules/Wrappings写法，注意dependencies得是空的，且factory参数不可空\ndefine(function(require, exports, module) {\n    console.log('index.js执行');\n    var a = require('a');\n    var b = require('b');\n})\n// 加载index.js\nrequire(['a', 'b'], function(a, b) {\n    console.log('index.js执行');\n})\n")),Object(r.b)("p",null,"上例中的a.js模块的定义，如果使用return来暴露模块API的写法更简洁些："),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),'define(["b"], function(b) {\n    console.log("a.js执行");\n    console.log(b);\n   return {\n     a: function() {\n        return require("b");\n     }\n   }\n})\n')),Object(r.b)("p",null,"点击",Object(r.b)("a",o({parentName:"p"},{href:"https://segmentfault.com/a/1190000004873947#articleHeader6"}),"查看"),"详细模块的定义方式"),Object(r.b)("h3",{id:"应用：requirejs"},"应用：RequireJS"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RequireJS")," 是一个",Object(r.b)("strong",{parentName:"p"},"前端的模块化管理的工具库"),"，遵循",Object(r.b)("inlineCode",{parentName:"p"},"AMD"),"规范。它使用",Object(r.b)("inlineCode",{parentName:"p"},"define"),"来定义模块，使用",Object(r.b)("inlineCode",{parentName:"p"},"require"),"来加载模块，语法与",Object(r.b)("inlineCode",{parentName:"p"},"AMD"),"中所写一样。"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RequireJS")," 的基本思想：通过一个函数来将所有所需要的或者说所依赖的模块实现装载进来，然后返回一个新的函数（模块），我们所有的关于新模块的业务代码都在这个函数内部操作，其内部也可无限制的使用已经加载进来的以来的模块。"),Object(r.b)("h2",{id:"cmd模块定义规范"},"CMD模块定义规范"),Object(r.b)("p",null,"CMD（Common Module Definition），即公共模块定义，它内部模块的加载也是异步的。"),Object(r.b)("h3",{id:"模块定义："},"模块定义："),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"define(factory)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"require, exports, module参数顺序不可乱"),Object(r.b)("li",{parentName:"ul"},"暴露api方法可以使用exports、module.exports、return"),Object(r.b)("li",{parentName:"ul"},"与requirejs不同的是，若是未暴露，则返回{}，requirejs返回undefined")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"定义模块无需列依赖，它会调用factory的toString方法对其进行正则匹配以此分析依赖。\n模块定义时，对所依赖的模块采用运行时加载。")),Object(r.b)("h3",{id:"模块加载："},"模块加载："),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require(callback)")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"// a.js\ndefine(function(require, exports, module) {\n    console.log('a.js执行');\n    console.log(require);\n    console.log(exports);\n    console.log(module);\n})\n// b.js\ndefine(function(require, module, exports) {\n    console.log('b.js执行');\n    console.log(require);\n    console.log(exports);\n    console.log(module);\n})\n// index.js\ndefine(function(require) {\n    var a = require('a');\n    var b = require('b');\n    console.log(a);\n    console.log(b);\n})\n")),Object(r.b)("h3",{id:"应用：-seajs"},"应用： seajs"),Object(r.b)("p",null,"在",Object(r.b)("inlineCode",{parentName:"p"},"seajs"),"中使用",Object(r.b)("inlineCode",{parentName:"p"},"seajs.use()"),"来完成模块的加载"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"seajs.use(['./main'], function(main) {\n        main.hello();\n      });\n")),Object(r.b)("h2",{id:"cmd和amd异步加载的区别："},"CMD和AMD异步加载的区别："),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"模块执行机制差别"),Object(r.b)("p",{parentName:"li"},"首先，要清楚模块执行机制和模块加载机制的概念。模块加载机制是指浏览器请求模块的方式，这里两者都是异步请求，因此没有区别。而模块执行机制是指factory的执行顺序。CMD是懒执行的，即执行流从主模块factory开始，如果require到某个依赖模块，则再去执行该依赖模块的factory。而AMD是在执行主模块factory之前，先执行所有依赖模块的factory。")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"依赖模块的执行顺序差别"),Object(r.b)("p",{parentName:"li"},"在上一条结论里，由于CMD是懒执行的，因此执行顺序始终是一致的。而AMD里各自的依赖模块执行顺序是无序的，即浏览器请求到模块时立即执行factory。"),Object(r.b)("p",{parentName:"li"},"点击",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/luckydrq/loader-test"}),"查看"),"demo"))),Object(r.b)("h2",{id:"umd模块定义规范"},"UMD模块定义规范"),Object(r.b)("p",null,"UMD（Universal Module Definition）是AMD和CommonJS的糅合，它希望实现跨平台的解决方案。即UMD既能支持服务器端的CommonJS实现模块同步加载, 也可以支持浏览器端模块的异步加载。"),Object(r.b)("p",null,"UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"(function (window, factory) {\n    if (typeof exports === 'object') {\n        module.exports = factory();\n    } else if (typeof define === 'function' && define.amd) {\n        define(factory);\n    } else {\n        window.eventUtil = factory();\n    }\n})(this, function () {\n    //module ...\n});\n")))}u.isMDXComponent=!0},388:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r),a=o.a.createContext({}),l=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,d=u[i+"."+p]||u[p]||b[p]||a;return t?o.a.createElement(d,Object.assign({},{ref:n},c,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);