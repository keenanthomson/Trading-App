import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.jsx';
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
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
      XBTUSD: 'loading...',
      symbol: "XBTUSD",
      modalOpen: false,
    };
    this.targetChange = this.targetChange.bind(this);
    this.entryChange = this.entryChange.bind(this);
    this.stopChange = this.stopChange.bind(this);
    this.portfolioChange = this.portfolioChange.bind(this);
    this.riskChange = this.riskChange.bind(this);
  }

  componentDidMount() {
    this.openWebsocket(this.state.symbol);
  };

  openWebsocket(symbol) {
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

  renderModal() {
    if (this.state.modalOpen) {
      return(<Modal></Modal>)
    }
  };

  render() {
    return (
      <div className="entries-calc">
        {this.renderModal()}
        <div className="entries-calc-inner">
          <div className="title-grid">
            <div className="title-price">XBT/USD: {this.state.XBTUSD}</div>
            <div className="title-name">Bitmex</div>
          </div>
          <div display="inline" className="portfolioheader">
            <div className="left">Portfolio Size:</div>
            <input className="portfolioinput" type="text" autoComplete="off" onChange={this.portfolioChange}></input>
            <div className="risk">Risk %: </div>
            <input className="risk" type="text" autoComplete="off" onChange={this.riskChange}></input>
          </div>
          <div className="entries">
              <div className="left">Target Price: </div>
              <input className="entry-box" type="text" autoComplete="off" onChange={this.targetChange}></input>
              <div className="left">Entry Price: </div>
              <input className="entry-box" type="text" autoComplete="off" onChange={this.entryChange}></input>
              <div className="left">Stop Loss Price: </div>
              <input className="entry-box" type="text" autoComplete="off" onChange={this.stopChange}></input>
           <div>
           </div>
          </div>
          <div className="position-size">
            {this.renderPositionSize()}
          </div>
        </div>
        <div>
          <TradingViewWidget 
          symbol={"BITMEX:XBTUSD"}
          theme={Themes.DARK}
          container_id={"technical-analysis"}
          width={auto}
          height={400}
          details={false}
          hide_legend={true}
          />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));