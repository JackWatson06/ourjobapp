
import axios from "axios"
import debounce from "@lib/utilities/debounce"

const UniqueAffiliateName = {
    
    validate: debounce( async function(value)
    {
        const foundName = await axios.get(`search/existing/affiliate?name=${value}`)
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
        return `Name already taken`
    }
};

export default UniqueAffiliateName