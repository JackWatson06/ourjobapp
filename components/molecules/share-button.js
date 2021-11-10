
import Button from "@atoms/button.js";

import * as affTrack from "@lib/affiliate/AffiliateTracker"

export default function ShareButton({ title, text, url }){

    // Set the url to a default value if we don't pass it into this function.
    if(url === undefined)
    {
        const affiliateData = affTrack.ReadCookie()
        url = affiliateData != undefined ? affiliateData.url : "https://ourjob.app"
    }

    const shareApi = () => {
        navigator.share({
            title: title,
            text: text,
            url: url,
        }).then(() => {
            console.log("Successfully shared");
        })
        .catch((error) => {
            console.error("Something went wrong", error);
        });
    }   

    return <Button title="Share" onClick={() => shareApi() }/>
}
