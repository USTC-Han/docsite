(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(537);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={title:"V8\u5de5\u4f5c\u6d41\u7a0b",sidebar_label:"V8\u5de5\u4f5c\u6d41\u7a0b"},c=[{value:"JS Engine",id:"js-engine",children:[]},{value:"V8 Engine Workflow",id:"v8-engine-workflow",children:[]},{value:"Parsing",id:"parsing",children:[{value:"AST",id:"ast",children:[]},{value:"Q: \u51fd\u6570\u6ca1\u8c03\u7528\u4f1a\u4e0d\u4f1a\u751f\u6210AST\uff1f",id:"q-\u51fd\u6570\u6ca1\u8c03\u7528\u4f1a\u4e0d\u4f1a\u751f\u6210ast\uff1f",children:[]}]},{value:"Compiling",id:"compiling",children:[]}],o={rightToc:c},l="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"js-engine"},"JS Engine"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Chrome: ",Object(r.b)("a",a({parentName:"li"},{href:"https://v8.dev/"}),"V8")),Object(r.b)("li",{parentName:"ul"},"FireFox: ",Object(r.b)("a",a({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey"}),"Spidermonkey")),Object(r.b)("li",{parentName:"ul"},"Edge: ",Object(r.b)("a",a({parentName:"li"},{href:"https://github.com/Microsoft/ChakraCore"}),"Chakra")),Object(r.b)("li",{parentName:"ul"},"Safari: ",Object(r.b)("a",a({parentName:"li"},{href:"https://trac.webkit.org/wiki/JavaScriptCore"}),"JavaScriptCore"))),Object(r.b)("h2",{id:"v8-engine-workflow"},"V8 Engine Workflow"),Object(r.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/jyJKvS.jpg"}),Object(r.b)("p",null,"JS \u4ee3\u7801\u5757\u52a0\u8f7d\u5b8c\u6bd5\u540e\uff0c\u4f1a\u9996\u5148\u8fdb\u5165\u8bed\u6cd5\u89e3\u6790\u9636\u6bb5\u3002\u8be5\u9636\u6bb5\u4e3b\u8981\u4f5c\u7528\u662f\u751f\u6210 AST \u548c\u6784\u5efa\u4f5c\u7528\u57df\u3002"),Object(r.b)("p",null,"\u4ece\u5e7f\u4e49\u4e0a\u8bb2\uff0c\u89e3\u6790\u9636\u6bb5\u4e3b\u8981\u5305\u62ec ",Object(r.b)("strong",{parentName:"p"},"\u8bcd\u6cd5\u5206\u6790(lexical analysis)")," \u548c ",Object(r.b)("strong",{parentName:"p"},"\u8bed\u6cd5\u5206\u6790(syntax analysis)"),"\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8bcd\u6cd5\u5206\u6790"),"\uff1a(\u5206\u8bcd)\u4ece\u4ee3\u7801\u4e2d\u8bfb\u53d6\u4e00\u7ec4\u5b57\u7b26\u5e76\u5c06\u5b83\u4eec\u7ec4\u5408\u6210\u8bed\u53e5(tokens)\uff0c\u5b83\u8fd8\u6d89\u53ca\u5220\u9664\u7a7a\u683c\u5b57\u7b26\u3001\u6ce8\u91ca\u7b49\u3002\u6700\u540e\uff0c\u6574\u4e2a\u4ee3\u7801\u4e32\u5c06\u88ab\u62c6\u5206\u4e3a\u4e00\u7cfb\u5217\u8bed\u53e5\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8bed\u6cd5\u5206\u6790"),"\uff1a(\u4e5f\u79f0\u4e3a\u89e3\u6790\u5668)\u5c06\u5728\u8bcd\u6cd5\u5206\u6790\u540e\u83b7\u53d6\u4e00\u4e2a\u7b80\u5355\u7684\u8bed\u53e5\u5217\u8868\uff0c\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6811\u5f62\u8868\u793a\u5373AST\uff0c\u5e76\u68c0\u67e5\u662f\u5426\u6709\u8bed\u6cd5\u9519\u8bef\u3002\u5982\u679c\u51fa\u73b0\u4e0d\u6b63\u786e\uff0c\u5219\u5411\u5916\u629b\u51fa\u4e00\u4e2a\u8bed\u6cd5\u9519\u8bef\uff08SyntaxError\uff09\uff0c\u505c\u6b62\u8be5JS\u4ee3\u7801\u7684\u540e\u7eed\u6267\u884c\uff1a")),Object(r.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/V5pGiz.jpg"}),Object(r.b)("h2",{id:"parsing"},"Parsing"),Object(r.b)("h3",{id:"ast"},"AST"),Object(r.b)("p",null,"\u53ef\u4ee5\u53bb\u8fd9\u4e2a\u7f51\u7ad9\u751f\u6210\u4e00\u4e2aAST(Abstract Syntax Tree)\u8bd5\u8bd5\uff1a",Object(r.b)("a",a({parentName:"p"},{href:"https://astexplorer.net/"}),"https://astexplorer.net/")),Object(r.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Wc8x5N.jpg"}),Object(r.b)("h3",{id:"q-\u51fd\u6570\u6ca1\u8c03\u7528\u4f1a\u4e0d\u4f1a\u751f\u6210ast\uff1f"},"Q: \u51fd\u6570\u6ca1\u8c03\u7528\u4f1a\u4e0d\u4f1a\u751f\u6210AST\uff1f"),Object(r.b)("p",null,"A: \u4f1a\uff0cAST\u662f\u5bf9\u6574\u4e2a\u4ee3\u7801\u90fd\u4f1a\u751f\u6210\uff0c\u4e0d\u7ba1\u6709\u6ca1\u6709\u8c03\u7528\uff0c\u901a\u8fc7 ",Object(r.b)("a",a({parentName:"p"},{href:"https://astexplorer.net/"}),"https://astexplorer.net/")," \u4e5f\u53ef\u4ee5\u770b\u51fa\u3002\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u4ece\u4fa7\u9762\u4e5f\u53ef\u4ee5\u8bf4\u660e\u5728\u8fdb\u884c\u8bed\u6cd5\u5206\u6790\u751f\u6210AST\u3002\u5176\u5b9eV8\u6709\u7528\u4e24\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"Parser"),"\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Preparser")," \u5bf9\u8fd9\u4e9b\u4e0d\u662f\u8feb\u5207\u9700\u8981\u6267\u884c\u7684\u4ee3\u7801(\u9876\u7ea7\u4ee3\u7801\u3001\u7acb\u5373\u8c03\u7528\u51fd\u6570\u8868\u8fbe\u5f0fIIFE)\u53ea\u6784\u5efa\u4f5c\u7528\u57df\uff0c\u4f1a\u8df3\u8fc7AST\uff0c\u4f46\u7531\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"Ignition")," \u7684\u5f15\u5165\uff0c\u73b0\u5728\u5e76\u6ca1\u6709\u7528\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"Preparser"),"\u3002"),Object(r.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/DVCIa0.jpg"}),Object(r.b)("h2",{id:"compiling"},"Compiling"),Object(r.b)("p",null,"\u8fd9\u90e8\u5206\u5185\u5bb9\u4e0d\u91cd\u8981\uff0c\u4f46\u7406\u6e05\u695a\u57fa\u672c\u6982\u5ff5\uff0c\u5bf9\u540e\u9762\u6df1\u5165\u5b66\u4e60\u5341\u5206\u6709\u5fc5\u8981\u3002\u6211\u4eec\u4eba\u4e3a\u5730\u5c06\u89e3\u91ca\u5668\u548c\u7f16\u8bd1\u5668\u90fd\u5212\u5206\u5728\u4e86\u7f16\u8bd1\u9636\u6bb5\uff0c\u6709\u4e9b\u6587\u7ae0\u7528\u7684\u662f\u201c\u9884\u7f16\u8bd1\u201d\u8fd9\u4e2a\u8bcd\uff0c\u867d\u7136\u90fd\u4e0d\u51c6\u786e\uff0c\u4f46\u662f\u6240\u8868\u8fbe\u7684\u610f\u601d\u90fd\u662f\u76f8\u540c\u7684\u3002"),Object(r.b)("p",null,"JS\u5f15\u64ce\u4e3a\u4e86\u63d0\u9ad8\u901f\u5ea6\u91c7\u7528\u5373\u65f6\u7f16\u8bd1\uff08JIT\uff09\u6280\u672f\u3002\u6267\u884c\u4e4b\u524d\u7acb\u5373\u5c06\u4ee3\u7801\u5feb\u901f\u7f16\u8bd1\u4e3a\u673a\u5668\u7801\u3002\u901a\u5e38\u6700\u521d\u7531\u57fa\u7ebf\u7f16\u8bd1\u5668\u7f16\u8bd1\uff0c\u57fa\u7ebf\u7f16\u8bd1\u5668\u53ef\u4ee5\u5feb\u901f\u751f\u6210\u975e\u4f18\u5316\u7684\u673a\u5668\u4ee3\u7801\u3002\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u5206\u6790\uff0c\u5e76\u53ef\u9009\u62e9\u4f7f\u7528\u66f4\u9ad8\u7ea7\u7684\u4f18\u5316\u7f16\u8bd1\u5668\u52a8\u6001\u5730\u91cd\u65b0\u7f16\u8bd1\uff0c\u4ee5\u5b9e\u73b0\u6700\u4f73\u6027\u80fd\u3002\u53ea\u6709\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cIgnition\u662f\u57fa\u7ebf\u7f16\u8bd1\u5668\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u89e3\u91ca\u5668\u3002\u5b83\u53d6\u4ee3\u4e86\u65e7\u7684full-codegen\u3002"),Object(r.b)("p",null,"\u9605\u8bfb\u66f4\u591a\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://app.yinxiang.com/fx/23ae9ccc-9086-4b93-b8d3-d15d0fcd6c51"}),"JS\u7f16\u8bd1\u5668")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://app.yinxiang.com/fx/67a2ad7e-3d41-4814-93fd-b4ee30a32407"}),"WebAssembly"))))}p.isMDXComponent=!0},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=c(n),s=r,u=b[o+"."+s]||b[s]||p[s]||i;return n?a.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);