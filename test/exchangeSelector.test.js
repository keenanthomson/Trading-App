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
    const event = jest.spyOn(ExchangeSelector.prototype, 'preventDefault');
    wrapper.find('button').simulate('onmousedown');
    expect(event).toHaveBeenCalled();
  });

});