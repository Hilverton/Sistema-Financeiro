import { useRouter } from 'next/router';
import styles from './subheader.module.css';

type SubHeaderProps = {
  title: string;
};

const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className={styles.subheader_container}>
      {router.pathname !== '/detalhes-solicitacao' && (
        <img
          className={styles.logo1}
          src='icons/plus-circle.svg'
          alt='plus-circle'
        />
      )}

      <img
        className={styles.logo2}
        src='icons/filing-secondary.svg'
        alt='filing-3'
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
export default SubHeader;
