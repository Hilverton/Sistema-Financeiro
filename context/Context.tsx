import { useState, createContext, useEffect } from 'react';

import api from '../api.json';

const DEFAULT_VALUE = {
  rateTable: api.rateTable,
  selectedLine: { name: '', id: 0 },
};

export const DataContext = createContext<PropsContext>({} as PropsContext);

export const DataProvider: React.FC = ({ children }) => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [rateTable, setRateTable] = useState(api.rateTable);
  const [selectedLine, setSelectedLine] = useState(DEFAULT_VALUE.selectedLine);

  const makeTable = () => {
    const updatedTable = rateTable.map((tableItem: RateTable) => {
      tableItem.installments.map((item: Installments) => {
        const percent = item.installmentInterest / 100;
        const pow = (1 + percent) ** item.installments;

        item.installmentValue = loanAmount * ((pow * percent) / (pow - 1));
        item.fullValue = item.installmentValue * item.installments;
        item.comission = item.fullValue - loanAmount;
        return item;
      });
      return tableItem;
    });
    setRateTable(updatedTable);
  };

  useEffect(() => {
    makeTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanAmount]);

  const saveLoanAmount = (value: number) => {
    setLoanAmount(value);
  };

  const saveSelectedLine = (name: string, id: number) => {
    setSelectedLine({ name, id });
  };

  return (
    <DataContext.Provider
      value={{
        loanAmount,
        rateTable,
        selectedLine,
        makeTable,
        saveSelectedLine,
        saveLoanAmount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
