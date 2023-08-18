"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[7193],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},s),{},{components:r})):o.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70126:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],c={sidebar_position:2},p="Limit vs. RFQ Orders",l={unversionedId:"limit-order-protocol/types",id:"limit-order-protocol/types",isDocsHomePage:!1,title:"Limit vs. RFQ Orders",description:"The Limit Order Protocol provides users with options to place both Limit orders and Request For Quote (RFQ) orders. Select the appropriate order type based on your specific needs.",source:"@site/docs/limit-order-protocol/types.mdx",sourceDirName:"limit-order-protocol",slug:"/limit-order-protocol/types",permalink:"/docs/limit-order-protocol/types",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/types.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/limit-order-protocol/introduction"},next:{title:"Order creation examples",permalink:"/docs/limit-order-protocol/examples"}},s=[{value:"Comparison Table",id:"comparison-table",children:[]},{value:"More resources",id:"more-resources",children:[]}],d={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limit-vs-rfq-orders"},"Limit vs. RFQ Orders"),(0,i.kt)("p",null,"The Limit Order Protocol provides users with options to place both Limit orders and Request For Quote (RFQ) orders. Select the appropriate order type based on your specific needs."),(0,i.kt)("h2",{id:"comparison-table"},"Comparison Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Criteria"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Limit Order"),(0,i.kt)("th",{parentName:"tr",align:"center"},"RFQ Order"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"Suitable for")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Traders"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Market Makers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"Flexibility of features")),(0,i.kt)("td",{parentName:"tr",align:"center"},"High; includes Order predicates, callbacks. ",(0,i.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/introduction#limit-order-features"},"Details")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Limited due to gas optimization; Supports expiration time, partial fills (once), and cancellation by ID. ",(0,i.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/introduction#rfq-order-features"},"Details"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"Execution")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Uses Pathfinder algorithm for liquidity."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Exposed via API; requires quote requests; optimized for one-time fills.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"Key Characteristics")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Offers at a fixed price (0 slippage); various trading features/tools can be built."),(0,i.kt)("td",{parentName:"tr",align:"center"},'Mirrors "request for quotation"; designed for market makers and gas efficiency.')))),(0,i.kt)("p",null,"Both order types support ERC20, ERC721, and ERC1155 tokens. Other token standards might be supported in the future."),(0,i.kt)("h2",{id:"more-resources"},"More resources"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Further Reading"),": Explore Limit Order and RFQ Order ",(0,i.kt)("a",{parentName:"p",href:"https://docs.1inch.io/docs/limit-order-protocol/introduction"},"here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try directly at ",(0,i.kt)("a",{parentName:"li",href:"https://app.1inch.io/#/1/limit-order/WETH/DAI"},"1inch dApp"),"."),(0,i.kt)("li",{parentName:"ul"},"View the Smart Contracts ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/1inch/limit-order-protocol/"},"repository"),"."),(0,i.kt)("li",{parentName:"ul"},"Developers, check out the Utils library ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/1inch/limit-order-protocol-utils/"},"repository"),".")))}u.isMDXComponent=!0}}]);