/**
 * Original Author: Jack Watson
 * Created Date: 10/27/21
 * Purpose: 
 */

import axios from "axios"
import debounce from "@lib/utilities/debounce"

const UniqueAffiliateEmail = {
    
    validate: debounce( async function(value)
    {
        const foundName = await axios.get(`search/existing/affiliate-emails?email=${value}`)
                            .then(function (response) {
                                if(response.status === 200)
                                {
                                    return !response.data.result
                                }
                            })
                            .catch(function (error) {
                                return false
                            });

        return foundName;
    }, 500),

    message: function ()
    {
        return `Email already taken`
    }
}

export default UniqueAffiliateEmail