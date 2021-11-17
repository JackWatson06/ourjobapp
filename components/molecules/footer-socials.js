import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link";

import styles from '@styles/molecules/FooterSocials.module.css'
import SocialLinks from '@lib/utilities/SocialLinks'

export default function FooterSocials()
{
    // Have to wrap with a tag here because of https://github.com/vercel/next.js/issues/7915

    return<div className={styles.IconContainer}>
        <Link href={SocialLinks.instagram} passHref={true}>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faInstagram } /></a>
        </Link>       
        <Link href={SocialLinks.tiktok} passHref={true}>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faTiktok } /></a>
        </Link>
        <Link href={SocialLinks.twitter} passHref={true}>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faTwitter } /></a>
        </Link>
        <Link href={SocialLinks.facebook} passHref={true}>
            <a><FontAwesomeIcon className={styles.Icon} icon={ faFacebook } /></a>
        </Link>
    </div>
}