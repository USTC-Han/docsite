/*! For license information please see content---docsite-docs-css-3-layout-rows-057-c7d.7fb50dff43b817b0a24a.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));n(0);var r=n(438),l=n(451),a=n(452),o=n(439);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={title:"行布局",sidebar_label:"行布局"},u=[{value:"两行布局",id:"两行布局",children:[]},{value:"三行布局",id:"三行布局",children:[]}],m={rightToc:u},p="wrapper";function b(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(p,c({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"两行布局"},"两行布局"),Object(r.b)("p",null,"两行布局主要是 PX-AUTO 型，",Object(r.b)("a",c({parentName:"p"},{href:"https://codepen.io/muwenzi/pen/jjKrrw"}),"在线 Demo")," , 但在实际应用中需要注意两点："),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"PX 可能在不同页面具体的值不一样"),Object(r.b)("li",{parentName:"ol"},"Scroll 不要被顶部和底部遮盖")),Object(r.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/PHcOwS.jpg"}),Object(r.b)(l.a,{defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"LESS",value:"less"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"html",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-html"}),'<main>\n  <div class="px">PX</div>\n  <div class="auto-scroll-parent">\n    <div class="auto-scroll-child">AUTO(scroll)</div>\n  </div>\n</main>\n'))),Object(r.b)(a.a,{value:"less",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-less"}),"main {\n  display: flex;\n  flex-direction: column; // 调整主轴方向\n  height: 100vh;\n}\n.px {\n  height: 50px; // 高度有可能在实际中自动产生，此处为模拟\n  flex-shrink: 0;\n}\n.auto-scroll {\n  &-parent {\n    overflow-y: scroll;\n  }\n  &-child {\n    height: 400px;\n  }\n}\n")))),Object(r.b)(o.a,{type:"tip",mdxType:"Hint"},"要想出现 y 轴的滚动条，那么父元素的实际高度要比子元素的高度小，且 `overflow-y` 是加在父元素上的。"),Object(r.b)("p",null,"如果使用的 ",Object(r.b)("inlineCode",{parentName:"p"},"calc"),", ",Object(r.b)("inlineCode",{parentName:"p"},"margin"),", ",Object(r.b)("inlineCode",{parentName:"p"},"position: absolute")," 之类的方式进行布局, 则 AUTO 部分的 ",Object(r.b)("inlineCode",{parentName:"p"},"top")," 偏移值可能在不同页面实际值不一样，那么使用 flex 将是一个非常不错的选择。"),Object(r.b)("h2",{id:"三行布局"},"三行布局"),Object(r.b)("p",null,"三行布局主要是 PX1-AUTO-PX2 型"))}b.isMDXComponent=!0},439:function(e,t,n){"use strict";var r=n(0),l=n.n(r),a=n(441),o=n.n(a),c=(n(440),{best:{name:"推荐",color:"#50c610",icon:l.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},l.a.createElement("g",null,l.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),l.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:l.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},l.a.createElement("g",null,l.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:l.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},l.a.createElement("g",null,l.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:l.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},l.a.createElement("g",null,l.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),l.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return l.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(c[t].color)}},l.a.createElement("div",{style:{float:"left"}},c[t].icon),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:o()("<strong>".concat(c[t].name,"</strong>：").concat(n))}}))}},440:function(e,t,n){},444:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=l.apply(null,r);o&&e.push(o)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()},451:function(e,t,n){"use strict";var r=n(0),l=n.n(r),a=n(444),o=n.n(a);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,l=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=e.block,n=e.children,a=e.defaultValue,i=e.values,s=c(Object(r.useState)(a),2),u=s[0],m=s[1];return l.a.createElement("div",null,l.a.createElement("ul",{className:o()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{className:o()("tab-item",{"tab-item--active":u===t}),key:t,onClick:function(){return m(t)}},n)}))),l.a.createElement("div",{className:"margin-vert--md"},n.filter((function(e){return e.props.value===u}))[0]))}},452:function(e,t,n){"use strict";var r=n(0),l=n.n(r);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);