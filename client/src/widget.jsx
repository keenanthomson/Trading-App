import React from 'react'
import TradingViewWidget from 'react-tradingview-widget';

export default function Widget () {
  return (
    <div>
        <TradingViewWidget 
        symbol="BITMEX:XBTUSD"
        container_id= "technical-analysis"
        hide_side_toolbar="false"
        studies="[]"
        theme="Dark"
        width="auto"
        height="400"
        details="true"
        hide_legend="true"
        />
      </div>
  )
};