
import empty from "@lib/form/rules/Empty"

/**
 * Validate the value with the rules that we are passing in. If we fail then print the dedicated error message. If we 
 * do pass validation then return an empty string. The reason we return the message is due to the need of displaying
 * which validation failed for the current input.
 * @param {string} value The value we are passing into the server
 * @param {array} rules List of rules we need to pass
 */

export default async function validate(value, required, rules) {

    let message = "";

    // If the input is not required and we don't have input then just don't validate.
    if(required && empty(value))
    {
        return "Input is required";
    }

    // If we do not require input then we are ok with empty input values.
    if(!required & empty(value))
    {
        return message;
    }

    if( empty(rules) )
    {
        return message;
    }

    // Try each rule that we have.
    for (const rule of rules)
    {
        if( ! (await rule.validate(value)) )
        {
            return rule.message( );
        }
    } 

    return message;
    
}
