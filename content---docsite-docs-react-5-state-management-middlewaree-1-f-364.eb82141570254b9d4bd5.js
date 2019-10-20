(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return d}));r(0);var n=r(438),o=r(439);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c={id:"middleware",title:"Middleware",sidebar_label:"Middleware"},i=[{value:"redux-observables",id:"redux-observables",children:[]}],s={rightToc:i},m="wrapper";function d(e){var t=e.components,r=l(e,["components"]);return Object(n.b)(m,a({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"请慎用自定义的 redux-middleware，错误的配置可能会影响到其他 middleware。"),Object(n.b)("p",null,Object(n.b)("img",a({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/D5qAHg.jpg",alt:"dispatch workflow"}))),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"applyMiddleware(m1, m2, m3)\n")),Object(n.b)(o.a,{type:"warning",mdxType:"Hint"},"在执行middleware的时候顺序是从左至右，即：m1, m2, m3。在 Rematch 的 middlewares 数组中的顺序也是从左至右。"),Object(n.b)("h2",{id:"redux-observables"},"redux-observables"),Object(n.b)("p",null,Object(n.b)("a",a({parentName:"p"},{href:"https://github.com/redux-observable/redux-observable"}),"https://github.com/redux-observable/redux-observable")))}d.isMDXComponent=!0},439:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(441),l=r.n(a),c=(r(440),{best:{name:"推荐",color:"#50c610",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},o.a.createElement("g",null,o.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),o.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},o.a.createElement("g",null,o.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},o.a.createElement("g",null,o.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},o.a.createElement("g",null,o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,r=e.children;return o.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(c[t].color)}},o.a.createElement("div",{style:{float:"left"}},c[t].icon),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:l()("<strong>".concat(c[t].name,"</strong>：").concat(r))}}))}},440:function(e,t,r){}}]);