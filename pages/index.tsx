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

  return (
    <Layout title='Solicitação de Taxas'>
      <section className={styles.container}>
        <h1 className={styles.title}>Valor Desejado</h1>
        <div className={styles.box_input}>
          <Input
            type='text'
            placeholder='R$ 0,00'
            className={styles.input}
            value={moneyMask(text)}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setText(event.target.value)
            }
          />
          <button
            type='button'
            className={styles.button}
            onClick={() => setShowTable(true)}
          >
            Calcular
          </button>
        </div>
        {showTable &&
          api.rateTable.map((table) => (
            <Table
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
              Valor da Parcela: {formattedNumber(dataTable?.valor)}
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
