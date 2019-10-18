(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));t(0);var r=t(390);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c={title:"构造函数",sidebar_label:"构造函数"},l=[{value:"什么是构造函数？",id:"什么是构造函数？",children:[]},{value:"构造函数",id:"构造函数",children:[]},{value:"原型对象",id:"原型对象",children:[]}],i={rightToc:l},p="wrapper";function u(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(p,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"什么是构造函数？"},"什么是构造函数？"),Object(r.b)("p",null,"new 关键字调用的是构造函数，而不是说函数首字母大写就是构造函数。"),Object(r.b)("p",null,"如果有这样一个函数："),Object(r.b)("p",null,"function Foo () {}\nFoo.prototype.name = '123'"),Object(r.b)("p",null,"那么Foo是不是构造函数呢？还是那句话，",Object(r.b)("strong",{parentName:"p"},"没有经过new调用的话，就不是")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"var foo = Foo() // foo: undefined\n")),Object(r.b)("p",null,"另外为了避免混淆，以下构造函数不用英文Constructor表示，而是中文，避免与prototype里面的constructor属性相混淆。"),Object(r.b)("h2",{id:"构造函数"},"构造函数"),Object(r.b)("p",null,"构造函数里的属性在实例中是不共享的。"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"function Cat(name, color) {\n this.name = name;\n this.color = color;\n this.meow = function () {\n   console.log('喵喵');\n };\n}\n\nvar cat1 = new Cat('大毛', '白色');\nvar cat2 = new Cat('二毛', '黑色');\n\ncat1.meow === cat2.meow\n// false\n")),Object(r.b)("h2",{id:"原型对象"},"原型对象"),Object(r.b)("p",null,"原型对象（protototype本质上还是一个对象）上的属性在实例中是共享的。"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"function Animal(name) {\n this.name = name;\n}\nAnimal.prototype.color = 'white';\n\nvar cat1 = new Animal('大毛');\nvar cat2 = new Animal('二毛');\n\ncat1.color // 'white'\ncat2.color // 'white'\n\nAnimal.prototype.color = 'yellow';\n\ncat1.color // \"yellow\"\ncat2.color // \"yellow\"\n")),Object(r.b)("p",null,"原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。"))}u.isMDXComponent=!0},390:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=c(t),b=r,s=u[l+"."+b]||u[b]||p[b]||a;return t?o.a.createElement(s,Object.assign({},{ref:n},i,{components:t})):o.a.createElement(s,Object.assign({},{ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[i]="string"==typeof e?e:r,c[1]=l;for(var b=2;b<a;b++)c[b]=t[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);