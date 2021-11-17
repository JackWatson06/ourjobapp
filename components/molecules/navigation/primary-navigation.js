import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link";

import styles from '@styles/molecules/Navigation.module.css'
import SocialLinks from '@lib/utilities/SocialLinks'

export default function PrimaryNavigation()
{
    return <div className={styles.IconContainer}>
        <Link href={SocialLinks.instagram} passHref>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faInstagram } /></a>
        </Link>       
        <Link href={SocialLinks.tiktok} passHref>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faTiktok } /></a>
        </Link>
        <Link href={SocialLinks.twitter} passHref>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faTwitter } /></a>
        </Link>
        <Link href={SocialLinks.facebook} passHref>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faFacebook } /></a>
        </Link>
    </div>
}
