import Head from 'next/head'

import Verify from "@templates/verify"

export default function SharerVerify(props)
{
    return <>

        <Head>
            <title>Verify you email to start sharing!</title>
        </Head>

        <Verify message="Congratulations! Your link is on the way. Check your email inbox" />
    </>
}