import Head from 'next/head'

import Verify from "@templates/verify"

export default function EmployerVerify(props)
{
    return <>

        <Head>
            <title>Verify your email to apply to all relevant jobs!</title>
        </Head>

        <Verify message="Congratulations! A verification link has been sent to your email" />
    </>
}