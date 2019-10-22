(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{341:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return a}));r(58),r(31),r(22),r(23),r(59),r(0);var o=r(537);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var l={title:"Promise",sidebar_label:"Promise"},s=[{value:"\u4f7f\u7528promise\u7684\u539f\u56e0",id:"\u4f7f\u7528promise\u7684\u539f\u56e0",children:[]},{value:"promise\u7684\u4e09\u79cd\u72b6\u6001",id:"promise\u7684\u4e09\u79cd\u72b6\u6001",children:[]},{value:"promise\u8bed\u6cd5\uff1a",id:"promise\u8bed\u6cd5\uff1a",children:[]},{value:"Promise.prototype.then(onFulfilled, onRejected)",id:"promiseprototypethenonfulfilled-onrejected",children:[{value:"promise.then()\u7684\u6ce8\u610f\u4e8b\u9879\uff1a",id:"promisethen\u7684\u6ce8\u610f\u4e8b\u9879\uff1a",children:[]},{value:"\u6ce8\u610fpromise\u548csetTimeOut()\u7684\u4f18\u5148\u7ea7\uff1a",id:"\u6ce8\u610fpromise\u548csettimeout\u7684\u4f18\u5148\u7ea7\uff1a",children:[]},{value:"promise.then()\u4e0e\u5fae\u4efb\u52a1\uff1a",id:"promisethen\u4e0e\u5fae\u4efb\u52a1\uff1a",children:[]}]},{value:"Promise.prototype.catch(onRejected)",id:"promiseprototypecatchonrejected",children:[{value:"catch()\u7684\u6ce8\u610f\u4e8b\u9879\uff1b",id:"catch\u7684\u6ce8\u610f\u4e8b\u9879\uff1b",children:[]}]},{value:"Promise.prototype.all(iterable)",id:"promiseprototypealliterable",children:[{value:"Promise.all()\u7684\u6ce8\u610f\u4e8b\u9879",id:"promiseall\u7684\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"Promise.prototype.race(iterable)",id:"promiseprototyperaceiterable",children:[{value:"promise.race \u624b\u52a8\u5b9e\u73b0",id:"promiserace-\u624b\u52a8\u5b9e\u73b0",children:[]}]},{value:"\u521b\u5efa\u5df2\u5904\u7406\u7684Promise",id:"\u521b\u5efa\u5df2\u5904\u7406\u7684promise",children:[{value:"Promise.resolve(value)",id:"promiseresolvevalue",children:[]},{value:"Promise.reject(reason)",id:"promiserejectreason",children:[]}]}],c={rightToc:s},i="wrapper";function a(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,["components"]);return Object(o.b)(i,t({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u4f7f\u7528promise\u7684\u539f\u56e0"},"\u4f7f\u7528promise\u7684\u539f\u56e0"),Object(o.b)("p",null,"\u89e3\u51b3\u56de\u8c03\u51fd\u6570\u591a\u5c42\u5d4c\u5957\uff0c\u8ba9\u5f02\u6b65\u65b9\u6cd5\u53ef\u4ee5\u50cf\u540c\u6b65\u65b9\u6cd5\u90a3\u6837\u8fd4\u56de\u503c\uff0c\u4f7f\u4ee3\u7801\u66f4\u6613\u8bfb\u3002"),Object(o.b)("h2",{id:"promise\u7684\u4e09\u79cd\u72b6\u6001"},"promise\u7684\u4e09\u79cd\u72b6\u6001"),Object(o.b)("p",null,"pending: \u521d\u59cb\u72b6\u6001\uff0c\u65e2\u4e0d\u662f\u6210\u529f\uff0c\u4e5f\u4e0d\u662f\u5931\u8d25\u72b6\u6001\u3002"),Object(o.b)("p",null,"fulfilled: \u610f\u5473\u7740\u64cd\u4f5c\u6210\u529f\u5b8c\u6210\u3002"),Object(o.b)("p",null,"rejected: \u610f\u5473\u7740\u64cd\u4f5c\u5931\u8d25\u3002"),Object(o.b)("h2",{id:"promise\u8bed\u6cd5\uff1a"},"promise\u8bed\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"new Promise( function(resolve, reject) {...} /* executor */  );\n")),Object(o.b)("p",null,"promise\u53c2\u6570 executor"),Object(o.b)("p",null,"executor\u6267\u884c\u5668\u51fd\u6570\u5305\u62ec\u4e24\u4e2a\u53c2\u6570resolve \u548c reject\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Promise\u6784\u9020\u51fd\u6570\u6267\u884c\u65f6\u4f1a\u7acb\u5373\u8c03\u7528exector\u51fd\u6570\uff08\u5b8f\u4efb\u52a1\u540c\u6b65\u64cd\u4f5c\uff09"),"\uff0cresolve \u548c reject\u51fd\u6570\u4f1a\u88ab\u5f53\u4f5c\u53c2\u6570\u4f20\u7ed9exector\u51fd\u6570\u3002exector\u51fd\u6570\u4e00\u822c\u4f1a\u6267\u884c\u4e00\u4e9b\u5f02\u6b65\u51fd\u6570\uff0c\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u7684\u6210\u529f\u548c\u5931\u8d25\u5206\u522b\u8c03\u7528resolve\u51fd\u6570\u548creject\u51fd\u6570\uff0c\u5c06promise\u72b6\u6001\u5206\u522b\u8f6c\u4e3afulfiled\u548crejected\u72b6\u6001\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"eg:")),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'function myAsyncFunction(url) {\n  return new Promise((resolve, reject) => {\n    const xhr = new XMLHttpRequest();\n    xhr.open("GET", url); // \u901a\u8fc7url\u5efa\u7acb\u94fe\u63a5\n    xhr.onload = () => resolve(xhr.responseText); //\u63a5\u6536\u5230\u5b8c\u6574\u54cd\u5e94\u6570\u636e\u65f6\u89e6\u53d1\n    xhr.onerror = () => reject(xhr.statusText); //\u8bf7\u6c42\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\u89e6\u53d1\u3002\n    xhr.send();\n  });\n};\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4ee3\u7801\u4e2d\u7684onload\uff0conerror\u5c5e\u4e8eW3C\u89c4\u8303\u4e2d\u8fdb\u5ea6\u4e8b\u4ef6.\u8fdb\u5ea6\u4e8b\u4ef6\u89c4\u8303\u5b9a\u4e49\u4e86\u4e0e\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u901a\u4fe1\u76f8\u5173\u7684\u4e00\u7cfb\u5217\u4e8b\u4ef6\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u76d1\u542c\u4e86\u901a\u4fe1\u8fdb\u7a0b\u4e2d\u7684\u5404\u4e2a\u5173\u952e\u8282\u70b9\uff0c\u4f7f\u6211\u4eec\u80fd\u591f\u4ee5\u66f4\u7ec6\u7684\u9897\u7c92\u5ea6\u638c\u63a7\u6570\u636e\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u7ec6\u8282\u3002"),Object(o.b)("h3",t({parentName:"blockquote"},{id:"promise\u5728\u4e8b\u4ef6\u8f6e\u5faa\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"}),"promise\u5728\u4e8b\u4ef6\u8f6e\u5faa\u7684\u6ce8\u610f\u4e8b\u9879\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"new Promise(function(resolve, reject){\n    console.log('hello');\n    resolve(24);\n    console.log('world');\n}).then(value => console.log(value));\nconsole.log('number');\n/*\nhello\nworld\nnumber\n24\n*/\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Promise\u672c\u8eab\u662f\u540c\u6b65\u7684\u7acb\u5373\u6267\u884c\u51fd\u6570"),"\uff0c\u5728\u6267\u884c\u5230resolve()\u7684\u65f6\u5019\u5c5e\u4e8e\u5f02\u6b65\u64cd\u4f5c\uff0c\u4f1a\u628a\u53c2\u6570\u4f20\u7ed9.then(),\u5e76\u5c06\u5b83\u653e\u5230\u5fae\u4efb\u52a1\u5f02\u6b65\u961f\u5217\u91cc\u3002\u6240\u4ee5\u5f53executor\u51fd\u6570\u4e2d\u6267\u884c\u5b8c\u540c\u6b65\u64cd\u4f5c\u540e\uff0cconsole.log('number')\u88ab\u653e\u5230\u51fd\u6570\u8c03\u7528\u6808\uff0c\u8c03\u7528\u6808\u7684\u5b8f\u89c2\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u540e\uff0c\u4f1a\u53bb\u5fae\u4efb\u52a1\u961f\u5217\u91cc\u53d6\u5fae\u4efb\u52a1\u5230\u8c03\u7528\u6808\u3002"),Object(o.b)("h2",{id:"promiseprototypethenonfulfilled-onrejected"},"Promise.prototype.then(onFulfilled, onRejected)"),Object(o.b)("p",null,"\u5f53new Promise((resolve,reject) => resolve())\u7684\u65f6\u5019\u5bf9\u5e94\u6267\u884cthen\u64cd\u4f5c\uff0c\u4ee3\u8868Promise\u7684\u6210\u529f\u72b6\u6001(fulfilled)\u3002"),Object(o.b)("p",null,"\u5f53Promise\u53d8\u6210\u63a5\u53d7\u72b6\u6001\uff08fulfilled\uff09\u65f6\uff0conFulfilled\u53c2\u6570\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u3002"),Object(o.b)("p",null,"\u5f53Promise\u53d8\u6210\u62d2\u7edd\u72b6\u6001\uff08rejected \uff09\u65f6\uff0conRejected\u53c2\u6570\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u3002\u6b64\u65f6\u7b49\u4ef7\u4e0e.catch()\u529f\u80fd"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"var p = new Promise((resolve, reject) => {\n    resolve('foo')\n})\n\n// 'bar' \u4e0d\u662f\u51fd\u6570\uff0c\u4f1a\u5728\u5185\u90e8\u88ab\u66ff\u6362\u4e3a (x) => x\np.then('bar').then((value) => {\n    console.log(value) // 'foo'\n})\n")),Object(o.b)("p",null,".then()\u7684\u53c2\u6570\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u8bdd\uff0c\u6b64\u65f6\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u53c2\u6570\u3002\n.then(String) <=> .then((value) => value) \u5176\u4e2dvalue\u4ee3\u8868Promise\u7684\u8fd4\u56de\u503c\u3002"),Object(o.b)("h3",{id:"promisethen\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"},"promise.then()\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"Promise.resolve()\n  .then( () => {\n    // \u4f7f .then() \u8fd4\u56de\u4e00\u4e2a rejected promise\n    throw 'Oh no!';\n  })\n  .catch( reason => {\n    console.error( 'onRejected function called: ', reason );\n  })\n  .then( () => {\n    console.log( \"I am always called even if the prior then's promise rejects\" );\n  });\n")),Object(o.b)("p",null,"\u5f53promise.then()\u8fd4\u56de\u7684\u72b6\u6001\u662frejected promise \u7684\u65f6\u5019\u8fd9\u4e2a\u65f6\u5019\u4f1a\u88abcatch()\u6355\u83b7\uff0c\n\u8fd9\u65f6\u5019\u53ea\u8981catch\u4e2d\u4e0d\u8fd4\u56derejected\u3002\u6b64\u65f6\u90fd\u4f1a\u6267\u884c\u540e\u9762\u7684then\u64cd\u4f5c\u3002"),Object(o.b)("h3",{id:"\u6ce8\u610fpromise\u548csettimeout\u7684\u4f18\u5148\u7ea7\uff1a"},"\u6ce8\u610fpromise\u548csetTimeOut()\u7684\u4f18\u5148\u7ea7\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'Promise.resolve("foo")\n  // 1. \u63a5\u6536 "foo" \u5e76\u4e0e "bar" \u62fc\u63a5\uff0c\u5e76\u5c06\u5176\u7ed3\u679c\u505a\u4e3a\u4e0b\u4e00\u4e2aresolve\u8fd4\u56de\u3002\n  .then(function(string) {\n    return new Promise(function(resolve, reject) {\n      setTimeout(function() {\n        string += \'bar\';\n        resolve(string);\n      }, 1);\n    });\n  })\n  // 2. \u63a5\u6536 "foobar", \u653e\u5165\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u4e2d\u5904\u7406\u8be5\u5b57\u7b26\u4e32\n  // \u5e76\u5c06\u5176\u6253\u5370\u5230\u63a7\u5236\u53f0\u4e2d, \u4f46\u662f\u4e0d\u5c06\u5904\u7406\u540e\u7684\u5b57\u7b26\u4e32\u8fd4\u56de\u5230\u4e0b\u4e00\u4e2a\u3002\n  .then(function(string) {\n    setTimeout(function() {\n      string += \'baz\';\n      console.log(string);\n    }, 1)\n    return string;\n  })\n  // 3. \u6253\u5370\u672c\u8282\u4e2d\u4ee3\u7801\u5c06\u5982\u4f55\u8fd0\u884c\u7684\u5e2e\u52a9\u6d88\u606f\uff0c\n  // \u5b57\u7b26\u4e32\u5b9e\u9645\u4e0a\u662f\u7531\u4e0a\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e4b\u524d\u7684\u90a3\u5757\u5f02\u6b65\u4ee3\u7801\u5904\u7406\u7684\u3002\n  .then(function(string) {\n    console.log("Last Then:  oops... didn\'t bother to instantiate and return " +\n                "a promise in the prior then so the sequence may be a bit " +\n                "surprising");\n\n    // \u6ce8\u610f `string` \u8fd9\u65f6\u4e0d\u4f1a\u5b58\u5728 \'baz\'\u3002\n    // \u56e0\u4e3a\u8fd9\u662f\u53d1\u751f\u5728\u6211\u4eec\u901a\u8fc7setTimeout\u6a21\u62df\u7684\u5f02\u6b65\u51fd\u6570\u4e2d\u3002\n    console.log(string);\n});\n')),Object(o.b)("p",null,"\u7b2c\u4e00\u4e2athen()\u65b9\u6cd5\u4e2d\u8fd4\u56de\u4e86\u4e00\u4e2a\u65b0\u5b9a\u4e49\u7684Promise\u5bf9\u8c61\uff0c\u7b49\u5f851ms\u540e\u8fd4\u56de\u4e00\u4e2apromiseValue\u4e3afoobar\u7684\u503c\u548cfulfiled\u72b6\u6001\u3002\u6b64\u65f6\u6267\u884c\u4e0b\u4e00\u4e2athen(),\u628afoobar\u4f20\u7ed9\u6d4f\u89c8\u5668\u5b9a\u65f6\u5668API\uff0c\u7136\u540e\u5c06\u5b83\u653e\u5165\u5b8f\u4efb\u52a1\u5f02\u6b65\u961f\u5217\u4e2d\uff0creturn string\u8fdb\u5165\u51fd\u6570\u8c03\u7528\u6808\uff0c\u5c06\u503c\u4f20\u7ed9\u4e0b\u4e00\u4e2athen(),\u6b64\u65f6\u5c06then()\u4e2d\u7684onFulfilled\u51fd\u6570\u653e\u5165\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u6b64\u65f6\u8c03\u7528\u6808\u4e3a\u7a7a\u3002\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u53ea\u6709\u7b2c\u4e09\u4e2a.then()\u7684\u5185\u5bb9\uff0c\u5c06\u5fae\u4efb\u52a1\u961f\u5217\u6e05\u7a7a\uff0c\u5c06\u5176\u4e2d\u7684\u540c\u6b65\u4ee3\u7801\u653e\u5165\u8c03\u7528\u6808\uff0c\u6253\u5370\u4e24\u4e2aconsole.log()\u8bed\u53e5\u5230\u63a7\u5236\u53f0\u3002\u6700\u540e\u6267\u884c\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u7684setTimeOut()\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(o.b)("h3",{id:"promisethen\u4e0e\u5fae\u4efb\u52a1\uff1a"},"promise.then()\u4e0e\u5fae\u4efb\u52a1\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"new Promise(resolve => {\n  resolve();\n}).then(() => {\n  new Promise(resolve => {\n      resolve();\n  }).then(() => {\n        console.log(777);\n    })\n    .then(() => {\n        console.log(888);\n    })\n    .then(() => {\n        console.log(999);\n    });\n  }).then(() => {\n      console.log(666);\n  })\n  .then(() => {\n      console.log(555);\n  });\n")),Object(o.b)("p",null,"\u6267\u884c\u7b2c3\u884cthen,then\u91cc\u9762\u662f\u51fd\u6570\uff0c\u76f4\u63a5\u8c03\u7528\uff0c\u6267\u884c\u91cc\u9762\u7684 new Promise,\u5c06\u540e\u97626-14\u884c \u653e\u5230\u5fae\u4efb\u52a1\u961f\u5217\u3002\u51fd\u6570\u6267\u884c\u5b8c\u8fd4\u56de\u4e00\u4e2aundefined\uff0c\u6b64\u65f6\u5c0615\u884c\u4ee5\u540e\u653e\u5165\u5fae\u4efb\u52a1\u961f\u5217\u3002\u4ece\u961f\u5934\u53d6\u7b2c6\u884c.then,\u6267\u884c\u7b2c7\u884c\u8f93\u51fa 777\uff0c \u5c069\u884c\u523014\u884c\u653e\u5230\u961f\u5c3e\u3002\u6b64\u65f6\u961f\u5934\u662f\u7b2c15\u884c\u6267\u884c\u8f93\u51fa666\uff0c\u5c0618\u884c\u4ee5\u540e\u653e\u5230\u961f\u5c3e\u3002\u6b64\u65f6\u6267\u884c\u961f\u5934\u662f\u7b2c9\u884c\uff0c\u8f93\u51fa888\uff0c\u5c0612\u884c\u523014\u653e\u5165\u961f\u5c3e\uff0c\u6b64\u65f618\u884c\u7684then\u662f\u961f\u5934\uff0c\u8f93\u51fa555\uff0c\u6700\u540e\u6267\u884c12-14\u884c\u8f93\u51fa999"),Object(o.b)("h2",{id:"promiseprototypecatchonrejected"},"Promise.prototype.catch(onRejected)"),Object(o.b)("p",null,"\u5f53\u8fd4\u56de\u4e00\u4e2arejected promise\u7684\u65f6\u5019\uff0c\u6216\u8005throw\u51fa\u4e00\u4e2a\u9519\uff0c\u6b64\u65f6\u4f1a\u88abcatch()\u6355\u83b7"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"var p1 = new Promise(function(resolve, reject) {\n  throw 'Uh-oh!';\n}).catch();\n<=>\nvar p1 = new Promise(function(resolve, reject) {\n return Promise.reject('Uh-oh!');\n}).catch();\n")),Object(o.b)("h3",{id:"catch\u7684\u6ce8\u610f\u4e8b\u9879\uff1b"},"catch()\u7684\u6ce8\u610f\u4e8b\u9879\uff1b"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"// \u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u629b\u51fa\u7684\u9519\u8bef\u4e0d\u4f1a\u88abcatch\u6355\u83b7\u5230\nvar p2 = new Promise(function(resolve, reject) {\n  setTimeout(function() {\n    throw 'Uncaught Exception!';\n  }, 1000);\n});\n\np2.catch(function(e) {\n  console.log(e); // \u4e0d\u4f1a\u6267\u884c\n});\n\n// \u5728resolve()\u540e\u9762\u629b\u51fa\u7684\u9519\u8bef\u4f1a\u88ab\u5ffd\u7565\nvar p3 = new Promise(function(resolve, reject) {\n  resolve();\n  throw 'Silenced Exception!';\n});\n\np3.catch(function(e) {\n   console.log(e); // \u4e0d\u4f1a\u6267\u884c\n});\n\n\n")),Object(o.b)("p",null,"\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u629b\u9519\u4e4b\u6240\u4ee5\u65e0\u6cd5\u88abcatch\u5230\u7684\u539f\u56e0\u662f\uff1anew Promise\u662f\u540c\u6b65\u7684\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u6267\u884c\u5230setTimeout\u51fd\u6570\uff0c\u5c06\u5b83\u653e\u5230\u5b8f\u4efb\u52a1\u5f02\u6b65\u961f\u5217\u4e2d\uff0c\u5b8f\u4efb\u52a1\u5f02\u6b65\u961f\u5217\u7684\u6267\u884c\u4f18\u5148\u7ea7\u6700\u4f4e\u3002\u53ea\u6709\u5f53\u5fae\u4efb\u52a1\u5f02\u6b65\u961f\u5217\u548c\u51fd\u6570\u8c03\u7528\u6808\u961f\u5217\u4e3a\u7a7a\u65f6\u624d\u4f1a\u8c03\u7528\u3002\u5f53setTimeout\u51fd\u6570\u6267\u884c\u65f6\uff0c\u5916\u90e8\u5df2\u7ecf\u6ca1\u6709\u4ee3\u7801\u53ef\u4ee5\u63a5\u5230\u5b83\u6240\u629b\u51fa\u7684\u9519\u8bef\u3002\u6240\u4ee5\u5f02\u6b65\u56de\u8c03\u51fd\u6570\u629b\u51fa\u7684\u9519\u603b\u662f\u56e0\u4e3a\u51fd\u6570\u8c03\u7528\u6808\u4e3a\u7a7a\uff0c\u6ca1\u6709\u4ee3\u7801\u53ef\u4ee5\u627f\u63a5\u9519\u8bef\u800c\u5bfc\u81f4\u65e0\u6cd5\u88ab\u6355\u83b7\u5230\u3002"),Object(o.b)("h2",{id:"promiseprototypealliterable"},"Promise.prototype.all(iterable)"),Object(o.b)("p",null,"\u5f53promise.all()\u5185\u6ca1\u6709\u53c2\u6570\u7684\u65f6\u5019\uff0c\u8fd4\u56de\u4e00\u4e2a\u5df2\u5b8c\u6210\u72b6\u6001\u7684promise\u3002"),Object(o.b)("p",null,"\u5982\u679c\u6240\u6709\u4f20\u5165\u7684 promise \u90fd\u53d8\u4e3a\u5b8c\u6210\u72b6\u6001\uff0c\u6216\u8005\u4f20\u5165\u7684\u53ef\u8fed\u4ee3\u5bf9\u8c61\u5185\u6ca1\u6709 promise\uff0cPromise.all \u8fd4\u56de\u7684 promise \u5f02\u6b65\u5730\u53d8\u4e3a\u5b8c\u6210\u3002"),Object(o.b)("p",null,"\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0cPromise.all \u8fd4\u56de\u7684 promise \u7684\u5b8c\u6210\u72b6\u6001\u7684\u7ed3\u679c\u90fd\u662f\u4e00\u4e2a\u6570\u7ec4"),Object(o.b)("p",null,"\u5982\u679c\u4f20\u5165\u7684 promise \u4e2d\u6709\u4e00\u4e2a\u5931\u8d25\uff08rejected\uff09\uff0cpromise.all \u5f02\u6b65\u5730\u5c06\u5931\u8d25\u7684\u90a3\u4e2a\u7ed3\u679c\u7ed9\u5931\u8d25\u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570\uff0c\u800c\u4e0d\u7ba1\u5176\u5b83 promise \u662f\u5426\u5b8c\u6210\u3002"),Object(o.b)("h3",{id:"promiseall\u7684\u6ce8\u610f\u4e8b\u9879"},"Promise.all()\u7684\u6ce8\u610f\u4e8b\u9879"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"const p1 = new Promise((resolve, reject) => {\n  resolve('hello');\n})\n.then(result => result)\n.catch(e => e);\n\nconst p2 = new Promise((resolve, reject) => {\n  throw new Error('\u62a5\u9519\u4e86');\n})\n.then(result => result)\n.catch(e => e);\n\nPromise.all([p1, p2])\n.then(result => console.log(result))\n.catch(e => console.log(e));\n// [\"hello\", Error: \u62a5\u9519\u4e86]\n\n")),Object(o.b)("p",null,"\u5f53p1\u6267\u884c\u6210\u529f\u72b6\u6001\u53d8\u4e3aresolved\uff0cp2\u6267\u884c\u7684\u65f6\u5019\u4f1a\u51fa\u9519\u8df3\u5230catch()\uff0c\u6267\u884c\u5b8c\u72b6\u6001\u4e5f\u4f1a\u53d8\u4e3aresolved\uff0c\u6240\u4ee5Promise.all()\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\u3002"),Object(o.b)("p",null,"\u5982\u679cp2\u6ca1\u6709catch\u7684\u5316\uff0c\u72b6\u6001\u8fd8\u662frejected\uff0c\u6b64\u65f6\u7684Promise.all()\u4e0d\u4f1a\u6267\u884c\u3002"),Object(o.b)("p",null,"Promise.all()\u4ee3\u7801\u5b9e\u73b0: ",Object(o.b)("a",t({parentName:"p"},{href:"https://ustc-han.github.io/2019/04/22/promise.all()%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0/"}),"https://ustc-han.github.io/2019/04/22/promise.all()%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0/")),Object(o.b)("h2",{id:"promiseprototyperaceiterable"},"Promise.prototype.race(iterable)"),Object(o.b)("p",null,"Promise.race(iterable) \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u4e00\u65e6\u8fed\u4ee3\u5668\u4e2d\u7684\u67d0\u4e2apromise\u89e3\u51b3\u6216\u62d2\u7edd\uff0c\u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2a\u89e3\u51b3\u72b6\u6001\u6216\u62d2\u7edd\u72b6\u6001\u7684promise\u3002\u7b80\u8a00\u4e4b\uff0c\u4ee5\u6700\u5148\u8fd4\u56de\u7ed3\u679c\u7684promise\u7684\u72b6\u6001\u4e3a\u51c6\u3002"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'var p3 = new Promise(function(resolve, reject) { \n    setTimeout(resolve, 100, "three");\n});\nvar p4 = new Promise(function(resolve, reject) { \n    setTimeout(reject, 500, "four"); \n});\n\nPromise.race([p3, p4]).then(function(value) {\n  console.log(value); // "three"\n  // p3 \u66f4\u5feb\uff0c\u6240\u4ee5\u5b83\u5b8c\u6210\u4e86\n}, function(reason) {\n  // \u672a\u88ab\u8c03\u7528\n});\n')),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"var promise1 = new Promise(function(resolve, reject) {\n    setTimeout(resolve, 500, 'one');\n});\n\nvar promise2 = new Promise(function(resolve, reject) {\n    setTimeout(resolve, 100, 'two');\n});\n\nPromise.race([promise1, promise2]).then(function(value) {\n  console.log(value);\n  // Both resolve, but promise2 is faster\n});\n// expected output: \"two\"\n\n")),Object(o.b)("h3",{id:"promiserace-\u624b\u52a8\u5b9e\u73b0"},"promise.race \u624b\u52a8\u5b9e\u73b0"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"function promiseRace(promises) {\n return new Promise(function(resolve, reject) {\n   if (Arr.isArray(promise)) {\n       for (let item of promises) {\n       Promise.resolve(item).then(function(value) {\n          return resolve(value)\n       }, function(reason) {return reject(reason)});\n   }\n   }\n })\n}\n")),Object(o.b)("h2",{id:"\u521b\u5efa\u5df2\u5904\u7406\u7684promise"},"\u521b\u5efa\u5df2\u5904\u7406\u7684Promise"),Object(o.b)("h3",{id:"promiseresolvevalue"},"Promise.resolve(value)"),Object(o.b)("p",null,"value\u7684\u503c\u5206\u591a\u79cd\u60c5\u51b5\uff0c\u5f53value\u7684\u503c\u662fPromise\uff0c\u6b64\u65f6Promise.resolve()\u4e0d\u8d77\u4f5c\u7528\uff0c\u8fd4\u56de\u7684promise\u72b6\u6001\u548cvalue\u7684\u6700\u540e\u72b6\u6001\u4fdd\u6301\u4e00\u81f4\u3002\u5f53value\u662fthenable\uff08\u5e26\u6709then\u65b9\u6cd5\uff09\uff0c\u8fd4\u56de\u7684promise\u4f1a\u201c\u8ddf\u968f\u201d\u8fd9\u4e2athenable\u7684\u5bf9\u8c61\uff0c\u91c7\u7528\u5b83\u7684\u6700\u7ec8\u72b6\u6001\u3002\u5176\u5b83\u60c5\u51b5\u8fd4\u56de\u6210\u529f\u72b6\u6001\u7684promise\u3002"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),"Promise.resolve(value);\nPromise.resolve(promise);\nPromise.resolve(thenable);\n")),Object(o.b)("p",null,"thenable\u51fd\u6570\u4f7f\u7528\u7b2c\u4e00\u53c2\u6570\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6210\u529f\u72b6\u6001\u7684promise,\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u53c2\u6570\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684promise\u3002"),Object(o.b)("pre",null,Object(o.b)("code",t({parentName:"pre"},{className:"language-js"}),'var p1 = Promise.resolve({ \n  then: function(test, rej) { rej("rejected!"); }\n});\nconsole.log(p1 instanceof Promise) // true, \u8fd9\u662f\u4e00\u4e2aPromise\u5bf9\u8c61\n\np1.then(function(v) {\n    console.log(v); \n  }, function(e) {\n    console.log(e) //rejected\n})\n')),Object(o.b)("h3",{id:"promiserejectreason"},"Promise.reject(reason)"),Object(o.b)("p",null,"Promise.reject\u8fd4\u56de\u4e00\u4e2a\u88ab\u62d2\u7edd\u7684Promise\u5bf9\u8c61\uff0c\n\u53c2\u6570\u4ee3\u8868\u88ab\u62d2\u7edd\u7684\u539f\u56e0\u3002"),Object(o.b)("p",null,"Promise.reject(reason).catch((reason) => ...);"))}a.isMDXComponent=!0},537:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return u}));var o=r(0),t=r.n(o),l=t.a.createContext({}),s=function(e){var n=t.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},c=function(e){var n=s(e.components);return t.a.createElement(l.Provider,{value:n},e.children)};var i="mdxType",a={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(r[o]=e[o]);return r}(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,m=p[c+"."+u]||p[u]||a[u]||l;return r?t.a.createElement(m,Object.assign({},{ref:n},i,{components:r})):t.a.createElement(m,Object.assign({},{ref:n},i))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=p;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[i]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<l;u++)s[u]=r[u];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);