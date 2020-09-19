const send_request = require('./send_request')

exports.buyLimitOrder = async(pair, amount, price) => {
  let order = {
    amount:amount,
    nonce:parseInt(Date.now()/1000),
    pair:pair,
    price:price,
    side:'buy',
    type:'limit'
  }

  let path = '/orders/'

  let res = await send_request.send_request(order, path)
}

exports.sellLimitOrder = async(pair, amount, price) => {
  let order = {
    amount:amount,
    nonce:parseInt(Date.now()/1000),
    pair:pair,
    price:price,
    side:'sell',
    type:'limit'
  }

  let path = '/orders/'

  let res = await send_request.send_request(order, path)
}
