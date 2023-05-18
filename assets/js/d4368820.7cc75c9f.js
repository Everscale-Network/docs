"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={description:"The TVM, is the virtual machine used to execute smart-contract"},i="TVM",c={unversionedId:"arch/tvm",id:"arch/tvm",title:"TVM",description:"The TVM, is the virtual machine used to execute smart-contract",source:"@site/../../src/arch/10-tvm.md",sourceDirName:"arch",slug:"/arch/tvm",permalink:"/arch/tvm",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/10-tvm.md",tags:[],version:"current",lastUpdatedAt:1684419888,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:10,frontMatter:{description:"The TVM, is the virtual machine used to execute smart-contract"},sidebar:"tutorialSidebar",previous:{title:"TL-B and BoC",permalink:"/arch/tlb-and-boc"},next:{title:"Fee calculation",permalink:"/arch/fee-calculation"}},s={},l=[{value:"Additionally",id:"additionally",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tvm"},"TVM"),(0,a.kt)("p",null,"The primary purpose of the Telegram Open Network Virtual Machine (TON VM or TVM) is to execute smart-contract code in the TON Blockchain. TVM must support all operations required to parse incoming messages and persistent data, and to create new messages and modify persistent data. Now TVM, is used to execute smart-contract code in the masterchain(-1 workchain) and in the basechain(0 workchain). Other workchains may use other virtual machines alongside or instead of the TVM. "),(0,a.kt)("p",null,"The stack principle forms the foundation of TVM, ensuring its efficiency and ease of implementation. TVM also provides a variety of primitives for working with native data types for the TON Blockchain, such as TVM Cells. More information about the structure and operation principles of TVM can be found here \u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/tvm.pdf"},"Telegram Open Network Virtual Machine tvm.pdf")," is the original document designed by Nikolai Durov and modified by the Everscale Team to take into account the current changes in TVM in the Everscale blockchain."),(0,a.kt)("h2",{id:"additionally"},"Additionally"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tonlabs.notion.site/tonlabs/TVM-Extended-Instructions-f22fb9a10bec4f8cadd9757e7d6df51d"},"TVM Extended Instructions"))))}p.isMDXComponent=!0}}]);