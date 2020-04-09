import SymbolSelector from '../client/src/symbolSelector.jsx';

describe('<SymbolSelector/> Component', () => {

  const props = {
    symbols: ['XBTUSD', 'ETHUSD'],
    activeSymbol: 'XBTUSD'
  };

  const wrapper = shallow(<SymbolSelector {...props}/>);
  const 

  it('should render one <DropdownButton/>', () => {
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });

  it('should prevent default onMouseDown', () => {
    
  })

});