"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[427],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"LT Guarantees",description:"How the blockchain works",sidebar_position:11},l="LT Guarantees",c={unversionedId:"develop/smart-contract/learn/lt-guarantees",id:"develop/smart-contract/learn/lt-guarantees",title:"LT Guarantees",description:"How the blockchain works",source:"@site/../../src/develop/smart-contract/learn/50-lt-guarantees.md",sourceDirName:"develop/smart-contract/learn",slug:"/develop/smart-contract/learn/lt-guarantees",permalink:"/develop/smart-contract/learn/lt-guarantees",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/learn/50-lt-guarantees.md",tags:[],version:"current",lastUpdatedAt:1664913367,formattedLastUpdatedAt:"Oct 4, 2022",sidebarPosition:11,frontMatter:{title:"LT Guarantees",description:"How the blockchain works",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Distributed programming",permalink:"/develop/smart-contract/learn/distributed-programming"},next:{title:"Developing with Solidity",permalink:"/develop/solidity-developing"}},p={},m=[{value:"Delivery order for two contracts",id:"delivery-order-for-two-contracts",level:2},{value:"Complicated cases",id:"complicated-cases",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lt-guarantees"},"LT Guarantees"),(0,o.kt)("p",null,"This very complex topic (the complexity arises due to sharding), and there is no consensus in the community yet on what kind of guarantees we can count on. So everything described below has not yet been confirmed with documentation."),(0,o.kt)("p",null,"The examples below are described for cases when all contracts are in the same workchain, but in unknown shards (in the same shard or different ones, it doesn\u2019t matter)."),(0,o.kt)("p",null,"Guarantees of message delivery order are built on LT guarantees. And of course, everything is described in Nikolai\u2019s WP, but so far there is no certainty that the Rust node is doing everything right."),(0,o.kt)("p",null,"LT \u2014 Logical time. This is the logical time when a transaction or message was created."),(0,o.kt)("p",null,"The main idea here is that the LT of an entity is always greater than the LT of all the entities on which it depends."),(0,o.kt)("p",null,"That is, if the LT of the block in which the transaction occurs is 1, then the LT of the transaction of this block is at least 2. The LT of the first message created from this transaction is at least 3, the LT of the second is at least 4, and so on."),(0,o.kt)("h2",{id:"delivery-order-for-two-contracts"},"Delivery order for two contracts"),(0,o.kt)("p",null,"When a contract receives incoming messages, it is guaranteed that it will receive them strictly in ascending order of the LT of those messages. That is, if we send two messages from the same transaction, the one that was sent first will be received first. If two messages are sent by different transactions, then the one that was sent first will be received first (the LT of the second transaction is greater than the first)."),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d6AvkC2g5NJj51oj55mhIbAByX9p579JYuiJqrEv744IJbOAXWgUUJYaZ32a0000",alt:null}),(0,o.kt)("p",null,"In this case, too, Int 1 will come first, but only if ",(0,o.kt)("inlineCode",{parentName:"p"},"Ext 1")," happens before ",(0,o.kt)("inlineCode",{parentName:"p"},"Ext 2")," (if you send two external messages at the same time or close in time, there is no guarantee regarding the order in which they will be added into the block)."),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d6AvkC2g5NJj51oj55mhIXGCkHn1F2Sh1KC5pxoIrAAyn1o5tDJYuiJqL000",alt:null}),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d6AvkC2g5NJj51oj55mhIXICk1n1F2Sh1IC5pxoIrAAyn1o5tDJYuiJqL000",alt:null}),(0,o.kt)("h2",{id:"complicated-cases"},"Complicated cases"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is no consensus on whether or not you can count on this, so ",(0,o.kt)("strong",{parentName:"p"},"USE ONLY IF YOU UNDERSTAND WHAT YOU ARE DOING 100%"),", otherwise you should only use delivery order guarantees for two contracts."),(0,o.kt)("p",{parentName:"admonition"},"(This may change after new consensus)")),(0,o.kt)("p",null,"If we send two messages from contract ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"message 1")," is sent before ",(0,o.kt)("inlineCode",{parentName:"p"},"message 2"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"message 1")," will arrive earlier than any other message generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"message 2"),", as in the example below, ",(0,o.kt)("inlineCode",{parentName:"p"},"Int 1")," will always arrive before ",(0,o.kt)("inlineCode",{parentName:"p"},"Int 3"),"."),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252ph5SN60357Jj51oj55mhIXGCkHn1F6Sh1SyyA0_8TO9mZHIud91aZG40",alt:null}),(0,o.kt)("p",null,"If you have more than 3 contracts, then the order of delivery is mostly undefined."),(0,o.kt)("p",null,"For all other cases, you definitely shouldn\u2019t count on this if you don\u2019t consider yourself a super expert in LT and node operation. ",(0,o.kt)("strong",{parentName:"p"},"Below I will demonstrate several cases where the delivery order is not defined.")),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252paX2BX0XbrWkBh2P2hfs2evM2guL9LoE2hf0ZhELWY6KwMIbOCJb36QwM2aOwvjmEI5n0000",alt:null}),(0,o.kt)("p",null,"Here the order is not defined, ",(0,o.kt)("inlineCode",{parentName:"p"},"G")," can receive a message from any of the chains first."),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/JSWn2e0m343HFQS8tJles45eqwI7a0x5NK5xVuH49DF_l43NEUznJCm1nuDxxX1-AsR56vcHjsfMlR4PUsjcpPkOIGV86EE6ad3vjYHSeUWIaBP2rJAmje5ONm00",alt:null}),(0,o.kt)("p",null,"This is a more complicated example. If ",(0,o.kt)("inlineCode",{parentName:"p"},"Ext 1")," happens before ",(0,o.kt)("inlineCode",{parentName:"p"},"Ext 2"),", but they occur close to each other in time, then ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," arrives before ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),", but we don\u2019t know in which order ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," will receive messages ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252ph5SN60357Jj51oj55mhIXGCkHn1F6Sh20l8TB9IC5BWSeAA6WC0",alt:null}),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252ph5SN60357Jj51oj55mhIXICk1n1F6Sh1HCG2yXqib8mLU1oWegQ0G00",alt:null}))}u.isMDXComponent=!0}}]);