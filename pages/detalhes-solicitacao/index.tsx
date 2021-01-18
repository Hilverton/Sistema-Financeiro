import { Layout } from '../../components';

import styles from './detalhes.module.css';

const Detalhe: React.FC = () => {
  return (
    <Layout title='Detalhe de Solicitação'>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.type}>
            <p className={styles.type_title}>
              Solicitação gerada por <strong>Sistema Credfica</strong>
            </p>
          </div>
          <div className={styles.details}>
            <div className={styles.cont_value}>
              <p className={styles.text_value}>Valor Total</p>
              <p className={styles.value}>R$ 6.000,00</p>
            </div>
            <div className={styles.cont_value}>
              <p className={styles.text_value}>Valor a depositar</p>
              <p className={styles.value}>R$ 6.000,00</p>
            </div>

            <div className={styles.card_details}>
              <p className={styles.text_card}>Frente do cartão</p>
              <img
                className={styles.card_document}
                src='icons/ios-document.svg'
                alt=''
              />
              <p className={styles.card_link}>Ver Comprovante</p>
            </div>

            <div className={styles.card_details}>
              <p className={styles.text_card}>Frente do cartão</p>
              <img
                className={styles.card_document}
                src='icons/ios-document.svg'
                alt=''
              />
              <p className={styles.card_link}>Ver Comprovante</p>
            </div>

            <div className={styles.card_details}>
              <p className={styles.text_card}>Frente do cartão</p>
              <img
                className={styles.card_document}
                src='icons/ios-document.svg'
                alt=''
              />
              <p className={styles.card_link}>Ver Comprovante</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.type}>
            <p className={styles.type_title}>
              Fluxo da Solicitação: <strong>Manual</strong>
            </p>
          </div>

          <div className={styles.modality}>
            <p className={styles.title_info}>Modalidade:</p>
            <p className={styles.data}>
              Cartão de Crédito
              <img
                className={styles.card}
                src='icons/ios-card.svg'
                alt='cartao credito'
              />
            </p>
            <p className={styles.data}>Número do cartão: 5252 0565 6526 6552</p>
            <p className={styles.data}>Agência: 1235</p>
            <p className={styles.data}>
              Banco: 029 - Banco Itaú Consignado S.A.
            </p>
            <p className={styles.data}>Tipo de Conta: Poupança</p>
            <p className={styles.data}>Tabela: Tabela padrão</p>
          </div>
          <div className={styles.customer_info}>
            <p className={styles.title_info}>Informações do Cliente:</p>

            <p className={styles.data}>Nome: Lara B Esquível</p>
            <p className={styles.data}>CPF: 866.666.965.87</p>
            <p className={styles.data}>Agência: 1235</p>
            <p className={styles.data}>
              Banco: 029 - Banco Itaú Consignado S.A.
            </p>
            <p className={styles.data}>Tipo de Conta: Poupança</p>
            <p className={styles.data}>Número da Conta: 222245</p>
          </div>
          <div className={styles.general_info}>
            <p className={styles.title_info}>Informações Gerais:</p>
            <p className={styles.data}>Data: 09/03/2020</p>
            <div className={styles.buttons_container}>
              <button type='button' className={styles.button_waiting}>
                <img
                  className={styles.icon}
                  src='icons/alert.svg'
                  alt='icone aguardando'
                />
                Aguardando
              </button>
              <div className={styles.secondary_buttons_container}>
                <button type='button' className={styles.pre_approved_button}>
                  <img
                    className={styles.icon}
                    src='icons/checkmark-circle.svg'
                    alt='icone aguardando'
                  />
                  Pré Aprovar
                </button>
                <button type='button' className={styles.repproved_button}>
                  <img
                    className={styles.icon}
                    src='icons/alert.svg'
                    alt='icone aguardando'
                  />
                  Reprovar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Detalhe;
