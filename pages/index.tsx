import { useState } from 'react';
import { Layout } from '../components';

import styles from './index.module.css';

export const moneyMask = (value: string) => {
  let newValue = value.concat('');
  newValue = newValue.replace(/[\D]+/g, '');
  newValue += '';
  newValue = newValue.replace(/([0-9]{2})$/g, ',$1');

  if (newValue.length > 6) {
    newValue = newValue.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }
  if (newValue.length === 0) return '';
  return 'R$ '.concat(newValue);
};

const IndexPage: React.FC = () => {
  const [text, setText] = useState('');
  const [showTable, setShowTable] = useState(false);

  return (
    <Layout title='Solicitação de Taxas'>
      <section className={styles.container}>
        <h1 className={styles.title}>Valor Desejado</h1>
        <div>
          <input
            type='text'
            placeholder='R$ 0,00'
            className={styles.input}
            value={text}
            onChange={(event) => setText(moneyMask(event.target.value))}
          />
          <button
            type='button'
            className={styles.button}
            onClick={() => setShowTable(true)}
          >
            Calcular
          </button>
        </div>
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
