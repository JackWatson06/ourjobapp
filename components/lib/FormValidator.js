
import { getValue, getDisplayName, setErrors } from "./FormStateTracker"

/**
 * Check to see if the incoming form state is in a valid state that will be allowed into our database. We will still
 * be doing these checks server side but this allows us to have better and quicker communication if we duplicate
 * the rules.
 * @param {FormState} props Form state object that we append to in the FormStateTracker for each input field. 
 * @param {array} rules Array of rules we must pass in order to validate. If null the form is always assumed valid. 
 */
export const ifValidated = (formState, rules) =>
{

    // This logic check here is because we are not specifying that the client has to call a different method if they
    // want to proceed to the next step. The existence of the rules is a form level implementation detail so we
    // are managing that up here so only one method has to be called.
    if( rules != undefined )
    {
        // We pass in null for the value if it does not exist since that mea ns that we tried to check for the value
        // but could not find the value.
        let inputNames = Object.keys(rules)

        inputNames.forEach((name) => {

            let validationRules = rules[name]
            let errors = {}

            // Loop through the validation rules that we have.
            validationRules.forEach((rule) => 
            {
                // Check to see if the current form is validated against the rule.
                if( !rule.validate( getValue( name, formState.form) ) )
                {
                    errors[name] = rule.message( getDisplayName(name, formState.form) )
                }
                else
                {
                    errors[name] = ""
                }
                
            })

            setErrors(errors, formState);

        });
    }

    return false;
}