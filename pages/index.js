// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Home from "../components/pages/home";

/**
 * This will render a page on the route https://unijob.app OR https://unijob.app/index
 * @param {object} props Properties we are passing into this home page
 * @returns An instance of the home page.
 */
export default function Index(props)
{
    return <Home {...props} />
}