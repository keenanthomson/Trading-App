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

  renderCalc() {
    if (this.state.target && this.state.entry && this.state.stop) {
      return (<td>R: {(this.state.target-this.state.entry) / (this.state.entry-this.state.stop)}</td>)
    }
  }

  render() {
    return (
      <div className="entries-calc">
        <div className="entries-calc-inner">
          <h3>XBTUSD: {this.state.XBTUSD}</h3>
          <table className="entries">
            <tbody>
              <tr>
                <td>Target Price: </td>
                <td><input type="text" autoComplete="off" onChange={this.targetChange}></input></td>
              </tr>
              <tr>
                <td>Entry Price: </td>
                <td><input type="text" autoComplete="off" onChange={this.entryChange}></input></td>
              </tr>
              <tr>
                <td>Stop Loss: </td>
                <td><input type="text" autoComplete="off" onChange={this.stopChange}></input></td>
              </tr>
            </tbody>
          </table>
          <h5>
            {this.renderCalc()}
          </h5>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));