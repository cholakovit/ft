import React from 'react'
import './style.css'

const ExchangeItem: React.FC<Item> = ({ symbolInput, basic, quote }) => {
  const className = quote.change1WeekPercent >= 0 ? 'exGreen' : 'exRed';
  return (
    <li key={symbolInput}>
      <span>
        {basic.name.replace(/ index$/i, '')}
        <span className={className}>
          {quote.change1WeekPercent.toFixed(2)}%
        </span>
      </span>
    </li>
  );
};

export default React.memo(ExchangeItem);