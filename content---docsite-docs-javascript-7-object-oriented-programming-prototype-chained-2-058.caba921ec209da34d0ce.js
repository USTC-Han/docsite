(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(0);var r=n(388);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={title:"原型和原型链",sidebar_label:"原型和原型链"},i=[],c={rightToc:i},l="wrapper";function b(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"实例对象的",Object(r.b)("inlineCode",{parentName:"p"},"__proto__"),"指向自己构造函数的",Object(r.b)("inlineCode",{parentName:"p"},"prototype"),"。",Object(r.b)("inlineCode",{parentName:"p"},"obj.__proto__.__proto__..."),"的原型链由此产生，包括我们的操作符 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"instanceof")," 正是通过探测 ",Object(r.b)("inlineCode",{parentName:"strong"},"obj.__proto__.__proto__... ===构造函数.prototype")," 来验证obj是否是该构造函数的实例"),"。"),Object(r.b)("p",null,"随着一层层地上溯，所有对象的原型最终都可以上溯到",Object(r.b)("inlineCode",{parentName:"p"},"Object.prototype"),"，即",Object(r.b)("inlineCode",{parentName:"p"},"Object"),"构造函数的",Object(r.b)("inlineCode",{parentName:"p"},"prototype"),"属性。也就是说，所有对象都继承了",Object(r.b)("inlineCode",{parentName:"p"},"Object.prototype"),"的属性。这就是所有对象都有",Object(r.b)("inlineCode",{parentName:"p"},"valueOf"),"和",Object(r.b)("inlineCode",{parentName:"p"},"toString"),"方法的原因，因为这是从",Object(r.b)("inlineCode",{parentName:"p"},"Object.prototype"),"继承的。"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Object.prototype"),"的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的",Object(r.b)("inlineCode",{parentName:"p"},"Object.prototype"),"还是找不到，则返回undefined。如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做",Object(r.b)("inlineCode",{parentName:"p"},"“覆盖”（overriding）"),"，这也是多态的基础。"),Object(r.b)("p",null,"注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的。所寻找的属性在越上层的原型对象，对性能的影响越大。",Object(r.b)("strong",{parentName:"p"},"如果寻找某个不存在的属性，将会遍历整个原型链。")))}b.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r),a=o.a.createContext({}),p=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=p(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,O=b[i+"."+u]||b[u]||l[u]||a;return n?o.a.createElement(O,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(O,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);