# Example Usage

**Order Creation**
```
const  api  =  require('./API')

let result = api.buyLimitOrder('algo_thb', 1, 8)
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
