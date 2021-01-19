import { useState, ChangeEvent } from 'react';
import { Layout, Input } from '../../components';

import styles from './solicitar.module.css';

import { cpfMask } from '../../utils';

const Solicitar: React.FC = () => {
  const [cpfClient, setCpfClient] = useState('');
  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        <h1>Busque o Cliente</h1>
        <section className={styles.input_container}>
          <Input
            second
            placeholder='XXX.XXX.XXX-XX'
            type='text'
            value={cpfClient}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCpfClient(cpfMask(event.target.value))
            }
          />
          <button className={styles.button} type='button'>
            Buscar
          </button>
        </section>
        <section className={styles.client}>
          <p className={styles.title}>Cliente encontrado:</p>
          <p className={styles.cpf}>074.119.055-93</p>
          <p className={styles.name}>Lara Test</p>
          <button type='button'>Solicitar</button>
        </section>
      </div>
    </Layout>
  );
};

export default Solicitar;
