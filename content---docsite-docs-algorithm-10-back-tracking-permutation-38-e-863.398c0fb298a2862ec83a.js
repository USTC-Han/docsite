(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{390:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,f=u[i+"."+b]||u[b]||p[b]||o;return n?a.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));n(0);var r=n(390);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"permutation",title:"字符串的排列",sidebar_label:"字符串的排列"},i=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]}],l={rightToc:i},p="wrapper";function u(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(p,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 38》P110"),Object(r.b)("li",{parentName:"ul"},"在线：",Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode-cn.com/problems/permutations/"}),"LeetCode: 46"))),Object(r.b)("h2",{id:"题目"},"题目"),Object(r.b)("p",null,"输入一个字符串，打印出该字符串中字符的所有排列。例如，输入字符串 abc ,则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、 bac、bca、cab 和 cba。"),Object(r.b)("h2",{id:"思路"},"思路"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"把一个字符串看成由两部分组成:第一部分是它的第一个字符;第二部分是后面的所有字符。在图4.18中，我们用两种不同的背景颜色区分字符串的两部分。"),Object(r.b)("li",{parentName:"ol"},"我们求整个字符串的排列，可以看成两步。第一步求所有可能出现在第一个位置的字符，即把第一个字符和后面所有的字符交换。图4.18就是分别把第-一个字符a和后面的b、c等字符交换的情形。第二步固定第一一个字符，如图4.18 (a)所示，求后面所有字符的排列。这时候我们仍把后面的所有字符分成两部分:后面字符的第-一个字符，以及这个字符之后的所有字符。然后把第一个字符逐一和它后面的字符交换，如图4.18 (b)所示。")))}u.isMDXComponent=!0}}]);