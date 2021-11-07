import FooterSocials from "@molecules/footer-socials";
import Link from "next/link";

import styles from '@styles/molecules/FooterNavigation.module.css'

export default function FooterNavigation()
{
    const openMailer = () => {
        window.location = mailto;
        e.preventDefault();
    }

    return <>
        <h2 className={styles.Header}>Give Feedback</h2>
        <ul className={styles.UList}>
            <li className={styles.LinkWrapper}> 
                <a className={styles.Link} href="mailto:feedback@ourjob.app">feedback@ourjob.app</a>
            </li>
        </ul>

        <h2 className={styles.Header}>Navigation</h2>
        <ul className={styles.UList}>
            <li className={styles.LinkWrapper}> 
                <Link href="/">
                    <a className={styles.Link}>Home</a>
                </Link>
            </li>
            <li className={styles.LinkWrapper}>
                <Link href="/employee">
                    <a className={styles.Link}>Find a Job</a>
                </Link>
            </li>
            <li className={styles.LinkWrapper}>
                <Link href="/employer">
                    <a className={styles.Link}>Find Employees</a>
                </Link>
            </li>
            <li className={styles.LinkWrapper}>
                <Link href="/sharer">
                    <a className={styles.Link}>Share</a>
                </Link>
            </li>
            <li className={styles.LinkWrapper}>
                <Link href="/documents/terms_and_conditions.pdf" passHref={true}>
                    <a className={styles.Link} target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                </Link>
            </li>
            <li className={styles.LinkWrapper}>
                <Link href="/documents/privacy_policy.pdf" passHref={true}>
                    <a className={styles.Link}  target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </Link>
            </li>
        </ul> 

        <h2 className={styles.Header}>Follow Us</h2>
        <FooterSocials />

    </>
    
    
    
    
    
    

}