const WebSocket = require('ws')
const ws = new WebSocket('wss://stream.satang.com/ws/algo_thb@aggTrade', {
  perMessageDeflate: false
});

module.exports = ws

