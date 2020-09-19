# Example Usage

Put your API Key on `/API/config/index.js`


**Buy Spot Order Creation**
```
const  api  =  require('./API')

//the parameter is pair,amount, price
let result = api.buyLimitOrder('algo_thb', 1, 8)
console.log(result);
```

**Sell Spot Order Creation**
```
const  api  =  require('./API')

//the parameter is pair,amount, price
let result = api.sellLimitOrder('algo_thb', 1, 8)
console.log(result);
```

**Web Socket**
~~~
let wss = ws.setup('btc_thb').then(res=>{
  res.on('message', function incoming(data) {
    console.log(data);
  })
});
~~~
