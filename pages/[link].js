import Router from 'next/router'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Cookies from 'js-cookie'

import axios from "axios";

/**
 * This will render a page on the route https://unijob.app/{affiliate_id}
 * @param {object} props Properties we are passing into this candidate pool page
 * @returns An instance of the candidate pool page.
 */
export default function Link(props)
{
    const router = useRouter()
    const { link } = router.query

    useEffect(() => {
        // Cause of https://nextjs.org/docs/routing/dynamic-routes#caveats
        if(link != undefined)
        {
            axios.get(`tracking/affiliates?name=${link}`)
                .then(function (response) {
                    if(response.status === 200)
                    {
                        Cookies.set(`referral_key`, `${response.data.id},${link}`, { expires: 1 })
                        Router.push( "/" )
                    }
                })
                .catch(function (error) {
                    console.error(error)
                });
        }
    }, [link])

    return <p> Loaded... </p>;
}