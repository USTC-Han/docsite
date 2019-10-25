(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{392:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(537),c=n(538);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"action",title:"Action",sidebar_label:"Action"},r=[{value:"\u601d\u60f3\u7cbe\u534e\u4e8c\uff1a\u5c06\u6240\u6709\u4e8b\u4ef6\u62bd\u8c61\u4e3a action",id:"\u601d\u60f3\u7cbe\u534e\u4e8c\uff1a\u5c06\u6240\u6709\u4e8b\u4ef6\u62bd\u8c61\u4e3a-action",children:[]},{value:"Action Type",id:"action-type",children:[]},{value:"Action Creator",id:"action-creator",children:[]},{value:"Sync Action",id:"sync-action",children:[]},{value:"Async Action",id:"async-action",children:[]}],l={rightToc:r},s="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u601d\u60f3\u7cbe\u534e\u4e8c\uff1a\u5c06\u6240\u6709\u4e8b\u4ef6\u62bd\u8c61\u4e3a-action"},"\u601d\u60f3\u7cbe\u534e\u4e8c\uff1a\u5c06\u6240\u6709\u4e8b\u4ef6\u62bd\u8c61\u4e3a action"),Object(a.b)("p",null,"\u91c7\u7528",Object(a.b)("strong",{parentName:"p"},"\u5316\u6574\u4e3a\u96f6"),"\u7684\u601d\u60f3\uff0c\u5c06\u4e8b\u4ef6\u6d41\u62bd\u8c61\u6210\u4e00\u4e2a\u4e2a\u5c0f action\uff0c\u518d\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u66b4\u9732\u51fa\u6765\uff0c\u8fd9\u6837\u4fbf\u53ef\u4ee5\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"eventStream")," \u53c2\u6570\u4ece ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," \u53bb\u6389\uff0c\u8ba9\u7528\u6237\u7075\u6d3b\u5730\u4ece\u5916\u90e8\u968f\u65f6\u901a\u8fc7\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u4ece\u800c\u63a7\u5236\u72b6\u6001\u7684\u201c\u7d2f\u52a0\u201d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-diff"}),"- // createStore :: (a -> b -> a) -> a -> [b] -> c\n+ // createStore :: (a -> b -> a) -> a -> c\n- function createStore(reducer, initialState, eventStream) {\n+ function createStore(reducer, initialState) {\n    let state = initialState;\n-   let action;\n-   for (let i = 0; i < eventStream.length; i++) {\n-     let action = eventStream[i];\n-     state = reducer(state, action);\n-     dispatch(action);\n-   }\n    return {\n      getState: function () {\n        return state;\n      },\n+     dispatch: function(action) {\n+       state = reducer(state, action)\n+     }\n    }\n  }\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-diff"}),"- const eventStream = [\n-   {type: 'SET_NAME', payload: {name: 'Robbie'}},\n-   {type: 'SET_AGE', payload: {age: 16}}\n- ];\n- const store = createStore(reducer, initialState, eventStream);\n+ const store = createStore(reducer, initialState);\n+ window.setName = function () {\n+   const action = {type: 'SET_NAME', payload: {name: 'Robbie'}};\n+   store.dispatch(action);\n+ };\n+ window.setAge = function () {\n+   const action = {type: 'SET_AGE', payload: {age: 16}}\n+   store.dispatch(action)\n+ };\n")),Object(a.b)("p",null,"\u6bcf\u7ecf\u8fc7\u4e00\u4e2a action\uff0cstate \u5c31\u8fdb\u884c\u76f8\u5e94\u5730\u66f4\u65b0\uff0c\u8fd9\u6837\u4e5f\u5c31\u5f62\u6210\u6d41 state \u5173\u4e8e action \u7684\u7ebf\u6027\u51fd\u6570\uff1a ",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"state = f(action)"))," \uff0c\u8fd9\u4e5f\u662f Redux DevTools \u53ef\u4ee5\u901a\u8fc7 timeline \u63a7\u5236\u754c\u9762\u73b0\u5b9e\u7684\u539f\u56e0\u3002"),Object(a.b)("h2",{id:"action-type"},"Action Type"),Object(a.b)("p",null,"action type \u662f\u5bf9\u6bcf\u4e00\u4e2a action \u7684\u4e00\u4e2a\u6807\u8bc6\uff0c\u4e3b\u8981\u7528\u6765 reducer \u4e2d\u6839\u636e\u4e0d\u540c\u7684 action type \u6765\u66f4\u65b0\u72b6\u6001\u6811\u3002"),Object(a.b)(c.a,{type:"best",mdxType:"Hint"},"action type \u547d\u540d\u89c4\u8303\uff1a\u72b6\u6001\u6811\u4e00\u7ea7\u5c5e\u6027\u540d\u79f0\\_\u52a8\u8bcd\\_\u64cd\u4f5c\u5bf9\u8c61\uff0c\u4e14\u90fd\u4e3a\u5927\u5199\u5b57\u6bcd\u3002"),Object(a.b)("p",null,"\u793a\u4f8b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"export default {\n    PROFORMA_SET_ISSUEDATE: 'PROFORMA_SET_ISSUEDATE',\n    PROFORMA_SET_PAYEE: 'PROFORMA_SET_PAYEE',\n    PROFORMA_SET_CHECKER: 'PROFORMA_SET_CHECKER'\n}\n")),Object(a.b)(c.a,{type:"best",mdxType:"Hint"},"\u5bf9\u4e8e\u5f02\u6b65 action\uff0c\u5206\u522b\u518d\u6700\u540e\u9762\u52a0\u4e0a REQUEST, SUCCESS, ERROR\u3002"),Object(a.b)("p",null,"\u793a\u4f8b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"export default {\n    PROFORMA_LOAD_METADATA_REQUEST: 'PROFORMA_LOAD_METADATA_REQUEST',\n    PROFORMA_LOAD_METADATA_SUCCESS: 'PROFORMA_LOAD_METADATA_SUCCESS',\n    PROFORMA_LOAD_METADATA_ERROR: 'PROFORMA_LOAD_METADATA_ERROR'\n}\n")),Object(a.b)("h2",{id:"action-creator"},"Action Creator"),Object(a.b)("p",null,"\u7528\u6765\u4ea7\u751f\u4e00\u4e2a\u4fee\u6539 redux \u72b6\u6001\u6811\u6240\u9700\u8981\u7684 action \u5bf9\u8c61\uff0caction \u53ea\u662f\u4e00\u4e2a type \u548c payload \u7684\u96c6\u5408\u3002"),Object(a.b)(c.a,{type:"must",mdxType:"Hint"},"\u4ee5 `.action.js` \u7ed3\u5c3e\u7684\u6587\u4ef6\u8868\u793a action creator\u3002"),Object(a.b)("p",null,"action \u5206\u4e3a syncAction \u548c asyncAction \u3002"),Object(a.b)("h2",{id:"sync-action"},"Sync Action"),Object(a.b)(c.a,{type:"must",mdxType:"Hint"},"syncAction \u53ea\u5355\u7eaf\u5730\u8fd4\u56de\u4e00\u4e2a action \u5bf9\u8c61\uff0c\u662f\u4e00\u4e2a\u65e0\u526f\u4f5c\u7528\u7684\u7eaf\u51fd\u6570\u3002"),Object(a.b)(c.a,{type:"best",mdxType:"Hint"},"syncAction \u5efa\u8bae export \u51fa\u6765\u3002"),Object(a.b)("h2",{id:"async-action"},"Async Action"),Object(a.b)("p",null,"asyncAction \u76f8\u5bf9\u4f1a\u7a0d\u7a0d\u590d\u6742\u4e00\u70b9\uff0c\u4f7f\u7528 redux-thunk \u4f1a\u5e26\u6709\u4e00\u70b9\u526f\u4f5c\u7528\uff0c\u57fa\u672c\u683c\u5f0f\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import actionTypes from '../../actionTypes';\nimport { setTotalAmount } from '../proformaSync/setProforma.action';\n\nconst getTotalAmountRequest = () => ({\n    type: actionTypes.PROFORMA_GET_TOTAL_AMOUNT_REQUEST\n});\n\nconst getTotalAmountSuccess = () => ({\n    type: actionTypes.PROFORMA_GET_TOTAL_AMOUNT_SUCCESS\n});\n\nconst getTotalAmountError = e => ({\n    type: actionTypes.PROFORMA_GET_TOTAL_AMOUNT_ERROR,\n    error: e\n});\n\nexport const getTotalAmount = () => (dispatch, getState, utils) => {\n    const ubl = getState().proforma.ubl;\n    dispatch(getTotalAmountRequest());\n    utils.DocumentService\n        .calculateTotals(ubl)\n        .then(newUbl => {\n            dispatch(getTotalAmountSuccess());\n            dispatch(setTotalAmount(newUbl));\n        })\n        .catch(e => {\n            dispatch(getTotalAmountError(e));\n        });\n};\n")),Object(a.b)(c.a,{type:"best",mdxType:"Hint"},"asyncAction \u4e2d request, success, error \u5efa\u8bae\u4e0d\u8981 export \u51fa\u6765\u3002"))}p.isMDXComponent=!0},538:function(e,t,n){"use strict";n(540);var a=n(0),c=n.n(a),o=n(541),i=n.n(o),r=(n(539),{best:{name:"\u63a8\u8350",color:"#50c610",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),c.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},c.a.createElement("g",null,c.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},c.a.createElement("g",null,c.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),c.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),c.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return c.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+r[t].color}},c.a.createElement("div",{style:{float:"left"}},r[t].icon),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:i()("<strong>"+r[t].name+"</strong>\uff1a"+n)}}))}},539:function(e,t,n){}}]);