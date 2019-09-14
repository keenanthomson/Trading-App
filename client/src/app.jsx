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
      risk: null,
      portfolio: null,
      XBTUSD: 'loading...'
    };
    this.targetChange = this.targetChange.bind(this);
    this.entryChange = this.entryChange.bind(this);
    this.stopChange = this.stopChange.bind(this);
    this.portfolioChange = this.portfolioChange.bind(this);
    this.riskChange = this.riskChange.bind(this);
    this.loading = this.loading.bind(this);
  }

  componentDidMount() {
    //add loading function here

    connection.onopen = () => {
      console.log(`Connection established.`)
    }
    connection.onerror = error => {
      console.log(`WebSocket error: ${error}`);
    }
    connection.onmessage = e => {
      let chunk = JSON.parse(e.data);
      if (chunk.data && chunk.data[0].symbol === "XBTUSD" && chunk.data[0].lastPrice) {
        // turn off the loading function here
        this.setState({XBTUSD: `$${Math.floor(chunk.data[0].lastPrice)}`})
        document.title = (`${this.state.XBTUSD}`)
      }
    };
  };

  loading() {
    let messages = ['live price engine loading', 'live price engine loading.', 'live price engine loading..', 'live price engine loading...'];
    while (true) {
      setTimeout(() => this.setState({XBTUSD: messages[i]}), 1000);
    }
    // this.loading();
  }

  targetChange(e) {
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

  portfolioChange(e) {
    this.setState ({
      portfolio: e.target.value
    })
  }

  riskChange(e) {
    this.setState ({
      risk: e.target.value / 100 // convert percentage to decimal
    })
  }

  renderR() {
    if (this.state.target && this.state.entry && this.state.stop) {
      let RR = (this.state.target-this.state.entry) / (this.state.entry-this.state.stop);
      return (
        <div>
      <h5>R:R = {Math.round(RR * 100) / 100}</h5>
      </div>
      )
      } else {
      return (<h5 className="warn">R:R = <i>Add entry, target, and stop.</i></h5>)
    };
  };

  renderPositionSize() {
    if (this.state.portfolio && this.state.risk) {
      return(<h5>Position Size = ${Math.ceil((this.state.portfolio * this.state.risk) / (1-(this.state.stop/this.state.entry)))}</h5>)
    } else {
      return (<h5 className="warn">Position Size = <i>Complete all fields.</i></h5>)
    };
  };

  render() {
    return (
      <div className="entries-calc">
        <div className="entries-calc-inner">
          <h3 className="title">XBT/USD: {this.state.XBTUSD}</h3>
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
          {this.renderR()}
          {this.renderPositionSize()}
          <table>
            <tbody>
            <tr>
                <td>Portfolio Size: </td>
                <td><input type="text" autoComplete="off" onChange={this.portfolioChange}></input></td>
              </tr>
              <tr>
                <td>Portfolio Risk: </td>
                <td><input type="text" autoComplete="off" onChange={this.riskChange}></input></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));