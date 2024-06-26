
import axios from "axios"
import debounce from "@lib/utilities/debounce"

const UniqueEmployerEmail = {
    
    validate: debounce( async function(value)
    {
        const foundName = await axios.get(`search/existing/employer?email=${value}`)
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
    }, 500 ),

    message: function ()
    {
        return `Email already taken`
    }
};

export default UniqueEmployerEmail