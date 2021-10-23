import Affiliate from "../components/pages/affiliate";

/**
 * This will render a page on the route https://unijob.app/affiliate
 * @param {object} props Properties we are passing into this affiliate page
 * @returns An instance of the affiliate page.
 */
export default function AffiliatePage(props)
{
    let test = "hello"
    return <Affiliate {...props} />
}