const crypto = require("crypto")
const axios = require("axios")
const config = require('../config')

const api_url = config.api_url
const api_key = config.api_key
const api_secret = config.api_secret

let encrypt = (key, str) => {
  let hmac = crypto.createHmac("sha512", key);
  let signed = hmac.update(str).digest('hex')

  return signed;
}

exports.send_request = async(order, path) => {
  let request_header = 'amount='+String(order.amount)+'&nonce='+String(order.nonce)+'&pair='+String(order.pair)+'&price='+String(order.price)+'&side='+String(order.side)+'&type='+String(order.type)

  let signed = encrypt(api_secret, request_header)

  let header = {
    'content-type':'application/json',
    'Authorization':'TDAX-API '+api_key,
    'Signature':signed
  }

  let options = {
    headers:header
  }

  let data = JSON.stringify(order)

  let config = {headers:header}
  try{
    let resp = await axios.post(api_url+path, data, config).then(res=>{
      console.log(res)
    })
  }catch(err){
    console.log("ERR");
  }
  
}
