(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{340:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return l}));r(0);var t=r(388);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c={title:"对象",sidebar_label:"对象"},i=[],p={rightToc:i},u="wrapper";function l(e){var n=e.components,r=o(e,["components"]);return Object(t.b)(u,a({},p,r,{components:n,mdxType:"MDXLayout"}))}l.isMDXComponent=!0},388:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),l=c(r),f=t,s=l[i+"."+f]||l[f]||u[f]||o;return r?a.a.createElement(s,Object.assign({},{ref:n},p,{components:r})):a.a.createElement(s,Object.assign({},{ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:t,c[1]=i;for(var f=2;f<o;f++)c[f]=r[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);