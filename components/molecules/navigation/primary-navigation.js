import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link";

import styles from '@styles/molecules/Navigation.module.css'
import SocialLinks from '@lib/utilities/SocialLinks'

export default function PrimaryNavigation()
{
    return <div className={styles.IconContainer}>
        <svg width="0" height="0" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg">
            <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="icon-gradient">
                <stop className={styles.FirstStop} offset="0"/>
                <stop className={styles.SecondStop} offset="100%"/>
            </linearGradient>
        </svg>
        <Link href={SocialLinks.instagram}>
            <FontAwesomeIcon className={styles.Icon} icon={ faInstagram } />
        </Link>       
        <Link href={SocialLinks.tiktok}>
            <FontAwesomeIcon className={styles.Icon} icon={ faTiktok } />
        </Link>
        <Link href={SocialLinks.twitter}>
            <FontAwesomeIcon className={styles.Icon} icon={ faTwitter } />
        </Link>
        <Link href={SocialLinks.facebook}>
            <FontAwesomeIcon className={styles.Icon} icon={ faFacebook } />
        </Link>
    </div>
}
