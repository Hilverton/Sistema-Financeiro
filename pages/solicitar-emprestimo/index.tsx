import { useState, ChangeEvent, useContext } from 'react';
import { Layout, Input } from '../../components';

import { UserContext } from '../../context';

import styles from './solicitar.module.css';

import { cpfMask } from '../../utils';

const Solicitar: React.FC = () => {
  const { findClient, oneClient } = useContext(UserContext);
  const [cpfClient, setCpfClient] = useState('');
  const [firstSection, setFirstSection] = useState(true);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);

  const searchClient = () => {
    if (cpfClient !== '') findClient(cpfClient);
  };

  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        {firstSection && (
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
                  onClick={() => {
                    setFirstSection(false);
                    setSecondSection(true);
                  }}
                  className={styles.button_main}
                >
                  Solicitar
                </button>
              </section>
            )}
          </>
        )}
        {secondSection && (
          <section className={styles.card_section}>
            <div className={styles.card_info}>
              <div className={styles.side}>
                <p className={styles.section_title}>
                  Insira os dados do Cartão:
                </p>
                <input placeholder='Lara B Esquivel' />
                <input placeholder='000000000000' />
                <input placeholder='Data de Validade' />
                <input placeholder='CVC' />
              </div>
              <div className={styles.side}>
                <p className={styles.section_title}>
                  Faça o upload dos anexos do cartão:
                </p>
                <div className={styles.input_file}>
                  <p>Cartão de Crédito (Frente)</p>
                  <label htmlFor='file_input' className={styles.btn_default}>
                    Adicionar <input type='file' id='file_input' hidden />
                  </label>
                </div>
                <div className={styles.input_file}>
                  <p>Cartão de Crédito (Verso)</p>
                  <label htmlFor='file_input' className={styles.btn_default}>
                    Adicionar <input type='file' id='file_input' hidden />
                  </label>
                </div>
                <div className={styles.input_file}>
                  <p>Selfie com cartão de crédito</p>
                  <label htmlFor='file_input' className={styles.btn_default}>
                    Adicionar <input type='file' id='file_input' hidden />
                  </label>
                </div>
                <p className={styles.side_warning}>
                  Atenção: As fotos devem estar legíveis, com todas as
                  informações visíveis do cartão.
                </p>
              </div>
            </div>
            <button type='button' className={styles.button_main}>
              Continuar
            </button>
          </section>
        )}

        {thirdSection && (
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
        )}

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
