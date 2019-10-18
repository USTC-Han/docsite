(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));n(0);var r=n(390),c=n(391);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a={id:"style",title:"样式",sidebar_label:"样式"},s=[{value:"样式中的像素值",id:"样式中的像素值",children:[]},{value:"classnames 库的使用",id:"classnames-库的使用",children:[]},{value:"cssModules",id:"cssmodules",children:[]}],i={rightToc:s},m="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(m,l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"样式中的像素值"},"样式中的像素值"),Object(r.b)(c.a,{type:"tip",mdxType:"Hint"},"React 会自动对 width、height 等属性添加 px。"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"// Result style: '10px'\n<div style={{ height: 10 }}>\n  Hello World!\n</div>\n\n// Result style: '10%'\n<div style={{ height: '10%' }}>\n  Hello World!\n</div>\n")),Object(r.b)(c.a,{type:"warning",mdxType:"Hint"},"有些属性除了支持 px 为单位的像素值，还支持数字直接作为值，此时 React 并不添加 px，如 lineHeight，[完整列表](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59)。"),Object(r.b)("h2",{id:"classnames-库的使用"},"classnames 库的使用"),Object(r.b)("p",null,"该库主要用来给组件动态设置 className。"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"import cx from 'classnames';\n<div className={cx(\n  'header-left',  // 最简单的类名\n  {loading: props.loading })}, // 属性值为true，才生成类名\n  `button-${props.color}`,  // 传入属性生成动态类名，注意不传也会生成\n  {[`ts-${props.type}`]: props.type} // 属性值为true，才生成动态类名\n/>\n")),Object(r.b)(c.a,{type:"better",mdxType:"Hint"},"不要使用类似 `clazz` 等方式传入父组件的类名，直接将 `className` 挂到 props 上往下传递，通过 cx 或 `className` 动态取都可以。"),Object(r.b)(c.a,{type:"better",mdxType:"Hint"},"库名用 cx 来命名，防止与 `className` 发生歧义。"),Object(r.b)("h2",{id:"cssmodules"},"cssModules"),Object(r.b)("p",null,"cssModules 没有在项目中实际应用，暂不做介绍。"))}p.isMDXComponent=!0},391:function(e,t,n){"use strict";var r=n(0),c=n.n(r),l=n(393),o=n.n(l),a=(n(392),{better:{name:"推荐",color:"#50c610",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),c.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},c.a.createElement("g",null,c.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},c.a.createElement("g",null,c.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),c.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),c.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return c.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(a[t].color)}},c.a.createElement("div",{style:{float:"left"}},a[t].icon),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:o()("<strong>".concat(a[t].name,"</strong>：").concat(n))}}))}},392:function(e,t,n){}}]);