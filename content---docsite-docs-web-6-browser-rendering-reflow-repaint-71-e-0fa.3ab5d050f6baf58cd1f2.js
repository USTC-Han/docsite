(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{511:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(537);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={id:"reflow-repaint",title:"\u91cd\u6392\u548c\u91cd\u7ed8",sidebar_label:"\u91cd\u6392\u548c\u91cd\u7ed8"},o=[],c={rightToc:o},b="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(b,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6839\u636e\u6e32\u67d3\u6811\u5e03\u5c40\uff0c\u8ba1\u7b97CSS\u6837\u5f0f\uff0c\u5373\u6bcf\u4e2a\u8282\u70b9\u5728\u9875\u9762\u4e2d\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u7b49\u51e0\u4f55\u4fe1\u606f\u3002HTML\u9ed8\u8ba4\u662f\u6d41\u5f0f\u5e03\u5c40\u7684\uff0cCSS\u548cJS\u4f1a\u6253\u7834\u8fd9\u79cd\u5e03\u5c40\uff0c\u6539\u53d8DOM\u7684\u5916\u89c2\u6837\u5f0f\u4ee5\u53ca\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002\u8fd9\u65f6\u5c31\u8981\u63d0\u5230\u4e24\u4e2a\u91cd\u8981\u6982\u5ff5\uff1aReflow\u548cRepaint\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reflow/Layout"),"\uff1a \u610f\u5473\u7740\u5143\u4ef6\u7684\u51e0\u4f55\u5c3a\u5bf8\u53d8\u4e86\uff0c\u6211\u4eec\u9700\u8981\u91cd\u65b0\u9a8c\u8bc1\u5e76\u8ba1\u7b97\u6e32\u67d3\u6811\u3002\u662f\u6e32\u67d3\u6811\u7684\u4e00\u90e8\u5206\u6216\u5168\u90e8\u53d1\u751f\u4e86\u53d8\u5316\u3002\u8fd9\u5c31\u662fReflow\uff0c\u6216\u662fLayout\u3002\n",Object(r.b)("strong",{parentName:"p"},"Repaint"),"\uff1a\u5c4f\u5e55\u7684\u4e00\u90e8\u5206\u91cd\u753b\uff0c\u4e0d\u5f71\u54cd\u6574\u4f53\u5e03\u5c40\uff0c\u6bd4\u5982\u67d0\u4e2aCSS\u7684\u80cc\u666f\u8272\u53d8\u4e86\uff0c\u4f46\u5143\u7d20\u7684\u51e0\u4f55\u5c3a\u5bf8\u548c\u4f4d\u7f6e\u4e0d\u53d8\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5e38\u89c1\u5f15\u8d77\u91cd\u6392\u5c5e\u6027\u548c\u65b9\u6cd5")),Object(r.b)("p",null,"\u4efb\u4f55\u4f1a\u6539\u53d8\u5143\u7d20\u51e0\u4f55\u4fe1\u606f(\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u5927\u5c0f)\u7684\u64cd\u4f5c\uff0c\u90fd\u4f1a\u89e6\u53d1\u56de\u6d41\u3002"),Object(r.b)("p",null,"\u6dfb\u52a0\u6216\u8005\u5220\u9664\u53ef\u89c1\u7684DOM\u5143\u7d20\uff1b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5143\u7d20\u5c3a\u5bf8\u6539\u53d8\u2014\u2014\u8fb9\u8ddd\u3001\u586b\u5145\u3001\u8fb9\u6846\u3001\u5bbd\u5ea6\u548c\u9ad8\u5ea6"),Object(r.b)("li",{parentName:"ul"},"\u5185\u5bb9\u53d8\u5316\uff0c\u6bd4\u5982\u7528\u6237\u5728input\u6846\u4e2d\u8f93\u5165\u6587\u5b57"),Object(r.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7a97\u53e3\u5c3a\u5bf8\u6539\u53d8\u2014\u2014resize\u4e8b\u4ef6\u53d1\u751f\u65f6"),Object(r.b)("li",{parentName:"ul"},"\u8ba1\u7b97 offsetWidth \u548c offsetHeight \u5c5e\u6027"),Object(r.b)("li",{parentName:"ul"},"\u8bbe\u7f6e style \u5c5e\u6027\u7684\u503c")),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/kh0bLF.png",alt:null}))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u5e38\u89c1\u5f15\u8d77\u91cd\u7ed8\u5c5e\u6027\u548c\u65b9\u6cd5")),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/bVJZq9.png",alt:null}))),Object(r.b)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4e2d\uff0c\u89e6\u53d1\u4e86\u51e0\u6b21\u56de\u6d41\u548c\u91cd\u7ed8\uff1f"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'var s = document.body.style;\ns.padding = "2px"; // \u56de\u6d41+\u91cd\u7ed8\ns.border = "1px solid red"; // \u518d\u4e00\u6b21 \u56de\u6d41+\u91cd\u7ed8\ns.color = "blue"; // \u518d\u4e00\u6b21\u91cd\u7ed8\ns.backgroundColor = "#ccc"; // \u518d\u4e00\u6b21 \u91cd\u7ed8\ns.fontSize = "14px"; // \u518d\u4e00\u6b21 \u56de\u6d41+\u91cd\u7ed8\n// \u6dfb\u52a0node\uff0c\u518d\u4e00\u6b21 \u56de\u6d41+\u91cd\u7ed8\ndocument.body.appendChild(document.createTextNode(\'abc!\'));\n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"\u5982\u4f55\u51cf\u5c11\u56de\u6d41\u3001\u91cd\u7ed8")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 transform \u66ff\u4ee3 top"),Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 visibility \u66ff\u6362 display: none \uff0c\u56e0\u4e3a\u524d\u8005\u53ea\u4f1a\u5f15\u8d77\u91cd\u7ed8\uff0c\u540e\u8005\u4f1a\u5f15\u53d1\u56de\u6d41\uff08\u6539\u53d8\u4e86\u5e03\u5c40\uff09"),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u8981\u628a\u8282\u70b9\u7684\u5c5e\u6027\u503c\u653e\u5728\u4e00\u4e2a\u5faa\u73af\u91cc\u5f53\u6210\u5faa\u73af\u91cc\u7684\u53d8\u91cf\u3002")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"for(let i = 0; i < 1000; i++) {\n    // \u83b7\u53d6 offsetTop \u4f1a\u5bfc\u81f4\u56de\u6d41\uff0c\u56e0\u4e3a\u9700\u8981\u53bb\u83b7\u53d6\u6b63\u786e\u7684\u503c\n    console.log(document.querySelector('.test').style.offsetTop)\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 table \u5e03\u5c40\uff0c\u53ef\u80fd\u5f88\u5c0f\u7684\u4e00\u4e2a\u5c0f\u6539\u52a8\u4f1a\u9020\u6210\u6574\u4e2a table \u7684\u91cd\u65b0\u5e03\u5c40"),Object(r.b)("li",{parentName:"ul"},"\u52a8\u753b\u5b9e\u73b0\u7684\u901f\u5ea6\u7684\u9009\u62e9\uff0c\u52a8\u753b\u901f\u5ea6\u8d8a\u5feb\uff0c\u56de\u6d41\u6b21\u6570\u8d8a\u591a\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 requestAnimationFrame"),Object(r.b)("li",{parentName:"ul"},"CSS \u9009\u62e9\u7b26\u4ece\u53f3\u5f80\u5de6\u5339\u914d\u67e5\u627e\uff0c\u907f\u514d\u8282\u70b9\u5c42\u7ea7\u8fc7\u591a"),Object(r.b)("li",{parentName:"ul"},"\u5c06\u9891\u7e41\u91cd\u7ed8\u6216\u8005\u56de\u6d41\u7684\u8282\u70b9\u8bbe\u7f6e\u4e3a\u56fe\u5c42\uff0c\u56fe\u5c42\u80fd\u591f\u963b\u6b62\u8be5\u8282\u70b9\u7684\u6e32\u67d3\u884c\u4e3a\u5f71\u54cd\u522b\u7684\u8282\u70b9\u3002\u6bd4\u5982\u5bf9\u4e8e video \u6807\u7b7e\u6765\u8bf4\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5c06\u8be5\u8282\u70b9\u53d8\u4e3a\u56fe\u5c42\u3002")),Object(r.b)("p",null,"\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6bd4\u5982\u4fee\u6539\u4e86\u5143\u7d20\u7684\u6837\u5f0f\uff0c\u6d4f\u89c8\u5668\u5e76\u4e0d\u4f1a\u7acb\u523b reflow \u6216 repaint \u4e00\u6b21\uff0c\u800c\u662f\u4f1a\u628a\u8fd9\u6837\u7684\u64cd\u4f5c\u79ef\u6512\u4e00\u6279\uff0c\u7136\u540e\u505a\u4e00\u6b21 reflow\uff0c\u8fd9\u53c8\u53eb\u5f02\u6b65 reflow \u6216\u589e\u91cf\u5f02\u6b65 reflow\u3002\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6bd4\u5982 resize \u7a97\u53e3\uff0c\u6539\u53d8\u4e86\u9875\u9762\u9ed8\u8ba4\u7684\u5b57\u4f53\u7b49\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u6d4f\u89c8\u5668\u4f1a\u9a6c\u4e0a\u8fdb\u884c reflow\u3002"))}p.isMDXComponent=!0},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},i=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),i=o(n),u=r,s=i[c+"."+u]||i[u]||p[u]||l;return n?a.a.createElement(s,Object.assign({},{ref:t},b,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=i;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[b]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"}}]);