import Head from 'next/head'

import Column from "@templates/column"
import HeaderMedium from "@atoms/text/header-md"

/**
 * This will render a page on the route https://unijob.app/affiliate
 * @param {object} props Properties we are passing into this affiliate page
 * @returns An instance of the affiliate page.
 */
export default function AffiliatePage(props)
{
    const message = <HeaderMedium title="Congratulations! Your link is on the way. Check your email inbox." />

    return <>

        <Head>
            <title>Verify you email!</title>
        </Head>

        <Column content={message} />
    </>
}