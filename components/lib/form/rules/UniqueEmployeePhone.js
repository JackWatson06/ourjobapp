/**
 * Original Author: Jack Watson
 * Created Date: 10/27/21
 * Purpose: 
 */

import axios from "axios"
import debounce from "@lib/utilities/debounce"

const UniqueEmployeePhone = {
    
    validate: debounce( async function(value)
    {
        const foundName = await axios.get(`search/existing/employee?phone=${value}`)
                            .then(function (response) {
                                if(response.status === 200)
                                {
                                    return !response.data.exists
                                }
                            })
                            .catch(function (error) {
                                return false
                            });

        return foundName;
    }, 500),

    message: function ()
    {
        return `Phone number already taken`
    }
};

export default UniqueEmployeePhone