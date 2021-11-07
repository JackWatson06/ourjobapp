import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link";

import styles from '@styles/molecules/FooterSocials.module.css'
import SocialLinks from '@lib/utilities/SocialLinks'

export default function FooterSocials()
{
    return<div className={styles.IconContainer}>
        <Link href={SocialLinks.instagram} passHref={true}>
            <FontAwesomeIcon className={styles.Icon} icon={ faInstagram } />
        </Link>       
        <Link href={SocialLinks.tiktok} passHref={true}>
            <FontAwesomeIcon className={styles.Icon} icon={ faTiktok } />
        </Link>
        <Link href={SocialLinks.twitter} passHref={true}>
            <FontAwesomeIcon className={styles.Icon} icon={ faTwitter } />
        </Link>
        <Link href={SocialLinks.facebook} passHref={true}>
            <FontAwesomeIcon className={styles.Icon} icon={ faFacebook } />
        </Link>
    </div>
}