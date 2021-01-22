import { useRouter } from 'next/router';
import { Layout } from '../../components';

import styles from './modalidade.module.css';

const Modalidade: React.FC = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/dados-cartao');
  };

  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        <section className={styles.modality_section}>
          <h2>Escolha a modalidade:</h2>
          <div className={styles.modality_buttons}>
            <button
              type='button'
              onClick={onClick}
              className={styles.button_main}
            >
              Cartão de Crédito
            </button>
            <p>Ou</p>
            <button
              type='button'
              disabled
              className={styles.button_main_disabled}
            >
              Crédito Consignado
            </button>
            <span>Em Breve</span>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Modalidade;
