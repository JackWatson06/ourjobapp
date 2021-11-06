import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link";

import styles from '@styles/molecules/FooterSocials.module.css'
import SocialLinks from '@lib/utilities/SocialLinks'

export default function FooterSocials()
{
    return<div className={styles.IconContainer}>
        <svg width="0" height="0" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg">
            <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="icon-gradient">
                <stop class={styles.FirstStop} offset="0"/>
                <stop class={styles.SecondStop} offset="100%"/>
            </linearGradient>
        </svg>
        <Link href={SocialLinks.twitter}>
            <FontAwesomeIcon className={styles.Icon} icon={ faTwitterSquare } />
        </Link>
        <Link href={SocialLinks.instagram}>
            <FontAwesomeIcon className={styles.Icon} icon={ faInstagram } />
        </Link>       
        <Link href={SocialLinks.tiktok}>
            <FontAwesomeIcon className={styles.Icon} icon={ faTiktok } />
        </Link>
    </div>
}