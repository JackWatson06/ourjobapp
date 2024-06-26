/**
 * The logo represents the our job app logo.
 */
import Router from "next/router"

import styles from "@styles/atoms/Logo.module.css"
import * as affTrack from "@lib/affiliate/AffiliateTracker"
import Image from 'next/image'

export default function Logo()
{
    const affiliateData = affTrack.ReadCookie();

    return <div className={styles.Logo} onClick={() => Router.push("/")}>
        <Image 
            src="/images/svg/gray_logo.svg"
            alt="ALC"
            width={35}
            height={35}
        />
        <span className={styles.Span} suppressHydrationWarning>{affiliateData != undefined ? affiliateData.displayUrl : "OurJob.App" }</span>
    </div>
}