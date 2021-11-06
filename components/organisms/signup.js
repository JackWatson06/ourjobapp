import * as affTrack from "@lib/affiliate/AffiliateTracker"

import LinkButton from "@molecules/link-button"
import HeaderMedium from "@atoms/text/header-md"

import style from "@styles/organisms/Signup.module.css";

export default function Signup()
{

    const affiliateData = affTrack.ReadCookie()
    let headerText = "Welcome to OurJob.App! Are you looking to..."

    if(affiliateData != undefined)
    {
        headerText = `Welcome to ${affiliateData.name}'s link! Are you looking to...`
    }

    return <div className={style.SignupContainer}>
        <HeaderMedium title={headerText} />
        <LinkButton title="Share for charity" link="/sharer" />
        <LinkButton title="Find a job" link="/employee" />
        <LinkButton title="Find candidates" link="/employer" />
    </div>
}
