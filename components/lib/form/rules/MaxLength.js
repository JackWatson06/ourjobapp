/**
 * Original Author: Jack Watson
 * Created Date: 11/6/2021
 * Purpose: This class will validate a input of a certain length. We can pass in how long we want, or need the input to be.
 */

/**
 * Return the validation object that we have which can have a variable length so we can reuse this rule.
 * @param {number} max Maximum length the input can be.
 */
function MaxLength(max)
{
    return {
    
        validate: function(value)
        {
            return value.length <= max;
        },
    
        message: function ()
        {
            return `Cannot be longer than ${max} characters`
        }
    };
}

export default MaxLength;