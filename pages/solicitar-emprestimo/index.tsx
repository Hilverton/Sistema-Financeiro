import { useState, ChangeEvent } from 'react';
import { Layout, Input } from '../../components';

import styles from './solicitar.module.css';

import { cpfMask } from '../../utils';

const Solicitar: React.FC = () => {
  const [cpfClient, setCpfClient] = useState('');
  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        {false && (
          <>
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
              <button className={styles.button} type='button'>
                Buscar
              </button>
            </section>

            <section className={styles.client}>
              <p className={styles.title}>Cliente encontrado:</p>
              <p className={styles.cpf}>074.119.055-93</p>
              <p className={styles.name}>Lara Test</p>
              <button type='button' className={styles.button_main}>
                Solicitar
              </button>
            </section>
          </>
        )}

        <section className={styles.modality_section}>
          <h2>Escolha a modalidade:</h2>
          <div className={styles.modality_buttons}>
            <button type='button' className={styles.button_main}>
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

        {false && (
          <section className={styles.container_success}>
            <h1 className={styles.title_page}>
              Solicitação Realizada com Sucesso!
            </h1>
            <p>Resumo da Solicitação</p>

            <section className={styles.request_info}>
              <div className={styles.request_item}>
                <p className={styles.request_item_text}>João Paulo Guedes</p>
                <div className={styles.box_request_item}>
                  <span className={styles.request_item_text}>71 9988-7766</span>
                  <span
                    style={{ color: '#228a95', fontSize: 30 }}
                    className='ion-checkmark'
                  />
                </div>
              </div>

              <div className={styles.request_item}>
                <p className={styles.request_item_title}>Taxa de Juros</p>
                <div className={styles.box_request_item}>
                  <span className={styles.request_item_qtd}>12%</span>
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
                  <p className={styles.request_item_text}>02/24</p>
                </div>
                <span
                  style={{ color: '#228a95', fontSize: 30 }}
                  className='ion-checkmark'
                />
              </div>

              <div className={styles.request_item}>
                <p className={styles.request_item_title}>Parcelas:</p>
                <div className={styles.box_request_item}>
                  <span className={styles.request_item_qtd}>12</span>
                  <span
                    style={{ color: '#228a95', fontSize: 30 }}
                    className='ion-checkmark'
                  />
                </div>
              </div>

              <div className={styles.request_item}>
                <p className={styles.request_item_title}>Valor desejado:</p>
                <div className={styles.box_request_item}>
                  <span className={styles.request_item_value}>R$ 7.200,00</span>
                  <span
                    style={{ color: '#228a95', fontSize: 30 }}
                    className='ion-checkmark'
                  />
                </div>
              </div>

              <div className={styles.request_item}>
                <p className={styles.request_item_title}>Valor da Parcela:</p>
                <div className={styles.box_request_item}>
                  <span className={styles.request_item_value}>R$433,33</span>
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
                  <span className={styles.request_item_value}>R$ 7.200,00</span>
                  <span
                    style={{ color: '#228a95', fontSize: 30 }}
                    className='ion-checkmark'
                  />
                </div>
              </div>
              <button type='button' className={styles.button_main}>
                Detalhe da Solicitação
              </button>
              <span className={styles.warning_request}>
                O CredFica avaliará a solicitação.
              </span>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Solicitar;
