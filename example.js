const api = require('./API')
const ws = require('./ws')

// Example of Order Creation
let result = api.buyLimitOrder('algo_thb', 1, 8)
console.log(result);

// Example of web soccket 
let wss = ws.setup('btc_thb').then(res=>{
  res.on('message', function incoming(data) {
    console.log(data);
  })
});

