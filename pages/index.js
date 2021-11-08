
import Head from 'next/head'

import PrimaryNavigation from '@molecules/navigation/primary-navigation'
import Header from '@organisms/header'
import Signup from '@organisms/signup'
import Footer from '@organisms/footer'
import Description from '@organisms/description'

/**
 * This will render a page on the route https://unijob.app OR https://unijob.app/index
 * @param {object} props Properties we are passing into this home page
 * @returns An instance of the home page.
 */
export default function Index(props)
{
    return <>
        {/* SEO Header Tags */}
        <Head>
            <title>Welcome to OurJob.App Signup as a candidate, employer, or sharer today!</title>
            <link rel="preload" as="image" href="/images/sharer-graphic.jpg"/>
        </Head>

        <Header navigation={ <PrimaryNavigation/> } />
        <Signup />
        <Description />
        <Footer />
    </>
}