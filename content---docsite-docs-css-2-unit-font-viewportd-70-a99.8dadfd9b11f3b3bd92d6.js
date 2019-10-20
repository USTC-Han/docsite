(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));n(0);var c=n(438);n(442),n(439);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a={title:"vh/vw",sidebar_label:"vh/vw"},o=[{value:"视区 viewport",id:"视区-viewport",children:[]},{value:"vh/vw",id:"vhvw",children:[]},{value:"calc()",id:"calc",children:[]}],i={rightToc:o},s="wrapper";function m(e){var t=e.components,n=l(e,["components"]);return Object(c.b)(s,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"视区-viewport"},"视区 viewport"),Object(c.b)("p",null,"有些文章直译成“视口”，我觉得太挫了，中文你都看不懂是啥意思，翻译成视窗和视区还行，不过视区容易和市区谐音。"),Object(c.b)("p",null,"浏览器一般会给用户提供一个视区（屏幕上的一个窗口或者视图区域，即网页中视线可见区域），用户通过它来浏览网页。viewport 尺寸变化时，浏览器可能会改变文档的布局，比如我调节浏览器的大小。"),Object(c.b)("p",null,"当视区比渲染文档的画布区域（可以看成是整个网页区域）小时，浏览器应该提供一种滚动机制。说人话就是当网页过长时，视区只能显示局部网页的时候，网页要可以滚动浏览。图中绿色部分即视区范围："),Object(c.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/kqJMh6.jpg"}),Object(c.b)("p",null,"viewport的meta标签..."),Object(c.b)("h2",{id:"vhvw"},"vh/vw"),Object(c.b)("p",null,"v 指视窗/视区，那我们得首先明确 vh/vw 指的是什么？",Object(c.b)("a",r({parentName:"p"},{href:"https://www.zhangxinxu.com/study/201209/vw-vh-to-pixel.html"}),"在线 Demo")),Object(c.b)("pre",null,Object(c.b)("code",r({parentName:"pre"},{className:"language-text"}),"vw ~ window.innerWidth\nvh ~ window.innerHeight\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"vw"),": 1vw = 视口宽度的1%"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"vh"),": 1vh = 视口高度的1%"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"vmin"),": 选取vw和vh中最小的那个"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"vmax"),": 选取vw和vh中最大的那个")),Object(c.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/4h4phi.jpg"}),Object(c.b)("h2",{id:"calc"},"calc()"),Object(c.b)("p",null,"用于动态计算长度值。"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"运算符前后都需要保留一个空格，例如：",Object(c.b)("inlineCode",{parentName:"li"},"width: calc(100% - 10px)"),"，%不一定在前；"),Object(c.b)("li",{parentName:"ul"},"任何长度值都可以使用 ",Object(c.b)("inlineCode",{parentName:"li"},"calc()")," 函数进行计算；"),Object(c.b)("li",{parentName:"ul"},"calc() 函数支持 ",Object(c.b)("inlineCode",{parentName:"li"},'"+", "-", "*", "/"')," 运算；"),Object(c.b)("li",{parentName:"ul"},"calc() 函数使用标准的数学运算优先级规则；")),Object(c.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/ej1QJV.jpg"}))}m.isMDXComponent=!0},439:function(e,t,n){"use strict";var c=n(0),r=n.n(c),l=n(441),a=n.n(l),o=(n(440),{best:{name:"推荐",color:"#50c610",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),r.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},r.a.createElement("g",null,r.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},r.a.createElement("g",null,r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return r.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(o[t].color)}},r.a.createElement("div",{style:{float:"left"}},o[t].icon),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a()("<strong>".concat(o[t].name,"</strong>：").concat(n))}}))}},440:function(e,t,n){},442:function(e,t,n){"use strict";var c=n(0),r=n.n(c);t.a=function(e){var t=e.align,n=e.width,c=e.src,l=e.legend;return t?r.a.createElement("div",{align:t},r.a.createElement("img",{src:c,width:n}),l&&r.a.createElement("p",null,l)):r.a.createElement("img",{src:c,width:n})}}}]);