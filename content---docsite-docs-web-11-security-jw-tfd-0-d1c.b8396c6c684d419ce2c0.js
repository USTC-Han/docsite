(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{467:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));t(58),t(31),t(22),t(23),t(59),t(0);var a=t(537);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={id:"JWT",title:"JWT",sidebar_label:"JWT"},c=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 JWT\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-jwt\uff1f",children:[]},{value:"\u4f7f\u7528 JWT",id:"\u4f7f\u7528-jwt",children:[]},{value:"\u521b\u5efa header",id:"\u521b\u5efa-header",children:[{value:"\u521b\u5efa payload",id:"\u521b\u5efa-payload",children:[]},{value:"\u8ba1\u7b97\u751f\u6210 signature",id:"\u8ba1\u7b97\u751f\u6210-signature",children:[]}]},{value:"\u600e\u4e48\u9a8c\u8bc1 JWT token\uff1f",id:"\u600e\u4e48\u9a8c\u8bc1-jwt-token\uff1f",children:[]},{value:"\u5b89\u5168\u6027\uff1f",id:"\u5b89\u5168\u6027\uff1f",children:[]}],l={rightToc:c},o="wrapper";function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(o,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"JSON Web Token\uff0cJWT \u662f\u4e00\u4e2a\u57fa\u4e8e JSON \u7684\u5f00\u653e\u6807\u51c6\uff08RFC 7519\uff09\uff0c\u7528\u4e8e\u521b\u5efa\u8bbf\u95ee token\u3002\u7b80\u5355\u6765\u8bf4\uff0c",Object(a.b)("strong",{parentName:"p"},"\u4e00\u4e2a JWT \u5c31\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32"),"\uff0c\u5f62\u5f0f\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"header.payload.signature\n")),Object(a.b)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-jwt\uff1f"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 JWT\uff1f"),Object(a.b)("div",{align:"center"},Object(a.b)("img",{width:"430",height:"310",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/qh2bq2.png"})),Object(a.b)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5b58\u57283\u4e2a\u89d2\u8272\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"uthentication server \uff08\u767b\u5f55\uff0f\u6388\u6743\u670d\u52a1\u5668\uff09"),Object(a.b)("li",{parentName:"ul"},"user\uff08\u7528\u6237\uff09"),Object(a.b)("li",{parentName:"ul"},"app server \uff08\u5e94\u7528\u670d\u52a1\u5668\uff09")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6b65\u9aa4\uff1a"),"\n1. \u7528\u6237\u901a\u8fc7\u6388\u6743\u670d\u52a1\u5668\u7684\u767b\u5f55\u7cfb\u7edf\u767b\u5f55\uff0c\u6388\u6743\u670d\u52a1\u5668\u628a JWT \u4f20\u7ed9\u7528\u6237\u3002\n2. \u7528\u6237\u8bbf\u95ee\u5e94\u7528\u670d\u52a1\u5668\u7684API\u65f6\uff0c\u5e26\u4e0a JWT\uff0c\u5e94\u7528\u670d\u52a1\u5668\u901a\u8fc7 JWT \u6765\u5224\u65ad\u7528\u6237\u8eab\u4efd\u3002"),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u662f\u4e00\u5957\u65e0\u72b6\u6001\u7684\u9a8c\u8bc1\u673a\u5236\uff0c\u4e0d\u5fc5\u5728\u5185\u5b58\u4e2d\u4fdd\u5b58\u7528\u6237\u72b6\u6001\u3002\u7528\u6237\u8bbf\u95ee\u65f6\u81ea\u5e26 JWT\uff0c\u65e0\u9700\u50cf\u4f20\u7edf\u5e94\u7528\u4f7f\u7528 session\uff0c\u5e94\u7528\u53ef\u4ee5\u505a\u5230\u66f4\u591a\u7684\u89e3\u8026\u548c\u6269\u5c55\u3002\u540c\u65f6\uff0cJWT \u53ef\u4ee5\u4fdd\u5b58\u7528\u6237\u7684\u6570\u636e\uff0c\u51cf\u5c11\u6570\u636e\u5e93\u8bbf\u95ee\u3002"),Object(a.b)("h2",{id:"\u4f7f\u7528-jwt"},"\u4f7f\u7528 JWT"),Object(a.b)("h2",{id:"\u521b\u5efa-header"},"\u521b\u5efa header"),Object(a.b)("p",null,"JWT \u7684 header \u90e8\u5206\u5305\u542b\u600e\u4e48\u8ba1\u7b97 signature \u7684\u4fe1\u606f\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'{\n    "typ": "JWT", // \u8868\u660e\u662f JWT\n    "alg": "HS256" // \u4ee3\u8868\u751f\u6210 signature \u6240\u7528\u7684\u54c8\u5e0c\u7b97\u6cd5\uff0c\u8fd9\u91cc\u662f HMAC-SHA256\n}\n')),Object(a.b)("h3",{id:"\u521b\u5efa-payload"},"\u521b\u5efa payload"),Object(a.b)("p",null,"JWT \u7684 payload \u90e8\u5206\u5373 JWT \u6240\u5e26\u7684\u6570\u636e\u3002"),Object(a.b)("p",null,"\u6bd4\u5982\u6211\u4eec\u8fd9\u91cc\u5b58\u50a8\u4e86\u7528\u6237 ID\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'{\n    "userId": "b08f86af-35da-48f2-8fab-cef3904660bd"\n}\n')),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5\u5728 payload \u91cc\u5b58\u50a8\u5927\u91cf\u4fe1\u606f\uff0c\u4f46\u5927\u91cf\u4fe1\u606f\u4f1a\u964d\u4f4e\u6027\u80fd\uff0c\u589e\u52a0\u5ef6\u8fdf\u3002"),Object(a.b)("h3",{id:"\u8ba1\u7b97\u751f\u6210-signature"},"\u8ba1\u7b97\u751f\u6210 signature"),Object(a.b)("p",null,"\u628a header \u548c payload \u5206\u522b base64 \u7f16\u7801\uff08\u4e24\u4e2a\u5bf9\u8c61\u5df2 JSON.stringify \u8f6c\u4e3a\u5b57\u7b26\u4e32\uff09\u540e\uff0c\u901a\u8fc7 . \u76f8\u52a0\uff0c\u7136\u540e\u7528\u4e4b\u524d\u6307\u5b9a\u7684\u54c8\u5e0c\u7b97\u6cd5\u8ba1\u7b97\uff0c\u5373\u53ef\u5f97\u5230 signature\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'// signature algorithm\ndata = base64urlEncode( header ) + "." + base64urlEncode( payload )\nsignature = Hash( data, secret );\n')),Object(a.b)("p",null,"\u7ec4\u88c5 header\uff0cpayload \u548c signature\u3002\u628a header\uff0cpayload \u548c signature \u7528 . \u76f8\u8fde\u5373\u6700\u7ec8\u7684 JWT token\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"header.payload.signature\n\n// header \u662f eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\n// payload \u662f eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ\n// signature \u662f -xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM\n// \u6700\u7ec8 jwt token \u662f eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ.-xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM\n")),Object(a.b)("h2",{id:"\u600e\u4e48\u9a8c\u8bc1-jwt-token\uff1f"},"\u600e\u4e48\u9a8c\u8bc1 JWT token\uff1f"),Object(a.b)("p",null,"\u901a\u8fc7\u524d\u9762 4 \u6b65\u751f\u6210\u4e86 JWT token\uff0c\u9a8c\u8bc1\u670d\u52a1\u5668\u628a\u5b83\u53d1\u9001\u7ed9\u7528\u6237\uff0c\u7528\u6237\u5e26\u7740\u5b83\u8bbf\u95ee\u5e94\u7528\u670d\u52a1\u5668\uff0c\u5e94\u7528\u670d\u52a1\u5668\u600e\u4e48\u9a8c\u8bc1 JWT token \uff1f"),Object(a.b)("p",null,"\u56e0\u4e3a\u5e94\u7528\u670d\u52a1\u5668\u77e5\u9053\u9a8c\u8bc1\u670d\u52a1\u5668\u54c8\u5e0c\u8ba1\u7b97 signature \u7684 secret key\uff0c\u6240\u4ee5\u5e94\u7528\u670d\u52a1\u5668\u53ef\u4ee5\u7528\u8fd9\u4e2a secret key \u53bb\u91cd\u65b0\u8ba1\u7b97 signature \uff08\u7528\u6237\u53d1\u9001\u8fc7\u6765\u7684 token \u91cc\u6709 header \u548c payload\uff09\uff0c\u5e76\u4e0e\u7528\u6237\u53d1\u9001\u8fc7\u6765\u7684 token \u4e2d signature \u6bd4\u8f83\uff0c\u6700\u7ec8\u9a8c\u8bc1\u662f\u5426\u5408\u6cd5\u3002"),Object(a.b)("h2",{id:"\u5b89\u5168\u6027\uff1f"},"\u5b89\u5168\u6027\uff1f"),Object(a.b)("p",null,"JWT \u672c\u8eab\u7684\u5185\u5bb9\u53ea\u662f base64 \u7f16\u7801\u4e86\uff0c\u8ddf\u660e\u6587\u51e0\u4e4e\u6ca1\u5dee\u522b\u3002JWT \u5e76\u4e0d\u6bd4 cookie \u66f4\u5b89\u5168\uff0c\u6240\u4ee5\u6700\u597d\u914d\u5408\u4f7f\u7528 https\u3002"))}b.isMDXComponent=!0},537:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a),i=r.a.createContext({}),c=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=c(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,s=u[l+"."+p]||u[p]||b[p]||i;return t?r.a.createElement(s,Object.assign({},{ref:n},o,{components:t})):r.a.createElement(s,Object.assign({},{ref:n},o))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l[o]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);