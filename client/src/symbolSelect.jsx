import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function SymbolSelector({direction}) {
  return (
    <>
      {/* <ButtonToolbar>
        <DropdownButton
          drop={direction}
          variant="secondary"
          title={`Select Contract`}
          id={`dropdown-button-drop-${direction}`}
          key={direction}
        >
          <Dropdown.Item eventKey="1">XBTUSD</Dropdown.Item>
          <Dropdown.Item eventKey="2">ETHUSD</Dropdown.Item>
          <Dropdown.Item eventKey="3">ETHXBT</Dropdown.Item>
        </DropdownButton>
      </ButtonToolbar> */}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
};