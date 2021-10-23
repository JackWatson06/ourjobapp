// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Axios
import axios from "axios";

// Style
import '@styles/globals.css'

config.autoAddCss = false;
axios.defaults.baseURL = 'http://localhost:8080/api/v1/';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
