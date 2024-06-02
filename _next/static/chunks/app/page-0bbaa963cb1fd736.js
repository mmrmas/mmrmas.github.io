(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{377:function(e,t,n){Promise.resolve().then(n.bind(n,4036))},4036:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7437),s=n(3574),i=n.n(s),r=n(2265),l=n(9460);let o=new l.ZPm("wss://mainnet.infura.io/ws/v3/9f9a10c3208d4df5a13b0261a8724ed4"),d=new o.eth.Contract([{inputs:[{internalType:"uint256",name:"cap",type:"uint256"},{internalType:"uint256",name:"mintAtLaunch",type:"uint256"},{internalType:"uint256",name:"reward",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"increasedSupply",type:"uint256"},{internalType:"uint256",name:"cap",type:"uint256"}],name:"ERC20ExceededCap",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"allowance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientAllowance",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC20InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"cap",type:"uint256"}],name:"ERC20InvalidCap",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC20InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC20InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"}],name:"ERC20InvalidSpender",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"blockReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"value",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"contractAddress",type:"address"}],name:"readApprovalFor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"approvedAddress",type:"address"}],name:"revokeApproval",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalMined",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],"0x33Df9e002Ae0cc01a89ab4F08d130d0549F09ffB"),p=new o.eth.Contract([{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],stateMutability:"payable",type:"constructor"},{inputs:[],name:"ReentrancyGuardReentrantCall",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"string",name:"sha512",type:"string"}],name:"IPRegistered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"string",name:"sha512",type:"string"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"IPTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"ipowner",type:"address"},{indexed:!1,internalType:"string",name:"sha512",type:"string"}],name:"IpDeleted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OwnerIPTWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"string",name:"sha512",type:"string"}],name:"SalesIntentCancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"string",name:"sha512",type:"string"}],name:"SalesIntentCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"requester",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensRequested",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[{internalType:"string",name:"str",type:"string"},{internalType:"uint192",name:"salesPrice",type:"uint192"}],name:"buyerBuysIP",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"deleteIP",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"freeIpTokenwithdrawal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"getIP",outputs:[{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint96",name:"creationTimeStamp",type:"uint96"},{internalType:"bool",name:"exists",type:"bool"}],internalType:"struct IPtrade.IPowner",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"getSalesIntent",outputs:[{components:[{internalType:"address",name:"buyer_address",type:"address"},{internalType:"uint192",name:"salesPrice",type:"uint192"},{internalType:"uint64",name:"creationTimeStamp",type:"uint64"},{internalType:"bool",name:"exists",type:"bool"}],internalType:"struct IPtrade.Onsale",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"registerIPCostIpt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"requestTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"sellerCancelsSalesIntent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"str",type:"string"},{internalType:"uint192",name:"salesPrice",type:"uint192"},{internalType:"address",name:"buyerAddress",type:"address"}],name:"sellerCreatesSalesIntent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"setFreeIpTokenwithdrawal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"setIP",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_register",type:"uint256"},{internalType:"uint256",name:"_transfer",type:"uint256"}],name:"setIPCostIpt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"setLockTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_new_owner",type:"address"}],name:"setNewOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"transferIPCostIpt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"unregisteredIPT",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],"0x9de04769ddC87b9196Ed5c9595A9b113F1193b5c");var c={IPTContract:d,IPtrade:p};n(8646);var u=n(1455),y=n.n(u),m=n(7948);n(3343);var h=n(6691),v=n.n(h);let b=c.IPTContract,x=c.IPtrade,g=x.options.address;var f=()=>{let[e,t]=(0,r.useState)("approve"),[n,s]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),[p,c]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[f,w]=(0,r.useState)(""),[T,j]=(0,r.useState)(""),[I,N]=(0,r.useState)(""),[P,_]=(0,r.useState)(!0),[C,k]=(0,r.useState)(null),[A,S]=(0,r.useState)([]),[M,E]=(0,r.useState)(""),[B,q]=(0,r.useState)(""),[F,R]=(0,r.useState)(""),[L,O]=(0,r.useState)(""),[V,Y]=(0,r.useState)(""),[D,H]=(0,r.useState)(""),[z,G]=(0,r.useState)(""),[W,Z]=(0,r.useState)(""),[K,Q]=(0,r.useState)(""),[U,X]=(0,r.useState)(""),[J,$]=(0,r.useState)(""),[ee,et]=(0,r.useState)(!1),[en,ea]=(0,r.useState)(""),[es,ei]=(0,r.useState)(""),er=async()=>{if(console.log("connect wallet"),void 0!==window.ethereum){var e;let t=window.ethereum;(null===(e=window.ethereum.providers)||void 0===e?void 0:e.length)&&window.ethereum.providers.forEach(async e=>{e.isMetaMask&&(t=e)}),S(await t.request({method:"eth_requestAccounts",params:[]})),k(new l.ZPm(window.ethereum)),_(!1),console.log("MetaMask is installed!")}else console.log("Please install Metamask")},el=(e,t,n)=>{let a=e.toString(),s=a.match(/value "([^"]+)" at "\/0" must pass "address" validation/),i=a.match(/value "([^"]+)" at "\/1" must pass "uint256" validation/);s&&s[0]?(console.error("Caught specific error:",s[0]),eg(t)):i&&i[0]?(console.error("Caught specific error:",i[0]),eg(n)):(console.error("Caught an error:",a),eg(a))},eo=async()=>{try{await window.ethereum.request({method:"eth_sendTransaction",params:[{from:A[0],to:b.options.address,data:b.methods.approve(f,T).encodeABI()}]}),console.log("Approval successful")}catch(e){el(e,"Please type a valid address","Please type a whole number as amount")}},ed=async()=>{console.log("Pressed to read approval");try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:b.options.address,data:b.methods.readApprovalFor(f).encodeABI()},"latest"]}),t=C.utils.hexToNumber(e);console.log("Approval:",t),N(t)}catch(e){el(e,"Please type a valid address","")}},ep=async()=>{console.log("Pressed to revoke approval");try{await window.ethereum.request({method:"eth_sendTransaction",params:[{from:A[0],to:b.options.address,data:b.methods.revokeApproval(f).encodeABI()},"latest"]}),console.log("revoked approval for:",f)}catch(e){el(e,"Please type a valid address","")}},ec=(0,r.useCallback)(async()=>{try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:x.options.address,data:x.methods.freeIpTokenwithdrawal().encodeABI()},"latest"]});d(e);let t=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:x.options.address,data:x.methods.registerIPCostIpt().encodeABI()},"latest"]});c(t);let n=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:x.options.address,data:x.methods.transferIPCostIpt().encodeABI()},"latest"]});h(n)}catch(e){eg(e.toString())}},[A]),eu=async()=>{console.log("get free IPT");try{let e=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:A[0],to:x.options.address,data:x.methods.requestTokens().encodeABI()},"latest"]});console.log("receipt:",e)}catch(e){console.error("getting IPT failed:",e),eg(e.data.message)}},ey=async()=>{try{let e=await x.getPastEvents("IPRegistered",{fromBlock:0,toBlock:"latest"}),t="";e.forEach(e=>{e.returnValues[1].toLowerCase()===B.toLowerCase()&&(console.log("registered by",e.returnValues[0]),t="".concat(t,"\n").concat(e.returnValues[0]))}),ea(t);let n=await x.getPastEvents("IPTransferred",{fromBlock:0,toBlock:"latest"}),a="";n.forEach(e=>{e.returnValues[2].toLowerCase()===B.toLowerCase()&&(console.log("transferred to",e.returnValues[1]),a="".concat(a,"\n").concat(e.returnValues[1]))}),ei(a)}catch(e){console.error("Error:",e)}},em=async()=>{if(128!==M.length){eg("This is not a valid sha512. The length should be 128 characters.");return}if(I<U){eg("Approval not sufficient");return}try{let e=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:A[0],to:x.options.address,data:x.methods.setIP(M).encodeABI()},"latest"]});console.log("receipt:",e)}catch(e){console.error("setting IPT failed:",e),eg(e.data.message)}},eh=async()=>{if(128!==B.length){eg("This is not a valid sha512. The length should be 128 characters."),R(""),O(""),ea(""),ei("");return}try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:x.options.address,data:x.methods.getIP(B).encodeABI()},"latest"]}),t=await C.eth.abi.decodeParameters(["address","uint96","bool"],e),n=new Date(1e3*parseInt(t[1])).toString();R(t[0]),O(n),ey()}catch(e){console.error("Error in getRegisteredIpHandler:",e),eg(e.message),R(""),O(""),ea(""),ei("");return}},ev=async()=>{if(128!==V.length){eg("This is not a valid sha512. The length should be 128 characters.");return}if(isNaN(z)||z.length<1){eg("Please type a whole number as amount");return}try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:b.options.address,data:b.methods.balanceOf(D).encodeABI()},"latest"]}),t=C.utils.hexToNumber(e);if(t<z){eg("The balance of buyer (".concat(t," IPT) is lower than the requested price: ").concat(z," IPT"));return}}catch(e){el(e,"Please type a valid address","");return}try{let e=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:A[0],to:x.options.address,data:x.methods.sellerCreatesSalesIntent(V,z,D).encodeABI()},"latest"]});console.log("receipt:",e)}catch(e){console.error("offering IPT failed:",e),eg(e.data.message)}},eb=async()=>{if(128!==W.length){eg("This is not a valid sha512. The length should be 128 characters.");return}if(isNaN(K)||K.length<1){eg("Please type a whole number as amount");return}try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:x.options.address,data:x.methods.getSalesIntent(W).encodeABI()},"latest"]}),t=await C.eth.abi.decodeParameters(["address","uint192","uint64","bool"],e);if(t[0].toLowerCase()!==A[0].toLowerCase()){eg("You are not the buyer");return}if(Number(t[1])!==Number(K)){eg("Not the right buying price");return}if(!t[3]){eg("This is not for sale");return}}catch(e){console.error("Error in getting sales intent:",e.data.message),eg(e.data.message);return}try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:b.options.address,data:b.methods.readApprovalFor(f).encodeABI()},"latest"]}),t=C.utils.hexToNumber(e);if(t<K){eg("Approval ".concat(t," is smaller than the agreed price ").concat(K));return}}catch(e){console.error("Allowance error:",e.data.message),eg(e.data.message);return}try{let e=await window.ethereum.request({method:"eth_call",params:[{from:A[0],to:b.options.address,data:b.methods.balanceOf(A[0]).encodeABI()},"latest"]}),t=C.utils.hexToNumber(e);if(t<K){eg("The balance of buyer (".concat(t," IPT) is lower than the requested price: ").concat(K," IPT"));return}}catch(e){el(e,"Please type a valid address","");return}try{let e=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:A[0],to:x.options.address,data:x.methods.buyerBuysIP(W,K,!0).encodeABI()},"latest"]});console.log("receipt:",e)}catch(e){console.error("buying IPT failed:",e),eg(e.data.message)}},ex=e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Text copied to clipboard:",e)}).catch(e=>{console.error("Error copying text to clipboard:",e)})};(0,r.useEffect)(()=>{console.log("Loading:",P)},[P]),(0,r.useEffect)(()=>{console.log(C)},[C]),(0,r.useEffect)(()=>{ec()},[ec,A]);let eg=e=>{m.Am.error(e,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},ef=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,a.jsxs)("div",{className:y().main,children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"IP trade"}),(0,a.jsx)("meta",{name:"description",content:"An IP marketplace app"})]}),(0,a.jsx)(m.Ix,{}),(0,a.jsx)("nav",{className:y().whiteBackground,style:{position:"absolute",zIndex:1,width:"100%",backgroundColor:"rgba(255, 255, 255, 0)"},children:(0,a.jsxs)("div",{className:y().container,style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("div",{className:"navbar-brand",style:{color:"white"},children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("h2",{children:"IP trade"}),(0,a.jsx)("h4",{children:"Register your creative content on chain"})]})}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:er,className:"button is-fullwidth",children:"Connect Wallet"})})]})}),(0,a.jsx)("nav",{className:y().whiteBackground,children:(0,a.jsx)("div",{style:{position:"relative",width:"100vw",height:"100vh"},children:(0,a.jsx)(v(),{src:"/img/ipt_coin.jpg",alt:"top_image",fill:!0,style:{objectFit:"cover"}})})}),(0,a.jsx)(e=>{let{onSelect:t}=e,n=e=>{e.preventDefault();let n=e.target.getAttribute("data-id");t(n)};return(0,a.jsxs)("div",{className:y().topbar,children:[(0,a.jsx)("a",{href:"#","data-id":"approve",onClick:n,children:"Approve spending"}),(0,a.jsx)("a",{href:"#","data-id":"register",onClick:n,children:"Register IP"}),(0,a.jsx)("a",{href:"#","data-id":"check",onClick:n,children:"Check IP"}),(0,a.jsx)("a",{href:"#","data-id":"transfer",onClick:n,children:"Transfer IP"})]})},{onSelect:e=>{t(e),ef(e)}}),(0,a.jsx)(e=>{let{faucet:t}=e;return t?(0,a.jsx)("nav",{className:y().whiteBackground,children:(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("h1",{children:"Your connection to IP trade"})}),(0,a.jsxs)("div",{className:y().navbarEnd,children:[(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("p",{style:{marginRight:"10px"},children:["Your address: ",(0,a.jsx)("strong",{children:"".concat(P?" please connect wallet":A[0])})]}),(0,a.jsx)("button",{onClick:()=>ex(P?"Address not loaded":A[0]),className:"button is-outlined is-small",children:ee?"Copied!":"Copy Address"})]}),(0,a.jsxs)("p",{children:["Faucet height: ",String(t)/1e18," IPT"]}),(0,a.jsxs)("p",{children:["Registration price: ",String(p)/1e18," IPT"]}),(0,a.jsxs)("p",{children:["Transfer price: ",String(u)/1e18," IPT"]})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:eu,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":" "),children:"get IPT"})})]})]})}):(0,a.jsx)("nav",{className:y().whiteBackground,children:(0,a.jsx)("div",{children:"Please wait for faucet to connect..."})})},{faucet:o}),(0,a.jsxs)("div",{id:"approve",children:["approve"===e&&(0,a.jsxs)("nav",{className:y().whiteBackground,children:[(0,a.jsx)("div",{className:y().container,children:(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("h1",{children:"Set allowance"})})})}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsx)("div",{className:"has-text-left",style:{margin:"15px",width:"40%"},children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("p",{children:"The contract needs your approval to spend IPT on your behalf."}),(0,a.jsx)("p",{children:"Please make sure to approve at least the amount that you need for the desired transaction. Every transaction reduces the allowance until it reaches 0."})]})}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("p",{className:"has-text-left",style:{margin:"10px",width:"50%"},children:["The address of this contract is ",g]}),(0,a.jsx)("button",{onClick:()=>ex(g),className:"button is-outlined is-small",children:ee?"Copied!":"Copy Address"})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"approveAddress",children:"Address to approve:"}),(0,a.jsx)("input",{className:"input",type:"text",id:"approveAddress",value:f,onChange:e=>w(e.target.value)})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:ed,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"check allowance"})})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"approveAmount",children:"Amount to approve:"}),(0,a.jsx)("input",{className:"input",type:"text",id:"approveAmount",value:T,onChange:e=>j(e.target.value)})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:eo,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"set allowance"})})]})]})})})]}),"approve"===e&&(0,a.jsx)("nav",{className:y().whiteBackground,children:(0,a.jsx)("div",{className:y().container,children:(0,a.jsxs)("div",{children:["Allowance for address ",f,": ",String(I)/1e18," IPT"]})})}),"approve"===e&&(0,a.jsx)("nav",{className:y().whiteBackground,children:(0,a.jsx)("div",{className:y().container,children:(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:ep,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"revoke allowance"})})})})]}),(0,a.jsx)("div",{id:"register",children:"register"===e&&(0,a.jsxs)("nav",{className:y().whiteBackground,children:[(0,a.jsx)("div",{className:y().container,children:(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("h1",{children:"Register content"})})}),(0,a.jsxs)("div",{className:y().container,style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"registersha512",children:"sha512 string"}),(0,a.jsx)("input",{className:"input",type:"text",id:"registersha512",value:M,onChange:e=>E(e.target.value)})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:em,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"register IP"})})]})]})}),(0,a.jsx)("div",{id:"check",children:"check"===e&&(0,a.jsxs)("nav",{className:y().whiteBackground,children:[(0,a.jsx)("div",{className:y().container,children:(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("h1",{children:"Check registered content"})})}),(0,a.jsxs)("div",{className:y().container,style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"checksha512",children:"sha512"}),(0,a.jsx)("input",{className:"input",type:"text",id:"checksha512",value:B,onChange:e=>q(e.target.value)})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:eh,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"check registration"})})]}),(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsxs)("p",{children:["Current owner: ",F]}),(0,a.jsxs)("p",{children:["First registered at: ",L]}),(0,a.jsxs)("p",{children:["First registered by:  ",en]}),(0,a.jsxs)("p",{children:["Transferred to: ",es]})]})]})}),(0,a.jsxs)("div",{id:"transfer",children:["transfer"===e&&(0,a.jsxs)("nav",{className:y().whiteBackground,children:[(0,a.jsx)("div",{className:y().container,children:(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("h1",{children:"Offer content to another address"})})}),(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"offerIpsha512",children:"sha512"}),(0,a.jsx)("input",{className:"input",type:"text",id:"offerIpsha512",value:V,onChange:e=>Y(e.target.value)})]}),(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"offerIpAddress",children:"Address"}),(0,a.jsx)("input",{className:"input",type:"text",id:"offerIpAddress",value:D,onChange:e=>H(e.target.value)})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"offerIpPrice",children:"Price"}),(0,a.jsx)("input",{className:"input",type:"text",id:"offerIpPrice",value:z,onChange:e=>G(e.target.value)})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:ev,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"offer IP"})})]})]})]}),"transfer"===e&&(0,a.jsxs)("nav",{className:y().whiteBackground,children:[(0,a.jsx)("div",{className:y().container,children:(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("h1",{children:"Accept offer"})})}),(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"buyIpsha512",children:"sha512"}),(0,a.jsx)("input",{className:"input",type:"text",id:"buyIpsha512",value:W,onChange:e=>Z(e.target.value)})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)("div",{style:{width:"50%"},children:[(0,a.jsx)("label",{htmlFor:"buyIpPrice",children:"Price"}),(0,a.jsx)("input",{className:"input",type:"text",id:"buyIpPrice",value:K,onChange:e=>Q(e.target.value)})]}),(0,a.jsx)("div",{className:y().navbarEnd,style:{width:"15%"},children:(0,a.jsx)("button",{onClick:eb,className:"button is-outlined is-fullwidth ".concat(P?"is-loading":""),children:"buy IP"})})]})]})]})]}),(0,a.jsx)(()=>(0,a.jsx)("nav",{className:y().whiteBackground,children:(0,a.jsxs)("div",{className:y().footer,children:[(0,a.jsx)("p",{children:"\xa9 2024 SquaredAnt GmbH. All rights reserved."}),(0,a.jsx)("p",{children:"Contact us on ..."}),(0,a.jsxs)("p",{children:["Follow this project on ",(0,a.jsx)("a",{href:"https://github.com",children:"Github"})]})]})}),{})]})}},1455:function(e){e.exports={main:"ipt_main__L_YTG",whiteBackground:"ipt_whiteBackground__6aOUa",input:"ipt_input__4g_fY",help:"ipt_help__X1lop","navbar-brand":"ipt_navbar-brand__Su_u5",navbarEnd:"ipt_navbarEnd__p68ET",container:"ipt_container__I6D_A",dropdowncontainer:"ipt_dropdowncontainer__HOY3z",dropdowncontent:"ipt_dropdowncontent__tmwLd",visible:"ipt_visible__zKzyx",topbar:"ipt_topbar__7PuA0",content:"ipt_content__W7QdB",footer:"ipt_footer__nHNLp",app:"ipt_app___LATL"}}},function(e){e.O(0,[638,827,971,472,744],function(){return e(e.s=377)}),_N_E=e.O()}]);