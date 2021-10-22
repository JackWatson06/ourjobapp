/**
 * Original Author: Jack Watson
 * Created Date: 9/20/21
 * Purpose: The purpose of this class is to manage the form state object that we are storing in the multi-page-form.
 * Individual input components will intereact with the state through this class. We are going to want to think of
 * a way to make this generic.
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


const _setInputStateField = (assign, formState) =>
{
    // We only need a shallow copy in order for this to work
    let formCopy = { ...formState.form }

    Object.keys(assign).map((name) => {
        formCopy[name] = Object.assign(formCopy[name], assign[name])
    })

    formState.setForm( formCopy );
}

export default {
        initInput: (property, displayName, validators, formState) =>
        {
            let inputStateObject = { 
                [property] : { 
                    "display_name" : displayName,
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
                let formCopy = { ...formState.form }

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
                submitData[name] = name.value
            })

            return submitData
        },

        getError: (property, form) => 
        {
            if( form[property] === undefined ) return ""
        
            // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
            return form[property].error;
        },

        setErrors: (errors, formState) =>
        {
            let mappedErrors = {};
            Object.keys(errors).map((name) => {
                mappedErrors[name] = { "error" : errors[name] }
            })
        
            _setInputStateField( mappedErrors, formState )
        },

        setValue: (value, property, formState) => 
        {
            let form = formState.form

            _setInputStateField( { 
                [property] : { 
                    "value"  : value,
                    "error" : validate(value, form[property].display_name, form[property].validators)
                }
            }, formState )
        },
    };

