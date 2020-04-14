import SymbolSelector from '../client/src/symbolSelector.jsx';

describe('<SymbolSelector/> Component', () => {

  const props = {
    symbols: ['XBTUSD', 'ETHUSD'],
    activeSymbol: 'XBTUSD'
  };

  const wrapper = shallow(<SymbolSelector {...props}/>);
  const event = {
    preventDefault: () => {}
  };
  const spy = jest.spyOn(event, 'preventDefault');

  it('should render one <DropdownButton/>', () => {
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });

  it('should prevent default onMouseDown', () => {
    wrapper.find('ButtonToolbar').simulate('mousedown', event);
    expect(spy).toHaveBeenCalled();
  });

  it('should prevent default onMouseDown', () => {
    wrapper.find('ButtonToolbar').simulate('mouseup', event);
    expect(spy).toHaveBeenCalled();
  });

});