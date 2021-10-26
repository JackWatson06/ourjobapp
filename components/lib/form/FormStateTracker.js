/**
 * Original Author: Jack Watson
 * Created Date: 9/20/21
 * Purpose: The purpose of this class is to manage the form state object that we are storing in the multi-page-form.
 * Individual input components will intereact with the state through this class.
 * 
 * The form object that this class interacts with has this structure:
 * 
 *  {
 *      "fname" : {
 *          "value" : "Jack"
 *      },
 *      "lname" : {
 *          "value" : "",
 *          "error" : "Last Name is a required field."
 *      },
 *      "country-authorized-to-work" : {
 *          "value" : ["United States", "Canada", "Mexico"]
 *      },
 *      "email" : {
 *          "value" : "Orangutan",
 *          "error" : "Enter a valid email!"
 *      }
 *  }
 */
import validate from "./Validator"

/**
 * When we set a form state. React works by batching in all of the SET state requests into one single batch that then
 * gets applied. We need to set as a copy since the way these values are stored on the stack. We also need to do a object assign
 * ... do we need to make a copy here? My brain is not working right now.
 * @param {object} assign Object we want to assign to the current state
 * @param {FormState} formState reference to the old form state object that we have.
 */
const _setInputStateField = (assign, formState) =>
{
    // We only need a shallow copy in order for this to work since we do not have a deeply nested data structure that is
    // being passed intot his function.
    const formCopy = { ...formState.form }

    // Assign the new values to the copy.
    Object.keys(assign).map((name) => {
        formCopy[name] = Object.assign(formCopy[name], assign[name])
    })

    formState.setForm( formCopy );
}

/**
 * Validate the input of a name on the form. Set error message if invalid.
 * @param {string} name Name of the formState that we are validating against.
 * @param {FormState} formState Reference to the formstate object created in the multi-page-form 
 */
const _validateInput = (name, formState) =>
{
    const form    = formState.form
    const message = validate(form[name].value, form[name].validators)

    _setInputStateField( {
        [name] : {
            "error" : message
        }
    }, formState )

    if(message != "")
    {
        return false;
    }

    return true;
}

export default {
        initInput: (property, validators, formState) =>
        {
            let inputStateObject = { 
                [property] : { 
                    "validators"   : validators,
                    "value"        : "",
                    "error"        : ""
                } 
            }

            let newForm = Object.assign(formState.form, inputStateObject)
            formState.setForm( newForm )
        },

        removeInput: (property, formState) =>
        {
            if( formState.form[property] != undefined)
            {
                // We only need a shallow copy in order for this to work
                const formCopy = { ...formState.form }
                delete formCopy[property]
                formState.setForm( formCopy )
            }
        },

        getValue: (property, form) => 
        {
            if( form[property] === undefined ) return ""
        
            // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
            return form[property].value;
        },

        getSubmitData: (form) =>
        {
            let submitData = {}
            Object.keys(form).map((name) => {
                submitData[name] = form[name].value
            })

            return submitData
        },

        /**
         * Get the error of the given property.
         * @param {string} property The property we are checking the error of.
         * @param {Form} formState Reference to the form object. That has the schema in the top header.
         */
        getError: (property, form) => 
        {
            if( form[property] === undefined ) return ""
        
            // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
            return form[property].error;
        },

        /**
         * Set the value of the current property on the formState.
         * @param {string} value The value we are updating the property to .
         * @param {string} property The property this setValue is updating
         * @param {FormState} formState Reference to the form state object
         */
        setValue: (value, property, formState) => 
        {
            // Set value, and we also validate here to make sure that the field is valid real time. This setting needs
            // to be togglable since some fields should not be real time. Or at least when we loose focus.
            _setInputStateField( { 
                [property] : { 
                    "value" : value
                }
            }, formState )

            _validateInput(property, formState)
        },

        /**
         * Validate that the some of the formState is in a valid state before submission.
         * @param {FormState} formState Current form state object
         * @param {array} batchedInputs Array of the inputs we are testing against the form state.
         */
        validateSome: (formState, batchedInputs) =>
        {
            const form  = formState.form
            let valid = true
        
            // Check the batched inputs. Mark the component as invalid if invaild.
            for(const name of batchedInputs)
            {
                if( form[name] != undefined )
                {
                    valid = _validateInput(name, formState)
                }
            }

            return valid
        },

        /**
         * Validate that the entire formState is in a valid state before submission.
         * @param {FormState} formState Current form state object
         */
        validateAll: (formState) =>
        {
            const form   = formState.form
            const inputs = Object.keys(form)
            let   valid  = true

            for(const name of inputs)
            {
                valid = _validateInput(name, formState)
            }

            return valid
        },
    };


    // import validate from "./Validator"
    // import fs from "./FormStateTracker"
    
    // /**
    //  * Check to see if some of the input elements are valid in the form state.
    //  * @param {FormState} formState FormStateTracker that we use to keep track of the different input values in a form.
    //  * @param {array} inputChecks The input values in the form state that we want to track
    //  */
    // export const someValid = (formState, inputChecks) =>
    // {
    //     if( inputChecks != undefined )
    //     {
    //         const errors = {}
    //         const form   = formState.form
    
    //         for(const name of inputChecks)
    //         {
    //             if( form[name] != undefined )
    //             {
    //                 const input = form[name]
    //                 Object.assign( errors, { [name] : validate(input.value, input.validators) } )
    //             }
    //         }
    
    //         fs.setErrors(errors, formState)
    
    //         for( const message of Object.values(errors))
    //         {
    //             if( message != "" )
    //             {
    //                 return false
    //             }             
    //         }
    //     }
    //     return true
    // }
    
    // /**
    //  * Check to see if the entire form state is valid. We don't mark errors here since we just want to return the errors.
    //  * That is because we should theoretically already be valid before we reach this state. This is just an extra precaution.
    //  * @param {FormState} formState FormStateTracker that we use to keep track of the different input values in a form.
    //  */
    // export const allValid = (formState) =>
    // {
    //     const errors = {}
    //     const form   = formState.form
    //     const inputs = Object.keys(form)
    
    //     for(const name in inputs)
    //     {
    //         const input = form[name]
    //         if(validate(input.value, input.validators))
    //         {
    
    //         }
    //         Object.assign( errors, { [name] : validate(input.value, input.validators) } )
    //     }
    
    //     fs.setErrors(errors, formState)
    
    //     console.log(errors);
    // }




