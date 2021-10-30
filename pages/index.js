
import Head from 'next/head'

import Column from '@templates/column'
import Header from "@atoms/text/header"
import Paragraph from "@atoms/text/paragraph"
import LinkButton from "@molecules/link-button"

/**
 * This will render a page on the route https://unijob.app OR https://unijob.app/index
 * @param {object} props Properties we are passing into this home page
 * @returns An instance of the home page.
 */
export default function Index(props)
{

    const content = <>
        <Header title="Index"/> 

        <LinkButton title="Share" link="/sharer" />
        <LinkButton title="Employee" link="/employee" />
        <LinkButton title="Candidate Pool" link="/employer" />

        <Paragraph text="Welcome to OurJob App please signup using the above buttons." />
    </>



    return <>
        {/* SEO Header Tags */}
        <Head>
            <title>Welcome to OurJob.App Signup as a candidate, employer, or sharer today!</title>
        </Head>

        <Column content={content} />
    </>
}