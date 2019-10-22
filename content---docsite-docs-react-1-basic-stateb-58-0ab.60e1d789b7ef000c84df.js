(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{365:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(537),r=n(538);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={id:"state",title:"\u72b6\u6001",sidebar_label:"\u72b6\u6001"},i=[{value:"state v.s. props",id:"state-vs-props",children:[]},{value:"prop-types",id:"prop-types",children:[]},{value:"defaultProps",id:"defaultprops",children:[]},{value:"setState",id:"setstate",children:[{value:"\u54ea\u4e9b\u5468\u671f\u53ef\u4ee5\u4f7f\u7528\uff1f",id:"\u54ea\u4e9b\u5468\u671f\u53ef\u4ee5\u4f7f\u7528\uff1f",children:[]},{value:"\u5982\u4f55\u4fee\u6539 state\uff1f",id:"\u5982\u4f55\u4fee\u6539-state\uff1f",children:[]}]}],c={rightToc:i},s="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,l({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"state-vs-props"},"state v.s. props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"state")," \u662f\u7ec4\u4ef6\u81ea\u8eab\u7684\u72b6\u6001\uff0c\u7ec4\u4ef6\u81ea\u5df1\u7ef4\u62a4\uff0c\u4e5f\u53ef\u4ee5\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u800c\u6765\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"props")," \u662f\u4f20\u9012\u6765\u7684\u72b6\u6001\uff0c\u53ef\u4ee5\u662f\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u800c\u6765\uff0c\u4e5f\u53ef\u4ee5\u662f\u7ec4\u4ef6\u81ea\u8eab\u7ed1\u5b9a\u7684\u5c5e\u6027\u3002")),Object(a.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ES2018 \u7684\u5bf9\u8c61\u6269\u5c55\u8fd0\u7b97\u7b26\uff0c\u5c06\u7236\u7ec4\u4ef6\u7684\u4fe1\u606f\u4ee5\u66f4\u7b80\u6d01\u7684\u65b9\u5f0f\u5feb\u901f\u5730\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"<Component {...props} />\n")),Object(a.b)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4e0d\u7528\u8003\u8651\u6027\u80fd\u7684\u95ee\u9898\uff0c\u901a\u8fc7 babel \u8f6c\u4e49\u540e\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"... \u8fd0\u7b97\u7b26")," \u6027\u80fd\u548c\u539f\u751f\u7684\u4e00\u81f4\u3002"),Object(a.b)(r.a,{type:"best",mdxType:"Hint"},"\u8bf7\u53ea\u4f20\u9012 component \u9700\u8981\u7684 props\uff0c\u4e0d\u8981\u6ee5\u7528\u3002\u4f20\u5f97\u592a\u591a\uff0c\u6216\u8005\u5c42\u6b21\u4f20\u5f97\u592a\u6df1\uff0c\u90fd\u4f1a\u52a0\u91cd shouldComponentUpdate \u91cc\u9762\u7684\u6570\u636e\u6bd4\u8f83\u8d1f\u62c5\uff0c\u56e0\u6b64\u8bf7\u614e\u7528spread attributes\u3002"),Object(a.b)("h2",{id:"prop-types"},"prop-types"),Object(a.b)("p",null,"prop-types\u7528\u6765\u68c0\u67e5\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u5f53\u4f60\u7ed9\u5c5e\u6027\u4f20\u9012\u4e86\u65e0\u6548\u503c\u65f6\uff0cJavsScript \u63a7\u5236\u53f0\u5c06\u4f1a\u6253\u5370\u8b66\u544a\u3002\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0cprop-types \u53ea\u5728",Object(a.b)("strong",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f"),"\u4e0b\u8fdb\u884c\u68c0\u67e5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"prop-types // \u5305\u540d\npropTypes // \u7ec4\u4ef6\u5c5e\u6027\u540d\nPropTypes // \u7c7b\u540d\n")),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"\u547d\u540d\uff0c\u5c24\u5176\u662f\u540e\u9762\u4e24\u4e2ap\u7684\u5927\u5c0f\u5199"),Object(a.b)("h2",{id:"defaultprops"},"defaultProps"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"defaultProps")," \u7528\u6765\u786e\u4fdd ",Object(a.b)("inlineCode",{parentName:"p"},"this.props.name")," \u5728\u7236\u7ec4\u4ef6\u6ca1\u6709\u7279\u522b\u6307\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u6709\u4e00\u4e2a\u521d\u59cb\u503c\u3002\u7c7b\u578b\u68c0\u67e5\u53d1\u751f\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"defaultProps")," \u8d4b\u503c\u4e4b\u540e\uff0c\u6240\u4ee5\u7c7b\u578b\u68c0\u67e5\u4e5f\u4f1a\u5e94\u7528\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"defaultProps")," \u4e0a\u9762\u3002"),Object(a.b)("h2",{id:"setstate"},"setState"),Object(a.b)("h3",{id:"\u54ea\u4e9b\u5468\u671f\u53ef\u4ee5\u4f7f\u7528\uff1f"},"\u54ea\u4e9b\u5468\u671f\u53ef\u4ee5\u4f7f\u7528\uff1f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"did \u7684\u751f\u547d\u5468\u671f\u90fd\u53ef\u4ee5\u3002"),Object(a.b)("li",{parentName:"ul"},"will \u7684\u751f\u547d\u5468\u671f\u53ea\u6709",Object(a.b)("inlineCode",{parentName:"li"},"componentWillReceiveProps"),"\u3001",Object(a.b)("inlineCode",{parentName:"li"},"componentWillMount")," \uff0c\u4e14\u8fd9\u4e24\u4e2a\u5468\u671f\u90fd\u5c06\u8981\u5e9f\u5f03\u3002")),Object(a.b)("h3",{id:"\u5982\u4f55\u4fee\u6539-state\uff1f"},"\u5982\u4f55\u4fee\u6539 state\uff1f"),Object(a.b)("p",null,"\u5728\u5408\u9002\u7684\u751f\u547d\u5468\u671f\u5185\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"this.setState()")," \u51fd\u6570\u3002"),Object(a.b)(r.a,{type:"must",mdxType:"Hint"},"\u7edd\u5bf9\u4e0d\u8981\u76f4\u63a5\u4fee\u6539 this.state\uff0c\u8fd9\u4e0d\u4ec5\u662f\u4e00\u79cd\u4f4e\u6548\u7684\u505a\u6cd5\uff0c\u800c\u4e14\u4fee\u6539\u7684\u72b6\u6001\u6709\u53ef\u80fd\u88ab\u4e4b\u540e\u7684 setState \u64cd\u4f5c\u8986\u76d6\u3002"),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"setState \u65b9\u6cd5\u53ea\u9002\u7528\u4e8e class \u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e00\u822c\u65e0\u6cd5\u8c03\u7528\u8be5\u65b9\u6cd5\u3002"))}p.isMDXComponent=!0},538:function(e,t,n){"use strict";n(540);var a=n(0),r=n.n(a),l=n(541),o=n.n(l),i=(n(539),{best:{name:"\u63a8\u8350",color:"#50c610",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),r.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},r.a.createElement("g",null,r.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},r.a.createElement("g",null,r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return r.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+i[t].color}},r.a.createElement("div",{style:{float:"left"}},i[t].icon),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o()("<strong>"+i[t].name+"</strong>\uff1a"+n)}}))}},539:function(e,t,n){}}]);