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
        <Button title="Copy" onClick={() => copy()}/>
        <ShareButton url={ actualUrl } title="Share" text="#ShareForCharity with ourjob.app" />
    </> 
}
