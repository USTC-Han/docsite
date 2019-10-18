(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var r=n(390);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"fetch",title:"Fetch",sidebar_label:"Fetch"},l=[],s={rightToc:l},b="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(b,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"XMLHttpRequest 是一个设计粗糙的 API，不符合关注分离（Separation of Concerns）的原则，配置和调用方式非常混乱，而且基于事件的异步模型写起来也没有现代的 Promise，generator/yield，async/await 友好。"),Object(r.b)("p",null,"Fetch API 是近年来被提及将要取代 XHR 的技术新标准，是一个 HTML5 的 API。Fetch 并不是 XHR 的升级版本，而是从一个全新的角度来思考的一种设计。Fetch 是基于 Promise 语法结构，而且它的设计足够低阶，这表示它可以在实际需求中进行更多的弹性设计。对于 XHR 所提供的能力来说，Fetch 已经足够取代 XHR ，并且提供了更多拓展的可能性。"),Object(r.b)("p",null,"Fetch API 规范明确了用户代理获取资源的语义。原生支持 Promise，调用方便，符合语义化。可配合使用 ES2016 中的 async / await 语法，更加优雅。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"// 获取 some.json 资源\nfetch('some.json')\n  .then(function(response) {\n    return response.json();\n  })\n  .then(function(data) {\n    console.log('data', data);\n  })\n  .catch(function(error) {\n    console.log('Fetch Error: ', error);\n  });\n\n// 采用ES2016的 async/await 语法\nasync function() {\n  try {\n    const response = await fetch('some.json');\n    const data = response.json();\n    console.log('data', data);\n  } catch (error) {\n    console.log('Fetch Error: ', error)\n  }\n}\n")),Object(r.b)("p",null,"fetch 方法有两种调用方式："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"Promise fetch(String url, [, Object options]) // 常用\nPromise fetch(Request req, [, Object options])\n")),Object(r.b)("p",null,"第一个参数是一个 url，第二个参数是配置信息，可选\n第一个参数是一个 Request 对象，第二个参数是配置信息，可选"),Object(r.b)("p",null,"可选配置信息是一个 Object 对象，可以包含以下字段："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"method: 请求的方法，例如：GET, POST。"),Object(r.b)("li",{parentName:"ul"},"headers: 请求头部信息，可以是一个简单的对象，也可以是 Headers 类实例化的一个对象。"),Object(r.b)("li",{parentName:"ul"},"body: 需要发送的信息内容，可以是 Blob, BufferSource, FormData, URLSearchParams 或者 USVString。注意，GET, HEAD方法不能包含body。"),Object(r.b)("li",{parentName:"ul"},"mode: 请求模式，分别有 cors, no-cors, same-origin, navigate 这几个可选值。",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"cors: 允许跨域，要求响应中 Acess-Control-Allow-Origin 这样的头部表示允许跨域。"),Object(r.b)("li",{parentName:"ul"},"no-cors: 只允许使用 HEAD, GET, POST方法。"),Object(r.b)("li",{parentName:"ul"},"same-origin: 只允许同源请求，否则直接报错。"),Object(r.b)("li",{parentName:"ul"},"navigate: 支持页面导航。"))),Object(r.b)("li",{parentName:"ul"},"credentials: 表示是否发送cookie，有三个选项：",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"omit: 不发送cookie（2017年8月25日以前默认）。"),Object(r.b)("li",{parentName:"ul"},"same-origin: 仅在同源时发送cookie ",Object(r.b)("strong",{parentName:"li"},"（现在默认）"),"。"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"include"),": 发送cookie。"))),Object(r.b)("li",{parentName:"ul"},"cache: 表示处理缓存的策略。"),Object(r.b)("li",{parentName:"ul"},"redirect: 表示发生重定向时，有三个选项：",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"follow: 跟随。"),Object(r.b)("li",{parentName:"ul"},"error: 发生错误。"),Object(r.b)("li",{parentName:"ul"},"manual: 需要用户手动跟随。"))),Object(r.b)("li",{parentName:"ul"},"integrity: 包含一个用于验证资资源完整性的字符串。")),Object(r.b)("p",null,"例子："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"\n// Example POST method implementation:\n\npostData('http://example.com/answer', {answer: 42})\n  .then(data => console.log(data)) // JSON from `response.json()` call\n  .catch(error => console.error(error))\n\nfunction postData(url, data) {\n  // Default options are marked with *\n  return fetch(url, {\n    body: JSON.stringify(data), // must match 'Content-Type' header\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: 'same-origin', // include, same-origin, *omit\n    headers: {\n      'user-agent': 'Mozilla/4.0 MDN Example',\n      'content-type': 'application/json'\n    },\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\n    mode: 'cors', // no-cors, cors, *same-origin\n    redirect: 'follow', // manual, *follow, error\n    referrer: 'no-referrer', // *client, no-referrer\n  })\n  .then(response => response.json()) // parses response to JSON\n}\n\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Headers")),Object(r.b)("p",null,"Headers 可用来表示 HTTP 的头部信息，使用 Headers 的接口，你可以通过 Headers() 构造函数来创建一个你自己的 headers 对象。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'var headers = new Headers({\n  "Content-Type": "text/plain",\n  "Content-Length": content.length.toString(),\n  "X-Custom-Header": "ProcessThisImmediately",\n});\nheaders.append("X-Custom-Header", "AnotherValue");\nheaders.has("Content-Type") // true\nheaders.getAll("X-Custom-Header"); // ["ProcessThisImmediately", "AnotherValue"]\n')),Object(r.b)("p",null,"Headers 提供 append, delete, get, getAll, has, set, forEach等这些实例方法，可供开发者更加灵活地配置请求中的 headers。"),Object(r.b)("p",null,"Request\nRequest 类用于描述请求内容。构造函数接受的参数与fetch方法一致，这里就不展开介绍了。我们可以这么理解，事实上",Object(r.b)("strong",{parentName:"p"},"fetch方法在调用时，会将传入的参数构造出一个 Request 对象并执行"),"。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var URL = '//api.some.com';\nvar getReq = new Request(URL, {method: 'GET', cache: 'reload'});\nfetch(getReq).then(function(response) {\n  return response.json();\n}).catch(function(error) {\n  console.log('Fetch Error: ', error);\n});\n")),Object(r.b)("p",null,"Request 接口中的配置项 headers 可以是实例化的 Headers 。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'var URL = \'//api.some.com\';\n// 实例化 Headers\nvar headers = new Headers({\n  "Content-Type": "text/plain",\n  "Content-Length": content.length.toString(),\n  "X-Custom-Header": "ProcessThisImmediately",\n});\nvar getReq = new Request(URL, {method: \'GET\', headers: headers });\nfetch(getReq).then(function(response) {\n  return response.json();\n}).catch(function(error) {\n  console.log(\'Fetch Error: \', error);\n});\n')),Object(r.b)("p",null,"更便捷的是，Request 对象可以从已有的 Request 对象中继承，并拓展新的配置。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var URL = '//api.some.com';\nvar getReq = new Request(URL, {method: 'GET', headers: headers });\n// 基于已存在的 Request 实例，拓展创建新的 Request 实例\nvar postReq = new Request(getReq, {method: 'POST'});\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response"),"\nResponse 实例是在fentch()处理完promises之后返回的。它的实例也可用通过JS来创建，但只有在ServiceWorkers中才真正有用。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"var res = new Response(body, init);\n")),Object(r.b)("p",null,"其中 body 可以是 Bolb, BufferSource, FormData, URLSearchParams, USVString 这些类型的值。"),Object(r.b)("p",null,"init 是一个对象，可以包括以下这些字段："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"status: 响应状态码")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"statusText: 状态信息")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"headers: 头部信息，可以是对象或者Headers实例")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Response 实例提供了以下实例属性，均是只读属性：")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"bodyUsed: 用于表示响应内容是否被使用过")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"headers: 头部信息")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ok: 表明请求是否成功，响应状态为 200 ~ 299 时，值为 true")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"status: 状态码")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"statusText: 状态信息")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"type: 响应类型")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"basic: 同源")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"cors: 跨域")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"error: 出错")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"opaque: Request mode 设置为 “no-cors”的响应")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"url: 响应地址"))),Object(r.b)("p",null,"Response 实例提供以下实例方法："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"clone: 复制一个响应对象。"),Object(r.b)("li",{parentName:"ul"},"arrayBuffer: 将响应数据转换为 arrayBuffer 后 reslove 。"),Object(r.b)("li",{parentName:"ul"},"bolb: 把响应数据转换为 Bolb 后 reslove 。"),Object(r.b)("li",{parentName:"ul"},"formData: 把响应数据转换为 formData 后 reslove 。"),Object(r.b)("li",{parentName:"ul"},"json: 把响应内容解析为对象后 reslove 。"),Object(r.b)("li",{parentName:"ul"},"text: 把响应数据当做字符串后 reslove 。")),Object(r.b)("p",null,"现在浏览器基本上都支持，github 官方推出了一个 Fetch API 的 polyfill 库，可以让更多浏览器提前感受到 Fetch API 的便捷的开发体验。"),Object(r.b)("p",null,"虽然 Fecth API 使用方便符合语义化，但是现阶段它也有所限制。Fetch API 是基于 Promise，由于 Promise 没有处理 timeout 的机制，",Object(r.b)("strong",{parentName:"p"},"所以无法通过原生方式处理请求超时后的中断，和读取进度的能力"),"。但是相信未来为了支持流，Fetch API 最终将会提供可以中断执行读取资源的能力，并且提供可以读取进度的 API。"),Object(r.b)("p",null,"Fetch API 的一个应用：",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/muwenzi/http-chain/blob/master/src/BrowserRequest.js#L97"}),"https://github.com/muwenzi/http-chain/blob/master/src/BrowserRequest.js#L97")," "),Object(r.b)("p",null,"Fetch MDN API: ",Object(r.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch"}),"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch")))}p.isMDXComponent=!0},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var r=n(0),a=n.n(r),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=c(n),i=r,u=p[l+"."+i]||p[i]||b[i]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},s))}));function i(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);