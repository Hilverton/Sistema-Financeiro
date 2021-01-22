import type { AppProps } from 'next/app';
import { DataProvider, UserProvider } from '../context';
import '../public/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </DataProvider>
  );
};
export default MyApp;
