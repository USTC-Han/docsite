(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{307:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(537),r=n(542),l=n(538);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={title:"\u6570\u7ec4",sidebar_label:"\u6570\u7ec4"},s=[{value:"Array.from(array-like)",id:"arrayfromarray-like",children:[]},{value:"Array.of()",id:"arrayof",children:[]},{value:"includes() v.s indexOf()",id:"includes-vs-indexof",children:[]},{value:"flat()/flatMap()",id:"flatflatmap",children:[]},{value:"\u7a7a\u4f4d",id:"\u7a7a\u4f4d",children:[]},{value:"fill()",id:"fill",children:[]}],o={rightToc:s},p="wrapper";function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,c({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.a,{width:"300",align:"center",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/AD9JzZ.jpg",mdxType:"Img"}),Object(a.b)("p",null,"shift, \u8f6c\u79fb\uff0c\u79fb\u52a8\uff0c\u53bb\u9664 ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/muwenzi/Program-Blog/issues/23"}),"https://github.com/muwenzi/Program-Blog/issues/23")," "),Object(a.b)("p",null,"\u6570\u7ec4\u53bb\u91cd"),Object(a.b)("p",null,Object(a.b)("a",c({parentName:"p"},{href:"https://www.google.com/url?q=https://mp.weixin.qq.com/s/bUphOsQnB9_-2MwbGXTxtQ&sa=D&ust=1570449321579000"}),"\u4e5f\u8c08\u9762\u8bd5\u5fc5\u5907\u95ee\u9898\u4e4b JavaScript \u6570\u7ec4\u53bb\u91cd")),Object(a.b)("p",null,Object(a.b)("a",c({parentName:"p"},{href:"https://www.google.com/url?q=https://zhuanlan.zhihu.com/p/24753549?utm_medium%3Dsocial%26utm_source%3Dwechat_session&sa=D&ust=1570449321580000"}),"\u4e5f\u8c08JavaScript\u6570\u7ec4\u53bb\u91cd")),Object(a.b)("p",null,"\u5feb\u6162\u6307\u9488"),Object(a.b)("p",null,Object(a.b)("a",c({parentName:"p"},{href:"https://www.google.com/url?q=https://github.com/mqyqingfeng/Blog/issues/27&sa=D&ust=1570449321581000"}),"js \u6570\u7ec4\u53bb\u91cd")),Object(a.b)("p",null,"\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8f6c\u6362\u5173\u7cfb"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),'\'123\'.split(\'\') //["1", "2", "3"]\nArray.from(\'123\') // ["1", "2", "3"]\n[1,2,3].toString() // "1,2,3"\n\n[1,2,3].join() // "1,2,3"\n\n[1,2,3].join(\'\') //"123"\nJSON.stringify(obj)\n')),Object(a.b)("h2",{id:"arrayfromarray-like"},"Array.from(array-like)"),Object(a.b)("p",null,"\u5c06\u7c7b\u6570\u7ec4(\u5305\u62ec\u53ef\u904d\u5386\uff0c\u5982Set/Map/string)\u8f6c\u5316\u4e3a\u771f\u6b63\u7684\u6570\u7ec4\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';\n")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"isArrayLike(document.querySelectorAll('.className')); // true\nisArrayLike('abc'); // true\nisArrayLike(null); // false\n")),Object(a.b)("h2",{id:"arrayof"},"Array.of()"),Object(a.b)("p",null,"Array.of \u65b9\u6cd5\u7528\u4e8e\u5c06\u4e00\u7ec4\u503c\uff0c\u8f6c\u6362\u4e3a\u6570\u7ec4\u3002\u6709\u70b9\u7c7b\u4f3c\u51fd\u6570\u5f0f\u7f16\u7a0b\u91cc\u9762of\u65b9\u6cd5\u7684\u542b\u4e49\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"Array.of(3, 11, 8) // [3,11,8]\nArray.of(3) // [3]\nArray.of(3).length // 1\n")),Object(a.b)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u7684\u4e3b\u8981\u76ee\u7684\uff0c\u662f\u5f25\u8865\u6570\u7ec4\u6784\u9020\u51fd\u6570Array()\u7684\u4e0d\u8db3\u3002\u56e0\u4e3a\u53c2\u6570\u4e2a\u6570\u7684\u4e0d\u540c\uff0c\u4f1a\u5bfc\u81f4Array()\u7684\u884c\u4e3a\u6709\u5dee\u5f02\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"Array() // []\nArray(3) // [, , ,]\nArray(3, 11, 8) // [3, 11, 8]\n")),Object(a.b)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0cArray\u65b9\u6cd5\u6ca1\u6709\u53c2\u6570\u3001\u4e00\u4e2a\u53c2\u6570\u3001\u4e09\u4e2a\u53c2\u6570\u65f6\uff0c\u8fd4\u56de\u7ed3\u679c\u90fd\u4e0d\u4e00\u6837\u3002\u53ea\u6709\u5f53\u53c2\u6570\u4e2a\u6570\u4e0d\u5c11\u4e8e 2 \u4e2a\u65f6\uff0cArray()\u624d\u4f1a\u8fd4\u56de\u7531\u53c2\u6570\u7ec4\u6210\u7684\u65b0\u6570\u7ec4\u3002\u53c2\u6570\u4e2a\u6570\u53ea\u6709\u4e00\u4e2a\u65f6\uff0c\u5b9e\u9645\u4e0a\u662f\u6307\u5b9a\u6570\u7ec4\u7684\u957f\u5ea6\u3002"),Object(a.b)(l.a,{type:"warning",mdxType:"Hint"},"Array.of\u57fa\u672c\u4e0a\u53ef\u4ee5\u7528\u6765\u66ff\u4ee3Array()\u6216new Array()\uff0c\u5e76\u4e14\u4e0d\u5b58\u5728\u7531\u4e8e\u53c2\u6570\u4e0d\u540c\u800c\u5bfc\u81f4\u7684\u91cd\u8f7d\u3002\u5b83\u7684\u884c\u4e3a\u975e\u5e38\u7edf\u4e00\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"Array.of() // []\nArray.of(undefined) // [undefined]\nArray.of(1) // [1]\nArray.of(1, 2) // [1, 2]\n")),Object(a.b)("p",null,"Array.of\u603b\u662f\u8fd4\u56de\u53c2\u6570\u503c\u7ec4\u6210\u7684\u6570\u7ec4\u3002\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u5c31\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002Array.of\u65b9\u6cd5\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6a21\u62df\u5b9e\u73b0\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"function ArrayOf(){\n return [].slice.call(arguments);\n}\n")),Object(a.b)("p",null,"slice\u6ca1\u6709\u53c2\u6570\uff0c\u5b9e\u9645\u4e0a\u7b49\u4e8e\u8fd4\u56de\u4e00\u4e2a\u539f\u6570\u7ec4\u7684(\u6d45)\u62f7\u8d1d\u3002\u548csplice\u76f8\u6bd4\u8fd9\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u66f4\u63a8\u8350\u4f7f\u7528\uff0c\u8be6\u7ec6\u7528\u6cd5",Object(a.b)("a",c({parentName:"p"},{href:"http://javascript.ruanyifeng.com/stdlib/array.html#toc10"}),"http://javascript.ruanyifeng.com/stdlib/array.html#toc10")," "),Object(a.b)(l.a,{type:"warning",mdxType:"Hint"},"\u6807\u51c6\u4e2d `for (let elem of [\u2018a\u2019, \u2018b\u2019].values())` \u5728node8\u67d0\u4e9b\u7248\u672c\u4e2d\u7531\u4e8e\u517c\u5bb9\u6027\u95ee\u9898\u88ab\u5173\u95ed"),Object(a.b)(r.a,{width:"550",align:"center",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/JgDuiW.jpg",mdxType:"Img"}),Object(a.b)("p",null,Object(a.b)("a",c({parentName:"p"},{href:"https://kangax.github.io/compat-table/es6/#cr-array-prototype-values-note"}),"https://kangax.github.io/compat-table/es6/#cr-array-prototype-values-note"),"\n",Object(a.b)("a",c({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=615873"}),"https://bugs.chromium.org/p/chromium/issues/detail?id=615873")),Object(a.b)("h2",{id:"includes-vs-indexof"},"includes() v.s indexOf()"),Object(a.b)("p",null,"indexOf \u65b9\u6cd5\u6709\u4e24\u4e2a\u7f3a\u70b9\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e0d\u591f\u8bed\u4e49\u5316\uff0c\u5b83\u7684\u542b\u4e49\u662f\u627e\u5230\u53c2\u6570\u503c\u7684\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4f4d\u7f6e\uff0c\u6240\u4ee5\u8981\u53bb\u6bd4\u8f83\u662f\u5426\u4e0d\u7b49\u4e8e-1\uff0c\u8868\u8fbe\u8d77\u6765\u4e0d\u591f\u76f4\u89c2\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5b83\u5185\u90e8\u4f7f\u7528\u4e25\u683c\u76f8\u7b49\u8fd0\u7b97\u7b26\uff08===\uff09\u8fdb\u884c\u5224\u65ad\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u5bf9NaN\u7684\u8bef\u5224\u3002")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"[NaN].indexOf(NaN) // -1\n[NaN].includes(NaN) // true\n")),Object(a.b)("p",null,"includes\u4f7f\u7528\u7684\u662f\u4e0d\u4e00\u6837\u7684\u5224\u65ad\u7b97\u6cd5\uff0c\u5c31\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\u3002"),Object(a.b)("h2",{id:"flatflatmap"},"flat()/flatMap()"),Object(a.b)("p",null,"\u6570\u7ec4falt\u8fd9\u4e2a\u51fd\u6570\u7684\u65b9\u6cd5\u5f88\u5c11\u7684\u4f7f\u7528\uff0c\u5b83\u7684\u610f\u601d\u5c31\u662f\u5c06\u6570\u7ec4\u7684\u5143\u7d20\u2018\u6253\u5e73\u2019\u3002\u8bf4\u7684\u611f\u89c9\u633a\u60ac\u4e4e\u7684\uff0c\u5176\u5b9e\u8fd9\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u51fd\u6570\u3002"),Object(a.b)("p",null,"flat\u7684\u8bed\u6cd5\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"var newArray = arr.flat(depth)"),"\uff0c\u5176\u4e2d\u7684depth\u7684\u503c\u662f\u4e2anumber\u7c7b\u578b\u3002deepth\u6307\u7684\u63d0\u53d6\u5d4c\u5957\u6570\u7ec4\u7684\u7ed3\u6784\u6df1\u5ea6\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"var arr1 = [1, 2, [3, 4]];\narr1.flat(); // [1, 2, 3, 4]\n\nvar arr2 = [1, 2, [3, 4, [5, 6]]];\narr2.flat();// [1, 2, 3, 4, [5, 6]]\n\nvar arr3 = [1, 2, [3, 4, [5, 6]]];\narr3.flat(2);// [1, 2, 3, 4, 5, 6]\n\n//\u4f7f\u7528 Infinity \u4f5c\u4e3a\u6df1\u5ea6\uff0c\u5c55\u5f00\u4efb\u610f\u6df1\u5ea6\u7684\u5d4c\u5957\u6570\u7ec4\narr3.flat(Infinity); // [1, 2, 3, 4, 5, 6]\n")),Object(a.b)("p",null,"flat\u51fd\u6570\u5b9e\u73b0\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"Array.prototype._flat = function(depth = 1){\nif(depth === 0) return this;\nreturn this.reduce((acc, item) => (item instanceof Array) ? [...acc, ...item._flat(depth - 1)] : acc.concat(item), [])\n}\n")),Object(a.b)("h2",{id:"\u7a7a\u4f4d"},"\u7a7a\u4f4d"),Object(a.b)("p",null,"\u6570\u7ec4\u7684splice\u65b9\u6cd5\u662f\u7528\u6765\u5220\u9664\u6570\u7ec4\u5143\u7d20\u5e38\u7528\u7684\u65b9\u6cd5\u3002\u5148\u8bf4\u4e0bsplice\u7684\u8bed\u6cd5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"arr.splice(index,deleteCount,item,...,item)\n")),Object(a.b)("p",null,"splice\u7684\u8fd4\u56de\u503c\u662f\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u662f\u88ab\u88ab\u5220\u9664\u7684\u539f\u6570\u7ec4\u7684\u5143\u7d20\uff0c\u5982\u679c\u6ca1\u6709\u6570\u7ec4\u5220\u9664\u8fd4\u56de[];\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(a.b)("img",{width:"350",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/FqTxj6.jpg"}),Object(a.b)(l.a,{type:"tip",mdxType:"Hint"},"splice\u7684\u7279\u70b9\u662f\u4f1a\u5220\u9664\u539f\u6570\u7ec4\u3002"),Object(a.b)("p",null,"\u5f53\u5b58\u5728\u7684\u53c2\u6570\u662f\u591a\u4e8e2\u4e2a\u7684\u65f6\u5019\uff0c\u5373\u4eceindex\u5904\u5220\u9664\u4e00\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u5c06\u591a\u7684\u53c2\u6570\u63d2\u5165\u5230\u6570\u7ec4\u3002"),Object(a.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/70sszK.jpg"}),Object(a.b)("p",null,"\u5f53\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a0\u7684\u65f6\u5019\uff0c\u6b64\u65f6\u4e0d\u5220\u9664\u5143\u7d20\uff0c\u4eceindex\u4f4d\u7f6e\u5f00\u59cb\u63d2\u5165\u7b2c\u4e09\u7b2c\u56db\u4e2a\u53c2\u6570\u3002"),Object(a.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/19Npij.jpg"}),Object(a.b)("p",null,"\u5f53index\u5927\u4e8e\u6570\u7ec4\u957f\u5ea6\u65f6\uff0c\u5728\u6700\u540e\u63d2\u5165\uff1a"),Object(a.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/yMqp8Q.jpg"}),Object(a.b)(l.a,{type:"warning",mdxType:"Hint"},"\u5728for\u5faa\u73af\u4f7f\u7528splice\u5220\u9664\u51fd\u6570\u65f6\u3002length\u4f1a\u6539\u53d8\u3002\u540e\u9762\u7684\u5143\u7d20\u56e0\u4e3a\u524d\u79fb\u88ab\u8df3\u8fc7\u3002\u5982\u4e0b\u4f8b\u6700\u597d\u4f7f\u7528 i--\uff0c\u5c06\u6570\u7ec4\u7684index\u5411\u524d\u518d\u63a8\u4e00\u4e2a\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"for (let i = 0; i < nums.length; i++) {\n if (nums[i] === val) {\n   nums.splice(i, 1);\n   i--;\n }\n}\n")),Object(a.b)("p",null,"\u6216\u8005\u53ef\u4ee5\u4ece\u540e\u5411\u524d\u904d\u5386\uff0c\u8fd9\u6837\u5220\u9664\u6570\u7ec4\u5143\u7d20\uff0c\u540e\u9762\u5143\u7d20\u7684\u524d\u79fb\u4e0d\u4f1a\u5f71\u54cdindex\u7684\u503c\u3002\u5982\u4e0b\u4f8b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"var nums = [0,0,1,1,1,2,2,3,3,4]\nvar removeDuplicates = function(nums) {\nfor(var i = nums.length - 1; i >= 0; i--){\n  if(nums[i] === nums[i-1]){\n    nums.splice(i,1);\n  }\n}\nreturn nums.length;\n};\n")),Object(a.b)("h2",{id:"fill"},"fill()"),Object(a.b)("p",null,"fill()\u65b9\u6cd5\u7528\u4e00\u4e2a\u56fa\u5b9a\u503c\u586b\u5145\u4e00\u4e2a\u6570\u7ec4\u4e2d\u4ece\u8d77\u59cb\u7d22\u5f15\u5230\u7ec8\u6b62\u7d22\u5f15\u5185\u7684\u5168\u90e8\u5143\u7d20\u3002\u4e0d\u5305\u62ec\u7ec8\u6b62\u7d22\u5f15\u3002\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u6539\u53d8\u6e90\u6570\u7ec4\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u8003\u8651\u5230\u5b83\u7684\u526f\u4f5c\u7528\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"var array1 = [1, 2, 3, 4];\n\n// fill with 0 from position 2 until position 4\nconsole.log(array1.fill(0, 2, 4));\n// expected output: [1, 2, 0, 0]\n\nconsole.log(array1);\n\n// expected output: [1, 2, 0, 0]\n\n// fill with 5 from position 1\nconsole.log(array1.fill(5, 1));\n// expected output: [1, 5, 5, 5]\n\nconsole.log(array1.fill(6));\n// expected output: [6, 6, 6, 6]\n")),Object(a.b)("p",null,"fill(value)\u4e2dvalue\u7684\u503c\u6700\u597d\u4e0d\u8981\u662f",Object(a.b)("strong",{parentName:"p"},"\u5f15\u7528\u7c7b\u578b"),"\uff0c\u5982\u679c\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u6240\u6709\u7684value\u90fd\u662f\u4fdd\u5b58\u7740\u5bf9\u540c\u4e00\u4e2a\u5730\u5740\u7684\u5f15\u7528\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),'// Objects by reference.\nvar arr = Array(3).fill({})\n// [{}, {}, {}];\n\narr[0].hi = "hi";\n// [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]\n')),Object(a.b)("p",null,"\u751f\u6210 n*n \u4e8c\u7ef4\u6570\u7ec4\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"new Array(3).fill().map(item => new Array(3).fill(0))\n")),Object(a.b)("img",{width:"450",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Quvv2f.jpg"}),Object(a.b)("p",null,"\u6784\u5efa\u4e8c\u7ef4\u6570\u7ec4\u7684\u65f6\u5019\uff0c\u5982\u679c\u901a\u8fc7\u4e0b\u9762\u7684\u8bed\u53e5\uff0c\u4f1a\u51fa\u73b0\u56fe\u7247\u4e2d\u7684\u9519\u8bef\uff0c\u5728\u6784\u5efa\u4e8c\u7ef4\u6570\u7ec4\u7684\u65f6\u5019\uff0c\u63a8\u8350\u4e0a\u9762map\u7684\u5199\u6cd5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"new Array(3).fill(new Array(3).fill(0))\n")),Object(a.b)("img",{width:"600",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Bey6F5.jpg"}))}u.isMDXComponent=!0},538:function(e,t,n){"use strict";n(540);var a=n(0),r=n.n(a),l=n(541),c=n.n(l),i=(n(539),{best:{name:"\u63a8\u8350",color:"#50c610",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),r.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},r.a.createElement("g",null,r.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},r.a.createElement("g",null,r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return r.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+i[t].color}},r.a.createElement("div",{style:{float:"left"}},i[t].icon),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c()("<strong>"+i[t].name+"</strong>\uff1a"+n)}}))}},539:function(e,t,n){},542:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.align,n=e.width,a=e.src,l=e.legend;return t||l?r.a.createElement("div",{align:t||"center"},r.a.createElement("img",{src:a,width:n}),l&&r.a.createElement("p",null,l)):r.a.createElement("img",{src:a,width:n})}}}]);