"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4195],{2198:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(7294);function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function l(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var i=a(31),c=a(9960),s=a(2263),o="heroBanner_qdFl",d="buttons_AeoN",u=a(3117),m="features_xdhU",v="feature_eSJM",E=[{title:"\ud83e\uddf0 Start Building",description:"Get started building scalable and decentralized App",link:"develop"},{title:"\ud83d\uddf3\ufe0f Run a Validator Node",description:"Validate transactions, secure the network, and earn rewards",link:"validate"},{title:"Create a Token \ud83e\ude99 TIP-3 or \ud83c\udfa8 TIP-4",description:"Launch your own Fungible and Non-Fungible Token Everscale equivalent of ERC-20/ERC-721",link:"develop/smart-digital-assets"},{title:"\ud83c\udfe7 Integrate an Exchange",description:"Follow our extensive integration guide to ensure a seamless user experience",link:"develop/integrate"},{title:"\ud83d\udd11 Manage a Wallet",description:"Create a wallet, check your balance, and learn about wallet options",link:"learn/everscale-overview/exchangewallets"},{title:"\ud83c\udf93 Learn How Everscale Works",description:"Get a high-level understanding of Everscale architecture",link:"learn"}];function f(e){var t=e.title,a=e.description,r=e.link;return n.createElement("div",{className:l("col col--4",v)},n.createElement(c.Z,{className:"navbar__link",to:r},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__body"},n.createElement("p",null,a)))))}function p(){return n.createElement("section",{className:m},n.createElement("div",{className:"container"},n.createElement("div",{className:"row cards__container"},E.map((function(e,t){return n.createElement(f,(0,u.Z)({key:t},e))})))))}function g(){var e=(0,s.Z)().siteConfig;return n.createElement("header",{className:l("hero hero--primary",o)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:d},n.createElement(c.Z,{className:"button button--secondary button--lg",to:"/learn/welcome"},"Welcome to Everscale!\ufe0f")),n.createElement("div",{className:d},n.createElement(c.Z,{className:"button button--secondary button--lg",to:"/develop/smart-contract/getting-started/"},"\ud83e\udea4 Everscale Tutorial - 5min \u23f1\ufe0f"))))}function h(){var e=(0,s.Z)().siteConfig;return n.createElement(i.Z,{title:""+e.title,description:"Required development information for Everscale system"},n.createElement(g,null),n.createElement("main",null,n.createElement(p,null)))}}}]);