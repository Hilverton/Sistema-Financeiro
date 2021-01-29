import { formattedNumber } from '../../utils';

import styles from './table.module.css';

const Table: React.FC<TableProps> = ({
  name,
  installments,
  selectedLine,
  setChangeLine,
}) => {
  const handleClick = (nome: string, item: Installments) => {
    setChangeLine(nome, item);
  };

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
          {installments.map((item: Installments) => {
            const color =
              selectedLine?.name === name && selectedLine?.item?.id === item.id
                ? styles.td_color
                : styles.td;

            return (
              <tr
                key={item.id}
                onClick={() => handleClick(name, item)}
                className={styles.table_row}
              >
                <td className={color}>{item.installments}</td>
                <td className={color}>{item.installmentInterest}%</td>
                <td className={color}>
                  {formattedNumber(item.installmentValue)}
                </td>
                <td className={color}>{formattedNumber(item.fullValue)}</td>
                <td className={color}>{formattedNumber(item.comission)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
