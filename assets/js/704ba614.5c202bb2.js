"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1905],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(p,i(i({ref:t},h),{},{components:a})):n.createElement(p,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2551:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={description:"Blockchain, everything is a contract, types of messages and gas"},c="Introduction",l={unversionedId:"develop/smart-contract/learn/introduction",id:"develop/smart-contract/learn/introduction",title:"Introduction",description:"Blockchain, everything is a contract, types of messages and gas",source:"@site/../../src/develop/smart-contract/learn/00-introduction.md",sourceDirName:"develop/smart-contract/learn",slug:"/develop/smart-contract/learn/introduction",permalink:"/develop/smart-contract/learn/introduction",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/learn/00-introduction.md",tags:[],version:"current",lastUpdatedAt:1652749005,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:0,frontMatter:{description:"Blockchain, everything is a contract, types of messages and gas"},sidebar:"tutorialSidebar",previous:{title:"Learn",permalink:"/develop/smart-contract/learn"},next:{title:"Data structures",permalink:"/develop/smart-contract/learn/data-structures"}},h={},d=[{value:"The Everscale Philosophy",id:"the-everscale-philosophy",level:2},{value:"1. Infinite Sharding",id:"1-infinite-sharding",level:3},{value:"2. Rejection of radical decentralization",id:"2-rejection-of-radical-decentralization",level:3},{value:"4. Paid storage",id:"4-paid-storage",level:3},{value:"Blockchain",id:"blockchain",level:2},{value:"Everything is a smart contract!",id:"everything-is-a-smart-contract",level:2},{value:"There are two types of messages",id:"there-are-two-types-of-messages",level:2},{value:"External message",id:"external-message",level:3},{value:"Internal message",id:"internal-message",level:3},{value:"Important Concept",id:"important-concept",level:2},{value:"Gas usage",id:"gas-usage",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Everscale (hereafter ES) was created on the basis of the whitepaper and initial code of the Telegram Open Network (hereafter TON) project from Nikolai Durov. Essentially, the blockchain repeats the behavior described in this ",(0,r.kt)("a",{parentName:"p",href:"https://ton.org/tblkch.pdf"},"TON Whitepaper"),", however, not everything works as is presented in the whitepaper."),(0,r.kt)("h2",{id:"the-everscale-philosophy"},"The Everscale Philosophy"),(0,r.kt)("p",null,"In order to introduce the tutorial, we would like to speak about the Everscale blockchain and what makes it so promising."),(0,r.kt)("p",null,"When Nikolai Durov was creating TON, he was faced with the task of designing a blockchain platform that could accommodate millions of users while having low, stable transaction fees."),(0,r.kt)("p",null,"Durov was able to achieve this, and this is how:"),(0,r.kt)("h3",{id:"1-infinite-sharding"},"1. Infinite Sharding"),(0,r.kt)("p",null,"On ES shards are dynamically added as the load increases and then merged back. This is possible because all contracts on the chain communicate with each other asynchronously, and therefore we can split one shard into two shards without any problems occurring (Shards are just divided in half according to the ranges of contract addresses)."),(0,r.kt)("h3",{id:"2-rejection-of-radical-decentralization"},"2. Rejection of radical decentralization"),(0,r.kt)("p",null,"The ES blockchain was not built to allow just anyone to become a validator. Validation is a critical process, requires professional equipment and access to an appropriate server. The total number of validators will at most be in the thousands, not in the tens of thousands. And validator machines have high server and channel requirements (the current requirements are 48 CPUs, 128 RAM and 1TB SSD) and a 1GB channel (the network is used extensively). This allows for the blockchain to support a very quick block release speed and often rotate validators in the shards."),(0,r.kt)("h3",{id:"4-paid-storage"},"4. Paid storage"),(0,r.kt)("p",null,"This is a completely brilliant and daring decision that no other blockchain has implemented."),(0,r.kt)("p",null,"When you write something on a classic blockchain (like Ethereum), you put information on the chain forever."),(0,r.kt)("p",null,"So, if you buy a meme coin, data reflecting that purchase will be on the chain until the chain dies. You only pay on creating and accessing that information. However, validators must store that information forever."),(0,r.kt)("p",null,"This give rise to a curious economy \u2014 blockchains are forced to artificially limit their rate of recording so that the size of the blockchain state does not grow faster than the rate at which data storage becomes cheaper (In fact, they are even forced to try and prevent the blockchain state from growing faster than the rate at which RAM becomes cheaper). As a result, users are forced to compete with each other in auctions for the right to write data to the blockchain, and transaction fees are increasing all the time."),(0,r.kt)("p",null,"On ES, this problem is solved very simply \u2014 each contract is required to pay rent for the validators to store its state, and when the contract runs out of money, it gets deleted. Yes, this is radical, by doing this, users do not need to compete with each other for the right to write indelibly on the blockchain. On ES, each user determines how long they want their data to remain on the blockchain and has the option to extend that time frame. This makes the tokenomics of the chain completely unique, adding flexibility to the data inputed to the chain."),(0,r.kt)("p",null,"Essentially, ES aims to be a decentralized replacement for AWS. Just as you can host your application on AWS, you can host it on ES. Hosting it on ES will not be much more expensive (if it is rarely used, it will be cheaper), but it will have maximum fault tolerance."),(0,r.kt)("h2",{id:"blockchain"},"Blockchain"),(0,r.kt)("p",null,"This guide is not going to delve into the details of how exactly the ES blockchain works, because you don\u2019t need all of that to understand how to write smart contracts for ES. In the course of the guide, we will analyze the guarantees that the blockchain gives and everything you need to know to write smart contracts."),(0,r.kt)("p",null,"What do you need to know about the blockchain? ES is a multithreaded blockchain. There are different work chains (like global shards, they differ in parameters \u2014 there are 2 of them now), and the work chains are further divided into processing threads (like shards, just different validators execute transactions in different smart contracts in parallel, they are added dynamically with increasing load and then deleted)."),(0,r.kt)("p",null,"But what you really need to know is that you don't have to think about where your smart contracts are. All communications between contracts are asynchronous via sending messages. It doesn\u2019t matter if two contracts are in the same processing thread or even in different workchains, any call to another contract is a message being sent, and if you are waiting for a response, it will come in another transaction."),(0,r.kt)("h2",{id:"everything-is-a-smart-contract"},"Everything is a smart contract!"),(0,r.kt)("p",null,"On Ethereum, there are two built-in types of accounts: contract accounts that are deployed to the network and externally owned (wallet) accounts that are controlled by anyone with private keys and can initiate transactions."),(0,r.kt)("p",null,"On ES, there are only contracts, there are no built-in contracts in the form of wallets on the blockchain. A wallet is just a smart contract, and there are many different kinds. Transaction chains on ES can be started by any contract with the help of an external message (if the contract supports receiving external messages)."),(0,r.kt)("p",null,"Transactions are started when a smart contract receives a message. During a transaction, a contract can send as many messages as it wants to another contract. (Once received, these messages will begin another transaction)."),(0,r.kt)("h2",{id:"there-are-two-types-of-messages"},"There are two types of messages"),(0,r.kt)("h3",{id:"external-message"},"External message"),(0,r.kt)("p",null,"A message from nowhere or to nowhere :-) This kind of message has only a destination address or a sender\u2019s address. Primarily, this kind of message is used to call contracts from the outside world (from programs or wallets). This is a fairly unique concept that allows any contract to start a chain of messages."),(0,r.kt)("p",null,"External messages work like this: you send a message with data from nowhere to a contract."),(0,r.kt)("p",null,"A validator allocates 10k of gas credit to this message, and attempts to complete the transaction by calling the contract and passing your message to it. The smart contract must agree to pay for the transaction from the contract account by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.accept()")," method before it runs out of gas."),(0,r.kt)("p",null,"If this method is called then the transaction continues and the contract can create other outgoing messages.\nIf an exception occurs or the contract does not call tvm.accept() or the gas credit runs out, then the message does not go to the blockchain and is discarded by the validator (in simple terms, a message cannot get into the mempool if it cannot be successfully added to the blockchain).\nInterestingly, an external message can contain any data and does not have to contain a signature (for example, you can make a contract receive an arbitrary message every minute from anyone you\u2019d like and as a result perform some kind of action, like a timer).\nHere is an example of a simple wallet smart contract, which can only transfer money after receiving an external message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.35.0;\n\n// This header informs sdk which will create the external message has to be signed by a key.\n// Also directing the compiler that it should only accepted signed external messages.\npragma AbiHeader pubkey;\n\ncontract Wallet {\n    constructor() public {\n        // We check that the conract has a pubkey set.\n        // tvm.pubkey() \u2014 is essentially a static variable,\n        // which is set at the moment of the creation of the contract,\n        // We can set any pubkey here or just leave it empty.\n        require(tvm.pubkey() != 0, 101);\n        // msg.pubkey() \u2014 public key with which the message was signed, \n        // it can be  0 if the pragma AbiHeader pubkey has not been defined;\n        // We check that the constructor was called by a message signed by a private key\n        // from that pubkey that was set when the contract was deployed.\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // we agree to pay for the transaction calling the constructor\n        // from the balance of the smart contract\n        tvm.accept();\n    }\n\n    function send(address dest, uint128 value, bool bounce) public pure {\n        // we check that the signature of the external message is right \n        require(msg.pubkey() == tvm.pubkey(), 100);\n        // we aggree to pay for the external message from the contract balance\n        tvm.accept();\n        // everything is simple here, we create an outgoing message \n        // internal message which carries the value nano evers\n        // bounce \u2014 a flag, which tells TVM what to do if dest contract \n        // does not exist or throws an exception on our internal message.\n        // bounce \u2014 true \u2014 this will try to create a return message to us with an error \n        // and the remaining money (if there are enough funds to create a message),\n        // bounce \u2014 false, this will leave the funds there.\n        // 0 \u2014 the flag of message creation, we will get to that later.\n        // 0 means that with the message we have to send value EVER \n        // and pay the fee for the creation of a message from that value.\n        // (by sending a little less than the value)\n        dest.transfer(value, bounce, 0);\n    }\n}\n")),(0,r.kt)("h3",{id:"internal-message"},"Internal message"),(0,r.kt)("p",null,"Internal message. This is basically just a message from one contract to another. This kind of message always has to carry with it a certain amount of EVER, because when another contract is called there is no gas credit like there is with an external message, and before calling  ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.accept()")," (if this occurs) gas will be paid for from the ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUE")," attached to the message. If the sum of EVER cannot cover the gas fees, the transaction will fail.  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dest.transfer(value, bounce, 0)")," \u2014 This is essentially the creation of an internal message with the value sent which will call to the receive() function of the receiving contract without any kind of data.    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract Receiver {\n    uint public counter = 0;\n    receive() external {\n        ++counter;\n    }\n}\n")),(0,r.kt)("h2",{id:"important-concept"},"Important Concept"),(0,r.kt)("p",null,"On ES there are guarantees for the delivery and order of internal messages on the blockchain protocol level. "),(0,r.kt)("p",null,"If you send a message, it will be delivered."),(0,r.kt)("p",null,"If contract A sends two messages to contract B, they will be delivered to contract B in the order in which they were sent from contract A. It does not matter whether the messages were sent via one transaction or via different transactions."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbKdBEpoifIYnHS5HII2nMY7QCHGWvGOISOhcum8eLTEqK7AqKN2jAKelo4dCKSbEBYnFJKxaSGH9ELWg62fvvEAICCAG0",alt:null}),(0,r.kt)("h2",{id:"gas-usage"},"Gas usage"),(0,r.kt)("p",null,"We are not going to cover the exact formulas you can find more information in the ",(0,r.kt)("a",{parentName:"p",href:"/arch/fee-calculation"},"Fee calculation")," section. We will just cover what you need to know and what you are paying for."),(0,r.kt)("p",null,"Firstly, the gas price is a network parameter, and the price does not change on its own as a reflection of demand at a given moment."),(0,r.kt)("p",null,"In the future, it is planned to introduce a mechanism for controlling gas prices. Most likely, this will be realized with the establishment of a hard capped maximum gas price (the current price) and a possible lower price which would be applied if the demand decreases. Because on this blockchain it is critical for users to be able to calculate the exact maximum amount of tokens that they will have to spend on any action. (Due to the asynchronous model employed, you have to be able to know how much money to attach to a message so that you can send enough to cover all transaction fees in the sequence of messages)."),(0,r.kt)("p",null,"We pay for:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Computing, the same as other blockchains."),(0,r.kt)("li",{parentName:"ol"},"Loading memory cells, which is quite different from how things work on Ethereum. We will cover this in detail in the chapters on tvm and boc."),(0,r.kt)("li",{parentName:"ol"},"The creation of outgoing messages, and we pay for incoming messages if these are external and we agree to pay for them."),(0,r.kt)("li",{parentName:"ol"},"Storage. Every contract pays a rental fee for the storage of its own code and data in the network state. This fee is withdrawn each time a message is sent to you (for all the time that has elapsed since the last transaction). If the balance of your contract falls below 0, calls to the contract will cease to work until you replenish the balance. If the balance falls below -0.1 EVER (for workchain 0, a network parameter, can be changed) the contract will be frozen, with only the hash of data and code remaining while everything else is deleted. The unfreezing process is complicated, you need to replenish your contract and provide its data and code  the moment it is frozen. In theory it is even possible that the hash gets deleted, if the contract is left frozen for a while. So you don\u2019t want to store inessential information on the blockchain, even though writing on the chain is cheap, as we pay for storage on the chain separately. In the chapter called ",(0,r.kt)("a",{parentName:"li",href:"/develop/smart-contract/learn/distributed-programming"},"distributed programming"),' we will look at how we should organize our smart contracts in accordance with the "paid storage" paradigm.')),(0,r.kt)("p",null,"The next part of this guide will cover what we need to know about TVM and the format of storing data on the blockchain."))}m.isMDXComponent=!0}}]);