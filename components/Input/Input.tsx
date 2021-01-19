import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  second?: boolean;
};

const Input: React.FC<InputProps> = ({ second, ...props }) => {
  if (second) return <input className={styles.input_secondary} {...props} />;
  return <input className={styles.input_primary} {...props} />;
};

export default Input;
