
import Header from "@atoms/text/header"
import Paragraph from "@atoms/text/paragraph"

import LinkButton from "@atoms/link-button"

/**
 * This will render a page on the route https://unijob.app OR https://unijob.app/index
 * @param {object} props Properties we are passing into this home page
 * @returns An instance of the home page.
 */
export default function Index(props)
{
    return <>
        <Header title="Index"/> 
    
        <LinkButton title="Share" link="/sharer" />
        <LinkButton title="Employee" link="/employee" />
        <LinkButton title="Candidate Pool" link="/employer" />

        <Paragraph text="Welcome to OurJob App please signup using the above buttons." />
    </>;
}