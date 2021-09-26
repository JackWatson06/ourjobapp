import validate from "./Validator"
import fs from "./FormStateTracker"

/**
 * Check to see if the incoming form state is in a valid state that will be allowed into our database. We will still
 * be doing these checks server side but this allows us to have better and quicker communication if we duplicate
 * the rules.
 * @param {FormState} props Form state object that we append to in the FormStateTracker for each input field. 
 * @param {array} rules Array of rules we must pass in order to validate. If null the form is always assumed valid. 
 */
export const isValid = (formState, inputChecks) =>
{
    // This logic check here is because we are not specifying that the client has to call a different method if they
    // want to proceed to the next step. The existence of the rules is a form level implementation detail so we
    // are managing that up here so only one method has to be called.
    if( inputChecks != undefined )
    {
        let errors = {}
        let form   = formState.form

        // Check the individual fields that we care about in this batch.
        for(const name of inputChecks)
        {
            if( form[name] != undefined )
            {
                let input = form[name]
                Object.assign( errors, { [name] : validate(input.value, input.display_name, input.validators) } ); 
            }
        }

        // Set errors if we have any
        fs.setErrors(errors, formState)

        // Check to see if we have any errors.
        for( const message of Object.values(errors))
        {
            if( message != "" )
            {
                return false
            }             
        }
    }

    // Nothin to validte
    return true;
}