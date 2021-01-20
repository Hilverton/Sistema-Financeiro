import { useState, ChangeEvent } from 'react';
import { Layout, Input, Table } from '../components';

import api from '../api.json';

import styles from './index.module.css';

import { moneyMask } from '../utils';

const IndexPage: React.FC = () => {
  const [text, setText] = useState('');
  const [showTable, setShowTable] = useState(false);

  return (
    <Layout title='Solicitação de Taxas'>
      <section className={styles.container}>
        <h1 className={styles.title}>Valor Desejado</h1>
        <div className={styles.box_input}>
          <Input
            type='text'
            placeholder='R$ 0,00'
            className={styles.input}
            value={text}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setText(moneyMask(event.target.value))
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
            <Table name={table.name} installments={table.installments} />
          ))}
        {showTable && (
          <footer className={styles.footer}>
            <p className={styles.info}>Nome: </p>
            <p className={styles.info}>Parcelas: </p>
            <p className={styles.info}>Valor da Parcela: </p>
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
