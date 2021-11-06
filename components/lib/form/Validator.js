/**
 * Validate the value with the rules that we are passing in. If we fail then print the dedicated error message. If we 
 * do pass validation then return an empty string. The reason we return the message is due to the need of displaying
 * which validation failed for the current input.
 * @param {string} value The value we are passing into the server
 * @param {array} rules List of rules we need to pass
 */
import NotEmpty from "@lib/form/rules/NotEmpty"

export default async function Validator(value, required, rules) {
    let message = "";


    // If the input is not required and we don't have input then just don't validate.
    if(required && ! await NotEmpty.validate(value))
    {
        return NotEmpty.message();
    }

    // If we do not require input then we are ok with empty input values.
    if(!required & ! await NotEmpty.validate(value))
    {
        return message;
    }

    // Try each rule that we have.
    for (const rule of rules)
    {
        if( ! await rule.validate( value) )
        {
            return rule.message( );
        }
    } 

    return message;
}