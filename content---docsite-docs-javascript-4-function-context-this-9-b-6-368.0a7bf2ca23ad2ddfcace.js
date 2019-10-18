(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return p}));t(0);var l=t(390),a=t(391);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={title:"上下文与this",sidebar_label:"上下文与this"},r=[{value:"吃肉理论",id:"吃肉理论",children:[]},{value:"this的四种绑定",id:"this的四种绑定",children:[{value:"默认绑定",id:"默认绑定",children:[]},{value:"隐式绑定",id:"隐式绑定",children:[]},{value:"显式绑定: call/apply/bind",id:"显式绑定-callapplybind",children:[]},{value:"new绑定",id:"new绑定",children:[]}]},{value:"忽略this绑定",id:"忽略this绑定",children:[{value:"转成默认绑定",id:"转成默认绑定",children:[]},{value:"更安全的this：限制在空对象中",id:"更安全的this：限制在空对象中",children:[]}]},{value:"箭头函数的this",id:"箭头函数的this",children:[]}],i={rightToc:r},s="wrapper";function p(e){var n=e.components,t=b(e,["components"]);return Object(l.b)(s,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"吃肉理论"},"吃肉理论"),Object(l.b)("p",null,"先来一句定义：上下文是指 JS ",Object(l.b)("strong",{parentName:"p"},"方法"),"所属的",Object(l.b)("strong",{parentName:"p"},"对象"),"（即告诉该方法this是谁）。"),Object(l.b)("p",null,"别捉急这句话究竟该怎么理解，我来想一想为什么需要this？"),Object(l.b)("p",null,"JS允许在函数体内部，引用当前作用域的其他变量，顺着作用域链去查找，以吃肉为例，我的碗里有肉的时候，就不会去锅(window)里拿肉："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var bowl = function () {\n var meat = 'meat in bowl'\n console.log(meat);\n};\n\nvar meat = 'meat in pot'\n\nbowl() // 'meat in bowl'\n")),Object(l.b)("p",null,"人总是吃着碗里的想着锅里的，此时我还不满足，在我的碗里(作用域/执行上下文)虽然有一块肉(meat)，但我偏偏就想吃锅的肉，那怎么办呢，this这个中介来了说，别急我有办法："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var bowl = function () {\n var meat = 'meat in bowl'\n console.log(this.meat);\n};\n\nvar meat = 'meat in pot'\n\nbowl() // 'meat in pot'\n")),Object(l.b)("p",null,"这就是this绑定中的默认绑定，此时的this指向window对象，我们来看一下："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var bowl = function () {\n var meat = 'meat in bowl'\n console.log(this === window);\n};\n\nvar meat = 'meat in pot'\n\nbowl() // true\n")),Object(l.b)("p",null,"这就是优先级最低的this默认绑定规则。那如果我想吃别人碗里的肉怎么办？那我能不能再创造一个bowl2的函数？可以是可以，但上下文本质上是一个对象，函数也是一个对象，但比较特殊，处理起来比较复杂，我们换一个比较简单的，直接用对象来表示bowl，加入了eat函数："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var myBowl = {\n meat: 'meat in my bowl',\n eat: function() {\n   console.log(this.meat);\n }\n}\nvar othersBowl = {\n meat: 'meat in others bowl',\n eat: function() {\n   console.log(this.meat);\n }\n}\n\nvar meat = 'meat in pot'\n")),Object(l.b)("p",null,"OK，碗都准备好了，下面开始吃别人碗里的肉吧，我们通过apply/call/bind的方式来大摇大摆地去拿别人碗里的肉："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"myBowl.eat() // 'meat in my bowl'\n\nmyBowl.eat.apply(othersBowl); // 'meat in others bowl'\nmyBowl.eat.apply(window); // 'meat in pot'\n")),Object(l.b)("p",null,"上面第一种吃肉方式叫隐式绑定，后面两种都是显式绑定。至此，我们再回顾一下开头的定义，用吃肉理论去改写一下："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"上下文是指JS方法所属的对象（即告诉该方法this是谁）"),Object(l.b)("li",{parentName:"ul"},"上下文是指去哪个碗里拿肉吃（this就是指哪个碗）")),Object(l.b)("p",null,"下面我们再对每一种方式进行详细探讨。"),Object(l.b)("h2",{id:"this的四种绑定"},"this的四种绑定"),Object(l.b)("p",null,"this绑定优先级："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"new绑定"),"：var bar = new foo()"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"显示绑定"),"：call/apply/bind 绑定： var bar = foo.call(obj2)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"隐式绑定"),"：上下文对象调用：var bar = obj1.foo()"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"默认绑定"),"：在严格模式下绑定到undefined，否则绑定到全局对象")),Object(l.b)(a.a,{type:"tip",mdxType:"Hint"},"总体原则：this的绑定规则完全取决于调用位置，但严格模式下与调用位置无关。"),Object(l.b)("h3",{id:"默认绑定"},"默认绑定"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n console.log(this.a); // 1\n}\nvar a = 1;\nfoo();\n")),Object(l.b)("p",null,"本例中，函数调用时应用了 this 的默认绑定，因此 this 指向全局对象。那么我们怎么知道这里应用了默认绑定呢?可以通过分析调用位置来看看 foo() 是如何调用的。如果foo() 是",Object(l.b)("strong",{parentName:"p"},"直接使用不带任何修饰的函数引用进行调用的"),"，那就是默认绑定。"),Object(l.b)("p",null,"思考以下代码："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function bar() {\n var a = 2;\n function foo() {\n   console.log(this.a);\n }\n foo();\n}\nvar a = 1;\nbar();\n")),Object(l.b)("p",null,"其实最后输出的还是1，foo调用的时候作用域虽然是bar，但是其上下文this绑定还用的是默认绑定规则，因为foo() 是直接使用不带任何修饰的函数引用进行调用的。再想想这就是为什么执行上下文偏向的是作用域，而上下文则是基于对象的，告诉该函数this是哪个对象，请注意不管该作用域有没有该变量都不影响，主要是this指向的上下文得有这个变量，也千万不要误解为默认模式是前面省略了 ",Object(l.b)("inlineCode",{parentName:"p"},"(window.)foo()")," 。"),Object(l.b)("p",null,"这里主要关注一下：严格模式下与调用位置无关这句话。看的是this的位置。严格模式全局对象将无法使用默认绑定，指向undefined，不是window，因为严格模式不会自动用apply去绑定this的指向。"),Object(l.b)("p",null,"两个例子对比看一下："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),'// Example #1\nfunction foo() {\n  "use strict";\n console.log(this.a)\n}\n\nvar a = 2;\n\nfoo(); // TypeError: this is undefined\n')),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),'// Example #2\nfunction foo() {\n console.log(this.a)\n}\n\nvar a = 2;\n(function() {\n  "use strict";\n foo(); // 2\n})()\n')),Object(l.b)("h3",{id:"隐式绑定"},"隐式绑定"),Object(l.b)("p",null,"我们已经看过吃肉理论中的隐式绑定最简单的例子，下面看个稍微复杂的："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n console.log(this.a);\n}\n\nvar obj2 = {\n a: 42,\n foo: foo\n};\n\nvar obj1 = {\n a: 2,\n obj2: obj2\n};\n\nobj1.obj2.foo(); // 42\n")),Object(l.b)("p",null,"我们可以看出：对象属性引用链中只有最顶层或者说最后一层会影响调用位置。"),Object(l.b)("h4",{id:"隐式丢失"},"隐式丢失"),Object(l.b)("p",null,"思考下面的代码:"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n console.log(this.a);\n}\nvar obj = {\n a: 2,\n foo: foo\n};\nvar a = 1\nvar bar = obj.foo; // 函数别名，请注意这可不是调用时候的隐式绑定！\nbar(); // 1\n")),Object(l.b)("p",null,"虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。"),Object(l.b)("p",null,"记住这条十分重要的规则：不带任何修饰的函数调用，会进行默认绑定。"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var bar = obj.foo; // 这个不是调用\nbar(); // 1, 这个调用时候进行默认绑定\nobj.foo(); // 2, 显示绑定\n(bar.foo = obj.foo)() // 1, 赋值表达式 p.foo = o.f\n")),Object(l.b)("p",null,"这种隐式丢失的情况非常令人讨厌，我们常常会写出类似以下的代码："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n console.log(this.a);\n}\nfunction doFoo(cb) { // fn 其实引用的是上面的foo函数\n cb(); // <-- 调用位置!\n}\nvar obj = {\n a: 2,\n foo: foo\n};\nvar a = 1;\ndoFoo(obj.foo); // 1\n")),Object(l.b)("p",null,"我们平时写代码，常常会写出doFoo这样的函数，参数传的是引用类型的函数，比如我调用一个可以接受回调函数的函数，内置的setTimeout其实就是这样碗的，直接进行默认绑定："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function setTimeout(cb, delay) {\n // 等待 delay 毫秒\n cb(); // <-- 调用位置!\n}\n")),Object(l.b)("p",null,"如果在函数内部直接调用cb()，那么内部的this其实是默认绑定。给我们造成了一种“this丢失”的情况，foo内部的this就指向的是锅里而不是我自己的碗里，那如何让它指向我自己碗呢？对，就是很矫情，现在我不想吃锅里或者其他人碗里的肉了，就想老老实实先吃自己的碗里的，但还得给我用this，那怎么做？"),Object(l.b)("p",null,"cb写成箭头函数是一个办法。"),Object(l.b)("h3",{id:"显式绑定-callapplybind"},"显式绑定: call/apply/bind"),Object(l.b)("p",null,"都是用来改变this的指向，call/apply 可以改变函数的this指向。 除了传递参数时有所差别，",Object(l.b)("strong",{parentName:"p"},"call和apply作用完全一样"),"。"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var tim = {\n   name: 'tim',\n   age: 20,\n   getName: function() {\n       console.log(this.name);\n       return this.name;\n   }\n}\n\nvar jake = { name: 'jake', age: 20 }\n\ntim.getName(); // tim\n\n// jake对象没有getName方法，但是可以通过call/apply去使用tim对象的getName方法\ntim.getName.call(jake);  // jake\ntim.getName.apply(jake); // jake\n")),Object(l.b)("p",null,"tim.getName.call(jake)的意思是执行getName方法，但是通过call/apply将getName方法中的this指向强行设置为jake对象。因此最终的返回结果会是jake。"),Object(l.b)("p",null,"call apply的不同之处在于传递参数的形式。其中",Object(l.b)("strong",{parentName:"p"},"apply传递的参数为数组形式, call传递的参数为按顺序依次排列"),"。一个简单的实例说明。"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"// 当参数个数不确定或者你觉得用apply比较爽时, 就直接使用apply\n// 字面解释就是obj夺舍fn，obj拥有了执行fn函数的能力，并且this指向obj.\nvar arguments = { 0:'name', 1:'age', 2:'gender' };\n\nfn.apply(obj, arguments);\nfn.call(obj, name, age, gender);\n")),Object(l.b)("h4",{id:"apply、call、bind比较"},"apply、call、bind比较"),Object(l.b)("p",null,"那么 apply、call、bind 三者相比较，之间又有什么异同呢？何时使用 apply、call，何时使用 bind 呢。简单的一个栗子："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"var obj = {\n x: 81,\n};\n\nvar foo = {\n\n  x: 99,\n getX: function() {\n   return this.x;\n }\n}\n\nfoo.getX.bind(obj)(); //81\nfoo.getX.call(obj); //81\nfoo.getX.apply(obj); //81\n\n\nfoo.getX.bind(obj).call(foo); //81\n")),Object(l.b)("p",null,"三个输出的都是81，但是注意看使用 bind() 方法的，他后面多了对括号。"),Object(l.b)("p",null,"也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是",Object(l.b)("strong",{parentName:"p"},"回调执行"),"的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。"),Object(l.b)("p",null,"再总结一下："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"apply 、 call 、bind 三者都是用来改变函数上下文(this对象的指向)的；"),Object(l.b)("li",{parentName:"ul"},"apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；"),Object(l.b)("li",{parentName:"ul"},"apply 、 call 、bind 三者都可以利用后续参数传参，apply是传数组，call是挨个传；"),Object(l.b)("li",{parentName:"ul"},"bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。")),Object(l.b)("p",null,"call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加。为什么？请看bind内部实现原理："),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function bind(fn, context) {\n return function() {\n   return fn.apply(context, arguments);\n };\n}\n")),Object(l.b)("p",null,"在Javascript中，多次 bind() 是无效的。更深层次的原因， bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。"),Object(l.b)("h3",{id:"new绑定"},"new绑定"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo (a) {\n this.a = a;\n}\n\nvar bar = new foo(2);\nconsole.log(bar.a); // 2\n")),Object(l.b)("p",null,"使用new来调用foo(...)时，我们会构造一个新对象并把它绑定到foo(...)调用中的this上。"),Object(l.b)("h2",{id:"忽略this绑定"},"忽略this绑定"),Object(l.b)("p",null,"两个思路："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"将this绑定转成默认绑定，看上去也就不生效了。"),Object(l.b)("li",{parentName:"ul"},"将this限制在空对象当中，看上去也就不生效了。")),Object(l.b)("p",null,"看了刚才的理论部分，以为都清楚了this的绑定来吗？我们来看一个babel转义后的代码："),Object(l.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/ZQpnBe.jpg"}),Object(l.b)("h3",{id:"转成默认绑定"},"转成默认绑定"),Object(l.b)("p",null,"如果你把 null/undefined/void  0 作为 this 的绑定对象传入 call、apply 或者 bind，这些值"),Object(l.b)("p",null,"在调用时会被忽略，实际应用的是默认绑定规则:"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n console.log( this.a );\n}\nvar a = 2;\nfoo.call( null ); // 2\n")),Object(l.b)("p",null,"那么什么情况下你会传入 null 呢?"),Object(l.b)("p",null,"一种非常常见的做法是使用 apply(..) 来“展开”一个数组，并当作参数传入一个函数。"),Object(l.b)("p",null,"类似地，bind(..) 可以对参数进行柯里化(预先设置一些参数)，这种方法有时非常有用:"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),'function foo(a, b) {\n console.log( "a:" + a + ", b:" + b );\n}\n\n// 把数组"展开"成参数\nfoo.apply( null, [2, 3] ); // a:2, b:3\n\n// 使用 bind(..) 进行柯里化\nvar bar = foo.bind(null, 2); bar(3); // a:2, b:3\n')),Object(l.b)("p",null,"这两种方法都需要传入一个参数当作 this 的绑定对象。如果函数并不关心 this 的话，你仍然需要传入一个占位值，这时 null 可能是一个不错的选择。"),Object(l.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/HWCCeR.jpg"}),Object(l.b)("p",null,"在 ES6 中，可以用 ... 操作符代替 apply(..) 来“展开”数组，foo(...","[1,2]",") 和 foo(1,2) 是一样的，这样可以避免不必要的 this 绑定。可惜，在 ES6 中没有柯里化的相关语法，因此还是需要使用 bind(..)"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"const curry = (fn, arity = fn.length, ...args) =>\n arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);\n")),Object(l.b)("p",null,"这种方法的副作用：虽然是表面上忽略this绑定，但其实是转嫁了默认绑定，如果某个函数确实使用了 this(比如第三方库中的一个函数)，那默认绑定规则会把 this 绑定到全局对象(在浏览 器中这个对象是 window)，这将导致不可预计的后果(比如修改全局对象)。这种方式可能会导致许多难以分析和追踪的 bug。"),Object(l.b)("h3",{id:"更安全的this：限制在空对象中"},"更安全的this：限制在空对象中"),Object(l.b)("p",null,"如果我们在忽略 this 绑定时总是传入一个空对象，那就什么都不用担心了，因为任何对于 this 的使用都会被限制在这个空对象中，不会对全局对象产生任何影响。"),Object(l.b)("p",null,"由于这个对象完全是一个空对象，我自己喜欢用变量名 ø(这是数学中表示空集合符号的小写形式)来表示它。在大多数键盘(比如说 Mac 的 US 布局键盘)上都可以使用⌥ +o (Option-o)来打出这个符号。有些系统允许你为特殊符号设定快捷键。如果你不喜欢 ø 符号或者你的键盘不太容易打出这个符号，那你可以换一个喜欢的名字来称呼它。"),Object(l.b)("p",null,"无论你叫它什么，在 JavaScript 中创建一个空对象最简单的方法都是 Object.create(null) 。Object.create(null) 和 {} 很像，",Object(l.b)("strong",{parentName:"p"},"但是并不会创建 Object.prototype 这个委托，所以它比 {}“更空”"),":"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),'function foo(a,b) {\n    console.log( "a:" + a + ", b:" + b );\n}\n\n// 我们的空对象\nvar ø = Object.create( null );\n\n// 把数组展开成参数\nfoo.apply( ø, [2, 3] ); // a:2, b:3\n\n// 使用 bind(..) 进行柯里化\nvar bar = foo.bind( ø, 2 );\nbar( 3 ); // a:2, b:3\n')),Object(l.b)("p",null,"使用变量名 ø 不仅让函数变得更加“安全”，而且可以提高代码的可读性，因为 ø 表示 “我希望 this 是空”，这比 null 的含义更清楚。"),Object(l.b)("h2",{id:"箭头函数的this"},"箭头函数的this"),Object(l.b)("p",null,"箭头函数并不是使用 function 关键字定义的，而是使用被称为“胖箭头”的操作符 => 定 义的。箭头函数不使用 this 的四种标准规则，而是根据外层(函数或者全局)作用域来决 定 this。"),Object(l.b)("p",null,"我们来看看箭头函数的词法作用域:"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n // 返回一个箭头函数\n return (a) => {\n   //this 继承自 foo()\n   console.log( this.a );\n };\n}\nvar obj1 = { a:2 };\nvar obj2 = { a:3 };\nvar bar = foo.call( obj1 );\nbar.call( obj2 ); // 2, 不是 3 !\n")),Object(l.b)("p",null,"foo() 内部创建的箭头函数会捕获调用时 foo() 的 this。由于 foo() 的 this 绑定到 obj1， bar(引用箭头函数)的 this 也会绑定到 obj1，箭头函数的绑定无法被修改。(new 也不 行!)"),Object(l.b)("p",null,"箭头函数最常用于回调函数中，例如事件处理器或者定时器:"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n setTimeout(() => {\n   // 这里的 this 在此法上继承自 foo()\n   console.log( this.a );\n  },100);\n}\nvar obj = { a:2 };\nfoo.call( obj ); // 2\n")),Object(l.b)("p",null,"箭头函数可以像 bind(..) 一样确保函数的 this 被绑定到指定对象，此外，其重要性还体 现在它用更常见的词法作用域取代了传统的 this 机制。实际上，在 ES6 之前我们就已经 在使用一种几乎和箭头函数完全一样的模式。"),Object(l.b)("pre",null,Object(l.b)("code",o({parentName:"pre"},{className:"language-js"}),"function foo() {\n var self = this; // lexical capture of this\n setTimeout( function(){\n   console.log( self.a );\n }, 100 );\n}\nvar obj = { a: 2 };\nfoo.call( obj ); // 2\n")),Object(l.b)("p",null,"虽然 self = this 和箭头函数看起来都可以取代 bind(..)，但是从本质上来说，它们想替代的是 this 机制。如果你经常编写 this 风格的代码，但是绝大部分时候都会使用 self = this 或者箭头函数来否定 this 机制，那你或许应当:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"只使用词法作用域并完全抛弃错误this风格的代码;"),Object(l.b)("li",{parentName:"ul"},"完全采用 this 风格，在必要时使用 bind(..)，尽量避免使用 self = this 和箭头函数。")),Object(l.b)("p",null,"当然，包含这两种代码风格的程序可以正常运行，但是在同一个函数或者同一个程序中混合使用这两种风格通常会使代码更难维护，并且可能也会更难编写。"))}p.isMDXComponent=!0},391:function(e,n,t){"use strict";var l=t(0),a=t.n(l),o=t(393),b=t.n(o),c=(t(392),{better:{name:"推荐",color:"#50c610",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},a.a.createElement("g",null,a.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),a.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"强制",color:"#ff4642",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},a.a.createElement("g",null,a.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"提示",color:"#3884ff",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},a.a.createElement("g",null,a.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"注意",color:"#fdbe12",icon:a.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},a.a.createElement("g",null,a.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});n.a=function(e){var n=e.type,t=e.children;return a.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid ".concat(c[n].color)}},a.a.createElement("div",{style:{float:"left"}},c[n].icon),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:b()("<strong>".concat(c[n].name,"</strong>：").concat(t))}}))}},392:function(e,n,t){}}]);