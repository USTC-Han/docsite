(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{298:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));t(0);var r=t(390);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={id:"http1.1",title:"HTTP1.1",sidebar_label:"HTTP1.1"},p=[{value:"长连接",id:"长连接",children:[]},{value:"管道机制",id:"管道机制",children:[]}],o={rightToc:p},i="wrapper";function u(e){var n=e.components,t=l(e,["components"]);return Object(r.b)(i,a({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"长连接"},"长连接"),Object(r.b)("p",null,"一个HTTP的通信生命周期通过 Request 来界定，也就是一个 Request 一个 Response ，那么在 HTTP1.0 中，这次HTTP请求就结束了。为了解决这个问题，有些浏览器在请求时，用了一个非标准的Connection字段：Connection: keep-alive，但这个并不是标准字段。\n即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive。"),Object(r.b)("p",null,"1.1 版的最大变化，就是引入了",Object(r.b)("strong",{parentName:"p"},"持久连接（persistent connection）"),"，客户端和服务器发现对方一段时间没有活动，就可以主动关闭连接。不过，规范的做法是，客户端在最后一个请求时，发送Connection: close，明确要求服务器关闭TCP连接。"),Object(r.b)("p",null,"目前，对于同一个域名，大多数浏览器允许同时建立6个持久连接。"),Object(r.b)("p",null,"没有数据传也要保持tcp连接就是长连接。反之就是短连接。"),Object(r.b)("p",null,"在HTTP1.1中进行了改进，有了一个keep-alive，在一个HTTP连接中，可以发送多个Request，接收多个Response，也就是合并多个请求。但是一个Request只能对应一个Response，而且这个Response是被动的，不能主动发起。"),Object(r.b)("p",null,"Keep-Alive解决的核心问题：一定时间内，同一域名多次请求数据，只建立一次HTTP请求，其他请求可复用每一次建立的连接通道，以达到提高请求效率的问题。这里面所说的一定时间是可以配置的，不管你用的是Apache还是nginx。"),Object(r.b)("p",null,"长接连的特点：只要任意一端没有明确提出断开连接，则保持TCP连接状态。"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"开启：http 1.1中默认启用Keep-Alive，目前大部分浏览器都是用http1.1协议，也就是说默认都会发起Keep-Alive的连接请求。"),Object(r.b)("li",{parentName:"ul"},"关闭：在http头中设置Connection: close，即可关闭。"),Object(r.b)("li",{parentName:"ul"},"设置连接时间： 在http header中设置Keep-Alive: timeout=5, max=1000， timeout是超时时间，单位秒，超过这个时间后就断开连接， max是最多的连接次数，若超过这个次数就强制断开连接。")),Object(r.b)("p",null,"Keep-Alive，他解决了多次连接的问题，但是依然有两个效率上的问题："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"串行的文件传输。当请求a文件时，b文件只能等待，等待a连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是1秒，那么a文件用时为3秒，b文件传输完成用时为6秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6，也就是服务器能承载的最高并发为50，当第51个人访问时，就需要等待前面某个请求处理完成。"))),Object(r.b)("h2",{id:"管道机制"},"管道机制"),Object(r.b)("p",null," HTTP/1.1 版还引入了管道机制（pipelining），即在同一个TCP连接里面，客户端可以同时发送多个请求。这样就进一步改进了HTTP协议的效率。"),Object(r.b)("p",null,"举例来说，客户端需要请求两个资源。以前的做法是，在同一个TCP连接里面，先发送A请求，然后等待服务器做出回应，收到后再发出B请求。",Object(r.b)("em",{parentName:"p"},"管道机制则是允许浏览器同时发出A请求和B请求，但是服务器还是按照顺序，先回应A请求，完成后再回应B请求"),"。"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"由于浏览器供应商难以实现，现被禁用或删除")),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/RUc1N2.png",alt:null}))))}u.isMDXComponent=!0},390:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r),l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)};var o="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=c(t),b=r,s=u[p+"."+b]||u[b]||i[b]||l;return t?a.a.createElement(s,Object.assign({},{ref:n},o,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},o))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[o]="string"==typeof e?e:r,c[1]=p;for(var b=2;b<l;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);