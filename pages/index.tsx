import Head from 'next/head';
import HomePage from '../components/Home/HomePage';
import { useBeforeunload } from 'react-beforeunload';

export default function Home() {
  useBeforeunload(() => '');
  //
  return (
    <>
      <Head>
        <title>Go Web Test</title>
        <meta
          name='description'
          content='Test Pour GoWeb par Maxime KERLIDOU'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/Logo.svg' />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
