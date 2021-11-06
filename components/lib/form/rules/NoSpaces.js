/**
 * Original Author: Jack Watson
 * Created Date: 11/2/2021
 * Purpose: This class will validate a phone that is inputed into the class.
 */

const NoSpaces = {
    
    validate: function(value)
    {
        //https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
        const  whiteSpace = /\s/;
        return !whiteSpace.test(value);
    },

    message: function ()
    {
        return `Can not have any spaces`
    }
};

export default NoSpaces