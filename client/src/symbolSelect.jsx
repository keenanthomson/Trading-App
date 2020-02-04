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
            key={1}
          >
            {props.exchanges.map((elem, idx) => {
              return <Dropdown.Item eventKey={idx} key={idx}>{elem}</Dropdown.Item>
            })} 
          </DropdownButton>
      </ButtonToolbar>
    </>
  )
};