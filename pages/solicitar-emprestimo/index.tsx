import { useState, ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout, Input } from '../../components';

import { UserContext, DataContext } from '../../context';

import styles from './solicitar.module.css';

import { cpfMask } from '../../utils';

const mask = (value: number) => {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
};

const Solicitar: React.FC = () => {
  const router = useRouter();
  const { findClient, oneClient, saveCard } = useContext(UserContext);
  const { selectedLine, loanAmount } = useContext(DataContext);
  const [cpfClient, setCpfClient] = useState('');
  const [firstSection, setFirstSection] = useState(true);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);
  const [fourthSection, setFourthSection] = useState(false);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [validate, setValidate] = useState('');
  const [cvc, setCvc] = useState('');

  const searchClient = () => {
    if (cpfClient !== '') findClient(cpfClient);
  };

  const click = () => {
    setFirstSection(false);
    setSecondSection(true);
  };

  const secondSectionClick = () => {
    setSecondSection(false);
    setThirdSection(true);
  };

  const onClickForm = () => {
    if (name !== '' && cardNumber !== '' && validate !== '' && cvc !== '') {
      saveCard(name, cardNumber, validate, cvc);
      setThirdSection(false);

      setFourthSection(true);
    }
  };

  const goDetails = () => {
    router.push('/detalhes-solicitacao');
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
                  onClick={click}
                  className={styles.button_main}
                >
                  Solicitar
                </button>
              </section>
            )}
          </>
        )}

        {secondSection && (
          <section className={styles.modality_section}>
            <h2>Escolha a modalidade:</h2>
            <div className={styles.modality_buttons}>
              <button
                type='button'
                onClick={secondSectionClick}
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
        )}

        {thirdSection && (
          <section className={styles.card_section}>
            <div className={styles.card_info}>
              <div className={styles.side}>
                <p className={styles.section_title}>
                  Insira os dados do Cartão:
                </p>
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
                  Atenção: As fotos devem estar legíveis, com todas as
                  informações visíveis do cartão.
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
        )}

        {fourthSection && (
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
                    {oneClient.card.validate}
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
        )}
      </div>
    </Layout>
  );
};

export default Solicitar;
