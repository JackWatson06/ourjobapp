import FooterSocials from "@molecules/footer-socials";
import Link from "next/link";

import styles from '@styles/molecules/FooterNavigation.module.css'

export default function FooterNavigation()
{
    return <>
        <h2 className={styles.Header}>Contact Us</h2>
        <ul className={styles.UList}>
            <li className={styles.LinkWrapper}> 
                <Link href="/" to='#' onClick={(e) => {
                                                    window.location = mailto;
                                                    e.preventDefault();
                                                }}>
                    <a className={styles.Link}>info@ourjob.app</a>
                </Link> 
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
                <a className={styles.Link} href="/documents/terms_and_conditions.pdf" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
            </li>
            <li className={styles.LinkWrapper}>
                <a className={styles.Link} href="/documents/privacy_policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </li>
        </ul> 

        <h2 className={styles.Header}>Follow Us</h2>
        <FooterSocials />

    </>
    
    
    
    
    
    

}