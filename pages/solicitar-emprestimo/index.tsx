import { Layout, Input } from '../../components';
import styles from './solicitar.module.css';

const Solicitar: React.FC = () => {
  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        <h1>Busque o Cliente</h1>
        <section className={styles.input_container}>
          <Input second placeholder='XXX.XXX.XXX-XX' type='text' />
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
