import { useState, ChangeEvent } from 'react';
import { Layout, Input, Table } from '../components';

import api from '../api.json';
import { moneyMask, formattedNumber } from '../utils';

import styles from './index.module.css';

const IndexPage: React.FC = () => {
  const [text, setText] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [dataTable, setDataTable] = useState<DataTable>();
  const [selectedLine, setSelectedLine] = useState<SelectedLineType>();
  const [errorInput, setErrorInput] = useState('');

  const handleClick = () => {
    const value = text.replace('R$ ', '').replace('.', '').replace(',', '');
    const newValue = `${value.slice(0, value.length - 2)}.${value.slice(
      value.length - 2,
    )}`;
    const newV = parseFloat(newValue);

    if (newV >= 300 && newV <= 10000) {
      setShowTable(true);
      setErrorInput('');
    } else {
      setErrorInput('Valor permitido entre R$ 300,00 e R$ 10.000,00');
      setShowTable(false);
    }
  };

  return (
    <Layout title='Solicitação de Taxas'>
      <section className={styles.container}>
        <h1 className={styles.title}>Valor Desejado</h1>
        <div className={styles.box_input}>
          <div>
            <Input
              type='text'
              placeholder='R$ 0,00'
              className={styles.input}
              value={moneyMask(text)}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setText(event.currentTarget.value)
              }
            />
            <span className={styles.warning}>{errorInput}</span>
          </div>
          <button type='button' className={styles.button} onClick={handleClick}>
            Calcular
          </button>
        </div>
        {showTable &&
          api.rateTable.map((table) => (
            <Table
              key={table.id}
              name={table.name}
              installments={table.installments}
              setChange={setDataTable}
              setChangeLine={setSelectedLine}
              selectedLine={selectedLine}
            />
          ))}
        {showTable && (
          <footer className={styles.footer}>
            <p className={styles.info}>Nome: {dataTable?.nome}</p>
            <p className={styles.info}>Parcelas: {dataTable?.parcelas}</p>
            <p className={styles.info}>
              Valor da Parcela: {formattedNumber(dataTable?.valor || 0)}
            </p>
            <button
              type='button'
              className={styles.button}
              onClick={() => setShowTable(false)}
            >
              Avançar
            </button>
          </footer>
        )}
      </section>
    </Layout>
  );
};
export default IndexPage;
