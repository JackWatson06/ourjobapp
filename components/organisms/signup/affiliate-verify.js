import {useState} from "react"

import ShareButton from "@molecules/share-button.js"
import HeaderMedium from "@atoms/text/header-md.js"
import Button from "@atoms/button.js"
import FormPage from "@organisms/form/form-page"
import Link from "next/link"
import Input from "@molecules/control/input"

import style from "./AffiliateVerify.module.css"

import rules from "@lib/form/rules"
import axios from "axios"

export default function AffiliateVerify({formData, response})
{
    const [success, setSuccess] = useState(false)
    const [error, setError]     = useState(false)
    const [copied, setCopied]   = useState("")

    const link      = `${process.env.NEXT_PUBLIC_CLIENT_HOSTNAME}/${formData.name}`
    const actualUrl = `${process.env.NEXT_PUBLIC_CLIENT}/${formData.name}`

    // Copy functionality to copy link to clipboard.
    const copy = () => {
        navigator.clipboard.writeText(actualUrl)
        setCopied("Link copied!")
    }

    // Verify the affiliate
    const onSubmit = (formData) => {
        axios.patch(`signup/verify/${response.id}`, {
            code: parseInt(formData.code)
        }).then(function (response) {
            if(response.status === 200)
            {
                setSuccess(true);
            }
        })
        .catch(function (error) {
            setError(true)
        });
    }

    const contract = <span>By clicking &quot;Get My Link!&quot; you agree to the 
            <Link href={`${process.env.NEXT_PUBLIC_SERVER}signup/${response.id}/contract`} passHref>
                <a className={style.ContractLink} target="_blank"> Sharer Contract</a>
            </Link>
        </span>

    const successfullyVerified = <>
        <HeaderMedium title="Your link has been activated!" />
        <h1 className={style.LinkHeader} onClick={() => copy()}>{link}</h1>
        <p className={style.CopyText}>{copied}</p>
        <Button title="Copy" onClick={() => copy()}/>
        <ShareButton url={ actualUrl } title="Share" text="#ShareForCharity with ourjob.app" />
    </> 

    const verifyForm = <FormPage 
            title={`Verification code sent to ${formData.phone}!`} 
            annotation={contract}
            buttonLabel="Get My Link!" 
            onSubmit={onSubmit} >
        <Input label="Code" name="code" type="number" validators={ [ rules.maxLength(5) ] } />
    </FormPage>

    // Return a different value based on the state of the component. This would violate functional programming standards
    // if I am not mistaken.
    if(success)
    {
        return successfullyVerified;
    }

    return verifyForm;
}