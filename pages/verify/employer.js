/**
 * Original Author: Jack Watson
 * Created Date: 12/1/2021
 * Purpose: This file will create a employer signup screen.
 */

import Column from "@templates/column"

import HeaderMedium from "@atoms/text/header-md"
import ShareButton from "@molecules/share-button.js";

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from "axios";
import Paragraph from "@atoms/text/paragraph"


export default function TokenPage(props)
{
    const router = useRouter()
    const { id, s }                 = router.query
    const [ verified, setVerified ] = useState(false)
    const [ error, setError ]       = useState(false)

    useEffect(() => {
        // Cause of https://nextjs.org/docs/routing/dynamic-routes#caveats
        if(id != undefined && s !=undefined)
        {
            axios.patch(`signup/verify/${id}`, {
                secret: s
            }).then(function (response) {
                    if(response.status === 200)
                    {
                        setVerified(true)
                    }
                })
                .catch(function (error) {
                    setError(true);
                });
        }
    }, [id, s])


    // Load the correct screen based on the response that we recieve from the verification endpoint that we chose to send
    // the token to.
    let screen = <p>Verifying...</p>

    // If were verified.
    if( verified )
    {
        screen = <>
            <HeaderMedium title="Your Candidate Pool has been created! You will receive candidates via email"/>
            <ShareButton title="Find employees" text="Only pay $100 USD when you hire with ourjob.app" />
        </>
    }

    // If we got an error verifying.
    if(error)
    {
        screen = <Paragraph text="Error: could not be verified. Please try resubmitting the form. We apologize for the inconvenience!" />
    }

    return  <Column content={screen} />
}