import { useState, ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout, Input } from '../../components';

import { UserContext } from '../../context';

import styles from './solicitar.module.css';

import { cpfMask } from '../../utils';

const Solicitar: React.FC = () => {
  const router = useRouter();
  const { findClient, oneClient } = useContext(UserContext);
  const [cpfClient, setCpfClient] = useState('');

  const searchClient = () => {
    if (cpfClient !== '') findClient(cpfClient);
  };

  const onClick = () => {
    router.push('/modalidade');
  };

  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        <h1 className={styles.title_page}>Busque o Cliente</h1>
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
          <button
            className={styles.button}
            onClick={searchClient}
            type='button'
          >
            Buscar
          </button>
        </section>

        {oneClient?.name?.length > 0 && (
          <section className={styles.client}>
            <p className={styles.title}>Cliente encontrado:</p>
            <p className={styles.cpf}>{cpfMask(oneClient.cpf || '')}</p>
            <p className={styles.name}>{oneClient.name}</p>
            <button
              type='button'
              onClick={onClick}
              className={styles.button_main}
            >
              Solicitar
            </button>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Solicitar;
