(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{451:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));n(58),n(31),n(22),n(23),n(59),n(0);var l=n(537);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var p={id:"http2",title:"HTTP2",sidebar_label:"HTTP2"},r=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u591a\u8def\u590d\u7528",id:"\u591a\u8def\u590d\u7528",children:[]},{value:"\u670d\u52a1\u5668\u63a8\u9001",id:"\u670d\u52a1\u5668\u63a8\u9001",children:[]},{value:"\u5934\u90e8\u538b\u7f29",id:"\u5934\u90e8\u538b\u7f29",children:[]}],a={rightToc:r},b="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,l,c={},p=Object.keys(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(l.b)(b,c({},a,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(l.b)("p",null,"HTTP/2\u4e3b\u8981\u76ee\u7684\u662f\u63d0\u9ad8\u7f51\u9875\u6027\u80fd\uff0c\u6700\u8fd1\u51e0\u5e74\u6bd4\u8f83\u706b\uff0c\u5c06\u5176\u5355\u72ec\u62bd\u6210\u4e00\u5757\u8bb2\u30022015\u5e74\uff0cHTTP/2 \u53d1\u5e03\u3002\u5b83\u4e0d\u53eb HTTP/2.0\uff0c\u662f\u56e0\u4e3a\u6807\u51c6\u59d4\u5458\u4f1a\u4e0d\u6253\u7b97\u518d\u53d1\u5e03\u5b50\u7248\u672c\u4e86\uff0c\u4e0b\u4e00\u4e2a\u65b0\u7248\u672c\u5c06\u662f HTTP/3\u3002"),Object(l.b)("p",null,"\u76ee\u524d\u8fd8\u6709\u4e0d\u5c11\u670d\u52a1\u8fd8\u662fHTTP/1.1\uff0cNodeJS\u4e5f\u662f\u4ecev10\u624d\u5c06http2\u8f6c\u6b63\u3002Express5.x\u624d\u5f00\u59cb\u652f\u6301http/2\u3002"),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/ilnweH.png",alt:null}))),Object(l.b)("p",null,"\u53ef\u4ee5\u6253\u5f00\u8c37\u6b4c\u9996\u9875\u770b\u770b\uff0c\u57fa\u672c\u4e0a\u90fd\u662fhttp/2\u534f\u8bae\uff0c\u7b80\u5199\u6210h2"),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/yRkSCa.png",alt:null}))),Object(l.b)("p",null,"HTTPS\u662fHTTP/2\u7684\u5fc5\u8981\u6761\u4ef6\u3002"),Object(l.b)("p",null,"\u53ef\u4ee5\u7528Chrome\u63d2\u4ef6\u53ef\u4ee5\u7528\u6765\u68c0\u6d4bHTTP/2\uff1aHTTP/2 and SPDY indicator\u3002\u5b83\u4f1a\u7ed9\u6d4f\u89c8\u5668\u6dfb\u52a0\u4e86\u4e00\u4e2a\u95ea\u7535\u6807\u8bb0\uff1a"),Object(l.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/NXGjYK.png",width:"500",height:"50"}),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u84dd\u8272\u95ea\u7535\uff0c\u8868\u793a\u8fd9\u4e2a\u7f51\u9875\u662f\u8fd0\u884c\u5728HTTP/2\u4e0a")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7ea2\u8272\u95ea\u7535\u8868\u793a\u7f51\u9875\u8fd0\u884c\u5728SPDY\u4e0a\uff08spdy\u548ch2\u7684\u5173\u7cfb\u548c\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0\uff1a",Object(l.b)("a",c({parentName:"p"},{href:"http://www.ruanyifeng.com/blog/2016/08/http.html"}),"HTTP \u534f\u8bae\u5165\u95e8"),"\uff09")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7070\u8272\u95ea\u7535\u5219\u8868\u793a\u7740\u8fd9\u4e2a\u7f51\u9875\u65e2\u4e0d\u662f\u8fd0\u884c\u4e8eHTTP/2\uff0c\u4e5f\u4e0d\u662f\u8fd0\u884c\u4e8eSPDY"))),Object(l.b)("p",null,"HTTP/1.1 \u7248\u7684",Object(l.b)("strong",{parentName:"p"},"\u5934\u4fe1\u606f"),"\u80af\u5b9a\u662f\u6587\u672c\uff08ASCII\u7f16\u7801\uff09\uff0c\u6570\u636e\u4f53\u53ef\u4ee5\u662f\u6587\u672c\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e8c\u8fdb\u5236\u3002HTTP/2 \u5219\u662f\u4e00\u4e2a\u5f7b\u5e95\u7684\u4e8c\u8fdb\u5236\u534f\u8bae\uff0c",Object(l.b)("strong",{parentName:"p"},"\u5934\u4fe1\u606f\u548c\u6570\u636e\u4f53\u90fd\u662f\u4e8c\u8fdb\u5236"),'\uff0c\u5e76\u4e14\u7edf\u79f0\u4e3a"\u5e27"\uff08frame\uff09\uff1a\u5934\u4fe1\u606f\u5e27\u548c\u6570\u636e\u5e27\u3002\n',Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/WQmV6R.png",alt:null}))),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/ixFt4p.png",alt:null})),"\n\u4e8c\u8fdb\u5236\u7684\u4e00\u4e2a\u597d\u5904\u662f\uff0c\u53ef\u4ee5\u5b9a\u4e49\u989d\u5916\u7684\u5e27\u3002HTTP/2 \u5b9a\u4e49\u4e86\u8fd1\u5341\u79cd\u5e27\uff0c\u4e3a\u5c06\u6765\u7684\u9ad8\u7ea7\u5e94\u7528\u6253\u597d\u4e86\u57fa\u7840\u3002\u5982\u679c\u4f7f\u7528\u6587\u672c\u5b9e\u73b0\u8fd9\u79cd\u529f\u80fd\uff0c\u89e3\u6790\u6570\u636e\u5c06\u4f1a\u53d8\u5f97\u975e\u5e38\u9ebb\u70e6\uff0c\u4e8c\u8fdb\u5236\u89e3\u6790\u5219\u65b9\u4fbf\u5f97\u591a\u3002"),Object(l.b)("h2",{id:"\u591a\u8def\u590d\u7528"},"\u591a\u8def\u590d\u7528"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u539f\u6765\u662f\u540c\u4e00\u4e2a TCP \u8fde\u63a5\u91cc\u9762"),"\uff0c\u4e0a\u4e00\u4e2a\u56de\u5e94\uff08response\uff09\u53d1\u9001\u5b8c\u4e86\uff0c\u670d\u52a1\u5668\u624d\u80fd\u53d1\u9001\u4e0b\u4e00\u4e2a\uff0c\u73b0\u5728\u591a\u8def\u590d\u7528\uff08Multiplexing\uff09\u5141\u8bb8\u5355\u4e00\u7684 HTTP/2 \u8fde\u63a5\u540c\u65f6\u53d1\u8d77\u591a\u91cd\u7684\u8bf7\u6c42-\u54cd\u5e94\u6d88\u606f\u3002"),Object(l.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/xIKbUs.png",width:"420",height:"420"}),Object(l.b)("br",null),Object(l.b)("p",null,"\u6574\u4e2a\u8bbf\u95ee\u6d41\u7a0b\u7b2c\u4e00\u6b21\u8bf7\u6c42index.html\u9875\u9762,\u4e4b\u540e\u6d4f\u89c8\u5668\u4f1a\u53bb\u8bf7\u6c42style.css\u548cscripts.js\u7684\u6587\u4ef6\u3002\u5de6\u8fb9\u7684\u56fe\u662f\u987a\u5e8f\u52a0\u8f7d\u4e24\u4e2a\u4e2a\u6587\u4ef6\u7684\uff0c\u53f3\u8fb9\u5219\u662f\u5e76\u884c\u52a0\u8f7d\u4e24\u4e2a\u6587\u4ef6\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6211\u4eec\u77e5\u9053HTTP\u5e95\u5c42\u5176\u5b9e\u4f9d\u8d56\u7684\u662fTCP\u534f\u8bae\uff0c\u90a3\u95ee\u9898\u662f\u5728\u540c\u4e00\u4e2a\u8fde\u63a5\u91cc\u9762\u540c\u65f6\u53d1\u751f\u4e24\u4e2a\u8bf7\u6c42\u54cd\u5e94\u7740\u662f\u600e\u4e48\u505a\u5230\u7684\uff1f")),Object(l.b)("p",null,"\u9996\u5148\u4f60\u8981\u77e5\u9053\uff0cTCP\u8fde\u63a5\u76f8\u5f53\u4e8e\u4e24\u6839\u7ba1\u9053\uff08\u4e00\u4e2a\u7528\u4e8e\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\uff0c\u4e00\u4e2a\u7528\u4e8e\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\uff09\uff0c\u7ba1\u9053\u91cc\u9762\u6570\u636e\u4f20\u8f93\u662f\u901a\u8fc7\u5b57\u8282\u7801\u4f20\u8f93\uff0c\u4f20\u8f93\u662f\u6709\u5e8f\u7684\uff0c\u6bcf\u4e2a\u5b57\u8282\u90fd\u662f\u4e00\u4e2a\u4e00\u4e2a\u6765\u4f20\u8f93\u3002"),Object(l.b)("p",null,"\u4f8b\u5982\u5ba2\u6237\u7aef\u8981\u5411\u670d\u52a1\u5668\u53d1\u9001Hello\u3001World\u4e24\u4e2a\u5355\u8bcd\uff0c\u53ea\u80fd\u662f\u5148\u53d1\u9001Hello\u518d\u53d1\u9001World\uff0c\u6ca1\u529e\u6cd5\u540c\u65f6\u53d1\u9001\u8fd9\u4e24\u4e2a\u5355\u8bcd\u3002\u4e0d\u7136\u670d\u52a1\u5668\u6536\u5230\u7684\u53ef\u80fd\u5c31\u662fHWeolrllod\uff08\u6ce8\u610f\u662f\u7a7f\u63d2\u7740\u53d1\u8fc7\u53bb\u4e86\uff0c\u4f46\u662f\u987a\u5e8f\u8fd8\u662f\u4e0d\u4f1a\u4e71\uff09\u3002\u8fd9\u6837\u670d\u52a1\u5668\u5c31\u61f5b\u4e86\u3002"),Object(l.b)("p",null,"\u63a5\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u80fd\u5426\u540c\u65f6\u53d1\u9001Hello\u548cWorld\u4e24\u4e2a\u5355\u8bcd\u5462\uff1f\u5f53\u7136\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u62c6\u6210\u5305\uff0c\u7ed9\u6bcf\u4e2a\u5305\u6253\u4e0a\u6807\u7b7e\u3002\u53d1\u7684\u65f6\u5019\u662f\u8fd9\u6837\u7684\u2460H \u2461W \u2460e \u2461o \u2460l \u2461r \u2460l \u2461l \u2460o \u2461d\u3002\u8fd9\u6837\u5230\u4e86\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u6839\u636e\u6807\u7b7e\u628a\u4e24\u4e2a\u5355\u8bcd\u533a\u5206\u5f00\u6765\u3002\u5b9e\u9645\u7684\u53d1\u9001\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),Object(l.b)("p",null,"\u591a\u8def\u590d\u7528\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0keep-alive\u7684\u4e24\u4e2a\u6027\u80fd\u95ee\u9898\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\uff0c\u4ed6\u662f\u5982\u4f55\u89e3\u51b3\u7684\u3002"),Object(l.b)("p",null,"\u89e3\u51b3\u7b2c\u4e00\u4e2a\uff1a\u5728HTTP1.1\u7684\u534f\u8bae\u4e2d\uff0c\u6211\u4eec\u4f20\u8f93\u7684request\u548cresponse\u90fd\u662f\u57fa\u672c\u4e8e\u6587\u672c\u7684\uff0c\u8fd9\u6837\u5c31\u4f1a\u5f15\u53d1\u4e00\u4e2a\u95ee\u9898\uff1a",Object(l.b)("strong",{parentName:"p"},"\u6240\u6709\u7684\u6570\u636e\u5fc5\u987b\u6309\u987a\u5e8f\u4f20\u8f93"),"\uff0c\u6bd4\u5982\u9700\u8981\u4f20\u8f93\uff1ahello world\uff0c\u53ea\u80fd\u4eceh\u5230d\u4e00\u4e2a\u4e00\u4e2a\u7684\u4f20\u8f93\uff0c\u4e0d\u80fd\u5e76\u884c\u4f20\u8f93\uff0c\u56e0\u4e3a\u63a5\u6536\u7aef\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e9b\u5b57\u7b26\u7684\u987a\u5e8f\uff0c\u6240\u4ee5\u5e76\u884c\u4f20\u8f93\u5728HTTP1.1\u662f\u4e0d\u80fd\u5b9e\u73b0\u7684\u3002"),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/93XEwT.png",alt:null}))),Object(l.b)("p",null,"HTTP/2\u5f15\u5165 ",Object(l.b)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u6570\u636e\u5e27\u548c\u6d41"),"\u7684\u6982\u5ff5\uff0c\u5176\u4e2d\u5e27\u5bf9\u6570\u636e\u8fdb\u884c\u987a\u5e8f\u6807\u8bc6\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u6536\u5230\u6570\u636e\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u5e8f\u5217\u5bf9\u6570\u636e\u8fdb\u884c\u5408\u5e76\uff0c\u800c\u4e0d\u4f1a\u51fa\u73b0\u5408\u5e76\u540e\u6570\u636e\u9519\u4e71\u7684\u60c5\u51b5\u3002\u540c\u6837\u662f\u56e0\u4e3a\u6709\u4e86\u5e8f\u5217\uff0c\u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u5e76\u884c\u7684\u4f20\u8f93\u6570\u636e\uff0c\u8fd9\u5c31\u662f\u6d41\u6240\u505a\u7684\u4e8b\u60c5\u3002"),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/939SIN.png",alt:null}))),Object(l.b)("p",null,"\u89e3\u51b3\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff1aHTTP/2\u5bf9\u540c\u4e00\u57df\u540d\u4e0b\u6240\u6709\u8bf7\u6c42\u90fd\u662f\u57fa\u4e8e\u6d41\uff0c\u4e5f\u5c31\u662f\u8bf4\u540c\u4e00\u57df\u540d\u4e0d\u7ba1\u8bbf\u95ee\u591a\u5c11\u6587\u4ef6\uff0c\u4e5f\u53ea\u5efa\u7acb\u4e00\u8def\u8fde\u63a5\u3002\u540c\u6837Apache\u7684\u6700\u5927\u8fde\u63a5\u6570\u4e3a300\uff0c\u56e0\u4e3a\u6709\u4e86\u8fd9\u4e2a\u65b0\u7279\u6027\uff0c\u6700\u5927\u7684\u5e76\u53d1\u5c31\u53ef\u4ee5\u63d0\u5347\u5230300\uff0c\u6bd4\u539f\u6765\u63d0\u5347\u4e866\u500d\uff01"),Object(l.b)("p",null,"HTTP \u6027\u80fd\u4f18\u5316\u7684\u5173\u952e\u5e76\u4e0d\u5728\u4e8e\u9ad8\u5e26\u5bbd\uff0c\u800c\u662f\u4f4e\u5ef6\u8fdf\u3002TCP \u8fde\u63a5\u4f1a\u968f\u7740\u65f6\u95f4\u8fdb\u884c\u81ea\u6211\u300c\u8c03\u8c10\u300d\uff0c\u8d77\u521d\u4f1a\u9650\u5236\u8fde\u63a5\u7684\u6700\u5927\u901f\u5ea6\uff0c\u5982\u679c\u6570\u636e\u6210\u529f\u4f20\u8f93\uff0c\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u63d0\u9ad8\u4f20\u8f93\u7684\u901f\u5ea6\u3002\u8fd9\u79cd\u8c03\u8c10\u5219\u88ab\u79f0\u4e3a TCP \u6162\u542f\u52a8\u3002\u7531\u4e8e\u8fd9\u79cd\u539f\u56e0\uff0c\u8ba9\u539f\u672c\u5c31\u5177\u6709\u7a81\u53d1\u6027\u548c\u77ed\u65f6\u6027\u7684 HTTP \u8fde\u63a5\u53d8\u7684\u5341\u5206\u4f4e\u6548\u3002"),Object(l.b)("p",null,"HTTP/2 \u901a\u8fc7\u8ba9\u6240\u6709\u6570\u636e\u6d41\u5171\u7528\u540c\u4e00\u4e2a\u8fde\u63a5\uff0c\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u4f7f\u7528 TCP \u8fde\u63a5\uff0c\u8ba9\u9ad8\u5e26\u5bbd\u4e5f\u80fd\u771f\u6b63\u7684\u670d\u52a1\u4e8e HTTP \u7684\u6027\u80fd\u63d0\u5347\u3002"),Object(l.b)("p",null,"Demo: ",Object(l.b)("a",c({parentName:"p"},{href:"https://http2.akamai.com/demo"}),"https://http2.akamai.com/demo")," \u901a\u8fc7\u4e0b\u9762\u4e24\u5f20\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u52a0\u6df1\u5165\u7684\u8ba4\u8bc6\u591a\u8def\u590d\u7528\uff1a"),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/yMOMBv.png",alt:null}))),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/odScPl.png",alt:null}))),Object(l.b)("p",null,"\u4ee5\u524d\u6211\u4eec\u505a\u7684\u6027\u80fd\u4f18\u5316\u4e0d\u9002\u7528\u4e8eHTTP/2\u4e86\uff1f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"JS\u6587\u4ef6\u7684\u5408\u5e76"),"\u3002\u6211\u4eec\u73b0\u5728\u4f18\u5316\u7684\u4e00\u4e2a\u4e3b\u8981\u65b9\u5411\u5c31\u662f ",Object(l.b)("strong",{parentName:"li"},"\u5c3d\u91cf\u7684\u51cf\u5c11HTTP\u7684\u8bf7\u6c42\u6570"),"\uff0c \u5bf9\u6211\u4eec\u5de5\u7a0b\u4e2d\u7684\u4ee3\u7801\uff0c\u7814\u53d1\u65f6\u5206\u6a21\u5757\u5f00\u53d1\uff0c\u4e0a\u7ebf\u65f6\u6211\u4eec\u4f1a\u628a\u6240\u6709\u7684\u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u5408\u5e76\uff0c\u5408\u5e76\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u8fd9\u6837\u4e0d\u7ba1\u591a\u5c11\u6a21\u5757\uff0c\u90fd\u8bf7\u6c42\u4e00\u4e2a\u6587\u4ef6\uff0c\u51cf\u5c11\u4e86HTTP\u7684\u8bf7\u6c42\u6570\u3002\u4f46\u662f\u8fd9\u6837\u505a\u6709\u4e00\u4e2a\u975e\u5e38\u4e25\u91cd\u7684\u95ee\u9898\uff1a",Object(l.b)("strong",{parentName:"li"},"\u6587\u4ef6\u7684\u7f13\u5b58"),"\u3002\u5f53\u6211\u4eec\u6709100\u4e2a\u6a21\u5757\u65f6\uff0c\u6709\u4e00\u4e2a\u6a21\u5757\u6539\u4e86\u4e1c\u897f\uff0c\u6309\u7167\u4e4b\u524d\u7684\u65b9\u5f0f\uff0c\u6574\u4e2a\u6587\u4ef6\u6d4f\u89c8\u5668\u90fd\u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\uff0c\u4e0d\u80fd\u88ab\u7f13\u5b58\u3002\u73b0\u5728\u6211\u4eec\u6709\u4e86HTTP/2\u4e86\uff0c\u6a21\u5757\u5c31\u53ef\u4ee5\u5355\u72ec\u7684\u538b\u7f29\u4e0a\u7ebf\uff0c\u800c\u4e0d\u5f71\u54cd\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u6a21\u5757\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u591a\u57df\u540d\u63d0\u9ad8\u6d4f\u89c8\u5668\u7684\u4e0b\u8f7d\u901f\u5ea6"),"\u3002\u4e4b\u524d\u6211\u4eec\u6709\u4e00\u4e2a\u4f18\u5316\u5c31\u662f\u628acss\u6587\u4ef6\u548cjs\u6587\u4ef6\u653e\u52302\u4e2a\u57df\u540d\u4e0b\u9762\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u5c31\u53ef\u4ee5\u5bf9\u8fd9\u4e24\u4e2a\u7c7b\u578b\u7684\u6587\u4ef6\u8fdb\u884c\u540c\u65f6\u4e0b\u8f7d\uff0c\u907f\u514d\u4e86\u6d4f\u89c8\u56686\u4e2a\u901a\u9053\u7684\u9650\u5236\uff0c\u8fd9\u6837\u505a\u7684\u7f3a\u70b9\u4e5f\u662f\u660e\u663e\u7684\uff0c1.DNS\u7684\u89e3\u6790\u65f6\u95f4\u4f1a\u53d8\u957f\u30022.\u589e\u52a0\u4e86\u670d\u52a1\u5668\u7684\u538b\u529b\u3002\u6709\u4e86HTTP/2\u4e4b\u540e\uff0c\u6839\u636e\u4e0a\u9762\u8bb2\u7684\u539f\u7406\uff0c\u6211\u4eec\u5c31\u4e0d\u7528\u8fd9\u4e48\u641e\u4e86\uff0c\u6210\u672c\u4f1a\u66f4\u4f4e\u3002")),Object(l.b)("p",null,"\u603b\u7ed3\u4e0b\uff1a\u591a\u8def\u590d\u7528\u6280\u672f\uff1a\u5355\u8fde\u63a5\u591a\u8d44\u6e90\u7684\u65b9\u5f0f\uff0c\u51cf\u5c11\u670d\u52a1\u7aef\u7684\u94fe\u63a5\u538b\u529b\uff0c\u5185\u5b58\u5360\u7528\u66f4\u5c11\uff0c\u8fde\u63a5\u541e\u5410\u91cf\u66f4\u5927\uff1b\u7531\u4e8e\u51cf\u5c11TCP \u6162\u542f\u52a8\u65f6\u95f4\uff0c\u63d0\u9ad8\u4f20\u8f93\u7684\u901f\u5ea6\u3002"),Object(l.b)("h2",{id:"\u670d\u52a1\u5668\u63a8\u9001"},"\u670d\u52a1\u5668\u63a8\u9001"),Object(l.b)("p",null,"\u670d\u52a1\u5668\u63a8\u9001\uff08server push\uff09\u6307\u7684\u662f\uff0c\u8fd8\u6ca1\u6709\u6536\u5230\u6d4f\u89c8\u5668\u7684\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u5c31\u628a\u5404\u79cd\u8d44\u6e90\u63a8\u9001\u7ed9\u6d4f\u89c8\u5668\u3002"),Object(l.b)("p",null,"\u6bd4\u5982\uff0c\u6d4f\u89c8\u5668\u53ea\u8bf7\u6c42\u4e86index.html\uff0c\u4f46\u662f\u670d\u52a1\u5668\u628aindex.html\u3001style.css\u3001example.png\u5168\u90e8\u53d1\u9001\u7ed9\u6d4f\u89c8\u5668\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u53ea\u9700\u8981\u4e00\u8f6e HTTP \u901a\u4fe1\uff0c\u6d4f\u89c8\u5668\u5c31\u5f97\u5230\u4e86\u5168\u90e8\u8d44\u6e90\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u3002"),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/B3hs9d.png",alt:null}))),Object(l.b)("p",null,"\u5982\u4f55\u5f00\u542f\u5462\uff0c\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u914d\u7f6e\u91cc\u9762\u5199\u6b7b\u8981\u63a8\u9001\u7684\u8d44\u6e90\uff0c\u5f53\u7136\u8fd9\u6837\u4e0d\u662f\u5f88\u7075\u6d3b\uff0c\u90a3\u4e48\u53ef\u4ee5\u7528\u53e6\u4e00\u79cd\u65b9\u6cd5\uff1a\u540e\u7aef\u5e94\u7528\u4ea7\u751f HTTP \u8bf7\u6c42\u7684\u5934\u4fe1\u606fLink\u547d\u4ee4\u3002\u670d\u52a1\u5668\u53d1\u73b0\u6709\u8fd9\u4e2a\u5934\u4fe1\u606f\uff0c\u5c31\u4f1a\u8fdb\u884c\u670d\u52a1\u5668\u63a8\u9001\u3002"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"Link: </styles.css>; rel=preload; as=style\n")),Object(l.b)("p",null,"\u5982\u679c\u8981\u63a8\u9001\u591a\u4e2a\u8d44\u6e90\uff0c\u5c31\u5199\u6210\u4e0b\u9762\u8fd9\u6837\u3002"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"Link: </styles.css>; rel=preload; as=style, </example.png>; rel=preload; as=image\n")),Object(l.b)("p",null,"\u53ef\u4ee5\u53c2\u8003 ",Object(l.b)("a",c({parentName:"p"},{href:"https://ops.tips/blog/nginx-http2-server-push/"}),"Go"),"\u3001",Object(l.b)("a",c({parentName:"p"},{href:"https://blog.risingstack.com/node-js-http-2-push/"}),"Node")," \u5b9e\u73b0\u8303\u4f8b\u3002"),Object(l.b)("p",null,"\u670d\u52a1\u5668\u63a8\u9001\u6709\u4e00\u4e2a\u5f88\u9ebb\u70e6\u7684\u95ee\u9898\u3002\u6240\u8981\u63a8\u9001\u7684\u8d44\u6e90\u6587\u4ef6\uff0c\u5982\u679c\u6d4f\u89c8\u5668\u5df2\u7ecf\u6709\u7f13\u5b58\uff0c\u63a8\u9001\u5c31\u662f\u6d6a\u8d39\u5e26\u5bbd\u3002\u5373\u4f7f\u63a8\u9001\u7684\u6587\u4ef6\u7248\u672c\u66f4\u65b0\uff0c\u6d4f\u89c8\u5668\u4e5f\u4f1a\u4f18\u5148\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u3002"),Object(l.b)("p",null,"\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5\u662f\uff0c\u53ea\u5bf9\u7b2c\u4e00\u6b21\u8bbf\u95ee\u7684\u7528\u6237\u5f00\u542f\u670d\u52a1\u5668\u63a8\u9001\uff0c\u53ef\u4ee5\u6839\u636e Cookie \u5224\u65ad\u662f\u5426\u4e3a\u7b2c\u4e00\u6b21\u8bbf\u95ee\u3002"),Object(l.b)("p",null,"\u670d\u52a1\u5668\u63a8\u9001\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002",Object(l.b)("a",c({parentName:"p"},{href:"https://www.smashingmagazine.com/2017/04/guide-http2-server-push/#measuring-server-push-performance"}),"\u7f51\u4e0a\u6d4b\u8bc4"),"\u7684\u7ed3\u679c\u662f\uff0c\u6253\u5f00\u8fd9\u9879\u529f\u80fd\uff0c\u6bd4\u4e0d\u6253\u5f00\u65f6\u7684 HTTP/2 \u5feb\u4e868%\uff0c\u6bd4\u5c06\u8d44\u6e90\u90fd\u5d4c\u5165\u7f51\u9875\u7684 HTTP/1 \u5feb\u4e865%\u3002\u63d0\u5347\u7a0b\u5ea6\u4e5f\u4e0d\u662f\u7279\u522b\u591a\uff0c\u5927\u6982\u662f\u51e0\u767e\u6beb\u79d2\u3002\u800c\u4e14\uff0c\u4e5f\u4e0d\u5efa\u8bae\u4e00\u6b21\u63a8\u9001\u592a\u591a\u8d44\u6e90\uff0c\u8fd9\u6837\u53cd\u800c\u4f1a\u62d6\u7d2f\u6027\u80fd\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u4e0d\u5f97\u4e0d\u5904\u7406\u6240\u6709\u63a8\u9001\u8fc7\u6765\u7684\u8d44\u6e90\u3002\u53ea\u63a8\u9001 CSS \u6837\u5f0f\u8868\u53ef\u80fd\u662f\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u9009\u62e9\u3002"),Object(l.b)("h2",{id:"\u5934\u90e8\u538b\u7f29"},"\u5934\u90e8\u538b\u7f29"),Object(l.b)("p",null,"\u5728HTTP/1.x\u4e2d\u9996\u90e8\u662f\u6ca1\u6709\u538b\u7f29\u7684\uff0cgzip\u53ea\u4f1a\u538b\u7f29body\uff0cHTTP/2\u63d0\u4f9b\u4e86\u9996\u90e8\u538b\u7f29\u65b9\u6848\u3002\u4e00\u822c\u8f6e\u8be2\u8bf7\u6c42\u9996\u90e8\uff0c\u7279\u522b\u662fcookie\u5360\u7528\u5f88\u591a\u5927\u90e8\u4efd\u7a7a\u95f4\uff0c\u9996\u90e8\u538b\u7f29\u4f7f\u5f97\u6574\u4e2aHTTP\u6570\u636e\u5305\u5c0f\u4e86\u5f88\u591a\uff0c\u4f20\u8f93\u4e5f\u5c31\u4f1a\u66f4\u5feb\u3002\u8fd8\u6709\u4e00\u4e9b\u6d4f\u89c8\u5668\u7684\u4fe1\u606f\uff0c\u8fd9\u4e9b\u6bcf\u4e2a\u8bf7\u6c42\u57fa\u672c\u4e0a\u90fd\u4e00\u6837\uff0c\u6ca1\u5fc5\u8981\u6bcf\u6b21\u90fd\u4f20\u4e00\u4efd\u5b8c\u6574\u7684\u3002"),Object(l.b)("p",null,"HTTP/2\u4f7f\u7528\u4e13\u95e8\u8bbe\u8ba1\u7684HPACK\u3002\u5b83\u662f\u5728\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u5404\u7ef4\u62a4\u4e00\u4e2a\u201c\u9996\u90e8\u8868\u201d\uff0c\u8868\u4e2d\u7528\u7d22\u5f15\u4ee3\u8868\u9996\u90e8\u540d\uff0c\u6216\u8005\u9996\u90e8\u952e-\u503c\u5bf9\uff0c\u4e0a\u4e00\u6b21\u53d1\u9001\u4e24\u7aef\u90fd\u4f1a\u8bb0\u4f4f\u5df2\u53d1\u9001\u8fc7\u54ea\u4e9b\u9996\u90e8\uff0c\u4e0b\u4e00\u6b21\u53d1\u9001\u53ea\u9700\u8981\u4f20\u8f93\u5dee\u5f02\u7684\u6570\u636e\uff0c\u76f8\u540c\u7684\u6570\u636e\u76f4\u63a5\u7528\u7d22\u5f15\u8868\u793a\u5373\u53ef\uff0c\u53e6\u5916\u8fd8\u53ef\u4ee5\u9009\u62e9\u5730\u5bf9\u9996\u90e8\u503c\u538b\u7f29\u540e\u518d\u4f20\u8f93\u3002\u6309\u7167\u8fd9\u6837\u7684\u8bbe\u8ba1\uff0c\u4e24\u6b21\u8f6e\u8be2\u8bf7\u6c42\u7684\u9996\u90e8\u57fa\u672c\u662f\u4e00\u6837\u7684\uff0c\u90a3\u4e4b\u540e\u7684\u8bf7\u6c42\u57fa\u672c\u53ea\u9700\u8981\u53d1\u9001\u51e0\u4e2a\u7d22\u5f15\u5c31\u53ef\u4ee5\u4e86\u3002\n",Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/WIKfnl.png",alt:null}))),Object(l.b)("p",null,"\u201c\u9996\u90e8\u8868\u201d\u6709\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u9759\u6001\u8868\uff0c\u5373HTTP/2\u534f\u8bae\u5185\u7f6e\u4e86\u5e38\u7528\u7684\u4e00\u4e9b\u9996\u90e8\u540d\u548c\u9996\u90e8\u952e\u503c\u5bf9\u3002\u53e6\u4e00\u79cd\u662f\u52a8\u6001\u8868\uff0c\u4fdd\u5b58\u81ea\u5b9a\u4e49\u7684\u9996\u90e8\u6216\u4e94\u82b1\u516b\u95e8\u7684\u952e\u503c\u5bf9\u7b49\uff0c\u52a8\u6001\u8868\u53ef\u4ee5\u901a\u8fc7SETTINGS\u5e27\u7684SETTINGS_HEADER_TABLE_SIZE\u89c4\u5b9a\u5927\u5c0f\u3002"),Object(l.b)("p",null,"\u60f3\u66f4\u6df1\u5730\u4e86\u89e3HTTP/2\u662f\u4ec0\u4e48\uff1f\u5efa\u8bae\u4f60\u524d\u5f80\uff1a"),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://hpbn.co/http2/"}),"High Performance Browser Networking-HTTP/2 O'Reilly")),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://www.rrfed.com/2018/03/18/chrome-http2/"}),"https://www.rrfed.com/2018/03/18/chrome-http2/")),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/LP9NmA.png",alt:null}))))}s.isMDXComponent=!0},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));var l=n(0),c=n.n(l),p=c.a.createContext({}),r=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},a=function(e){var t=r(e.components);return c.a.createElement(p.Provider,{value:t},e.children)};var b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},o=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,a=e.parentName,b=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===t.indexOf(l)&&(n[l]=e[l]);return n}(e,["components","mdxType","originalType","parentName"]),o=r(n),u=l,i=o[a+"."+u]||o[u]||s[u]||p;return n?c.a.createElement(i,Object.assign({},{ref:t},b,{components:n})):c.a.createElement(i,Object.assign({},{ref:t},b))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,r=new Array(p);r[0]=o;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[b]="string"==typeof e?e:l,r[1]=a;for(var u=2;u<p;u++)r[u]=n[u];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);