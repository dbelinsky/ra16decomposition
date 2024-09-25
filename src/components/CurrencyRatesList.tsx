import React from 'react';
import CurrencyRate from './CurrencyRate';

/**
 * Отображение валюты и нефти
 */

const CurrencyRatesList: React.FC = () => {
  const currencyRates = [
    { currencyName: 'USD MOEX', rate: 55.55, yesterdayRate: 55.55 },
    { currencyName: 'EUR MOEX', rate: 66.66, yesterdayRate: 66.66 },
    { currencyName: 'Нефть', rate: 77.77, yesterdayRate: 77.77 },
  ];

  return (
    <div className='currency-rate'>
      {currencyRates.map((currency, index) => (
        <CurrencyRate key={index} {...currency} />
      ))}
    </div>
  );
};

export default CurrencyRatesList;