import Head from 'next/head'

import Column from "@templates/column"
import HeaderMedium from "@atoms/text/header-md"
import LinkButton from "@molecules/link-button"

/**
 * This will render a page on the route https://unijob.app/affiliate
 * @param {object} props Properties we are passing into this affiliate page
 * @returns An instance of the affiliate page.
 */
export default function SignupPage(props)
{
    const message = <>
        <HeaderMedium title="Congratulations! Your link is on the way. Check your email inbox." />
        <LinkButton title="Return to Homepage" link="/" />
    </>

    return <>

        <Head>
            <title>Verify you email!</title>
        </Head>

        <Column content={message} />
    </>
}