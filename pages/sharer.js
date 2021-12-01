
import Head from 'next/head'
import Column from '@templates/column'

import MultiPageForm from '@organisms/form/multi-page-form'
import FormPage from '@organisms/form/form-page'
import AffiliateVerify from "@organisms/signup/affiliate-verify"

import Input from "@molecules/control/input"
import Select from "@molecules/control/select"

import rules from '@lib/form/rules'

/**
 * This will render a page on the route https://unijob.app/affiliate
 * @param {object} props Properties we are passing into this affiliate page
 * @returns An instance of the affiliate page.
 */
export default function SharePage(props)
{
    /* Form Page these are part of a larger multi 'page' form. Questions we need answers for. Can we use react router this low since we may be
        able to use that as a switch case. We need to hold state of the options filled out if you go to option two without already filling out
        option one it will automatically redirect to option one. */
    const sharerForm =  <MultiPageForm link="signup/affiliates" Redirect={AffiliateVerify} >
        <FormPage title="Let’s design your link!" buttonLabel="Create My Link!" >
            <Input  label="Link Name" name="name"       type="text" validators={ [ rules.noSpaces, rules.urlTokens, rules.maxLength(50), rules.uniqueName ] } />
            <Select label="Charity"   name="charity_id" endpoint="search/charities" />
            <Input  label="Phone"     name="phone"      type="tel" />
        </FormPage>
    </MultiPageForm>

    return <>
        {/* SEO Header Tags */}
        <Head>
            <title>Share a link for charity!</title>
        </Head>

        <Column content={sharerForm} />
    </>
}