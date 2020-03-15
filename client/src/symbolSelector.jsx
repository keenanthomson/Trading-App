import React from 'react';
import {Dropdown, ButtonToolbar, DropdownButton} from 'react-bootstrap';

export default function SymbolSelector(props) {
  return (
    <>
      <ButtonToolbar 
        onMouseDown={(e) => e.preventDefault()} 
        onMouseUp={(e) => e.preventDefault()} >
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
                return (
                  <Dropdown.Item 
                  eventKey={elem} 
                  key={idx} 
                  className="symbol-dropdown-item"
                  onSelect={(evtKey) => props.changeSymbol(evtKey)}
                  >
                    {elem}
                  </Dropdown.Item>
                )
              })} 
            </DropdownButton>
      </ButtonToolbar>
    </>
  )
}