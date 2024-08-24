import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/Nav/NavBar';
import '../styles/TrendingBox.css';
import '../styles/globals.css';
import '../styles/SportDropDown.css';
import '../styles/PlayerPage.css';
import '../styles/Combo.css';
import { GlobalContextProvider } from '../Context/store'
import Head from 'next/head';
import { ComboBtn } from '../components/Combo/ComboBtn';
import { PopUp } from '../components/Combo/PopUp';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <Head>
          <title>Sports Stats</title>
          <meta name="ahrefs-site-verification" content="881627b9cdfce1e5ef0a890ec7d5477594ec45471d470d5eeaadea5976b61433" />
          <meta name="description" content="NBA, MLB, NFL, NHL, and Esports stats tracking" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/taskBarLogo.svg" />
        </Head>

        <NavBar />

        <Component {...pageProps} />

        <ComboBtn />
        <PopUp />

        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
