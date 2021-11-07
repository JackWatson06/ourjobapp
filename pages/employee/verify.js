import Head from 'next/head'

import Verify from "@templates/verify"

export default function EmployeeVerify(props)
{
    return <>

        <Head>
            <title>Verify your email to view candidates!</title>
        </Head>

        <Verify message="Congratulations! A verification link has been sent to your email" />
    </>
}