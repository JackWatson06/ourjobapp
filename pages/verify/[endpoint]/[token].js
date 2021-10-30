

import Column from "@templates/column"

import HeaderMedium from "@atoms/text/header-md"
import HeaderLarge from "@atoms/text/header-lg"

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from "axios";

const routeMap = {
    "sharer"   : "affiliates",
    "employee" : "employees",
    "employer" : "employer"
}

const successMessage = {
    "sharer" : (response) => {
        return <>
            <HeaderMedium text="Your link has been activated!" />
            <HeaderLarge title={response.data.link} />
        </> 
    },

    "employee" : (response) => {
        return <HeaderMedium text="Congratulations! You have applied to all relevant jobs" />
    },

    "employer" : (response) => {
        return <HeaderMedium text="Your Candidate Pool has been created! You will receive candidates via email"/>
    }
}

export default function TokenPage(props)
{
    const router = useRouter()
    const { endpoint, token } = router.query
    const [ verified, setVerified ] = useState(false)
    const [ data, setData ] = useState({})

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
                    console.error(error)
                });
        }
    }, [endpoint])


    // Load the correct screen based on the response that we recieve from the verification endpoint that we chose to send
    // the token to.
    let screen = <p>Verifying...</p>
    if( verified )
    {
        screen = <Column content={successMessage[endpoint](data)} />
    }

    return screen
}