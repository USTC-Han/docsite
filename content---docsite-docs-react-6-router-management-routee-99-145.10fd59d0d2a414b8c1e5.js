(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{413:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(537),c=n(538);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={id:"route",title:"Route",sidebar_label:"Route"},i=[{value:"\u8def\u5f84(Path)",id:"\u8def\u5f84path",children:[]},{value:"\u5339\u914d\u8def\u5f84",id:"\u5339\u914d\u8def\u5f84",children:[]},{value:"\u521b\u5efa\u8def\u7531",id:"\u521b\u5efa\u8def\u7531",children:[]},{value:"<Route>\u662f\u5982\u4f55\u6e32\u67d3\u7684\uff1f",id:"route\u662f\u5982\u4f55\u6e32\u67d3\u7684\uff1f",children:[]},{value:"<Main>",id:"main",children:[]},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",children:[]},{value:"\u8def\u5f84\u53c2\u6570",id:"\u8def\u5f84\u53c2\u6570",children:[]}],o={rightToc:i},p="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(a.b)(p,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"<","Route",">"," \u7ec4\u4ef6\u662f react-router \u4e2d\u4e3b\u8981\u7684\u7ed3\u6784\u5355\u5143\u3002\u5728\u4efb\u610f\u4f4d\u7f6e\u53ea\u8981\u5339\u914d\u4e86URL\u7684\u8def\u5f84\u540d ","(","pathname",")"," \u4f60\u5c31\u53ef\u4ee5\u521b\u5efa ","<","Route",">"," \u5143\u7d20\u8fdb\u884c\u6e32\u67d3\u3002"),Object(a.b)("h2",{id:"\u8def\u5f84path"},"\u8def\u5f84","(","Path",")"),Object(a.b)("p",null,"<","Route",">"," \u63a5\u53d7\u4e00\u4e2a\u6570\u4e3a string \u7c7b\u578b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"path"),"\u3002\u5728\u5f53\u524d path \u53c2\u6570\u4e0e\u5f53\u524d location \u7684\u8def\u5f84\u76f8\u5339\u914d\u65f6\uff0c\u8def\u7531\u5c31\u4f1a\u5f00\u59cb\u6e32\u67d3 React \u7ec4\u4ef6\u3002\u82e5\u4e0d\u5339\u914d\uff0c\u8def\u7531\u4e0d\u4f1a\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"// \u5f53\u8def\u5f84\u540d\u4e3a'/'\u65f6, path\u4e0d\u5339\u914d\n// \u5f53\u8def\u5f84\u540d\u4e3a'/article'\u6216'/article/2'\u65f6, path\u5339\u914d\n<Route path='/article' />\n\n// \u5f53\u4f60\u53ea\u60f3\u5339\u914d'/article'\u65f6\uff0c\u4f60\u9700\u8981\u4f7f\u7528\"exact\"\u53c2\u6570\n// \u5219\u8def\u7531\u4ec5\u5339\u914d'/article'\u800c\u4e0d\u4f1a\u5339\u914d'/article/2'\n<Route exact path='/article' />\n")),Object(a.b)(c.a,{type:"warning",mdxType:"Hint"},"\u5728\u5339\u914d\u8def\u7531\u65f6\uff0creact-router \u53ea\u5173\u6ce8 location \u7684**\u8def\u5f84\u540d**\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\u5f53 URL \u5982\u4e0b\u65f6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-text"}),"http://www.example.com/my-projects/one?extra=false\n")),Object(a.b)("p",null,"react-router \u53bb\u5339\u914d\u7684\u53ea\u662f '/my-projects/one' \u8fd9\u4e00\u90e8\u5206\u3002"),Object(a.b)("h2",{id:"\u5339\u914d\u8def\u5f84"},"\u5339\u914d\u8def\u5f84"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"path-to-regexp"),"\u5305\u7528\u6765\u51b3\u5b9a route \u5143\u7d20\u7684 path \u53c2\u6570\u4e0e\u5f53\u524d location \u662f\u5426\u5339\u914d\u3002\u5b83\u5c06\u8def\u5f84\u5b57\u7b26\u4e32\u7f16\u8bd1\u6210\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5e76\u4e0e\u5f53\u524d location \u7684\u8def\u5f84\u540d\u8fdb\u884c\u5339\u914d\u6bd4\u8f83\u3002\u9664\u4e86\u4e0a\u9762\u7684\u4f8b\u5b50\u5916\uff0c\u8def\u5f84\u5b57\u7b26\u4e32\u6709\u66f4\u591a\u9ad8\u7ea7\u7684\u9009\u9879\uff0c\u8be6\u89c1 path-to-regexp \u6587\u6863\u3002",Object(a.b)("br",{parentName:"p"}),"\n","\u5f53\u8def\u7531\u5730\u5740\u5339\u914d\u6210\u529f\u540e\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u542b\u6709\u4ee5\u4e0b\u5c5e\u6027\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"match")," ","_","_","\u5bf9\u8c61\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"url \uff1a\u4e0e\u5f53\u524d location \u8def\u5f84\u540d\u6240\u5339\u914d\u90e8\u5206"),Object(a.b)("li",{parentName:"ul"},"path\u200a\uff1a\u8def\u7531\u7684\u5730\u5740"),Object(a.b)("li",{parentName:"ul"},"isExact \uff1apath \u662f\u5426\u7b49\u4e8e pathname"),Object(a.b)("li",{parentName:"ul"},"params\u200a\uff1a\u4ece path-to-regexp \u83b7\u53d6\u7684\u8def\u5f84\u4e2d\u53d6\u51fa\u7684\u503c\u90fd\u88ab\u5305\u542b\u5728\u8fd9\u4e2a\u5bf9\u8c61\u4e2d")),Object(a.b)("p",null,"\u4f7f\u7528 ",Object(a.b)("a",r({parentName:"p"},{href:"https://pshrmn.github.io/route-tester/#/"}),"route tester")," \u8fd9\u6b3e\u5de5\u5177\u6765\u5bf9\u8def\u7531\u4e0eURL\u8fdb\u884c\u68c0\u9a8c\u3002"),Object(a.b)("h2",{id:"\u521b\u5efa\u8def\u7531"},"\u521b\u5efa\u8def\u7531"),Object(a.b)("p",null,"\u53ef\u4ee5\u5728 ","<","Router",">"," \u4e2d\u7684\u4efb\u610f\u4f4d\u7f6e\u521b\u5efa\u591a\u4e2a ","<","Route",">","\uff0c\u4f46\u901a\u5e38\u6211\u4eec\u4f1a\u628a\u5b83\u4eec\u653e\u5728\u540c\u4e00\u4e2a\u4f4d\u7f6e\u3002\u4f7f\u7528 ","<","Switch",">"," \u7ec4\u4ef6\u6765\u5305\u88f9\u4e00\u7ec4 ","<","Route",">","\u3002","<","Switch",">"," \u4f1a\u904d\u5386\u81ea\u8eab\u7684\u5b50\u5143\u7d20\uff08\u5373 ","<","Route",">","\uff09\u5e76\u5bf9\u7b2c\u4e00\u4e2a\u5339\u914d\u5f53\u524d\u8def\u5f84\u7684\u5143\u7d20\u8fdb\u884c\u6e32\u67d3\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\u6211\u4eec\u5e0c\u671b\u5339\u914d\u4ee5\u4e0b\u8def\u5f84\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"/\u200a\uff1a\u200a\u4e3b\u9875"),Object(a.b)("li",{parentName:"ul"},"/article\u200a\uff1a \u6587\u7ae0\u5217\u8868"),Object(a.b)("li",{parentName:"ul"},"/article/:id\u200a\uff1a\u6587\u7ae0\u8be6\u60c5\u9875")),Object(a.b)("p",null,"\u4e3a\u4e86\u5728\u5e94\u7528\u4e2d\u80fd\u5339\u914d\u8def\u5f84\uff0c\u5728\u521b\u5efa","<","Route",">","\u5143\u7d20\u65f6\u5fc5\u987b\u5e26\u6709\u9700\u8981\u5339\u914d\u7684path\u4f5c\u4e3a\u53c2\u6570\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"<Switch>\n  <Route exact path='/' component={Home}/>\n  {/* both /article and /article/:id begin with /user */}\n  <Route path='/article' component={rticle}/>\n</Switch>\n")),Object(a.b)("h2",{id:"route\u662f\u5982\u4f55\u6e32\u67d3\u7684\uff1f"},"<","Route",">","\u662f\u5982\u4f55\u6e32\u67d3\u7684\uff1f"),Object(a.b)("p",null,"\u5f53\u4e00\u4e2a\u8def\u7531\u7684path\u5339\u914d\u6210\u529f\u540e\uff0c\u8def\u7531\u7528\u6765\u786e\u5b9a\u6e32\u67d3\u7ed3\u679c\u7684\u53c2\u6570\u6709\u4e09\u79cd\u3002\u53ea\u9700\u8981\u63d0\u4f9b\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"component")," \uff1a \u4e00\u4e2a React \u7ec4\u4ef6\u3002\u5f53\u5e26\u6709 component \u53c2\u6570\u7684 ","<","Route",">"," \u5339\u914d\u6210\u529f\u540e\uff0c","<","Route",">"," \u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5143\u7d20\uff0c\u5176\u4e3a component \u53c2\u6570\u6240\u5bf9\u5e94\u7684 React \u7ec4\u4ef6\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"render")," \uff1a \u4e00\u4e2a\u8fd4\u56de React element \u7684\u51fd\u6570\u3002\u5f53\u5339\u914d\u6210\u529f\u540e\u8c03\u7528\u8be5\u51fd\u6570\uff0c\u8be5\u8fc7\u7a0b\u4e0e\u4f20\u5165 component \u53c2\u6570\u7c7b\u4f3c\uff0c\u5e76\u4e14\u5bf9\u4e8e",Object(a.b)("strong",{parentName:"li"},"\u884c\u7ea7\u6e32\u67d3\u4e0e\u9700\u8981\u5411\u5143\u7d20\u4f20\u5165\u989d\u5916\u53c2\u6570"),"\u7684\u64cd\u4f5c\u4f1a\u66f4\u6709\u7528\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"children")," \uff1a \u4e00\u4e2a\u8fd4\u56de React element \u7684\u51fd\u6570\u3002\u4e0e\u4e0a\u8ff0\u4e24\u4e2a\u53c2\u6570\u4e0d\u540c\uff0c\u65e0\u8bbaroute\u662f\u5426\u5339\u914d\u5f53\u524dlocation\uff0c\u5176\u90fd\u4f1a\u88ab\u6e32\u67d3\u3002")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"<Route path='/page' component={Page} />\nconst extraProps = { color: 'red' }\n<Route path='/page' render={(props) => (\n  <Page {...props} data={extraProps}/>\n)}/>\n<Route path='/page' children={(props) => (\n  props.match\n    ? <Page {...props}/>\n    : <EmptyPage {...props}/>\n)}/>\n")),Object(a.b)("p",null,"\u5e38\u7528\u7684\u662f",Object(a.b)("inlineCode",{parentName:"p"},"component"),"\u53c2\u6570\u4e0e",Object(a.b)("inlineCode",{parentName:"p"},"render"),"\u53c2\u6570\u3002",Object(a.b)("inlineCode",{parentName:"p"},"children"),"\u53c2\u6570\u5076\u5c14\u4f1a\u88ab\u4f7f\u7528\uff0c\u5b83\u66f4\u5e38\u7528\u5728 path \u65e0\u6cd5\u5339\u914d\u65f6\u5448\u73b0\u7684 '\u7a7a' \u72b6\u6001\u3002\u5728\u672c\u4f8b\u4e2d\u5e76\u4e0d\u4f1a\u6709\u989d\u5916\u7684\u72b6\u6001\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u4f7f\u7528 ","<","Route",">"," \u7684 component \u53c2\u6570\u3002"),Object(a.b)("p",null,"\u901a\u8fc7 ","<","Route",">"," \u6e32\u67d3\u7684\u5143\u7d20\u4f1a\u88ab\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\uff0c\u5206\u522b\u662f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"match \u5bf9\u8c61"),Object(a.b)("li",{parentName:"ul"},"\u5f53\u524d location \u5bf9\u8c61"),Object(a.b)("li",{parentName:"ul"},"history \u5bf9\u8c61\uff08\u7531 ","<","Router",">"," \u521b\u5efa\uff09")),Object(a.b)("h2",{id:"main"},"<","Main",">"),Object(a.b)("p",null,"\u73b0\u5728\u6211\u4eec\u6e05\u695a\u4e86\u6839\u8def\u7531\u7684\u7ed3\u6784\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u9645\u6e32\u67d3\u6211\u4eec\u7684\u8def\u7531\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u5e94\u7528\uff0c\u6211\u4eec\u5c06\u4f1a\u5728 ","<","Main",">","\u7ec4\u4ef6 \u4e2d\u6e32\u67d3 ","<","Switch",">"," \u4e0e ","<","Route",">","\uff0c\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u5c06 ","<","Route",">"," \u5339\u914d\u751f\u6210\u7684 HTML \u653e\u5728 ","<","main",">"," \u8282\u70b9\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { Switch, Route } from 'react-router-dom'\nconst Main = () => (\n  <main>\n    <Switch>\n      <Route exact path='/' component={Home}/>\n      <Route path='/article' component={Article}/>\n    </Switch>\n  </main>\n)\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u63d0\u793a"),"\uff1a\u53ef\u4ee5\u7528 exact \u53c2\u6570\u7528\u6765\u4fdd\u8bc1\u8def\u7531\u80fd\u51c6\u786e\u5339\u914dpath\u3002")),Object(a.b)("h2",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),Object(a.b)("p",null,"\u6587\u7ae0\u8be6\u60c5\u9875\u8def\u7531",Object(a.b)("inlineCode",{parentName:"p"},"/article/:id"),"\u5e76\u672a\u5305\u542b\u5728\u4e0a\u8ff0 ","<","Switch",">"," \u4e2d\u3002\u5b83\u7531 ","<","Article",">"," \u7ec4\u4ef6\u8d1f\u8d23\u5728\u8def\u5f84\u5305\u542b '/article' \u7684\u60c5\u5f62\u4e0b\u8fdb\u884c\u6e32\u67d3\u3002"),Object(a.b)("p",null,"\u5728","<","Article",">","\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u5c06\u4e3a\u4e24\u79cd\u8def\u5f84\u8fdb\u884c\u6e32\u67d3\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"/article\u200a\uff1a\u5bf9\u5e94\u8def\u5f84\u540d\u4ec5\u4ec5\u662f/article\u65f6\uff0c\u56e0\u6b64\u9700\u8981\u5728 exact \u5143\u7d20\u4e0a\u6dfb\u52a0 exact \u53c2\u6570\u3002"),Object(a.b)("li",{parentName:"ul"},"/article/:id\u200a\uff1a\u200a\u8be5\u8def\u7531\u4f7f\u7528\u4e00\u4e2a\u8def\u7531\u53c2\u6570\u6765\u83b7\u53d6 /article \u540e\u7684\u8def\u5f84\u540d\u3002")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"const Article = () => (\n  <Switch>\n    <Route exact path='/article' component={ArticleList}/>\n    <Route path='/article/:id' component={ArticleDetail}/>\n  </Switch>\n)\n")),Object(a.b)("p",null,"\u7ec4\u5408\u5728\u76f8\u540c\u7ec4\u4ef6\u4e2d\u5206\u4eab\u5171\u540c\u524d\u7f00\u7684\u8def\u7531\u662f\u4e00\u79cd\u6709\u7528\u7684\u65b9\u6cd5\u3002\u8fd9\u5c31\u9700\u8981\u7b80\u5316\u7236\u8def\u7531\u5e76\u4e14\u63d0\u4f9b\u4e00\u4e2a\u533a\u57df\u6765\u6e32\u67d3\u5177\u6709\u76f8\u540c\u524d\u7f00\u7684\u901a\u7528\u8def\u7531\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\uff0c","<","Article",">"," \u7528\u6765\u6e32\u67d3\u6240\u6709\u4ee5",Object(a.b)("inlineCode",{parentName:"p"},"/article"),"\u5f00\u59cb\u7684\u5168\u90e8\u8def\u7531\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"const Article = () => (\n  <div>\n    <h2>This is a article page!</h2>\n    <nav>\n      <span>ArticleList</span>\n      <span>ArticleList</span>\n    </nav>\n    <Switch>\n      <Route exact path='/article' component={ArticleList}/>\n      <Route path='/article/:id' component={ArticleDetail}/>\n    </Switch>\n  </div>\n)\n")),Object(a.b)(c.a,{type:"warning",mdxType:"Hint"},"Switch \u91cc\u9762\u76f4\u63a5\u8981\u5d4c\u5957 Route\uff0c\u5426\u5219\u5728\u8def\u7531\u8df3\u8f6c\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u60c5\u51b5\u3002"),Object(a.b)("h2",{id:"\u8def\u5f84\u53c2\u6570"},"\u8def\u5f84\u53c2\u6570"),Object(a.b)("p",null,"\u6709\u65f6\u8def\u5f84\u540d\u4e2d\u5b58\u5728\u6211\u4eec\u9700\u8981\u83b7\u53d6\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u9700\u8981\u83b7\u53d6\u6587\u7ae0\u7684id\u3002\u6211\u4eec\u53ef\u4ee5\u5411 ","<","Route",">"," \u4e2d\u6dfb\u52a0 path \u53c2\u6570\u3002"),Object(a.b)("p",null,"\u5982 '/article/:id' \u4e2d",Object(a.b)("inlineCode",{parentName:"p"},":id"),"\u8fd9\u79cd\u5199\u6cd5\u610f\u5473\u7740 /article/ \u540e\u7684\u8def\u5f84\u540d\u5c06\u4f1a\u88ab\u83b7\u53d6\u5e76\u5b58\u5728",Object(a.b)("inlineCode",{parentName:"p"},"match.params.id"),"\u4e2d\u3002\u4f8b\u5982\uff0c\u8def\u5f84\u540d'/article/6'\u4f1a\u83b7\u53d6\u5230\u4e00\u4e2a\u5bf9\u8c61\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"{ id: '6' } // \u83b7\u53d6\u7684\u503c\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\n")),Object(a.b)("p",null,"<","ArticleDetail",">"," \u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 props.match.params \u5bf9\u8c61\u6765\u786e\u5b9a\u9700\u8981\u88ab\u6e32\u67d3\u7684\u6587\u7ae0\u7684\u6570\u636e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import ArticleAPI from './ArticleAPI'\nconst Player = (props) => {\n  const article = ArticleAPI.get(\n    parseInt(props.match.params.id, 6)\n  )\n  if (!article) {\n    return <div>Sorry, but the article was not found</div>\n  }\n  return (\n    <div>\n      <h1>{article.name} (#{article.id})</h1>\n      <h2>{article.content}</h2>\n    </div>\n)\n")),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/pillarjs/path-to-regexp#parameters"}),"path-to-regexp\u6587\u6863")," \u6765\u4e86\u89e3\u66f4\u591a\u3002"))}b.isMDXComponent=!0},538:function(e,t,n){"use strict";n(540);var a=n(0),c=n.n(a),r=n(541),l=n.n(r),i=(n(539),{best:{name:"\u63a8\u8350",color:"#50c610",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),c.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},c.a.createElement("g",null,c.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},c.a.createElement("g",null,c.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),c.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),c.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});t.a=function(e){var t=e.type,n=e.children;return c.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+i[t].color}},c.a.createElement("div",{style:{float:"left"}},i[t].icon),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:l()("<strong>"+i[t].name+"</strong>\uff1a"+n)}}))}},539:function(e,t,n){}}]);