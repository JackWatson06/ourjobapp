// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Header from "@atoms/text/header"
import LinkButton from "@atoms/text/header"
import Paragraph from "@atoms/text/header"

/**
 * This will render a page on the route https://unijob.app OR https://unijob.app/index
 * @param {object} props Properties we are passing into this home page
 * @returns An instance of the home page.
 */
export default function Index(props)
{
    return <>
        <Header title="Index"/> 
    
        <LinkButton title="Share" link="/affiliate" />
        <LinkButton title="Employee" link="/employee" />
        <LinkButton title="Candidate Pool" link="/candidate_pool" />

        <Paragraph>
            Welcome to OurJob App please signup using the above buttons.
        </Paragraph>
    </>;
}