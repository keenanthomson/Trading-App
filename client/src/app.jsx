import React, {Component} from 'react';
import Modal from './modal.jsx';
import ExchangeSelector from './exchangeSelector.jsx';
import SymbolSelector from './symbolSelector.jsx';
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

let url = 'wss://www.bitmex.com/realtime?subscribe=instrument';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      entry: null,
      stop: null,
      risk: null,
      portfolio: null,
      symbolPrice: 'loading...',
      symbols: ["XBTUSD", "ETHUSD"],
      activeSymbol: "XBTUSD",
      modalOpen: false,
      activeExchange: "Bitmex",
    };
    this.targetChange = this.targetChange.bind(this);
    this.entryChange = this.entryChange.bind(this);
    this.stopChange = this.stopChange.bind(this);
    this.portfolioChange = this.portfolioChange.bind(this);
    this.riskChange = this.riskChange.bind(this);
  };

  componentDidMount() {
    this.openWebsocket(this.state.symbol);
  };

  openWebsocket(symbol) {
    let connection = new WebSocket(`${url},symbol=${symbol}`)
    connection.onopen = () => {
      console.log(`Connection established.`)
    }
    connection.onerror = error => {
      console.log(`WebSocket error: ${error}`);
    }
    connection.onmessage = e => {
      let chunk = JSON.parse(e.data);
      if (chunk.data && chunk.data[0].symbol === this.state.activeSymbol && chunk.data[0].lastPrice) {
        this.setState({symbolPrice: `$${Math.floor(chunk.data[0].lastPrice)}`})
        document.title = (`${this.state.symbolPrice}`)
      }
    };
  }

  changeSymbol(newSymbol) {
    console.log(`changeSymbol fired! this is the value passed in --> ${newSymbol}`)
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
            <SymbolSelector
            direction={"down"}
            symbols={this.state.symbols}
            activeSymbol={this.state.activeSymbol}
            changeSymbol={this.changeSymbol}
            />
            <div className="title-price">{this.state.symbolPrice}</div>
            <ExchangeSelector
            direction={"down"}
            exchanges={["Bitmex"]}
            activeExchange={this.state.activeExchange}
            />
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
          width={"auto"}
          height={400}
          details={false}
          hide_legend={true}
          />
      </div>
    </div>
    )
  };
};