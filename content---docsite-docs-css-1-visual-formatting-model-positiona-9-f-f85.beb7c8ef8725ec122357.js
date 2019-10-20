(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));n(0);var c=n(438),o=n(442),r=n(439);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={title:"定位",sidebar_label:"定位"},s=[{value:"五种定位",id:"五种定位",children:[]},{value:"相对定位",id:"相对定位",children:[]},{value:"绝对定位",id:"绝对定位",children:[]}],m={rightToc:s},p="wrapper";function u(e){var t=e.components,n=a(e,["components"]);return Object(c.b)(p,i({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"五种定位"},"五种定位"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"static"),": 默认值。没有定位，不脱离文档流（忽略 top, bottom, left, right 或者 z-index 声明）。"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"absolute"),": 相对于 static 定位以外的第一个祖先元素进行定位。脱离文档流。"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"fixed"),": 相对于浏览器视窗进行定位。脱离文档流。"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"relative"),": 生成相对定位的元素，相对于其正常位置进行定位，不脱离文档流。"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"sticky"),": relative + fixed，但不脱离文档流，需要指明 top，表示滚动到相对于 static 定位以外的第一个祖先元素的位置，变成类似fixed效果。demo")),Object(c.b)(r.a,{type:"tip",mdxType:"Hint"},"position 还可以是： `inherit`, `initial`, `unset`, 这是一般CSS属性都具有的。"),Object(c.b)("p",null,"注意sticky的兼容性："),Object(c.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/rXLik9.jpg"}),Object(c.b)("h2",{id:"相对定位"},"相对定位"),Object(c.b)("p",null,"Demo DOM结构："),Object(c.b)(o.a,{width:"450",align:"center",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/5ACJIp.jpg",mdxType:"Img"}),Object(c.b)(r.a,{type:"tip",mdxType:"Hint"},"`relative` 和 `sticky` 都未脱离文档流, [demo](https://codepen.io/muwenzi/pen/vqdxab)"),Object(c.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/bTLccz.jpg"}),Object(c.b)("p",null,"可以观察到黄色部分在紧紧挨着，没有发生重叠，所以相对定位其实并没有脱离文档流。"),Object(c.b)(o.a,{width:"300",align:"center",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/smSxF1.jpg",mdxType:"Img"}),Object(c.b)("h2",{id:"绝对定位"},"绝对定位"),Object(c.b)(r.a,{type:"tip",mdxType:"Hint"},"广义的绝对定位包括 `absolute` 和 `fixed` ，它们都会脱离常规流和文本流，[demo](https://codepen.io/muwenzi/pen/ydvMjV)"),Object(c.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/EjTstb.jpg"}),Object(c.b)("p",null,"和 float 一样的是，旁边的盒子无视了蓝色 div 的存在，也是顶着左边边框定位。但是文本也无视了蓝色 div 的存在，顶着左边边框定位。"),Object(c.b)(o.a,{width:"300",align:"center",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/PEdJlr.jpg",mdxType:"Img"}),Object(c.b)(r.a,{type:"warning",mdxType:"Hint"},"绝对定位可以让元素块状化。"),Object(c.b)(r.a,{type:"warning",mdxType:"Hint"},"绝对定位的盒子， `float` 会被重置为 `none` "))}u.isMDXComponent=!0},439:function(e,t,n){"use strict";var c=n(0),o=n.n(c),r=n(441),i=n.n(r),a=(n(440),{best:{name:"推荐",color:"#50c610",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},o.a.createElement("g",null,o.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),o.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},o.a.createElement("g",null,o.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},o.a.createElement("g",null,o.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},o.a.createElement("g",null,o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return o.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(a[t].color)}},o.a.createElement("div",{style:{float:"left"}},a[t].icon),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:i()("<strong>".concat(a[t].name,"</strong>：").concat(n))}}))}},440:function(e,t,n){},442:function(e,t,n){"use strict";var c=n(0),o=n.n(c);t.a=function(e){var t=e.align,n=e.width,c=e.src,r=e.legend;return t?o.a.createElement("div",{align:t},o.a.createElement("img",{src:c,width:n}),r&&o.a.createElement("p",null,r)):o.a.createElement("img",{src:c,width:n})}}}]);