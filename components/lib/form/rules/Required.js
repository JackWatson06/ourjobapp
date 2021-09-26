/**
 * Original Author: Jack Watson
 * Created Date: 9/21/21
 * Purpose: The purpose of this class is to check have a required input check for form inputs into the site. 
 * If this is assigne to a field then input must have some sort of value otherwise the field will go into an error
 * state.
 */

export default {
    
    validate: function(value)
    {
        if( value === undefined || value === null || value === "")
        {
            return false
        }

        return true
    },

    message: function (name)
    {
        return `Input ${ name } requires input`
    }
};