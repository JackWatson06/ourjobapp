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
        //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const  emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRe.test(String(value).toLowerCase());
    },

    message: function ()
    {
        return `Has to be a valid email`
    }
};