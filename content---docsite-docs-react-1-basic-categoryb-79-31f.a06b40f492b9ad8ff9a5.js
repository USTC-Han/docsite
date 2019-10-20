(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{256:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return m}));a(0);var n=a(438),r=a(439);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b={id:"category",title:"种类",sidebar_label:"种类"},o=[{value:"类与函数式组件",id:"类与函数式组件",children:[]},{value:"受控组件与非受控组件",id:"受控组件与非受控组件",children:[]},{value:"Ref",id:"ref",children:[]}],i={rightToc:o},p="wrapper";function m(e){var t=e.components,a=c(e,["components"]);return Object(n.b)(p,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"类与函数式组件"},"类与函数式组件"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"对比点")),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"class")),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"function（函数式）")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"state"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"可选"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"无状态")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"props"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"有"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"有")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"生命周期"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"有"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"无")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"使用场景"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"需要用到生命周期，需要维护自身的状态，比如处理用户的输入"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"不需要生命周期，不需要维护自身的状态，所有的状态都通过 props 传入")))),Object(n.b)(r.a,{type:"best",mdxType:"Hint"},"函数式组件必须使用箭头函数的形式定义。"),Object(n.b)(r.a,{type:"best",mdxType:"Hint"},"如果有多个函数式组件嵌套，里面的函数式组件 `props` 参数推荐使用 `_props` 替代。"),Object(n.b)(r.a,{type:"best",mdxType:"Hint"},"组件不需要生命周期且不需要维护自身状态的时候，优先使用函数式组件。"),Object(n.b)(r.a,{type:"best",mdxType:"Hint"},"presentational 组件优先使用函数式组件。"),Object(n.b)("h2",{id:"受控组件与非受控组件"},"受控组件与非受控组件"),Object(n.b)("p",null,"受控组件与非受控组件是React处理表单的入口。从React的思路来讲，作者肯定让状态控制一切，或者简单的理解为，页面的生成与更新得忠实地执行JSX的指令。但是表单元素有其特殊之处，用户可以通过键盘输入与鼠标选择，改变界面的显示。界面的改变也意味着有一些状态 ",Object(n.b)("strong",{parentName:"p"},"被")," 改动。"),Object(n.b)(r.a,{type:"tip",mdxType:"Hint"},"React 的本质是 **状态**，而受控和非受控也是因 **状态的控制维护** 而产生的概念。"),Object(n.b)("p",null,"受控组件和非受控组件主要用在表单的处理当中。controll 指的是对 ",Object(n.b)("strong",{parentName:"p"},"value/checked"),"(","单选框和复选框",")"," 属性的控制。以 input 为例，如果绑定了 value 属性则为受控组件，",Object(n.b)("a",l({parentName:"p"},{href:"https://jsbin.com/wehazujeli/edit?js,console,output"}),"demo"),"："),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-jsx"}),'<input type="text" value={this.state.value} /> // 受控组件\n<input type="text" value={this.state.value} onChange={::this.handleChange} /> // 受控组件\n<input type="text" ref={n => this.myInput = n} defaultValue={this.state.value} /> // 非受控组件\n<input type="text" ref={n => this.myInput = n} defaultValue={this.state.value} onChange={::this.handleChange} /> // 非受控组件\n')),Object(n.b)("p",null,"受控组件将value和state进行了绑定，可以通过 react 的生命周期很方便地达到对value的控制，state相应值的变化也会影响到value的变化，使得应用整体的状态更加可控，所以说它是受控的。由于非受控组件没有 value 属性，所以要想控制输入框的内容不是那么方便和“原生自然“，当然通过 ref 反模式也可以达到相同的效果。"),Object(n.b)(r.a,{type:"tip",mdxType:"Hint"},"受控和非受控并不是说，受控做的事情非受控不能做，非受控同样可以通过 ref 这种反模式达到受控组件同样的效果，当然这样会带来一些副作用。大部分情况下受控组件足够我们使用，在一些特殊的情况下则用非受控组件来更快速便捷地达到我们想要的效果。"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"对比点")),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"controlled")),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"th"},"uncontrolled（反模式）")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"特征"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"有value/checked属性"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"无value/checked属性")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"优点"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"便于对输入的value作处理"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"可以不用绑定change事件")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"缺点"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"最好绑定change事件，有性能损耗"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"不受props/state控制")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"实时获取输入的value"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"e.target.value"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"e.target.value/this.refs.refName.value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"获取组件的value"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"this.state.value"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"this.refs.refName.value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"set value"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"this.setState","(",")"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"不需要手动set，ref自动同步")))),Object(n.b)(r.a,{type:"warning",mdxType:"Hint"},"react 判断一个组件是否是受控组件不是单纯地看是否有value属性，而是要进一步判断value 属性的值 value != null，尤其要注意是 **!=** 。"),Object(n.b)("p",null,"由于 ",Object(n.b)("inlineCode",{parentName:"p"},"undefined == null")," 是 true，如果value 绑定的值初始状态是null 或 undefined 的时候 react 会认为该组件是非受控组件，控制台会出现："),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-text"}),"Warning: MyForm is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled \\(or vice versa\\). Decide between using a controlled or uncontrolled input element for the lifetime of the component.\n")),Object(n.b)(r.a,{type:"must",mdxType:"Hint"},"受控组件的 value/checked 属性的初始值必须是空字符串（''）。"),Object(n.b)("p",null,"示例："),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"<input type=\"text\" value={this.state.name || ''} onChange={this.handleChange.bind(this)} />\n")),Object(n.b)("h2",{id:"ref"},"Ref"))}m.isMDXComponent=!0},439:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(441),c=a.n(l),b=(a(440),{best:{name:"推荐",color:"#50c610",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),r.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},r.a.createElement("g",null,r.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},r.a.createElement("g",null,r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,a=e.children;return r.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(b[t].color)}},r.a.createElement("div",{style:{float:"left"}},b[t].icon),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c()("<strong>".concat(b[t].name,"</strong>：").concat(a))}}))}},440:function(e,t,a){}}]);