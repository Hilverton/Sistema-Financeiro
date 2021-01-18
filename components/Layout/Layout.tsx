import { ReactNode } from 'react';
import Head from 'next/head';

import Header from '../Header';
import SubHeader from '../SubHeader';

import styles from './layout.module.css';

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>Sistema Financeiro</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='stylesheet'
        href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
      />
    </Head>
    <Header />
    <div className={styles.container}>
      <SubHeader title={title} />
      {children}
    </div>
  </>
);

export default Layout;
