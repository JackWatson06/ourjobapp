import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import axios from "axios";
import '../styles/globals.css'

config.autoAddCss = false;
axios.defaults.baseURL = 'http://localhost:8080/api/v1/';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
