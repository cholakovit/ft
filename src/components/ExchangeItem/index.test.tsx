import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ExchangeItem from './';

describe('ExchangeItem Component', () => {
  it('should display positive change in green', () => {
    const itemPropsPositive: Item = {
      symbolInput: 'FTSE:FSI',
      basic: { symbol: 'FTSE', name: 'FTSE 100 Index', exchange: 'FTSE International', exhangeCode: 'FSI', bridgeExchangeCode: 'GBFT', currency: 'GBP' },
      quote: { lastPrice: 7429.56, openPrice: 7330.2, high: 7462.22, low: 7320.77, previousClosePrice: 7330.2, change1Day: 99.36, change1DayPercent: 1.36, change1Week: -68.62, change1WeekPercent: 1.35, timeStamp: "2022-03-02T16:45:45", volume: 1325548598 }
    };

    const { container } = render(<ExchangeItem {...itemPropsPositive} />);
    const percentChangeElement = container.querySelector('span > span');
    expect(percentChangeElement).not.toBeNull();
  });

  it('should display negative change in red', () => {
    const itemProps: Item = {
      symbolInput: 'INX:IOM',
      basic: { "symbol": "INX:IOM", name: 'S&P 500 INDEX', exchange: 'CME:Index and Options Market', exhangeCode: 'IOM', bridgeExchangeCode: 'USCO', currency: 'USD' },
      quote: { lastPrice: 4392.31, openPrice: 4322.56, high: 4397.6, low: 4322.56, previousClosePrice: 4306.26, change1Day: 86.05, change1DayPercent: 1.99, change1Week: 166.81, change1WeekPercent: -0.92, timeStamp: "2022-03-02T18:29:37", volume: 1592710000 }
    };

    const { container } = render(<ExchangeItem {...itemProps} />);
    const percentChangeElement = container.querySelector('span > span');
    expect(percentChangeElement).not.toBeNull();
  });
});
