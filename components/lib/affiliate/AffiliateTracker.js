import Cookies from 'js-cookie'

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
            url: `${process.env.NEXT_PUBLIC_CLIENT}/${cookieSplit[1]}`,
            displayUrl: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${cookieSplit[1]}` 
        }
    }

    return undefined
}
