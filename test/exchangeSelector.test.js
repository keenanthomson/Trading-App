import ExchangeSelector from '../client/src/exchangeSelector.jsx';

describe('<ExchangeSelector /> rendering', () => {
  it('should render one <DropdownButton>', () => {
    const elementProps = {
      exchanges: ['Bitmex', 'ByBit'],
      activeExchange: 'Bitmex',
    }
    const wrapper = shallow(<ExchangeSelector {...elementProps} /> );
    expect(wrapper.find('DropdownButton')).toHaveLength(1);
  });
});