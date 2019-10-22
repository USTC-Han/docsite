(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{387:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));t(58),t(31),t(22),t(23),t(59),t(0);var a=t(537);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={id:"suspense",title:"Suspense",sidebar_label:"Suspense"},i=[{value:"React.lazy",id:"reactlazy",children:[]},{value:"React.Suspense",id:"reactsuspense",children:[]}],c={rightToc:i},p="wrapper";function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(p,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Suspense lets components \u201cwait\u201d for something before rendering. Today, Suspense only supports one use case: ",Object(a.b)("a",o({parentName:"p"},{href:""}),"loading components dynamically with React.lazy"),". In the future, it will support other use cases like data fetching."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"React.lazy"),Object(a.b)("li",{parentName:"ul"},"React.Suspense")),Object(a.b)("h2",{id:"reactlazy"},"React.lazy"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.lazy()")," lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading components that aren\u2019t used during the initial render."),Object(a.b)("p",null,"You can learn how to use it from our ",Object(a.b)("a",o({parentName:"p"},{href:""}),"code splitting documentation"),". You might also want to check out ",Object(a.b)("a",o({parentName:"p"},{href:"https://medium.com/@pomber/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d"}),"this article")," explaining how to use it in more detail."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"// This component is loaded dynamically\nconst SomeComponent = React.lazy(() => import('./SomeComponent'));\n")),Object(a.b)("p",null,"Note that rendering ",Object(a.b)("inlineCode",{parentName:"p"},"lazy")," components requires that there\u2019s a ",Object(a.b)("inlineCode",{parentName:"p"},"<React.Suspense>")," component higher in the rendering tree. This is how you specify a loading indicator."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),"\nUsing React.lazywith dynamic import requires Promises to be available in the JS environment. This requires a polyfill on IE11 and below.")),Object(a.b)("h2",{id:"reactsuspense"},"React.Suspense"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.Suspense")," let you specify the loading indicator in case some components in the tree below it are not yet ready to render. Today, lazy loading components is the only use case supported by ",Object(a.b)("inlineCode",{parentName:"p"},"<React.Suspense>"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"// This component is loaded dynamically\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    // Displays <Spinner> until OtherComponent loads\n    <React.Suspense fallback={<Spinner />}>\n      <div>\n        <OtherComponent />\n      </div>\n    </React.Suspense>\n  );\n}\n")),Object(a.b)("p",null,"It is documented in our ",Object(a.b)("a",o({parentName:"p"},{href:""}),"code splitting guide"),". Note that ",Object(a.b)("inlineCode",{parentName:"p"},"lazy")," components can be deep inside the ",Object(a.b)("inlineCode",{parentName:"p"},"Suspense")," tree \u2014 it doesn\u2019t have to wrap every one of them. The best practice is to place ",Object(a.b)("inlineCode",{parentName:"p"},"<Suspense>")," where you want to see a loading indicator, but to use lazy() wherever you want to do code splitting."),Object(a.b)("p",null,"While this is not supported today, in the future we plan to let ",Object(a.b)("inlineCode",{parentName:"p"},"Suspense")," handle more scenarios such as data fetching. You can read about this in ",Object(a.b)("a",o({parentName:"p"},{href:"https://reactjs.org/blog/2018/11/27/react-16-roadmap.html"}),"our roadmap"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"React.lazy()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"<React.Suspense>")," are not yet supported by ",Object(a.b)("inlineCode",{parentName:"p"},"ReactDOMServer"),". This is a known limitation that will be resolved in the future.")))}l.isMDXComponent=!0},537:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a),r=o.a.createContext({}),i=function(e){var n=o.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return o.a.createElement(r.Provider,{value:n},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),u=a,b=s[c+"."+u]||s[u]||l[u]||r;return t?o.a.createElement(b,Object.assign({},{ref:n},p,{components:t})):o.a.createElement(b,Object.assign({},{ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);