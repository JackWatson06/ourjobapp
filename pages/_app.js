// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Axios
import axios from "axios";

// Style
import '@styles/globals.css'

config.autoAddCss = false;
axios.defaults.baseURL = 'http://localhost:8080/api/v1/';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '@lib/api/GoogleAnalyticsApi'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} />
}

export default MyApp
