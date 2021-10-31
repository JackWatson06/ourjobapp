
export default {
    
    validate: function(value)
    {
        //https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
        const  phoneRe = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return phoneRe.test(String(value).toLowerCase());
    },

    message: function ()
    {
        return `Has to be a valid phone number`
    }
};