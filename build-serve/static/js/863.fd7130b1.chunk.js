"use strict";(self.webpackChunkapp_tymio=self.webpackChunkapp_tymio||[]).push([[863],{4863:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var s=r(7313),i=r(8467),n=r(2135),o=r(5073),a=r(9429),l=r(3230),c=r(8646),d=r(2656),u=r(6417);const x=e=>{let{formik:t,error:r,loading:i,amountFocused:n,setWaitSubmit:x}=e;const{error:m,connected:h}=(0,a.Os)(),[p,g]=(0,s.useState)(i),[f,b]=(0,s.useState)("");(0,s.useEffect)((()=>{b(h?"Confirm":"Connect Wallet")}),[h]),(0,s.useEffect)((()=>{g(i)}),[i]),(0,s.useEffect)((()=>{r&&x&&x(!1)}),[r,x]),(0,s.useEffect)((()=>{x&&x(t.isSubmitting)}),[t.isSubmitting,x]);return(0,u.jsxs)(u.Fragment,{children:[m&&(0,u.jsx)(l.v0,{message:m}),!m&&(0,u.jsx)(c.zx,{width:"100%",type:"button",disabled:p||m||n||!t.values.agreement,onClick:async()=>{x(!0),h&&t.isValid&&await t.handleSubmit(x),h&&!t.isValid&&x(!1),h||(await o.WalletService.connect(),x(!1))},children:(0,u.jsx)(c.ZT,{color:d.D.BLACK,children:f})})]})};var m=r(7e3),h=r(7085);var p=r(1316);const g=()=>{const[e,t]=(0,s.useState)(!1),[r,i]=(0,s.useState)(0),[n,o]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t(!0);const e=p.Z.currentPriceState$.subscribe((e=>{o(e.error),t(e.loading),i(e.currentPrice)}));return()=>{e.unsubscribe()}}),[]),{loading:e,error:n,currentPrice:r}},f=(e,t,r,i,n)=>{const[o,a]=(0,s.useState)(!1),[l,c]=(0,s.useState)(null),[d,u]=(0,s.useState)(null),[x,p]=(0,s.useState)(!1),[g,f]=(0,s.useState)(null);return(0,s.useEffect)((()=>{if(e&&t&&r&&i&&n){a(!0),m.Z.getData(e,t,r,n);const s=m.Z.state$.subscribe((e=>{if(u(e.error),p(e.orderAvailable),c(e.orderData),e.orderData){const{recieve:r,...s}=e.orderData,n=(0,h._k)(t),o=(0,h.p6)(t),a=(0,h.Vs)(r,i);f({...s,untilExpirationDays:n,expirationDate:o,recieve:r,recieveETH:a})}a(e.loading)}));return()=>{s.unsubscribe()}}}),[e,t,r,i,n]),{loading:o,error:d,order:l,orderAvailable:x,orderData:g}},b=()=>{const[e,t]=(0,s.useState)(!1),[r,i]=(0,s.useState)(null),[n,o]=(0,s.useState)(null),[a,l]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=m.Z.state$.subscribe((e=>{t(e.loading),i(e.error),l(e.orderAvailable),o(e.orderData)}));return()=>{e.unsubscribe()}}),[]),{loading:e,error:r,orderData:n,orderAvailable:a}};var j=r(7274);const S=()=>{const[e,t]=(0,s.useState)(!1),[r,i]=(0,s.useState)([]),[n,o]=(0,s.useState)(null);return(0,s.useEffect)((()=>{const e=j.Z.pricePeriodsState$.subscribe((e=>{o(e.error),t(e.loading),i(e.periods)}));return()=>{e.unsubscribe()}}),[]),{loading:e,error:n,periods:r}},y=()=>{const[e,t]=(0,s.useState)(!1),[r,i]=(0,s.useState)([]),[n,o]=(0,s.useState)(0),[l,c]=(0,s.useState)(null),{direction:d}=(0,a.gm)();return(0,s.useEffect)((()=>{const e=p.Z.state$.subscribe((e=>{c(e.error),o(e.currentPrice),t(e.loading),i("sell"===d?e.prices:e.prices.reverse())}));return()=>{e.unsubscribe()}}),[d]),{loading:e,error:l,prices:r,currentPrice:n}},v=e=>{let{setSubmitError:t,loading:r,setLoading:s,setWaitSubmit:i,config:n,setSuccess:o}=e;const l=a.Os(),c=b();k(t);const d=w({setSubmitError:t,loading:r,setLoading:s,setWaitSubmit:i,wallet:l,orderAvailable:c,config:n,setSuccess:o});return{formik:d,...d.values,walletError:l.error,userOrderLoading:c.loading,orderAvailableError:c.error}},k=()=>({});var T=r(3463),E=r(8173);const w=e=>{let{setSubmitError:t,loading:r,setLoading:s,setWaitSubmit:i,wallet:n,orderAvailable:a,setSuccess:l,config:c}=e;const d=T.Ry().shape({direction:T.Z_().required("Required").oneOf(["sell","buy"],'Direction must be either "sell" or "buy"'),tokenSymbol:T.Z_(),tokenAddress:T.Z_().required("Required"),amount:T.Z_().required("Required").test("is-valid-amount","Amount must be more than zero",(e=>!("0"===e||"0.0"===e||"0."===e||""===e))),price:T.Rx().moreThan(0,"Price is required").integer("Only integer numbers are allowed").required("Required"),period:T.Rx().moreThan(0,"Period is required").integer("Only integer numbers are allowed").required("Required"),agreement:T.O7().oneOf([!0],"Agreement must be checked")}),u=(0,E.TA)({initialValues:{direction:o.Lh.state.direction,tokenSymbol:"ETH",tokenAddress:"0x0000000000000000000000000000000000000000",price:0,period:0,amount:"10",agreement:!1},validationSchema:d,validateOnMount:!1,onSubmit:async e=>{if(t(null),!e.tokenAddress)return o.zD.showError("Please set the token");if(!e.amount)return o.zD.showError("Please set the amount");if(!e.price)return o.zD.showError("Please set the price");if(!e.period)return o.zD.showError("Please set the period");if(!e.agreement)return o.zD.showError("Please check the agreement");if(!r&&a.orderAvailable){if(s(!0),!(0,h.cd)(u.values.amount))return;let e;try{if(!n.connected||!n.userAddress)return await o.WalletService.connect();const{amount:t,price:r,period:s,tokenSymbol:d,tokenAddress:x,direction:m}=u.values,h=n.userAddress;if(e=await o.px.saveState({...a.orderData,amount:t,chain_id:n.chainId,token_symbol:d,price:r,period:s,tokenSymbol:d,tokenAddress:x,address:h}),!n.balanceETH||"sell"===m&&"ETH"===d&&n.balanceETH-parseFloat(t)<=0)throw new Error("You don't have enough ETH to pay the transaction fee");const p=await o.Uc.deposit({amount:t,price:r,tokenSymbol:d,tokenAddress:x},n.chainId,m,c);await o.WalletService.setBalance(c,n,d),e=await o.px.updateState({...e,hash:p}),i(!0),e.error?o.zD.showError(e.error):(l(!0),o.px.getUserOrders(n.userAddress))}catch(d){e&&await o.px.updateState({...e,error:d}),100!==d.code&&o.zD.showError(d.message),t(d.message)}}else o.zD.showError("Order was not found");s(!1),i(!1)}});return u};var A=r(9207),Z=r(6257);const D=Z.ZP.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	margin: 0 auto;
	align-items: flex-start;

	p {
		display: inline-block;
	}
