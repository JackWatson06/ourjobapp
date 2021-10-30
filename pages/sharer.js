
import Head from 'next/head'
import Column from '@templates/column'
import MultiPageForm from '@organisms/multi-page-form'
import FormPage from '@molecules/form-page'
import Paragraph from '@atoms/text/paragraph'
import Input from "@atoms/input"
import SelectInput from '@atoms/select'

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
    const sharerForm =  <MultiPageForm link="signup/affiliates" redirect="sharer/verify">
        <FormPage title="Let’s design your link!" buttonLabel="Create My Link!" inputBatch={ ["name", "charity_id", "email"] } >

            <Input label = "Link Name" name = "name" validators  = { [ rules.required, rules.uniqueName ] } />
            <SelectInput label        = "Charity"
                            multi_select = { false }
                            name         = "charity_id"
                            endpoint     = "search/charities"
                            validators   = { [ rules.required ] } />
            <Input label = "Email" name = "email" validators = { [ rules.required, rules.email ] } />

            <Paragraph text="By clicking ‘Create My Link!’ you agree to our Terms and Conditions, Privacy Policy, & Affiliate Agreement." />
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