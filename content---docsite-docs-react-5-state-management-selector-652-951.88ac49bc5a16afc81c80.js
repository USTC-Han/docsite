(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));n(0);var r=n(438),o=n(439);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={id:"selector",title:"Selector",sidebar_label:"Selector"},s=[{value:"什么是 selector？",id:"什么是-selector？",children:[]},{value:"reselect 计算缓存",id:"reselect-计算缓存",children:[]}],i={rightToc:s},m="wrapper";function u(e){var t=e.components,n=c(e,["components"]);return Object(r.b)(m,l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"什么是-selector？"},"什么是 selector？"),Object(r.b)("p",null,"mapStateToProps 中从状态树获取数据的方法也被叫做 selector，它主要用于从 redux 状态树获取数据时候的过滤和筛选，包括直接从状态树获取的数据的方法和计算推导状态的方法。"),Object(r.b)(o.a,{type:"best",mdxType:"Hint"},"在`mapStateToProps`中尽量避免使用`_.get`去拿数据，从状态树推导数据的方法尽可能地封装到 selector 里。"),Object(r.b)(o.a,{type:"best",mdxType:"Hint"},"在所有地方使用 selector，即使是在一个细小的位置。这样的好处是你很容易在多个 selector 中发现重复的逻辑，抽出共用的方法。即使是从状态树上直接获取的状态（非推导状态），如果有多个地方在使用，也应当放在 selector 中，避免重复逻辑。"),Object(r.b)("h2",{id:"reselect-计算缓存"},"reselect 计算缓存"),Object(r.b)("p",null,"如果需要缓存之前 selectors 的计算结果","(","某些派生数据",")","，所以如果 selector 计算量非常大，每次更新都重新计算可能会带来性能问题，那么使用 reselect 能帮你省去这些没必要的重新计算。"),Object(r.b)("p",null,"reselect 提供 ",Object(r.b)("inlineCode",{parentName:"p"},"createSelector")," 函数来创建可记忆的 selector。",Object(r.b)("inlineCode",{parentName:"p"},"createSelector")," 接收一个 ",Object(r.b)("inlineCode",{parentName:"p"},"input-selectors 数组")," 和一个 ",Object(r.b)("inlineCode",{parentName:"p"},"转换函数")," 作为参数。如果 state tree 的改变会引起 input-selector 值变化，那么 selector 会调用转换函数，传入 input-selectors 作为参数，并返回结果。如果 input-selectors 的值和前一次的一样，它将会直接返回前一次计算的数据，而不会再调用一次转换函数。这样就可以避免不必要的计算，为性能带来提升。"),Object(r.b)("p",null,"示例："),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"import { createSelector } from 'reselect';\nimport { get } from 'lodash';\n\nconst getTaxSubtotal = proforma => get(proforma, 'ubl.TaxTotal[0].TaxSubtotal');\nconst getTaxAmount = proforma => get(proforma, 'ubl.TaxTotal[0].TaxAmount');\n\nexport const getTaxTotal = createSelector(\n    [getTaxSubtotal, getTaxAmount],\n    (taxSubtotal, taxAmount) => ({\n        taxAmount,\n        taxSubtotal:\n            taxSubtotal &&\n            taxSubtotal.map(item => ({\n                taxableAmount: get(item, 'TaxableAmount.value'),\n                taxScheme: get(item, 'TaxCategory.TaxScheme.Name.value'),\n                taxAmount: get(item, 'TaxAmount.value')\n            }))\n    })\n);\n")),Object(r.b)("p",null,"弊端："),Object(r.b)("p",null,"reselect带来计算性能提升的同时，也增加了一些 input-selectors 和缓存数据，使得 selector 的逻辑变得更为琐碎，嵌套的逻辑也相应增加，可维护性在某种程度上会受到影响，在实际使用中要在衍生数据的计算性能和可维护性上做一个权衡。"))}u.isMDXComponent=!0},439:function(e,t,n){"use strict";var r=n(0),o=n.n(r),l=n(441),c=n.n(l),a=(n(440),{best:{name:"推荐",color:"#50c610",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},o.a.createElement("g",null,o.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),o.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},o.a.createElement("g",null,o.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},o.a.createElement("g",null,o.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:o.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},o.a.createElement("g",null,o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return o.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(a[t].color)}},o.a.createElement("div",{style:{float:"left"}},a[t].icon),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:c()("<strong>".concat(a[t].name,"</strong>：").concat(n))}}))}},440:function(e,t,n){}}]);