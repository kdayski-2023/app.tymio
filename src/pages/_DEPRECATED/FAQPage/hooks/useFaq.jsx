const useFaq = () => {
  const faq = [
    {
      title: 'What is TYMIO?',
      content: `TYMIO is a DeFi crypto service pionering a concept of “time limit orders with yield”.  <br/>This idea allows you to monetize your readiness to sell or buy assets for a specific price. <br/> You could earn double and even triple digit APR (annual percentage rate) with our app`,
    },
    {
      title: 'What do I need to earn yield with the TYMIO app?',
      content: `You need either ETH which you are ready to sell, or USDC which you are ready to use for buying ETH. <br/>Currently we support only the ETH/USDC pair and Metamask wallet with Ethereum or Arbitrum chain.`,
    },
    {
      title:
        'I have ETH which I am ready to sell or I have USDC and I am ready to buy ETH. How do I execute a transaction?',
      content: `You will have to use your Metamask wallet, connect it to the TYMIO app, and follow on-screen instructions.`,
    },
    {
      title: 'How is the TYMIO yield generated?',
      content: `The short answer is: OPTIONS.<br/><br/>
      Long answer: We use options liquidity venues to execute low-risk option strategies (i.e. selling covered calls or puts). <br/>These strategies are available to professional derivative traders. <br/>TYMIO, however, allows everybody, not only professional traders, to enjoy high APR generated from the option markets. 
      `,
    },
    {
      title: 'Why is а high yield possible?',
      content: ` In case of SELL-HIGH, the market pays you for holding assets and limiting your upside.
      <br/><br/>
      If you agree to sell your asset at a certain price, that means you would not earn more than that price + yield. <br/>By setting a limit on your gains from price appreciation, the market compensates you in exchange for this cap, allowing you to earn a fixed yield.
      <br/><br/>
      Example: Let's say the current price is 1400 and you agree to sell for 1500 and wait for 7 days. <br/>Your fixed yield is 35. Therefore, you have limited your income to 1535 (1500+35). <br/>In case the price is above 1500 on the contract finish date, you can sell it for 1535 (1500 + 35 fixed yield). This scenario always has a lower probability. <br/>However, you can still earn significantly more than you would by selling the asset at the market price (1400).
      <br/><br/>
      In case of BUY-LOW, the market pays you for the risk of having unrealized loss when you buy an asset for the price, which is higher than market price at the time of contract expiration. 
      <br/><br/>
      Example: Let's say the current price is 1400 and you agree to buy for 1300 and wait for 7 days. In that case, your fixed yield is 25. Therefore, if 7 days later the price is 1200, your entry price will be 1275 (bought for 1300 and get +25 as yield). <br/>In this case at the time of settlement you will have a position with an unrealized loss of 75. <br/>This scenario always has a lower probability, howewer you should always consider it. <br/>Keep in mind that in this scenario you would still earn significantly more than initially buying the asset at the market price (1400).
`,
    },
    {
      title: 'Where does the yield come from?',
      content: `The yield originates from option traders who make bets on low probability scenarios of significant price increases/decreases. <br/>They purchase put/call options, paying a premium (call/put price) to make leveraged aggressive bets. <br/>TYMIO's yield comes in the form of option premiums generated from selling these options.`,
    },
    {
      title: `How is the yield specified?`,
      content: `The yield depends on market implied volatility and sell/buy price levels. <br/>The further the required ETH sell/buy price is from the current market price, the lower both the yield and the probability of a transaction.`,
    },
    {
      title: 'What is “time limit order with yield”?',
      content: `The "limit order with yield" allows you to monetize not the transaction itself, but your intent to buy/sell ETH. <br/>At the same time, the transaction may not take place, and you merely receive passive income in USDC or ETH. <br/>You can do this transaction repeatedly to generate a positive cash flow from your ETH or stablecoins.
      `,
    },
    {
      title: 'How is it different from standard limit order?',
      content: 'Standard limit order usually triggers when the market “touches” a specified price.  <br/>TYMIO limit order with yield executes only if price is above or lower than specified level exactly on specified date and time (settlement date). <br/>Before that date and time price could go lower and higher without the order being executed. <br/>Check TYMIO contract text before entering a transaction for more details.',
    },
    {
      title: 'Do I have to evaluate price charts and try to predict a future price when I consider buying or selling an asset?',
      content: `Markets are almost impossible to predict, therefore we recommend that you proceed with a deal on TYMIO only if you have evaluated outcome scenarios and both are perfectly ok for you.<br/> Carefully review all information on deal conditions provided before signing the transaction.`,
    },
    {
      title: 'Are my funds safe?',
      content: `There are always multiple risks involved, such as: smart-contract vulnerability risk, counterparty risk, custodial risk, regulatory risk. We are taking these risks very seriously and doing our best to minimize them. Here are most important steps:<br/>
      1.Your funds are locked in smart-contract until the expiration date, and therefore are not exposed to counterparty risk. We use our own liquidity to generate premium/yield.
      <br/>
      2. To insure funds against smart-contract vulnerabilities and theft, TYMIO set aside a reserve insurance fund of 100,000 USDC. You can check the current TVL on <a target="_blank" style="text-decoration: underline;" onMouseOut="this.style.textDecoration='underline'" onMouseOver="this.style.textDecoration='none'" href="https://tymio.com">https://tymio.com</a> to understand what percentage of TVL is covered by the reserve insurance fund at the moment. Insurance fund is intended to grow over time.  
      <br/><br/>
      Having said that, we should also mention that it is impossible to completely eliminate all risks. Do not use funds which you can’t afford to lose. Do your own research (DYOR).  
      <br/>
      <br/>
      Always check TYMIO smart-contract address before interaction:
      <br/>
      <a  target="_blank" style="text-decoration: underline;" onMouseOut="this.style.textDecoration='underline'" onMouseOver="this.style.textDecoration='none'" href="https://etherscan.io/address/0x1cc15fc92c0d4cd9e9bfeee6905c0b0fcaa261cd">0x1cc15fc92c0d4cd9e9bfeee6905c0b0fcaa261cd</a>
      <br/>
      <a target="_blank" style="text-decoration: underline;" onMouseOut="this.style.textDecoration='underline'" onMouseOver="this.style.textDecoration='none'" href="https://arbiscan.io/address/0x1cc15fc92c0d4cd9e9bfeee6905c0b0fcaa261cd">0x1cc15fc92c0d4cd9e9bfeee6905c0b0fcaa261cd</a>
      `,
    },
    {
      title: 'How does TYMIO make money? ',
      content: `The app earns by taking a cut in option premium (yield) generated.`,
    },
    {
      title: 'If I make money, then somebody should lose it. Who loses?',
      content: `Certain traders utilize crypto options to engage in high-risk/high-reward speculations on substantial underlying asset fluctuations. <br/>They purchase both calls and puts. <br/>These traders risk losing the money they've invested in most market conditions. <br/>TYMIO employs the premiums collected from call and put options to generate yield.`,
    },
    {
      title: 'How is TYMIO different from option vaults, staking or farming?',
      content: `We provide fixed APR. We use only ETH and USDC, no altcoins. <br/>We allow more flexibility than option vaults. Our APR is higher than staking APR.`,
    },
    {
      title: 'I have bitcoin, can I use TYMIO to earn high yield?',
      content: `No, currently we do not support bitcoin, but we are going to add WBTC soon. Stay tuned.`,
    },
    {
      title: 'Can I get my funds back before the deal expires?',
      content: `No, funds are locked until the agreed date, and the deal conditions are final. You have to wait until the deal is settled.`,
    },
    {
      title: 'What is the smallest amount I can use?',
      content: `You can use any amount, even as low as 0,01 ETH. But note that the minimum yield has to be higher than 1 USDC in order for the app to display it.`,
    },
    {
      title: 'Who is paying gas fees?',
      content: `Fees are split 50/50 between you and TYMIO. You are paying a gas fee when you initiate a transaction, and TYMIO covers the gas fee when funds are coming back to your wallet.`,
    },
    {
      title: 'How do I save on gas?',
      content: `You can bridge your crypto to Arbitrum. Bridging itself will cost you some gas fees, but you will save later on transaction fees. Gas costs in Arbitrum are significantly lower than in Ethereum. We suggest using Arbitrum bridge: <a target="_blank" style="text-decoration: underline;" onMouseOut="this.style.textDecoration='underline'" onMouseOver="this.style.textDecoration='none'" href="https://bridge.arbitrum.io/">https://bridge.arbitrum.io/</a> `,
    },
    {
      title: 'What are the benefits of TYMIO compared to active trading?',
      content: `You don’t have to be a professional trader to earn using TYMIO.<br/> It is time-effective, you don't need to track the market. High probability to increase your capital in each transaction. <br/>You can't be “liquidated”, in other words - lose your deposit. TYMIO is way less risky than leveraged trading. `,
    },
    {
      title: 'What are the benefits of TYMIO compared to farming?',
      content: `Simpler UI/UX. No need to use altcoins. Fixed yield.`,
    },
    {
      title: 'What are the benefits of TYMIO compared to staking?',
      content: `Higher yield.`,
    },
    {
      title: 'Do you have a whitepaper?',
      content: `Yes, you can check it here <a target="_blank" style="text-decoration: underline;" onMouseOut="this.style.textDecoration='underline'" onMouseOver="this.style.textDecoration='none'" href="https://tymio.com/whitepaper">WHITEPAPER</a>`,
    },
    {
      title: 'Could I use TYMIO from my mobile phone?',
      content: `Yes, we do support mobile Metamask & Wallet Connect.`,
    },
    {
      title: 'I have a problem with my transaction, can you help me?',
      content: `Yes, of course. You can use the dialog icon in the app to contact support or simply send an e-mail to info@tymio.com.`,
    },
    {
      title: 'What is the recommended browser and wallet?',
      content: `We do recommend Chrome browser & Metamask wallet.`,
    },

  ];

  return {
    faq,
  };
};

export default useFaq;
