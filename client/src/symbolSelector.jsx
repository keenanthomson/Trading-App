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
              title={props.activeSymbol}
              id={`dropdown-button-drop-down`}
              className="symbol-dropdown"
              key={2}
              focusFirstItemOnShow={false}
            >
              {props.symbols.map((elem, idx) => {
                return <Dropdown.Item eventKey={idx} key={idx} className="symbol-dropdown-item">{elem}</Dropdown.Item>
              })} 
            </DropdownButton>
      </ButtonToolbar>
    </>
  )
}