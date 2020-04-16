import SymbolSelector from '../client/src/symbolSelector.jsx';

describe('<SymbolSelector/> Component', () => {

  const changeSymbol = jest.fn();
  const event = {
    preventDefault: jest.fn()
  };
  const props = {
    symbols: ['XBTUSD', 'ETHUSD'],
    activeSymbol: 'XBTUSD',
    changeSymbol
  };
  const wrapper = shallow(<SymbolSelector {...props}/>);
  const spyPreventDefault = jest.spyOn(event, 'preventDefault');
  // const spyOnSelect = jest.spyOn(event, 'onSelect');

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
    wrapper.find('DropdownItem').first().simulate('click');
    expect(props.changeSymbol).toHaveBeenCalled();
  });

});