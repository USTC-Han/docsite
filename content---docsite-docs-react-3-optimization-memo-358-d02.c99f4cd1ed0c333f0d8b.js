(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));t(0);var o=t(388);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={id:"memo",title:"记忆化组件",sidebar_label:"记忆化组件"},c=[{value:"React.memo",id:"reactmemo",children:[]},{value:"useMemo hook",id:"usememo-hook",children:[]}],p={rightToc:c},s="wrapper";function l(e){var n=e.components,t=r(e,["components"]);return Object(o.b)(s,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"reactmemo"},Object(o.b)("inlineCode",{parentName:"h2"},"React.memo")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"React.memo")," is a ",Object(o.b)("a",a({parentName:"p"},{href:"/docs/higher-order-components.html"}),"higher order component"),". It's similar to ",Object(o.b)("a",a({parentName:"p"},{href:"#reactpurecomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"React.PureComponent"))," but for function components instead of classes."),Object(o.b)("p",null,"If your function component renders the same result given the same props, you can wrap it in a call to ",Object(o.b)("inlineCode",{parentName:"p"},"React.memo")," for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result."),Object(o.b)("p",null,"By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function MyComponent(props) {\n  /* render using props */\n}\nfunction areEqual(prevProps, nextProps) {\n  /*\n  return true if passing nextProps to render would return\n  the same result as passing prevProps to render,\n  otherwise return false\n  */\n}\nexport default React.memo(MyComponent, areEqual);\n")),Object(o.b)("p",null,"This method only exists as a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",a({parentName:"strong"},{href:"/docs/optimizing-performance.html"}),"performance optimization"),"."),' Do not rely on it to "prevent" a render, as this can lead to bugs.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note"),Object(o.b)("p",{parentName:"blockquote"},"Unlike the ",Object(o.b)("a",a({parentName:"p"},{href:"/docs/react-component.html#shouldcomponentupdate"}),Object(o.b)("inlineCode",{parentName:"a"},"shouldComponentUpdate()"))," method on class components, the ",Object(o.b)("inlineCode",{parentName:"p"},"areEqual")," function returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the props are equal and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," if the props are not equal. This is the inverse from ",Object(o.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),".")),Object(o.b)("h2",{id:"usememo-hook"},Object(o.b)("inlineCode",{parentName:"h2"},"useMemo")," hook"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),Object(o.b)("p",null,"Returns a ",Object(o.b)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Memoization"}),"memoized")," value."),Object(o.b)("p",null,'Pass a "create" function and an array of dependencies. ',Object(o.b)("inlineCode",{parentName:"p"},"useMemo")," will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render."),Object(o.b)("p",null,"Remember that the function passed to ",Object(o.b)("inlineCode",{parentName:"p"},"useMemo")," runs during rendering. Don't do anything there that you wouldn't normally do while rendering. For example, side effects belong in ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect"),", not ",Object(o.b)("inlineCode",{parentName:"p"},"useMemo"),"."),Object(o.b)("p",null,"If no array is provided, a new value will be computed on every render."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You may rely on ",Object(o.b)("inlineCode",{parentName:"strong"},"useMemo")," as a performance optimization, not as a semantic guarantee."),' In the future, React may choose to "forget" some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without ',Object(o.b)("inlineCode",{parentName:"p"},"useMemo")," — and then add it to optimize performance."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note"),Object(o.b)("p",{parentName:"blockquote"},"The array of dependencies is not passed as arguments to the function. Conceptually, though, that's what they represent: every value referenced inside the function should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically."),Object(o.b)("p",{parentName:"blockquote"},"We recommend using the ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/facebook/react/issues/14920"}),Object(o.b)("inlineCode",{parentName:"a"},"exhaustive-deps"))," rule as part of our ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks#installation"}),Object(o.b)("inlineCode",{parentName:"a"},"eslint-plugin-react-hooks"))," package. It warns when dependencies are specified incorrectly and suggests a fix.")))}l.isMDXComponent=!0},388:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o),r=a.a.createContext({}),i=function(e){var n=a.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return a.a.createElement(r.Provider,{value:n},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),l=i(t),u=o,m=l[c+"."+u]||l[u]||s[u]||r;return t?a.a.createElement(m,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(m,Object.assign({},{ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);