import styles from './table.module.css';

const formattedNumber = (number: number): string => {
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

type Installments = {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
};

type TableProps = {
  name: string;
  installments: Installments[];
};

const Table: React.FC<TableProps> = ({ name, installments }) => {
  return (
    <>
      <div className={styles.container}>
        <h2>{name}</h2>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Parcela</th>
            <th>Juros da Parcela</th>
            <th>Valor Parcela</th>
            <th>Valor Total</th>
            <th>Comissão Parceiro</th>
          </tr>
        </thead>
        <tbody>
          {installments.map((item: Installments) => (
            <tr key={item.id}>
              <td className={styles.td}>{item.installments}</td>
              <td className={styles.td}>{item.installmentInterest}%</td>
              <td className={styles.td}>
                {formattedNumber(item.installmentValue)}
              </td>
              <td className={styles.td}>{formattedNumber(item.fullValue)}</td>
              <td className={styles.td}>{formattedNumber(item.comission)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
