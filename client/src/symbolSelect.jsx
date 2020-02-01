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
            title={props.symbol}
            id={`dropdown-button-drop-down`}
            key={1}
          >
            <Dropdown.Item eventKey="1">XBTUSD</Dropdown.Item>
            <Dropdown.Item eventKey="2">ETHUSD</Dropdown.Item>
            <Dropdown.Item eventKey="3">ETHXBT</Dropdown.Item>
          </DropdownButton>
      </ButtonToolbar>
    </>
  )
};