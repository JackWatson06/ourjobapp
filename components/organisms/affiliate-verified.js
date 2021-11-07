import {useState} from "react";

import ShareButton from "@molecules/share-button.js";
import HeaderMedium from "@atoms/text/header-md.js";
import Button from "@atoms/button.js";

import style from "@styles/organisms/AffiliateVerified.module.css"

export default function AffiliateVerified({ link })
{
    const [copied, setCopied] = useState("");
    const actualUrl = `https://${link}`;

    const copy = () => {
        navigator.clipboard.writeText(actualUrl);
        setCopied("Link copied!");
    }

    return <>
        <HeaderMedium title="Your link has been activated!" />
        <h1 className={style.LinkHeader} onClick={() => copy()}>{link}</h1>
        <p className={style.CopyText}>{copied}</p>
        <Button title="Copy" onClick={() => copy()}/> {/* We should add in a notification here that it was scuessfully copied to clipboard.  */}
        <ShareButton url={ actualUrl } title="Get a job today!" text="OurJob.App helps connect you with employers who are hiring around your location. Customize your job!" />
    </> 
}
