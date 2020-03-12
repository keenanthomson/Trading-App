import React from 'react';
import {Dropdown, ButtonToolbar, DropdownButton} from 'react-bootstrap';

export default function ExchangeSelector(props) {
  return (
    <>
      <ButtonToolbar 
        onMouseDown={() => e.preventDefault()} 
        onMouseUp={() => e.preventDefault()} >
            <DropdownButton
              drop={'down'}
              variant="secondary"
              title={props.activeExchange}
              id={`dropdown-button-drop-down`}
              className="exchange-dropdown"
              key={1}
              alignRight
              focusFirstItemOnShow={false}
            >
              {props.exchanges.map((elem, idx) => {
                return <Dropdown.Item eventKey={idx} key={idx} className="symbol-dropdown-item">{elem}</Dropdown.Item>
              })} 
            </DropdownButton>
      </ButtonToolbar>
    </>
  )
};