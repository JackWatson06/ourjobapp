import Link from "next/link";

import styles from '@styles/molecules/FooterNavigation.module.css'

export default function FooterNavigation()
{
    return <ul className={styles.UList}>
        <li className={styles.LinkWrapper}> 
            <Link href="/">
                <a class={styles.Link}>Home</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/sharer">
                <a class={styles.Link}>Become a Sharer</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/canddiate_pool">
                <a class={styles.Link}>Candidate Pool</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/employee">
                <a class={styles.Link}>Find a Job</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/tos.pdf">
                <a class={styles.Link}>Terms of Service</a>
            </Link>
        </li>
        <li className={styles.LinkWrapper}>
            <Link href="/operating_aggrement.pdf">
                <a class={styles.Link}>Operating Aggrement</a>
            </Link>
        </li>
    </ul>
}