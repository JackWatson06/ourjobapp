

import Column from "@templates/column"

import HeaderMedium from "@atoms/text/header-md"
import Header from "@atoms/text/header"
import Button from "@atoms/button"

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from "axios";
import Paragraph from "@atoms/text/paragraph"

const routeMap = {
    "sharer"   : "affiliates",
    "employee" : "employees",
    "employer" : "employers"
}

const successMessage = {
    "sharer" : function AffiliateScreen(response){
        return <>
            <HeaderMedium title="Your link has been activated!" />
            <Header title={response.data.link} />
            <Button title="Copy" />
            <Button title="Share" />
        </> 
    },

    "employee" : function EmployeeScreen(response){
        return <>
            <HeaderMedium title="Congratulations! You have applied to all relevant jobs" />
            <Button title="Share" />
        </>
    },

    "employer" : function EmployerScreen(response){
        return <>
            <HeaderMedium text="Your Candidate Pool has been created! You will receive candidates via email"/>
            <Button title="Share" />
        </>
    }
}

export default function TokenPage(props)
{
    const router = useRouter()
    const { endpoint, token }       = router.query
    const [ verified, setVerified ] = useState(false)
    const [ error, setError ]       = useState(false)
    const [ data, setData ]         = useState({})

    useEffect(() => {
        // Cause of https://nextjs.org/docs/routing/dynamic-routes#caveats
        if(endpoint != undefined)
        {
            axios.post(`signup/${routeMap[endpoint]}/verify`, {
                token: token
            }).then(function (response) {
                    if(response.status === 200)
                    {
                        setData(response.data)
                        setVerified(true)
                    }
                })
                .catch(function (error) {
                    setError(true);
                });
        }
    }, [endpoint, token])


    // Load the correct screen based on the response that we recieve from the verification endpoint that we chose to send
    // the token to.
    let screen = <p>Verifying...</p>

    // If were verified.
    if( verified )
    {
        screen = successMessage[endpoint](data)
    }

    // If we got an error verifying.
    if(error)
    {
        screen = <Paragraph text="Could not be verified! Please try resubmitting form. We apologies for any inconvenience!" />
    }

    return  <Column content={screen} />
}