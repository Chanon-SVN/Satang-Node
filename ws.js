const WebSocket = require('ws')

exports.setup = async(pair) => {
  console.log(pair);
  const wss = await new WebSocket('wss://stream.satang.com/ws/'+pair+'@aggTrade', {
    perMessageDeflate: false
  });

  return await wss;
}

