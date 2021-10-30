/**
 * Original Author: Jack Watson
 * Created Date: 10/27/21
 * Purpose: 
 */

import axios from "axios";

export default {
    
    validate: async function(value)
    {
        const foundName = await axios.get(`search/existing/links?name=${value}`)
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
    },

    message: function ()
    {
        return `Name already taken`
    }
};