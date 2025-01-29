import '@/styles/globals.css';
import '@/styles/modal.css';
import type { AppProps } from 'next/app';
import QuickAccess from '@/components/QuickAccess';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <QuickAccess />
    </>
  );
}

export default MyApp;
