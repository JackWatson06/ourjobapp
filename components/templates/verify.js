import Column from "@templates/column"
import HeaderMedium from "@atoms/text/header-md"
import LinkButton from "@molecules/link-button"

/**
 * This page will render a verify route on our website.
 * @param {object} props Properties we are passing into this page
 * @returns An instance of the affiliate page.
 */
export default function Verify({ message })
{
    const content = <>
        <HeaderMedium title={ message } />
        <LinkButton title="Return to Homepage" link="/" />
    </>

    return <Column content={content} />
}