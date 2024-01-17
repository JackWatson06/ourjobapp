

import Cookies from 'js-cookie'

const DOMAIN = "OurJob.App"

const COOKIE = "referral_key"
const EXPIRES = 1 //Day

export function SetCookie(id, name)
{
    Cookies.set(COOKIE, `${id},${name}`, { expires: EXPIRES })
}


export function ReadCookie()
{
    const affiliateCookie = Cookies.get(COOKIE)

    if(affiliateCookie != undefined)
    {
        const cookieSplit = affiliateCookie.split(",")
        
        return {
            id: cookieSplit[0],
            name: cookieSplit[1],
            url: `${DOMAIN}/${cookieSplit[1]}` 
        }
    }

    return undefined
}
