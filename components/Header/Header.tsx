import styles from './header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <span
      style={{
        position: 'absolute',
        left: 20,
        fontSize: 40,
        top: 'auto',
        color: 'white',
      }}
      className='ion-android-menu'
    />
    <img src='icons/logo.svg' alt='logo' />
  </header>
);

export default Header;
