const WebSocket = require('ws');
const url = 'wss://www.bitmex.com/realtime?subscribe=instrument,symbol:XBTUSD';
const connection = new WebSocket(url);

connection.onopen = () => {
  // connection.send('');
  console.log(`Connection established.`)
}

connection.onerror = error => {
  console.log(`WebSocket error: ${error}`);
}

connection.onmessage = e => {
  let chunk = JSON.parse(e.data);
  if (chunk.data && chunk.data[0].symbol === "XBTUSD" && chunk.data[0].lastPrice) {
    console.log(`XBTUSD Last Price: $`, chunk.data[0].lastPrice)
  }
}