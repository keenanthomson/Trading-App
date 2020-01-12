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

  // renderR() {
  //   if (this.state.target && this.state.entry && this.state.stop) {
  //     let RR = (this.state.target-this.state.entry) / (this.state.entry-this.state.stop);
  //     return (
  //     <div>
  //       <span>R:R = {Math.round(RR * 100) / 100}</span>
  //     </div>
  //     )
  //     } else {
  //     return (<span className="warn">R:R = <i>Add entry, target, and stop.</i></span>)
  //   };
  // };

  renderPositionSize() {
    if (this.state.portfolio && this.state.risk && this.state.stop && this.state.entry) {
      if (this.state.entry > this.state.stop) {
        return(<span className="">Position Size: ${Math.ceil((this.state.portfolio * this.state.risk) / ((this.state.entry/this.state.stop) - 1))}</span>)
      } else if (this.state.entry < this.state.stop) {
        return(<span className="">Position Size: ${Math.ceil((this.state.portfolio * this.state.risk) / ((this.state.stop/this.state.entry) - 1))}</span>)
      }
    }
    return (<span className="warn">Position Size: <i>complete fields.</i></span>)
  };

  render() {
    return (
      <div className="entries-calc">
        <div className="entries-calc-inner">
          <div className="title-grid">
            <div className="title-price">XBT/USD: {this.state.XBTUSD}</div>
            <div className="title-name">Bitmex</div>
          </div>
          <div display="inline" className="portfolioheader">
            <span className="left">Portfolio Size:</span>
            <input className="portfolioinput" type="text" autoComplete="off" onChange={this.portfolioChange}></input>
            <span className="risk">Risk %: </span>
            <input className="risk" type="text" autoComplete="off" onChange={this.riskChange}></input>
          </div>
          <div className="entries">
              <span className="left">Target Price: </span>
              <input className="entry-box" type="text" autoComplete="off" onChange={this.targetChange}></input>
              <span className="left">Entry Price: </span>
              <input className="entry-box" type="text" autoComplete="off" onChange={this.entryChange}></input>
              <span className="left">Stop Loss: </span>
              <input className="entry-box" type="text" autoComplete="off" onChange={this.stopChange}></input>
           <div>
           </div>
          </div>
          <div className="position-size">
            {/* {this.renderR()} */}
            {this.renderPositionSize()}
          </div>
        </div>
        <div class="tradingview-widget-container">
        <div id="tradingview_6f052"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        <script type="text/javascript">
        new TradingView.widget(
        {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "container_id": "tradingview_6f052"
      }
        );
        </script>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));