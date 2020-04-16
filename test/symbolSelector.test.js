import SymbolSelector from '../client/src/symbolSelector.jsx';

describe('<SymbolSelector/> Component', () => {

  const props = {
    symbols: ['XBTUSD', 'ETHUSD'],
    activeSymbol: 'XBTUSD'
  };

  const wrapper = shallow(<SymbolSelector {...props}/>);
  const event = {
    preventDefault: () => {},
    onSelect: () => {}
  };
  const spyPreventDefault = jest.spyOn(event, 'preventDefault');
  const spyOnSelect = jest.spyOn(event, 'onSelect');

  it('should render one <DropdownButton/>', () => {
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });

  it('should prevent default onMouseDown', () => {
    wrapper.find('ButtonToolbar').simulate('mousedown', event);
    expect(spyPreventDefault).toHaveBeenCalled();
  });

  it('should prevent default onMouseDown', () => {
    wrapper.find('ButtonToolbar').simulate('mouseup', event);
    expect(spyPreventDefault).toHaveBeenCalled();
  });

  it('should call changeSymbol method when clicked', () => {
    wrapper.find('DropdownItem').first().simulate('click', event);
    expect(spyOnSelect).toHaveBeenCalled();
    // console.log(`DEBUG --> ${wrapper.debug()}`);
  });

});