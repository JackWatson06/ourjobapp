
/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: The logo represents the our job app logo.
 */

import styles from "@styles/Logo.module.css"
import Image from 'next/image'

import Cookies from 'js-cookie'

export default function Logo(){


    const affiliateName = Cookies.get('referral_key')
    let urlName = "OurJob.App"

    if(affiliateName != undefined)
    {
        urlName += `/${affiliateName.split(",")[1]}`
    }

    return <div className={styles.Logo}>
        <Image 
            src="/images/svg/gray_logo.svg"
            alt="ALC"
            width={35}
            height={35}
        />
        <span>{urlName}</span>
    </div>
}