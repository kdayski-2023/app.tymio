"use strict";(self.webpackChunkapp_tymio=self.webpackChunkapp_tymio||[]).push([[516],{5516:(e,r,i)=>{i.r(r),i.d(r,{default:()=>xe});var t=i(7313),s=i(6257);const n=s.ZP.div`
	display: flex;
	gap: 20px;
	justify-content: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;var a=i(5073),l=i(3230),d=i(2656);const o=s.ZP.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 538px;

	@media (max-width: 768px) {
		max-width: 585px;
		width: auto;
	}
	@media (max-width: 576px) {
		margin: 0 15px;
	}
`,c=s.ZP.div`
	display: flex;
	background: ${d.D.BLACK};
	border: 1px solid ${d.D.VERY_DARK};
	border-radius: 45px;
`,x=(0,s.ZP)(c)`
	margin-top: ${e=>{let{mt:r}=e;return r||"30px"}};
	margin-left: ${e=>{let{ml:r}=e;return r}};
	position: relative;
	border: none;
	border-radius: 5px;
	padding: 0;

	div {
		border: none;
	}

	div:nth-child(1) {
		flex: ${e=>{let{flex:r}=e;return r||"8 1"}};
		gap: 0;
		display: flex;
		align-items: center;
		padding: 0;
	}
	div:nth-child(2) {
		background-color: ${d.D.WARNINGS};
		border-radius: 5px;
		margin: 0 20px;
		padding: 5px;
		position: absolute;
		bottom: -11px;
		left: -3px;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: 10px;
		letter-spacing: 0.39px;
		color: ${d.D.BLACK};
	}

	@media (max-width: 576px) {
		margin: ${e=>{let{xsMargin:r}=e;return r}};
	}
`,p=(0,s.ZP)(l.II)`
	height: 40px;
	border-radius: 5px 0px 0px 5px;
	border-style: solid;
	border-color: ${e=>{let{error:r}=e;return r?d.D.WARNINGS:d.D.PURPLE_GRAY2}};
	border-width: 0.5px 0 0.5px 0.5px;
	font-size: 13px;
	font-weight: 400;
	line-height: 13px;
	letter-spacing: 0.39px;
	padding: ${e=>{let{noButton:r}=e;return r?"12px 0":"14.5px 20px"}};
	text-align: ${e=>{let{noButton:r}=e;return r?"center":"initial"}};
	color: ${e=>{let{error:r}=e;return r?d.D.WARNINGS:d.D.LIGHT}};
	opacity: ${e=>{let{error:r}=e;return r?"0.6":"1"}};

	&:focus {
		border-style: solid;
		border-color: ${e=>{let{error:r}=e;return r?d.D.WARNINGS:d.D.LIGHT}};
		border-width: 0.5px 0 0.5px 0.5px;
		color: ${e=>{let{error:r}=e;return r?d.D.WARNINGS:d.D.LIGHT}};
		opacity: ${e=>{let{error:r}=e;return r?"0.6":"1"}};
	}

	&:disabled {
		color: ${d.D.GRAY};
	}
`,h=(0,s.ZP)(l.zx)`
	flex: 1 1;
	font-size: 16px;
	letter-spacing: 0.32px;
	line-height: 12px;
	font-weight: 500;
	background-color: ${d.D.PURPLE_GRAY2};
	color: ${d.D.BLACK};
	border-radius: ${e=>{let{border:r}=e;return r?"5px":"0 5px 5px 0"}};
	padding: 14.5px 30px;
	border: none;
	opacity: 1;

	&:hover {
		padding: 14.5px 30px;
		background-color: ${d.D.PURPLE_BRIGHT};
		color: ${d.D.BLACK};
		border: none;
	}

	&:disabled {
		padding: 14.5px 30px;
		background-color: ${d.D.PURPLE_GRAY2};
		color: ${d.D.BLACK};
		border: none;
		opacity: 0.6;
	}

	&:focus {
		border: none;
		background: ${d.D.PURPLE_BRIGHT};
		box-shadow: none;
		color: ${d.D.BLACK};
		p {
			color: ${d.D.BLACK};
		}
	}
`,u=(s.ZP.div`
	color: ${d.D.WHITE};
	font-size: 18px;
`,(0,s.ZP)(l.zx)`
	font-size: 16px;
	font-weight: normal;
	flex: 1 1 0;
`,s.ZP.div`
	position: relative;
	display: flex;
	background: ${d.D.BLACK};
	border: 1px solid ${d.D.VERY_DARK};
	border-radius: 45px;

	div {
		border: none;
	}

	input {
		font-size: 16px;
		flex: 3 1 0;
	}

	div:nth-child(2) {
		position: absolute;
		bottom: -20px;
		right: 0;
	}
`,s.ZP.div`
	margin-top: ${e=>{let{mt:r}=e;return r||"30px"}};
	color: ${d.D.WHITE};
	display: flex;
	flex-direction: column;
	gap: ${e=>{let{gap:r}=e;return r||"12px"}};
`),g=(s.ZP.div`
	flex: 3 1;
	padding: 0 16px;
	display: grid;
	justify-items: center;
	align-content: center;
	color: ${d.D.WHITE};
	font-size: 13px;

	@media (max-width: 576px) {
		overflow: hidden;
	}
`,s.ZP.div`
	margin-top: 30px;
	display: flex;
	gap: 30px;
	justify-content: space-between;
	align-items: center;

	button {
		flex: 0;
		border-radius: 5px;
	}
`),m=s.ZP.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`,f=s.ZP.div`
	display: flex;
	gap: 50px;
	justify-content: space-between;
	align-items: center;
	padding: 60px 30px;
	background-color: ${d.D.DARK};

	@media (max-width: 576px) {
		padding: 20px 15px;
    gap: 20px;
	}
`,j=s.ZP.div`
	border-radius: 5px;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${d.D.BLACK};
`,b=s.ZP.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	background: ${d.D.DARK};
	gap: 10px;
	p {
		text-transform: uppercase;
	}

	@media (max-width: 576px) {
		width: 100%;
	}
`,y=s.ZP.div`
	display: flex;
	gap: 20px;
`,v=s.ZP.div`
	margin-top: 5px;
	text-align: center;
	padding: 3px 6px;
	border-radius: 100%;
	border: 1px solid ${d.D.LIGHT};
	height: 20px;
	min-width: 20px;
`,T=s.ZP.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	background: ${d.D.DARK};
`;var A=i(2028),S=i(9429);const w=e=>{const[r,i]=(0,t.useState)(!1),[s,n]=(0,t.useState)(!1),[l,d]=(0,t.useState)(null),[o,c]=(0,t.useState)(null);return(0,t.useEffect)((()=>{const e=a.Tx.state$.subscribe((e=>{c(e.error),i(e.loading),n(e.dataLoading),d(e.subscription)}));return()=>{e.unsubscribe()}}),[e]),{dataLoading:s,loading:r,error:o,subscription:l}};var D=i(8173),Z=i(3463);const P=(e,r)=>{const i=Z.Ry().shape({email:Z.Z_().email("Please enter the a valid e-mail address"),transaction_notifications:Z.O7(),news:Z.O7(),terms:Z.O7()}),t={email:e.email,transaction_notifications:Boolean(e.transaction_notifications),news:Boolean(e.news),terms:Boolean(e.terms)};return(0,D.TA)({initialValues:t,validationSchema:i,validateOnMount:!1,validateOnChange:!1,onSubmit:r})},_=(e,r)=>{const i=Z.Ry().shape({share_link:Z.Z_().url("Invalid URL format").nullable()}),t={share_link:e.share_link};return(0,D.TA)({initialValues:t,validationSchema:i,validateOnMount:!0,onSubmit:r})},k=e=>{const[r,i]=(0,t.useState)(!1),[s,n]=(0,t.useState)(null),[l,d]=(0,t.useState)(null),[o,c]=(0,t.useState)(null);return(0,t.useEffect)((()=>{const e=a.R_.state$.subscribe((e=>{c(e.error),i(e.loading),n(e.airdrop),d(e.airdrop_participant)}));return()=>{e.unsubscribe()}}),[e]),{loading:r,error:o,airdrop:s,airdropParticipant:l}},L=e=>{const[r,i]=(0,t.useState)(!1),[s,n]=(0,t.useState)(null),[l,d]=(0,t.useState)([]),[o,c]=(0,t.useState)(null),[x,p]=(0,t.useState)(null);return(0,t.useEffect)((()=>{const e=a.C_.state$.subscribe((e=>{p(e.error),i(e.loading),n(e.referral),d(e.referrals),c(e.totals)}));return()=>{e.unsubscribe()}}),[e]),{loading:r,error:x,referral:s,referrals:l,totals:o}};var C=i(7085);const $=e=>{const{config:r}=(0,S.ZR)(),[i,s]=(0,t.useState)(null),[n,a]=(0,t.useState)(!1),[l,d]=(0,t.useState)([]);return(0,t.useEffect)((()=>{a(!0);try{const i=e.order?JSON.parse(e.order):{};if((i||e.order_hedged)&&r){let t=i||{};t={...t,...e},d((0,C.Ns)(t,r))}}catch(i){s(i.message)}a(!1)}),[e,r]),{error:i,loading:n,transactionDetails:l}},B=()=>{const[e,r]=(0,t.useState)(!1),[i,s]=(0,t.useState)(null),[n,l]=(0,t.useState)([]),[d,o]=(0,t.useState)(null),[c,x]=(0,t.useState)([]),[p,h]=(0,t.useState)([]),[u,g]=(0,t.useState)([]),[m,f]=(0,t.useState)([]),[j,b]=(0,t.useState)([]),[y,v]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const e=a.px.userOrderState$.subscribe((e=>{e.error&&a.zD.showError(e.error),s(e.error);const i=e.orders.map((e=>(e.displayStatus=e.status,e.order_complete?"approved"===e.status&&(e.displayStatus="paid"):e.displayStatus="active",e.user_payment_tx_hash||e.payment_complete&&e.all_stages_succeeded||"approved"===e.status?{...JSON.parse(e.order||"{}"),...e}:{...e,displayStatus:"pending"})));i.sort(((e,r)=>new Date(r.id)-new Date(e.id)));const t=i.filter((e=>"approved"!==e.status)),n=i.filter((e=>"approved"===e.status)),d=t.filter((e=>"buy"===e.direction)),c=t.filter((e=>"sell"===e.direction)),p=n.filter((e=>"buy"===e.direction)),u=n.filter((e=>"sell"===e.direction));x(t),h(n),f(d),g(c),v(p),b(u),l(i),o(e.total),r(e.loading)}));return()=>{e.unsubscribe()}}),[]),{loading:e,error:i,orders:n,total:d,activeOrders:c,closedOrders:p,activeSellOrders:u,activeBuyOrders:m,closedSellOrders:j,closedBuyOrders:y}};var I=i(9207),E=i(6417);const R=e=>{let{subscription:r}=e;const{userAddress:i,connected:s}=(0,S.Os)(),{loading:n,dataLoading:d}=w(),[o,c]=(0,t.useState)(""),[u,j]=(0,t.useState)(""),[b,y]=(0,t.useState)(!1),[v,T]=(0,t.useState)(!1),D=P(r,(async e=>{if(j(null),c(D.errors.email),!D.errors.email){const{email:t,transaction_notifications:s,news:n,terms:l}=e;try{await a.Tx.sendData(i,{subsctiptions:{transaction_notifications:s,news:n,terms:l},email:t}),y(!1)}catch(r){r.message&&j(r.message)}}D.setSubmitting(!1)}));(0,t.useEffect)((()=>{u&&a.zD.showError(u)}),[u]),(0,t.useEffect)((()=>{if(!s){const e={email:"",transaction_notifications:!1,news:!1,terms:!1};D.setValues(e)}}),[s]);const Z=e=>{D.setFieldValue("email",e,!0)};return(0,E.jsxs)(l.Zb,{gap:"30px",xsPadding:"30px 20px",children:[(0,E.jsx)(l.Zb.Header,{children:(0,E.jsx)(A.H2,{children:"Subscribe"})}),d&&(0,E.jsx)(l.TK,{margin:"auto"}),!d&&(0,E.jsxs)(E.Fragment,{children:[r&&!r.email&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(x,{children:[(0,E.jsx)(p,{value:D.values.email,onChange:e=>Z(e.currentTarget.value),type:"email",placeholder:"Your e-mail",error:o,disabled:n,onBlur:()=>c(D.errors.email),onFocus:()=>c("")}),(0,E.jsx)(h,{type:I.J.SECONDARY,onClick:()=>D.handleSubmit(D.values),disabled:!D.isValid||JSON.stringify(D.initialValues)===JSON.stringify(D.values)||!D.values.email||!s,children:"SEND"})]}),(0,E.jsx)(l.Zb.Body,{children:(0,E.jsxs)(l.rj,{rows:2,columns:2,gap:"15px",children:[(0,E.jsx)(l.iJ,{row:1,column:1,children:(0,E.jsx)(l.II,{type:"checkbox",value:D.values.transaction_notifications,checked:D.values.transaction_notifications,label:"Transaction notifications",onChange:e=>D.setFieldValue("transaction_notifications",e.target.checked,!0),disabled:n})}),(0,E.jsx)(l.iJ,{row:1,column:2,children:(0,E.jsx)(l.II,{type:"checkbox",value:D.values.news,checked:D.values.news,label:"Tymio news and updates",onChange:e=>D.setFieldValue("news",e.target.checked,!0),disabled:n})}),(0,E.jsx)(l.iJ,{row:2,column:"span 2",children:(0,E.jsx)(l.II,{type:"checkbox",value:D.values.terms,checked:D.values.terms,label:"I understand and agree to the",terms:{content:"terms of submission & data processing",link:"/terms"},onChange:e=>D.setFieldValue("terms",e.target.checked,!0),disabled:n})})]})})]}),r&&r.email&&(0,E.jsxs)(l.Zb.Body,{children:[!b&&(0,E.jsxs)(g,{children:[(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Thanks for getting in touch!"}),(0,E.jsx)(h,{onClick:()=>y(!0),children:"MANAGE"})]}),b&&!v&&(0,E.jsxs)(m,{children:[(0,E.jsxs)(x,{flex:"2 1",children:[(0,E.jsx)(p,{value:D.values.email,onChange:e=>Z(e.currentTarget.value),type:"email",placeholder:"New e-mail",error:o,disabled:n,onBlur:()=>c(D.errors.email),onFocus:()=>c("")}),(0,E.jsx)(h,{type:I.J.SECONDARY,onClick:()=>D.handleSubmit(D.values),disabled:!D.isValid||!D.values.email||r.email===D.values.email,children:"CHANGE"})]}),(0,E.jsx)(h,{border:!0,onClick:()=>T(!0),children:"CANCEL SUBSCRIPTION"})]}),b&&v&&(0,E.jsxs)(f,{children:[(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Are you sure you want to cancel subscription?"}),(0,E.jsxs)(A.T5,{xsWidth:"150px",children:[(0,E.jsx)(A.T5.Option,{width:"90px",active:!0,onClick:()=>T(!1),children:(0,E.jsx)(A.ZT,{children:"NO"})}),(0,E.jsx)(A.T5.Option,{width:"90px",active:!1,onClick:async()=>{const e={email:"",transaction_notifications:!1,news:!1,terms:!1};await D.setValues(e),D.handleSubmit(e)},children:(0,E.jsx)(A.ZT,{children:"YES"})})]})]})]})]})]})},O=e=>{let{airdrop:r,airdropParticipant:i}=e;const{userAddress:s}=(0,S.Os)(),{loading:n}=k(),[d,o]=(0,t.useState)(""),[c,u]=(0,t.useState)(""),g=_(i,(async e=>{if(o(null),u(g.errors.share_link),!g.errors.share_link){const{share_link:t}=e;try{a.R_.updateAirdropParticipant(s,{airdrop_id:r.id,share_link:t})}catch(i){i.message&&o(i.message)}}g.setSubmitting(!1)}));(0,t.useEffect)((()=>{d&&a.zD.showError(d)}),[d]);return(0,E.jsxs)(T,{children:[(0,E.jsx)(A.ZT,{children:"YOUR AIRDROP STATUS:"}),(0,E.jsxs)(l.aV,{mt:"10px",children:[(0,E.jsxs)(l.aV.Item,{gap:"20px",children:[i.serial_number<=r.participant_limit?(0,E.jsx)(l.tm,{}):(0,E.jsx)(l.Pz,{}),(0,E.jsxs)(A.ZT,{size:I.y.BIG,children:[i.serial_number<=r.participant_limit?`${i.serial_number}/${r.participant_limit} - `:null,i.serial_number<=r.participant_limit?"early user, eligible for airdrop.":"Has been reached the limit of participants."]})]}),(0,E.jsxs)(l.aV.Item,{gap:"20px",children:[i.deal_made?(0,E.jsx)(l.tm,{}):(0,E.jsx)(l.Pz,{}),(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"3 consecutive deals, each within a week after previous."})]}),(0,E.jsxs)(l.aV.Item,{gap:"20px",children:[i.link_shared?(0,E.jsx)(l.tm,{}):(0,E.jsx)(l.Pz,{}),(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Posted about Tymio."})]})]}),i.share_link?(0,E.jsx)(x,{mt:"0",ml:"40px",children:(0,E.jsx)(p,{value:i.share_link,onChange:()=>{},type:"text",placeholder:"Link to social media post",error:g.errors.share_link,disabled:!0,noButton:!0})}):(0,E.jsxs)(x,{mt:"0",ml:"40px",xsMargin:"0",children:[(0,E.jsx)(p,{value:g.values.share_link,onChange:e=>{return r=e.currentTarget.value,void g.setFieldValue("share_link",r,!0);var r},type:"text",placeholder:"Link to social media post",disabled:n,error:c,onBlur:()=>u(g.errors.share_link),onFocus:()=>u("")}),(0,E.jsx)(h,{onClick:()=>g.handleSubmit(g.values),disabled:!g.isValid||!g.values.share_link,children:"SHARE"})]})]})},z=e=>{let{airdrop:r,airdropParticipant:i}=e;const{userAddress:s}=(0,S.Os)(),{loading:n}=k();return(0,t.useEffect)((()=>{s&&r&&!n&&!i&&a.R_.addParticipantToAirdrop(s,{airdrop_id:r.id})}),[s,r,i,n]),(0,E.jsxs)(l.Zb,{gap:"30px",xsPadding:"30px 20px",children:[(0,E.jsxs)(l.Zb.Header,{display:"flex",justify:"space-between",alignItems:"flex-start",xsDirection:"column",gap:"20px",children:[(0,E.jsx)(A.H2,{lh:"100%",children:"Airdrop 10K"}),(0,E.jsxs)(b,{children:[(0,E.jsx)(A.ZT,{children:"10K USDC for first"}),(0,E.jsx)(A.ZT,{children:"100 loyal users"})]})]}),(0,E.jsx)(A.ZT,{children:"CONDITIONS:"}),(0,E.jsx)(l.Zb.Body,{children:(0,E.jsxs)(u,{mt:"0",gap:"30px",children:[(0,E.jsxs)(y,{children:[(0,E.jsx)(v,{children:(0,E.jsx)(A.ZT,{size:I.y.SMALL,lh:"100%",children:"1"})}),(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Made at least three consecutive deals (next deal should be within one week after previous) on Tymio."})]}),(0,E.jsxs)(y,{children:[(0,E.jsx)(v,{children:(0,E.jsx)(A.ZT,{size:I.y.SMALL,lh:"100%",children:"2"})}),(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Posted about Tymio in any well-known social network, using active link \u2192"})]}),(0,E.jsxs)(y,{children:[(0,E.jsx)(v,{children:(0,E.jsx)(A.ZT,{size:I.y.SMALL,lh:"100%",children:"3"})}),(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Get 10K USDC or equivalent in Tymio tokens, as soon as Tymio valuation hits 150M (our estimation \u2014 the end of 2024). Threshold will be determined using last investment round valuation or token market cap."})]})]})}),(0,E.jsxs)(l.Zb.Footer,{children:[n&&(0,E.jsx)(l.TK,{}),!n&&i&&(0,E.jsx)(O,{airdrop:r,airdropParticipant:i})]})]})},G=e=>{let{referrals:r,totals:i}=e;const{loading:t}=L();return(0,E.jsxs)(E.Fragment,{children:[t&&(0,E.jsx)(l.TK,{}),!t&&(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(l.Zb,{width:"100%",background:d.D.RICH_BLACK2,gap:"30px",xsPadding:"20px",children:[i&&(0,E.jsx)(l.Zb.Header,{children:(0,E.jsxs)(j,{children:[(0,E.jsxs)(A.ZT,{size:I.y.SMALL,lh:"100%",children:["Linked wallets: ",i.wallets]}),(0,E.jsxs)(A.ZT,{size:I.y.SMALL,lh:"100%",children:["Transactions: ",i.transactions]})]})}),(0,E.jsx)(l.Zb.Body,{children:(0,E.jsxs)(l.iA,{padding:"0",color:"inherit",children:[(0,E.jsx)(l.iA.Head,{children:(0,E.jsxs)(l.iA.Head.Tr,{grid_template_columns:"2fr 2fr 2fr 1fr",children:[(0,E.jsx)(l.iA.Th,{align:"left",children:"Address"}),(0,E.jsx)(l.iA.Th,{children:"Earn"}),(0,E.jsx)(l.iA.Th,{children:"Paid"}),(0,E.jsx)(l.iA.Th,{align:"right",children:"Info"})]})}),(0,E.jsx)(l.iA.Body,{hr:!0,children:r.map(((e,r)=>(0,E.jsxs)(l.iA.Tr,{grid_template_columns:"2fr 2fr 2fr 1fr",children:[(0,E.jsx)(l.iA.Td,{align:"left",children:(0,C.nQ)(e.address)}),(0,E.jsxs)(l.iA.Td,{children:["$",e.earn.toFixed(2)]}),(0,E.jsxs)(l.iA.Td,{color:e.paid>0?d.D.LEMON:d.D.GRAY,children:["$",e.paid.toFixed(2)]}),(0,E.jsx)(l.iA.Td,{align:"right",children:(0,E.jsx)(A.ZT,{size:I.y.SMALL,color:d.D.PURPLE_BRIGHT,children:"Details"})})]},r)))})]})}),i&&(0,E.jsx)(l.Zb.Footer,{children:(0,E.jsxs)(A.ZT,{size:I.y.SMALL,style:{marginLeft:"auto"},children:["Update: ",`${(0,C.p6)(i.nextUpdate,"dot")}`]})})]})})]})},K=e=>{let{referral:r,referrals:i,totals:s}=e;const{loading:n,error:d}=L(),[o,c]=(0,t.useState)("COPY");let g;(0,t.useEffect)((()=>{d&&a.zD.showError(d)}),[d]);return(0,E.jsxs)(l.Zb,{gap:"30px",xsPadding:"30px 20px",children:[(0,E.jsx)(l.Zb.Header,{children:(0,E.jsx)(A.H2,{children:"Referral program"})}),(0,E.jsx)(u,{children:(0,E.jsx)(A.ZT,{size:I.y.BIG,children:"Earn 5% from the yield paid to wallets you have invited with personal referral link below. No time limits. Perpetual stream of passive income."})}),n&&(0,E.jsx)(l.TK,{margin:"auto"}),!n&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(x,{mt:"0",children:[(0,E.jsx)(p,{value:r?`${window.location.origin}/code/${r}`:"",type:"text",placeholder:"sell-high.io/code/ed2da5",disabled:!0}),(0,E.jsx)(h,{type:I.J.SECONDARY,disabled:!r,onClick:e=>((e,r)=>{e.preventDefault(),navigator.clipboard.writeText(r),c("COPIED"),g&&clearTimeout(g),g=setTimeout((()=>{c("COPY")}),2e3)})(e,`${window.location.origin}/code/${r}`),children:o})]}),i&&i.length?(0,E.jsx)(l.Zb.Footer,{children:(0,E.jsx)(G,{referrals:i,totals:s})}):null]})]})},N=()=>{const{userAddress:e,connected:r}=(0,S.Os)(),{subscription:i}=w(e),{airdrop:s,airdropParticipant:n}=k(e),{referral:l,referrals:d,totals:c}=L(e);return(0,t.useEffect)((()=>{r&&e?(a.Tx.getData(e),a.C_.getData(e),a.R_.getData()):(a.Tx.reset(),a.C_.reset(),a.R_.reset())}),[e,r]),(0,t.useEffect)((()=>{e&&s&&a.R_.getParticipant(e,{airdrop_id:s.id})}),[e,s]),(0,E.jsxs)(o,{children:[i&&(0,E.jsx)(R,{subscription:i}),(0,E.jsx)(K,{referral:l,referrals:d,totals:c}),(0,E.jsx)(z,{airdrop:s,airdropParticipant:n})]})};var H=i(8467);const F=s.ZP.div`
	background-color: ${d.D.DARK};
	border-radius: 10px;
	padding: 60px;
	margin: ${e=>{let{margin:r}=e;return"0"}};
	display: block;
	font-size: 18px;
	line-height: 1.4em;
	color: #bbbbbc;

	@media (max-width: 576px) {
		padding: 30px 20px;
	}
`,M=s.ZP.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: left;

	&:before {
		display: inline-block;
		margin-bottom: 50px;
		content: attr(aria-label);
		font-size: 40px;
		font-weight: 500;
		line-height: 40px;
		letter-spacing: 0.4px;
		color: ${d.D.LIGHT};
	}

	@media (max-width: 576px) {
		&:before {
			font-size: 30px;
			line-height: 30px;
			margin-bottom: 30px;
		}
	}
`,U=s.ZP.li`
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 0.5px solid ${d.D.GRAY};
	color: ${d.D.LIGHT};
	font-size: 17px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0.34px;

	span {
		&:nth-child(1) {
			color: ${d.D.GRAY};
		}
		&:nth-child(2) {
			text-transform: capitalize;
		}
	}

	&:last-child {
		flex-direction: column;
		gap: 30px;
		line-height: 140%;
		span {
			text-transform: unset;
		}
	}
`,V=s.ZP.a`
	text-decoration: none;
	color: ${d.D.PURPLE_BRIGHT};
	align-items: center;
	display: flex;
	gap: 10px;
`,Y=(s.ZP.span`
	line-height: normal;
	font-size: 24px;
	font-weight: bold;
`,s.ZP.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	gap: 6px;
`,s.ZP.div`
	display: flex;
	align-items: center;
	gap: 6px;
`),J=(s.ZP.span`
	line-height: normal;
	text-transform: capitalize;
	font-size: 24px;
	font-weight: bold;
	color: ${e=>{let{active:r}=e;return r?"inherit":d.D.LIGHT_BLUE}};
`,s.ZP.div`
	width: 538px;

	@media (max-width: 768px) {
		max-width: 585px;
		width: auto;
	}
`),W=s.ZP.div`
	display: flex;
	gap: 5px;
	padding: 10px;
	border-radius: 5px;
	background: ${d.D.LEMON};
	align-items: center;
	user-select: none;
	cursor: pointer;

	svg {
		margin-left: 5px;
	}
`,q=s.ZP.div`
	display: ${e=>{let{expanded:r}=e;return r?"flex":"none"}};
	flex-direction: column;
	padding: 30px;
	border-radius: 10px;
	background: ${d.D.LIME_LEMON};
	flex-basis: 100%;
	gap: 10px;
`,Q=s.ZP.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.5px solid ${d.D.BLACK};
	padding-bottom: 5px;
`,X=s.ZP.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`,ee=s.ZP.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,re=s.ZP.div`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 10px 10px 10px 0;
	user-select: none;
	cursor: pointer;
`,ie=s.ZP.div`
	display: ${e=>{let{expanded:r}=e;return r?"flex":"none"}};
	flex-direction: column;
	gap: 20px;
`,te=s.ZP.div`
	@media (max-width: 576px) {
		flex-basis: 100%;
	}
`;var se=i(3701);const ne=i.p+"static/media/arrow-up-right.2ec0f4bca552b951279c823add82cd55.svg",ae=e=>{let{order:r}=e;const{error:i,loading:t,transactionDetails:s}=$(r);return(0,E.jsxs)(F,{children:[t&&(0,E.jsx)(l.TK,{}),i&&(0,E.jsx)(l.v0,{message:i}),!t&&!i&&(0,E.jsx)(M,{"aria-label":"Transaction details",children:s.map(((e,r)=>{let{name:i,value:t,type:s,styles:n}=e;return(0,E.jsxs)(U,{style:n,children:[(0,E.jsx)("span",{children:i}),(0,E.jsx)("span",{children:"link"===s?(0,E.jsxs)(V,{href:t,target:"_blank",rel:"noreferrer",children:["Open ",(0,E.jsx)("img",{width:12,height:12,src:ne,alt:""})]}):t})]},r)}))})]})},le=e=>{let{order:r}=e;const[i,s]=(0,t.useState)(null);return(0,E.jsxs)(l.iA.Tr,{active:i===r.id,onClick:()=>(e=>{s(e.id),a.Z7.show((0,E.jsx)(ae,{order:e}))})(r),children:[(0,E.jsx)(l.iA.Td,{align:"left",children:r.amount}),(0,E.jsx)(l.iA.Td,{children:(0,E.jsxs)(Y,{children:[(0,E.jsx)(l.T1,{size:"xs",token:r.token_symbol}),r.price]})}),(0,E.jsxs)(l.iA.Td,{color:d.D.LEMON,children:["$",Math.floor(Number(r.recieve))]}),(0,E.jsx)(l.iA.Td,{align:"right",children:(0,E.jsx)(A.ZT,{size:I.y.SMALL,color:d.D.PURPLE_BRIGHT,children:"Details"})})]})},de=e=>{let{orders:r,direction:i}=e;const[s,n]=(0,t.useState)(1),[a,o]=(0,t.useState)(0),[c,x]=(0,t.useState)([]),[p,h]=(0,t.useState)(0);(0,t.useEffect)((()=>{o(r.length)}),[r]),(0,t.useEffect)((()=>{h(5*(s-1))}),[r,s]),(0,t.useEffect)((()=>{x(JSON.parse(JSON.stringify(r)).splice(p,5))}),[p]);return(0,E.jsx)(E.Fragment,{children:r.length?(0,E.jsxs)(l.iA,{color:d.D.RICH_PURPLE,children:[(0,E.jsx)(l.iA.Head,{children:(0,E.jsxs)(l.iA.Head.Tr,{children:[(0,E.jsx)(l.iA.Th,{align:"left",children:i}),(0,E.jsx)(l.iA.Th,{}),(0,E.jsx)(l.iA.Th,{children:"Earned"}),(0,E.jsx)(l.iA.Th,{align:"right",children:"Info"})]})}),(0,E.jsx)(l.iA.Body,{hr:!0,children:c.map(((e,r)=>(0,E.jsx)(le,{order:e},r)))}),(0,E.jsx)(l.iA.Footer,{children:(0,E.jsx)(A.tl,{currentPage:s,totalCount:a,pageSize:5,onPageChange:e=>(e=>{n(e)})(e)})})]}):(0,E.jsx)(E.Fragment,{})})},oe=()=>{const e=(0,H.s0)(),{error:r,loading:i,orders:s,total:n,activeOrders:o,closedOrders:c,activeSellOrders:x,activeBuyOrders:p,closedSellOrders:h,closedBuyOrders:u}=B(),{connected:g,userAddress:m}=(0,S.Os)(),[f,j]=(0,t.useState)(!1),[b,y]=(0,t.useState)(!0);(0,t.useEffect)((()=>{const e=setInterval((async()=>{s.find((e=>"pending"===e.displayStatus))?a.px.getUserOrders(m,!0):clearInterval(e)}),1e4);return()=>{clearInterval(e)}}),[s]),(0,t.useEffect)((()=>{const e=setInterval((()=>{a.px.getUserOrders(m,!0)}),5e4);return()=>{clearInterval(e)}}),[m]),(0,t.useEffect)((()=>{g&&m&&a.px.getUserOrders(m)}),[g,m]);return(0,E.jsxs)(l.Zb,{background:d.D.PURPLE_GRAY2,gap:f?"30px":"60px",xsGap:"30px",xsPadding:"30px 15px",mh:357,children:[i&&(0,E.jsx)(l.TK,{margin:"auto"}),r&&(0,E.jsx)(l.v0,{message:r}),i||r||s.length&&m?"":(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l.Zb.Header,{children:(0,E.jsx)(A.H2,{color:d.D.BLACK,children:"Transactions: 0"})}),(0,E.jsx)(l.Zb.Body,{children:(0,E.jsx)(A.ZT,{color:d.D.BLACK,size:I.y.BIG,children:"Yoy have no transactions yet"})}),(0,E.jsxs)(l.Zb.Footer,{align:"flex-end",children:[(0,E.jsx)(A.Wr,{}),(0,E.jsx)(A.zx,{fixed:!0,type:I.J.SECONDARY,onClick:()=>{e("/")},children:(0,E.jsx)(A.ZT,{color:d.D.BLACK,children:"BACK TO APP"})})]})]}),!i&&!r&&s.length&&m?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(l.Zb.Header,{display:"flex",justify:"space-between",gap:"30px",xsGap:"20px",wrap:!0,children:[(0,E.jsx)(te,{children:(0,E.jsxs)(A.H2,{color:d.D.BLACK,lh:"34px",children:["Transactions: ",s.length]})}),n&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(W,{onClick:()=>{j((e=>!e))},children:[(0,E.jsxs)(A.ZT,{size:I.y.SMALL,color:d.D.BLACK,lh:"100%",children:["Earned:"," "]}),(0,E.jsxs)(A.ZT,{lh:"100%",color:d.D.BLACK,children:["$",n.earned.toFixed(0)]}),(0,E.jsx)(A.PL,{expanded:f})]}),(0,E.jsx)(q,{expanded:f,children:Object.keys(n).map((e=>(0,E.jsx)(E.Fragment,{children:"earned"!==e&&(0,E.jsxs)(Q,{children:[(0,E.jsx)(A.ZT,{color:d.D.BLACK,size:I.y.SMALL,lh:"100%",children:se.X[e]}),(0,E.jsx)(A.ZT,{color:d.D.BLACK,lh:"100%",children:n[e].toFixed(0)})]})})))})]})]}),(0,E.jsxs)(l.Zb.Body,{gap:"30px",children:[(0,E.jsxs)(X,{children:[(0,E.jsxs)(A.ZT,{color:d.D.BLACK,children:["ACTIVE: ",o.length]}),(0,E.jsx)(de,{orders:x,direction:"Sell"}),(0,E.jsx)(de,{orders:p,direction:"Buy"})]}),c.length?(0,E.jsxs)(ee,{children:[(0,E.jsxs)(re,{onClick:()=>{y((e=>!e))},children:[(0,E.jsxs)(A.ZT,{color:d.D.BLACK,lh:"100%",children:["CLOSED: ",c.length]}),c.length?(0,E.jsx)(A.PL,{expanded:b}):(0,E.jsx)(E.Fragment,{})]}),(0,E.jsxs)(ie,{expanded:b,children:[(0,E.jsx)(de,{orders:h,direction:"Sell"}),(0,E.jsx)(de,{orders:u,direction:"Buy"})]})]}):(0,E.jsx)(E.Fragment,{})]})]}):""]})},ce=()=>(0,E.jsx)(J,{children:(0,E.jsx)(oe,{})}),xe=()=>(0,E.jsx)(l.W2,{fullWidth:!0,children:(0,E.jsxs)(n,{children:[(0,E.jsx)(ce,{}),(0,E.jsx)(N,{})]})})}}]);