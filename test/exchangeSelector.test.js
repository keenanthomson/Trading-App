import ExchangeSelector from '../client/src/exchangeSelector.jsx';

describe('<ExchangeSelector/> Component', () => {

  const elementProps = {
    exchanges: ['Bitmex', 'ByBit'],
    activeExchange: 'Bitmex',
  }
  const wrapper = shallow(<ExchangeSelector {...elementProps}/> );

  it('should render one <DropdownButton>', () => {
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });

  it('should prevent default onMouseDown/Up', () => {
    const event = { preventDefault: () => {} };
    const spy = jest.spyOn(event, 'preventDefault');
    wrapper.find('ButtonToolbar').simulate('mouseDown', event);
    expect(spy).toHaveBeenCalled();
  });

});