`,L=e=>{let{formik:t,isNotEnoughBalance:r,waitSubmit:i,submitError:n,amountFocused:m,setWaitSubmit:h}=e;const{price:p,period:b,amount:j,tokenSymbol:S}=t.values,{connected:y,userAddress:v}=(0,a.Os)(),{error:k,loading:T,currentPrice:E}=g(),{error:w,loading:Z,orderAvailable:L,orderData:P}=f(p,b,j,E,S);(0,s.useEffect)((()=>{o.px.getData(p,b,j,S)}),[v]);const[I,F]=(0,s.useState)(null),[R,z]=(0,s.useState)(!1);(0,s.useEffect)((()=>{F(k||w)}),[k,w]),(0,s.useEffect)((()=>{z(T||Z)}),[T,Z]);return(0,u.jsxs)(l.Zb,{gap:"30px",height:i?"235px":"auto",errored:y&&r&&!R,children:[R&&(0,u.jsx)(l.TK,{margin:"auto"}),I&&(0,u.jsxs)(u.Fragment,{children:[k&&(0,u.jsx)(l.v0,{message:k}),w&&(0,u.jsx)(l.v0,{message:w})]}),R||I||!L||!P||i?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb.Header,{children:(0,u.jsx)(c.ZT,{size:A.y.BIG,align:"left",dangerouslySetInnerHTML:{__html:P.contract_html}})}),(0,u.jsxs)(l.Zb.Body,{children:[!y&&(0,u.jsx)(c.ZT,{align:"left",size:A.y.SMALL,children:"Connect your wallet to make a final transaction"}),y&&r&&(0,u.jsxs)(c.ZT,{align:"left",size:A.y.SMALL,color:d.D.WARNINGS,children:["You need at least"," ","sell"===t.values.direction?`${t.values.amount} ${t.values.tokenSymbol}`:t.values.amount*t.values.price+" USDC"," ","in your wallet to make a transaction"]}),y&&!r&&(0,u.jsx)(l.II,{type:"checkbox",label:"I have read the agreement above and",terms:{content:"Terms and Conditions",link:"https://tymio.com/"},checked:t.values.agreement,onChange:async e=>{await t.setFieldValue("agreement",e.target.checked)}})]}),!y&&(0,u.jsx)(l.Zb.Footer,{children:(0,u.jsx)(c.wK,{width:"100%"})}),y&&!r&&(0,u.jsx)(l.Zb.Footer,{children:(0,u.jsx)(x,{formik:t,loading:R,setWaitSubmit:h,error:n,amountFocused:m})})]}),!R&&!I&&L&&P&&i?(0,u.jsxs)(D,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(c.ZT,{size:A.y.BIG,color:d.D.LEMON,style:{marginRight:"10px",textTransform:"capitalize"},children:t.values.direction}),(0,u.jsx)(c.ZT,{size:A.y.BIG,color:d.D.LEMON,style:{marginRight:"10px"},children:`${t.values.amount} ${t.values.tokenSymbol}`}),(0,u.jsx)(c.ZT,{size:A.y.BIG,color:d.D.LEMON,style:{marginRight:"10px"},children:"\u2192"}),(0,u.jsx)(c.ZT,{size:A.y.BIG,color:d.D.LEMON,children:t.values.price*t.values.amount+" USDC"})]}),(0,u.jsx)(c.ZT,{size:A.y.BIG,color:d.D.LEMON,children:"Please confirm transaction with your wallet"})]}):(0,u.jsx)(u.Fragment,{})]})},P=Z.ZP.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	flex-shrink: 1;
	gap: 80px;

	@media (max-width: 576px) {
		flex-direction: column;
		gap: 30px;
	}
`,I=Z.ZP.div`
	position: relative;
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	flex-shrink: 1;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
`,F=Z.ZP.div`
	display: flex;
	justify-content: space-between;
	height: 20px;
`,R=Z.ZP.button`
	background: inherit;
	border: none;

	margin: -5px -10px 0 0;
	padding: 5px 10px;
	cursor: pointer;

	p {
		color: ${d.D.PURPLE_BRIGHT};
	}

	&:hover {
		p {
			color: ${d.D.PURPLE_GRAY2};
		}
	}

	&:disabled {
		p {
			color: ${d.D.GRAY};
		}
	}

	&:focus {
		p {
			color: ${d.D.PURPLE_BRIGHT};
		}
		border-radius: 5px;
		border: 1.5px solid ${d.D.LIGHT};
		box-shadow: 0px 0px 3px 0px ${d.D.LIGHT};
		padding: 4px 9px;
	}
`,z=e=>{let{formik:t,disabled:r}=e;const i=(0,s.useRef)(null),n=(0,a.Os)(),{config:d,loading:x}=(0,a.ZR)(),[m,h]=(0,s.useState)(!1),[p,g]=(0,s.useState)([]),f=e=>{i.current&&!i.current.contains(e.target)&&h(!1)};return(0,s.useEffect)((()=>(document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)})),[]),(0,s.useEffect)((()=>{if(d&&n.chainId&&n.balanceToken){if(!!(d&&d.CHAIN_LIST&&n.chainId&&d.CHAIN_LIST.includes(Number(n.chainId)))){g(d.PAYIN_TOKEN_ADDRESS_LIST[n.chainId]);const e=d.PAYIN_TOKEN_ADDRESS_LIST[n.chainId].find((e=>e.tokenSymbol===n.balanceToken))||d.PAYIN_TOKEN_ADDRESS_LIST[n.chainId][0];t.setFieldValue("tokenSymbol",e.tokenSymbol),t.setFieldValue("tokenAddress",e.tokenAddress)}}if(d&&(!n.chainId||!n.balanceToken)){g(d.PAYIN_TOKEN_ADDRESS_LIST[1]);const e=d.PAYIN_TOKEN_ADDRESS_LIST[1][0];t.setFieldValue("tokenSymbol",e.tokenSymbol),t.setFieldValue("tokenAddress",e.tokenAddress)}}),[d,n.chainId,n.balanceToken]),(0,u.jsxs)(l.Ph,{custom:!0,noMargin:!0,ref:i,width:140,show:m,children:[(0,u.jsxs)(l.Ph.Value,{custom:!0,onClick:()=>{r||h((e=>!e))},children:[(0,u.jsx)(l.T1,{size:"xs",token:t.values.tokenSymbol}),(0,u.jsx)(c.ZT,{children:t.values.tokenSymbol}),(0,u.jsx)(c.fv,{expanded:m})]}),(0,u.jsxs)(l.Ph.Options,{custom:!0,show:m,side:"right",children:[x&&(0,u.jsx)(l.TK,{}),!x&&p.map(((e,r)=>e.tokenAddress!==t.values.tokenAddress?(0,u.jsxs)(l.Ph.Option,{custom:!0,active:!1,onClick:()=>(async e=>{let{tokenAddress:r,tokenSymbol:s}=e;await t.setValues({...t.initialValues,tokenSymbol:s,tokenAddress:r}),await o.WalletService.setBalance(d,n,s),h(!1)})(e),children:[(0,u.jsx)(l.T1,{size:"xs",token:e.tokenSymbol}),(0,u.jsx)(c.ZT,{children:e.tokenSymbol})]},r):null))]})]})},C=e=>{let{formik:t,loading:r,setAmountFocused:i}=e;const{direction:n}=(0,a.gm)(),x=(0,s.useRef)(),m=(0,a.Os)(),{loading:h}=S(),{loading:p}=y();(0,a.KK)(r||h,x);const[g,f]=(0,s.useState)("10"),b=(0,a.Nr)(g,1e3),{direction:j}=(0,a.gm)();(0,s.useEffect)((()=>{t.setFieldValue("amount",b),i(!1)}),[b]),(0,s.useEffect)((()=>{if(t.values.price&&t.values.period&&t.values.amount){const e=setTimeout((()=>{f(t.initialValues.amount)}),3e5);return()=>{clearTimeout(e)}}}),[t.values.price,t.values.period,t.values.amount]),(0,s.useEffect)((()=>{let e=t.values.amount||t.initialValues.amount;"WBTC"===t.values.tokenSymbol&&(e="1"),"ETH"===t.values.tokenSymbol&&(e="10"),v(e),i(!1)}),[t.values.tokenSymbol]);const v=e=>{i(!0),e||(e="0"),e=e.replace(",","."),/^0[0-9]+/.test(e)&&(e=e.substring(1)),String(e).match(/^(0|[1-9][0-9]*)(\.[0-9]{0,2})?$/)&&f(e)};return(0,u.jsx)(l.Zb,{children:(0,u.jsxs)(P,{children:[(0,u.jsxs)(I,{children:[(0,u.jsxs)(F,{children:[(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"Asset and amount"}),!m.connected&&(0,u.jsxs)(c.ZT,{size:A.y.SMALL,color:d.D.GRAY_DARK,children:["Start from 0.01 ",t.values.tokenSymbol]}),m.connected&&(0,u.jsx)(R,{onClick:async()=>{const{balance:e,balanceUSDC:r}=o.WalletService.state;if("sell"===j){let t=parseFloat(e);t=Math.floor(100*t)/100,v(String(t))}if("buy"!==j||t.values.price||o.zD.showError("Choose price first"),"buy"===j&&t.values.price){let e=parseFloat(r)/parseFloat(t.values.price);e=Math.floor(100*e)/100,v(String(e))}i(!1)},children:(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"MAX"})})]}),(0,u.jsx)(l.II,{innerRef:x,selector:(0,u.jsx)(z,{formik:t,disabled:r||h}),value:g,onChange:e=>v(e.currentTarget.value),type:"text",placeholder:"0",disabled:r||h,error:t.errors.amount,style:{flexGrow:1}})]}),(0,u.jsxs)(I,{children:[(0,u.jsx)(c.u,{icon:!0,text:"Set the direction of your time-limit order: either SELL above the current market price or BUY below the current market price. Execution of your order will depend on the exact market price on the date of contract expiration at 8:00 UTC.",children:(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"Direction"})}),(0,u.jsx)(c.T5,{children:["sell","buy"].map(((e,s)=>(0,u.jsx)(c.T5.Option,{active:e===n,onClick:()=>(async e=>{await t.setValues({...t.values,direction:e,price:t.initialValues.price}),await o.Lh.setDirection(e)})(e),disabled:r||h||p,children:(0,u.jsx)(c.ZT,{uppercase:!0,children:e})},s)))})]})]})})},_=(Z.ZP.span`
	width: auto;
	text-align: ${e=>{let{align:t}=e;return t||"inherit"}};
`,Z.ZP.span`
	font-size: 20px;
	color: ${d.D.PINK};
	text-align: ${e=>{let{align:t}=e;return t||"inherit"}};
`,Z.ZP.div`
	z-index: 999;
	position: absolute;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(4px);
	color: ${d.D.PINK};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	font-weight: bold;
	flex-direction: column;
	gap: 16px;

	svg {
		margin-right: 0 !important;
	}
`),N=Z.ZP.div`
	height: 36px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 15px;
	background: ${d.D.RICH_BLACK2};
	border-radius: 5px;
`,O=e=>{let{formik:t,loading:r,amountFocused:i,price:n,amount:o}=e;const x=(0,s.useRef)();(0,a.KK)(r,x);const{connected:m}=(0,a.Os)(),{error:h,loading:p,periods:g}=S(),[f,b]=(0,s.useState)(0);(0,s.useEffect)((()=>{b(0)}),[t.values.price]);const j=!!(n&&parseFloat(o)>0);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(l.Zb,{height:"100%",mh:365,gap:"0",pt:"27px",flex:!0,justify:p?"flex-start":"space-between",children:[p&&(0,u.jsx)(l.TK,{}),h&&(0,u.jsx)(l.v0,{message:h}),!p&&!h&&!j&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb.Header,{children:(0,u.jsx)(c.ZT,{size:A.y.BIG,color:d.D.LEMON,style:{textAlign:"left"},children:"Select the price to see the offers here. Connect your wallet to make a final transaction."})}),(0,u.jsx)(l.Zb.Body,{children:!m&&(0,u.jsx)(c.wK,{})})]}),!p&&!h&&j&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb.Header,{children:(0,u.jsxs)(l.rj,{columns:3,rows:1,children:[(0,u.jsx)(l.iJ,{textAlign:"left",column:1,inline:!0,children:(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"Time"})}),(0,u.jsx)(l.iJ,{textAlign:"center",column:2,inline:!0,children:(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"APR"})}),(0,u.jsx)(l.iJ,{textAlign:"right",column:3,inline:!0,children:(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"You earn"})})]})}),(0,u.jsxs)(l.Zb.Body,{mt:"16px",children:[g.map(((e,n)=>(0,u.jsx)(s.Fragment,{children:e.recieve&&e.apr?(0,u.jsx)(l.zx,{disabled:r||i,ref:x,type:"button",active:t.values.period===e.timestamp?"true":void 0,onClick:()=>(e=>{t.setFieldValue("period",e.timestamp),b(e.earnPercent)})(e),children:(0,u.jsxs)(l.rj,{columns:3,rows:1,children:[(0,u.jsx)(l.iJ,{textAlign:"left",column:1,inline:!0,children:(0,u.jsx)(c.ZT,{lh:"100%",children:e.title})}),(0,u.jsx)(l.iJ,{textAlign:"center",column:2,children:(0,u.jsxs)(c.ZT,{lh:"100%",children:[e.apr,"%"]})}),(0,u.jsx)(l.iJ,{textAlign:"right",column:3,inline:!0,children:(0,u.jsxs)(c.ZT,{lh:"100%",children:["$",Math.floor(parseFloat(e.recieve))]})})]})},n):(0,u.jsx)(u.Fragment,{})},n))),g.filter((e=>e.recieve)).length?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)(c.ZT,{size:A.y.BIG,color:d.D.WARNINGS,style:{textAlign:"center"},children:["No dates found.",(0,u.jsx)("br",{}),"Please select a different price."]})]}),(0,u.jsx)(l.Zb.Footer,{mt:"20px",children:g.filter((e=>e.recieve)).length?(0,u.jsx)(N,{children:f?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.ZT,{size:A.y.SMALL,color:d.D.PURPLE_BRIGHT,children:"Earn"}),(0,u.jsxs)(c.ZT,{color:d.D.PURPLE_BRIGHT,lh:"100%",children:[String(f).replace(".",","),"%"]})]}):(0,u.jsx)(c.ZT,{size:A.y.SMALL,color:d.D.LEMON,children:"Select the period"})}):(0,u.jsx)(u.Fragment,{})})]})]})})},H=Z.ZP.div`
	display: flex;
	align-items: center;
	padding: 7px 15px;
	gap: 10px;
	color: ${d.D.LIGHT};
`,B=Z.ZP.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`,M=e=>{let{formik:t,loading:r,amountFocused:i}=e;const n=(0,s.useRef)(),{error:o,loading:x,prices:m,currentPrice:h}=y(),{loading:p}=S();(0,a.KK)(r||p,n);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(l.Zb,{height:"100%",mh:365,gap:"0",pt:"15px",flex:!0,justify:"flex-start",children:[(0,u.jsx)(l.Zb.Header,{children:(0,u.jsxs)(B,{children:[(0,u.jsxs)(H,{children:[(0,u.jsx)(l.T1,{size:"xs",token:"USDC"}),(0,u.jsx)(c.ZT,{children:"USDC"})]}),(0,u.jsx)(c.ZT,{size:A.y.SMALL,children:"Price"})]})}),(0,u.jsxs)(u.Fragment,{children:[x&&(0,u.jsx)(l.TK,{}),o&&(0,u.jsx)(l.v0,{message:o}),!x&&!o&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb.Body,{mt:"5px",children:m.map(((e,s)=>(0,u.jsx)(l.zx,{disabled:r||p||i,ref:n,type:"button",active:t.values.price===e?"true":void 0,onClick:()=>(async e=>{await t.setFieldValue("period",0,!0),await t.setFieldValue("price",e,!0)})(e),children:(0,u.jsx)(c.ZT,{lh:"100%",children:e})},s)))}),(0,u.jsx)(l.Zb.Footer,{mt:"20px",children:(0,u.jsxs)(N,{children:[(0,u.jsx)(c.ZT,{size:A.y.SMALL,color:d.D.PURPLE_BRIGHT,children:"Current price"}),(0,u.jsx)(c.ZT,{color:d.D.PURPLE_BRIGHT,lh:"100%",children:h})]})})]})]})]})})};var G=r(1390);const $=Z.ZP.div`
	height: 340px;
	border-radius: 10px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	background: ${d.D.BLACK};
	padding: 30px 60px;

	@media (max-width: 768px) {
		padding: 20px;
		height: 200px;
		h2 {
			font-size: 27px;
			letter-spacing: 0.28px;
		}
	}
