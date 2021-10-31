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
 *          "valid" : true
 *          "error" : ""
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
 *          "valid" : false
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
const _validateInput = async (name, formState) =>
{
    const form    = formState.form
    const message = await validate(form[name].value, form[name].validators)

    _setInputStateField( {
        [name] : {
            "error" : message,
            "valid" : message === "" ? true : false
        }
    }, formState )

    if(message != "")
    {
        return false;
    }

    return true;
}




const FormStateTracker = {

        /**
         * Initialize the input of the form if we have not already initialized an input with the same name on the form object.
         */
        initInput: (property, validators, formState, starting) =>
        {
            if( formState.form[property] === undefined)
            {
                const formCopy = {
                    ...formState.form, 
                    [property] : { 
                        "value"        : starting   ?? "",
                        "validators"   : validators ?? [],
                        "valid"        : validators === undefined ? true : false,
                        "error"        : ""
                    } 
                }
    
                formState.form = formCopy; 
                formState.setForm( formCopy )
            }
        },

        removeInput: (property, formState) =>
        {
            if( formState.form[property] != undefined)
            {
                // We only need a shallow copy in order for this to work
                const formCopy = { ...formState.form }
                delete formCopy[property]

                formState.form = formCopy; // Use this in case we add a property right after... as in the case of dependent inputs.
                formState.setForm( formCopy )
            }
        },

        getValue: (property, form, array = false) => 
        {
            if( form[property] === undefined ) return array ? [] : ""
        
            // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
            return form[property].value;
        },

        /**
         * Get the submit data for the form when we submit to the backend.
         * @param {Form} form Refernce to the form object. The schema is in the top header comment.
         */
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
            _setInputStateField( { 
                [property] : { 
                    "value" : value
                }
            }, formState )
        },

        /**
         * Check the valid flag in order to test to see if the input that we have is valid. If not then we want to disable
         * the submit button. This has to be batched based on the current input that we have.
         * @param {FormState} formState The object that keeps track of Form State
         * @param {array} batchedInputs The inputs we are currently checking to see if they are valid.
         */
        someValid: (formState, batchedInputs) => 
        {
            const form = formState.form;

            // The form is populated before we run the someValid method form the form-page check here to make sure that we are not empty
            // if were empty that means we have not loaded the inputs into the forms state object just yet... I am so sorry this is so 
            // confusing.
            if( !Object.keys(form).length )
            {
                return false
            }

            // If any forms states are valid then return false.
            for(const name of batchedInputs)
            {
                if( form[name] != undefined && !form[name].valid )
                {
                    return false;
                }
            }

            return true;
        },

        /**
         * Validate that the some of the formState is in a valid state before submission.
         * @param {FormState} formState Current form state object
         * @param {array} batchedInputs Array of the inputs we are testing against the form state.
         */
        validateSome: async (formState, batchedInputs) =>
        {
            const form  = formState.form
            let valid = true
        
            // Check the batched inputs. Mark the component as invalid if invaild.
            for(const name of batchedInputs)
            {
                if( form[name] != undefined )
                {
                    valid = await _validateInput(name, formState)
                }
            }

            return valid
        },

        /**
         * Validate that the entire formState is in a valid state before submission.
         * @param {FormState} formState Current form state object
         */
        validateAll: async (formState) =>
        {
            const form   = formState.form
            const inputs = Object.keys(form)
            let   valid  = true

            for(const name of inputs)
            {
                valid = await _validateInput(name, formState)
            }

            return valid
        },
    };

export default FormStateTracker;