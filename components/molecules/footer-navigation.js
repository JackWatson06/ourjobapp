import Link from "next/link";

import styles from '@styles/molecules/FooterNavigation.module.css'

export default function FooterNavigation()
{
    return <ul className={styles.UList}>
        <li className={styles.LinkWrapper}> 
            <Link href="/">
                <a className={styles.Link}>Home</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/sharer">
                <a className={styles.Link}>Become a Sharer</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/canddiate_pool">
                <a className={styles.Link}>Candidate Pool</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/employee">
                <a className={styles.Link}>Find a Job</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/tos.pdf">
                <a className={styles.Link}>Terms and Conditions</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/operating_aggrement.pdf">
                <a className={styles.Link}>Privacy Policy</a>
            </Link>
        </li>
    </ul>
}