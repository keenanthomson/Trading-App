import ExchangeSelector from '../client/src/exchangeSelector.jsx';

const elementProps = {
  exchanges: ['Bitmex', 'ByBit'],
  activeExchange: 'Bitmex',
}
const wrapper = shallow(<ExchangeSelector {...elementProps} /> );

describe('<ExchangeSelector/> Component', () => {
  it('should render one <DropdownButton>', () => {
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });

  it('should prevent default onMouseEnter/Leave', () => {
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.simulate("onmousedown");
    expect(wrapper.event.preventDefault).toHaveBeenCalled();
  });

});