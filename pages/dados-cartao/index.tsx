import { useState, ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';

import { UserContext } from '../../context';

import styles from './dados.module.css';

const DadosCartao: React.FC = () => {
  const router = useRouter();
  const { saveCard } = useContext(UserContext);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [validate, setValidate] = useState('');
  const [cvc, setCvc] = useState('');

  const onClickForm = () => {
    if (name !== '' && cardNumber !== '' && validate !== '' && cvc !== '') {
      saveCard(name, cardNumber, validate, cvc);
      router.push('/solicitacao-sucesso');
    }
  };

  return (
    <Layout title='Solicitar Empréstimo'>
      <div className={styles.container}>
        <section className={styles.card_section}>
          <div className={styles.card_info}>
            <div className={styles.side}>
              <p className={styles.section_title}>Insira os dados do Cartão:</p>
              <input
                placeholder='Lara B Esquivel'
                name='name'
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setName(event.target.value)
                }
              />
              <input
                placeholder='000000000000'
                name='cardNumber'
                value={cardNumber}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setCardNumber(event.target.value)
                }
              />
              <input
                placeholder='Data de Validade'
                name='validate'
                value={validate}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setValidate(event.target.value)
                }
              />
              <input
                placeholder='CVC'
                name='cvc'
                value={cvc}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setCvc(event.target.value)
                }
              />
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
                Atenção: As fotos devem estar legíveis, com todas as informações
                visíveis do cartão.
              </p>
            </div>
          </div>
          <button
            type='button'
            onClick={onClickForm}
            className={styles.button_main}
          >
            Continuar
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default DadosCartao;
