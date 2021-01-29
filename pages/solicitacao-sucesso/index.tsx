import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';

import { UserContext, DataContext } from '../../context';

import styles from './sucesso.module.css';

const mask = (value: number) => {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
};

const Sucesso: React.FC = () => {
  const router = useRouter();
  const { oneClient } = useContext(UserContext);
  const { selectedLine, loanAmount } = useContext(DataContext);

  const goDetails = () => {
    router.push('/detalhes-solicitacao');
  };

  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        <section className={styles.container_success}>
          <h1 className={styles.title_page}>
            Solicitação Realizada com Sucesso!
          </h1>
          <p>Resumo da Solicitação</p>

          <section className={styles.request_info}>
            <div className={styles.request_item}>
              <p className={styles.request_item_text}>{oneClient.name}</p>
              <div className={styles.box_request_item}>
                <span className={styles.request_item_text}>
                  {oneClient.phone}
                </span>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>
            </div>

            <div className={styles.request_item}>
              <p className={styles.request_item_title}>Taxa de Juros</p>
              <div className={styles.box_request_item}>
                <span className={styles.request_item_qtd}>
                  {selectedLine?.item?.installmentInterest}%
                </span>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>
            </div>

            <div className={styles.request_item}>
              <div className={styles.box_request_item}>
                <img src='icons/ios-card.svg' alt='card' />
                <p className={styles.request_item_text}>4327</p>
                <p className={styles.request_item_card}>VISA</p>
                <p className={styles.request_item_text}>
                  {oneClient?.card?.validate}
                </p>
              </div>
              <span
                style={{ color: '#228a95', fontSize: 30 }}
                className='ion-checkmark'
              />
            </div>

            <div className={styles.request_item}>
              <p className={styles.request_item_title}>Parcelas:</p>
              <div className={styles.box_request_item}>
                <span className={styles.request_item_qtd}>
                  {selectedLine?.item?.installments}
                </span>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>
            </div>

            <div className={styles.request_item}>
              <p className={styles.request_item_title}>Valor desejado:</p>
              <div className={styles.box_request_item}>
                <span className={styles.request_item_value}>
                  {mask(loanAmount)}
                </span>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>
            </div>

            <div className={styles.request_item}>
              <p className={styles.request_item_title}>Valor da Parcela:</p>
              <div className={styles.box_request_item}>
                <span className={styles.request_item_value}>
                  {mask(selectedLine?.item?.installmentValue || 0)}
                </span>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>
            </div>
          </section>
          <div className={styles.center}>
            <div className={styles.request_item}>
              <p className={styles.request_item_title}>
                Valor Total do Empréstimo:
              </p>
              <div className={styles.box_request_item}>
                <span className={styles.request_item_value}>
                  {mask(selectedLine?.item?.fullValue || 0)}
                </span>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>
            </div>
            <button
              type='button'
              onClick={goDetails}
              className={styles.button_main}
            >
              Detalhe da Solicitação
            </button>
            <span className={styles.warning_request}>
              O CredFica avaliará a solicitação.
            </span>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sucesso;
