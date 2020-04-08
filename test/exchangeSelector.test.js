import ExchangeSelector from '../client/src/exchangeSelector.jsx';

describe('<ExchangeSelector/> Component', () => {

  const elementProps = {
    exchanges: ['Bitmex', 'ByBit'],
    activeExchange: 'Bitmex',
  }
  const wrapper = shallow(<ExchangeSelector {...elementProps}/> );
  const event = { preventDefault: () => {} };
  const spy = jest.spyOn(event, 'preventDefault');

  it('should render one <DropdownButton>', () => {
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });

  it('should prevent default onMouseDown', () => {
    wrapper.find('ButtonToolbar').simulate('mouseDown', event);
    expect(spy).toHaveBeenCalled();
  });

  it('should prevent default onMouseUp', () => {
    wrapper.find('ButtonToolbar').simulate('mouseUp', event);
    expect(spy).toHaveBeenCalled();
  });

});