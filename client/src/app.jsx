import './app.css';

const url = 'wss://www.bitmex.com/realtime?subscribe=instrument,symbol:XBTUSD';
const connection = new WebSocket(url);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      entry: null,
      stop: null,
      XBTUSD: 'live price engine loading...'
    };
    this.targetChange = this.targetChange.bind(this);
    this.entryChange = this.entryChange.bind(this);
    this.stopChange = this.stopChange.bind(this);
  }

  targetChange (e) {
    this.setState ({
      target: e.target.value
    })
  }

  entryChange(e) {
    this.setState ({
      entry: e.target.value
    })
  }

  stopChange(e) {
    this.setState ({
      stop: e.target.value
    })
  }

  componentDidMount() {
    connection.onopen = () => {
      console.log(`Connection established.`)
    }
    connection.onerror = error => {
      console.log(`WebSocket error: ${error}`);
    }
    connection.onmessage = e => {
      let chunk = JSON.parse(e.data);
      if (chunk.data && chunk.data[0].symbol === "XBTUSD" && chunk.data[0].lastPrice) {
        this.setState({XBTUSD: `$${chunk.data[0].lastPrice}`})
      }
    }
  }

  render() {
    return (
      <div>
        <h3>XBTUSD: {this.state.XBTUSD}</h3>
        <div>
          <h4>Target Price:</h4><input type="text" autoComplete="off" onChange={this.targetChange}></input>
        </div>
        <h4>Entry Price: {this.state.entry}</h4>
        <h4>Stop Loss: {this.state.stop}</h4>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));