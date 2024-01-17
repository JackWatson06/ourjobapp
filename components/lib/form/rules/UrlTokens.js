/**
 * Only allow specific url tokens into whatever form that we have.
 */

const UrlTokens = {

    validate: function(value)
    {
        const  validTokens = /^[A-Z a-z \d \~ \- \_ \.]*$/;
        return validTokens.test(value);
    },

    message: function ()
    {
        return `Can only the following speical characters - _ . ~`
    }
}

export default UrlTokens;