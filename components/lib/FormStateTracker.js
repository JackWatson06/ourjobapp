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
import { useEffect } from "react"


export const initInput = (property, displayName, formState) =>
{
    useEffect( () => {

        let inputStateObject = { 
            [property] : { 
                "display_name" : displayName,
                "value"        : "",
                "error"        : ""
            } 
        }

        let newForm = Object.assign(formState.form, inputStateObject)
        formState.setForm( newForm )
        
    }, []);
}

export const removeInput = (property, formState) =>
{
    // We only need a shallow copy in order for this to work
    let formCopy = { ...formState.form }

    delete formCopy[property]

    formState.setForm( formCopy )
}

export const getValue = (property, form) => 
{
    if( form[property] === undefined ) return "";

    // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
    return form[property].value;
}

export const getDisplayName = (property, form) => 
{
    if( form[property] === undefined ) return "";

    // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
    return form[property].display_name;
}

export const getError = (property, form) => 
{
    if( form[property] === undefined ) return "";

    // Find the current object that we are refering to. This SHOULD already be created by the useEffect on startup.
    return form[property].error;
}

export const setErrors = (errors, formState) =>
{
    let mappedErrors = {};
    Object.keys(errors).map((name) => {
        mappedErrors[name] = { "error" : errors[name] }
    })

    _setInputStateField( mappedErrors, formState )
}

export const setValue = (value, property, formState) => 
{
    _setInputStateField( { 
        [property] : { "value" : value }
    }, formState )
}

const _setInputStateField = (assign, formState) =>
{
    // We only need a shallow copy in order for this to work
    let formCopy = { ...formState.form }

    Object.keys(assign).map((name) => {
        formCopy[name] = Object.assign(formCopy[name], assign[name])
    })

    formState.setForm( formCopy );
}
