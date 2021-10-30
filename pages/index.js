import * as affTrack from "@lib/affiliate/AffiliateTracker"

import Head from 'next/head'

import Column from '@templates/column'
import HeaderMedium from "@atoms/text/header-md"
import LinkButton from "@molecules/link-button"

/**
 * This will render a page on the route https://unijob.app OR https://unijob.app/index
 * @param {object} props Properties we are passing into this home page
 * @returns An instance of the home page.
 */
export default function Index(props)
{

    const affiliateData = affTrack.ReadCookie()
    let headerText = "Welcome to OurJob.App! Are you looking to..."

    if(affiliateData != undefined)
    {
        headerText = `Welcome to ${affiliateData.name}'s link! Are you looking to...`
    }

    const content = <>
        <HeaderMedium title={headerText}/> 

        <br />
        <br />

        <LinkButton title="Share for charity" link="/sharer" />

        <LinkButton title="Find a job" link="/employee" />
        <LinkButton title="Find candidates" link="/employer" />

    </>



    return <>
        {/* SEO Header Tags */}
        <Head>
            <title>Welcome to OurJob.App Signup as a candidate, employer, or sharer today!</title>
        </Head>

        <Column content={content} />
    </>
}