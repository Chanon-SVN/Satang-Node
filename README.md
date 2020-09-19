# Usage examples

**Order Creation**
```
const  api  =  require('./API')

let result = api.buyLimitOrder('algo_thb', 1, 8)
console.log(result);
```


**Web Socket**
~~~
const  ws  =  require('./ws')

ws.on('message', function incoming(data) {
console.log(data);
});
~~~
