(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{209:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return o}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(537);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={id:"number-same-as-index",title:"\u6709\u5e8f\u6570\u7ec4\u4e2d\u503c\u548c\u4e0b\u6807\u76f8\u7b49\u7684\u5143\u7d20",sidebar_label:"\u6709\u5e8f\u6570\u7ec4\u4e2d\u503c\u548c\u4e0b\u6807\u76f8\u7b49\u7684\u5143\u7d20"},l=[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[]},{value:"\u601d\u8def",id:"\u601d\u8def",children:[]},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]}]}],u={rightToc:l},c="wrapper";function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,a({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9898\u6e90\uff1a\u300a\u5251\u6307Offer: \u9762\u8bd5\u9898 53-3\u300bP267")),Object(r.b)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),Object(r.b)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u5355\u8c03\u9012\u589e\u7684\u6570\u7ec4\u91cc\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u6574\u6570\u5e76\u4e14\u662f\u552f\u4e00\u7684\u3002\u8bf7\u627e\u51fa\u6570\u7ec4\u4e2d\u4efb\u610f\u4e00\u4e2a\u6570\u503c\u7b49\u4e8e\u5176\u4e0b\u6807\u7684\u5143\u7d20\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u5219\u8fd4\u56de -1\u3002"),Object(r.b)("p",null,"\u793a\u4f8b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"\u8f93\u5165: [-3,-1,1,3,5]\n\u8f93\u51fa: 3\n")),Object(r.b)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),Object(r.b)("p",null,"\u56e0\u4e3a\u662f\u6709\u5e8f\u6570\u7ec4\uff0c\u76f4\u63a5\u4e8c\u5206\u67e5\u627e\uff0c\u5982\u679c\u4e0b\u6807\u548c\u5143\u7d20\u76f8\u7b49\u5219\u8fd4\u56de\u8be5\u5143\u7d20\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(logn)\u3002"),Object(r.b)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),Object(r.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function getNumberSameAsIndex (nums) {\n    let left = 0;\n    let right = nums.length - 1;\n    while (left <= right) {\n        let mid = left + (right - left >> 1);\n        if (nums[mid] === mid) {\n            return mid;\n        }\n        if (nums[mid] > k) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return -1;\n}\n")),Object(r.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(r.b)("p",null,"\u8fd9\u4e2a\u7248\u672c\u4e5f\u662f\u5c3e\u9012\u5f52\uff0c\u4e00\u4e9b\u6d4f\u89c8\u5668\u4e5f\u9075\u5faa ES \u6807\u51c6\u5bf9\u5c3e\u9012\u5f52\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u8ba9\u5176\u4e0d\u4f1a\u6808\u6ea2\u51fa\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function getNumberSameAsIndex (nums, left = 0, right = nums.length - 1) {\n    if (left > right) return -1;\n    let mid = left + (right - left >> 1);\n    if (nums[mid] === mid) {\n        return mid;\n    }\n    if (nums[mid] > k) {\n        return getNumberSameAsIndex(nums, left, mid - 1);\n    } else {\n        return getNumberSameAsIndex(nums, mid + 1, right);\n    }\n}\n")))}o.isMDXComponent=!0},537:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r),i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},u=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,s=m[u+"."+d]||m[d]||o[d]||i;return t?a.a.createElement(s,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[c]="string"==typeof e?e:r,l[1]=u;for(var d=2;d<i;d++)l[d]=t[d];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);