`,K=Z.ZP.img`
	position: absolute;
	right: 0;
	top: 0;
	margin: 30px;
	width: 25px;
	height: 25px;
	cursor: pointer;
`,V=Z.ZP.div`
	text-align: left;
	cursor: pointer;
	user-select: none;
`,U=e=>{let{setSuccess:t}=e;const r=(0,i.s0)();return(0,u.jsxs)($,{children:[(0,u.jsx)(K,{src:G.Z,alt:"",onClick:()=>{t(!1)}}),(0,u.jsx)(c.H2,{color:d.D.LEMON,children:"Request accepted."}),(0,u.jsxs)(V,{onClick:()=>{r("/profile"),t(!1)},children:[(0,u.jsx)(c.H2,{color:d.D.LIGHT,children:"You could track your"}),(0,u.jsx)(c.H2,{color:d.D.LIGHT,children:"transactions at Profile \u2192"})]})]})},W=e=>{let{config:t}=e;const{ref:r}=(0,i.UO)(),{chainId:c,connected:d,userAddress:x,balance:m,balanceUSDC:h,isNotEnoughBalance:p}=(0,a.Os)(),{direction:g}=(0,a.gm)(),[f]=(0,n.lr)(),b=(0,i.s0)(),[j,S]=(0,s.useState)(null),[y,k]=(0,s.useState)(!1),[T,E]=(0,s.useState)(!1),[w,A]=(0,s.useState)(null),[Z,D]=(0,s.useState)(!1),[P,I]=(0,s.useState)(!1),{formik:F,tokenSymbol:R,price:z,period:N,amount:H,walletError:B,userOrderLoading:G,orderAvailableError:$,configError:K}=v({setSubmitError:A,loading:y,setLoading:k,setWaitSubmit:E,config:t,setSuccess:I});(0,s.useEffect)((()=>{const e=f.get("utm");e&&(window.localStorage.setItem("utm",e),b("/"),o.zu.sendUtm(e,r))}),[f]),(0,s.useEffect)((()=>{if(r){const e=f.get("utm");window.localStorage.setItem("ref",r),b("/"),o.zu.sendUtm(e,r)}}),[r]),(0,s.useEffect)((()=>{S(B||$,K)}),[B,$,K]),(0,s.useEffect)((()=>{k(G)}),[G]),(0,s.useEffect)((()=>{if(z&&N&&H&&R){k(!0),o.g9.getCurrentPrice(R),o.px.getData(z,N,H,R);const e=setTimeout((()=>{F.setValues(F.initialValues)}),3e5);return()=>{clearTimeout(e)}}}),[z,N,H,R]),(0,s.useEffect)((()=>{z&&N&&H&&R&&g&&o.WalletService.isNotEnoughBalance(z,H,g)}),[z,N,H,R,g,m,h]),(0,s.useEffect)((()=>{R&&o.g9.getData(R,g)}),[R,g]),(0,s.useEffect)((()=>{z&&parseFloat(H)>0&&R&&o.ks.getPricePeriods(F.values.price,F.values.amount,F.values.tokenSymbol,!0)}),[R,z,H,x]);const V=!!(z&&N&&H&&Number(H)),W=!!(t&&t.CHAIN_LIST&&c&&t.CHAIN_LIST.includes(Number(c)))||!d;return(0,u.jsxs)(l.W2,{grid:!0,children:[W?"":(0,u.jsxs)(_,{children:[(0,u.jsx)(l.Pz,{}),(0,u.jsx)("span",{children:"Unsupported Network"})]}),j&&(0,u.jsxs)(u.Fragment,{children:[B&&(0,u.jsx)(l.v0,{message:B}),$&&(0,u.jsx)(l.v0,{message:$})]}),!j&&(0,u.jsxs)(l.rj,{margin:"0 15px",columns:2,xsColumns:1,gap:"20px",alignItems:"flex-start",children:[(0,u.jsx)(l.iJ,{column:"span 2",row:1,children:(0,u.jsx)(C,{formik:F,loading:y,setAmountFocused:D})}),(0,u.jsx)(l.iJ,{display:P?"block":"none",column:"span 2",row:2,children:(0,u.jsx)(U,{setSuccess:I})}),(0,u.jsx)(l.iJ,{display:P?"none":"block",column:1,row:2,height:"100%",xsColumn:"span 2",children:(0,u.jsx)(M,{formik:F,loading:y,amountFocused:Z})}),(0,u.jsx)(l.iJ,{display:P?"none":"block",column:2,row:2,height:"100%",xsRow:3,xsColumn:"span 2",children:(0,u.jsx)(O,{formik:F,loading:y,price:z,amount:H,amountFocused:Z})}),V&&(0,u.jsx)(l.iJ,{display:P?"none":"block",row:3,xsRow:4,column:"span 2",xsColumn:"span 2",children:(0,u.jsx)(L,{formik:F,isNotEnoughBalance:p,waitSubmit:T,setWaitSubmit:E,submitError:w,amountFocused:Z})})]})]})}}}]);