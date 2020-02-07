import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SymbolSelector(props) {
  return (
    <>
      <ButtonToolbar>
          <DropdownButton
            drop={'down'}
            variant="secondary"
            title={props.activeExchange}
            id={`dropdown-button-drop-down`}
            className="symbol-dropdown"
            key={1}
            alignRight
          >
            {props.exchanges.map((elem, idx) => {
              return <Dropdown.Item eventKey={idx} key={idx} className="symbol-dropdown-item">{elem}</Dropdown.Item>
            })} 
          </DropdownButton>
      </ButtonToolbar>
    </>
  )
};