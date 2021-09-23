import { initInput, removeInput, getError, getValue, setValue } from "../../lib/FormStateTracker"

import required from "../../lib/rules/Required"


/**
 * The name form is in charge of gathering the first name, and last name of the user.
 * @param {object} props Properties wer are passing into the name form.
 */
export default function NameForm(props)
{
    let validationRules = {
        "fname" : [ required ],
        "lname" : [ required ]
    }

    let fnameError = getError( "fname", props.formState.form )
    let lnameError = getError( "lname", props.formState.form )

    initInput("fname", "Legal First Name", props.formState)

    let nameInput = null;

    // If we have the value then re-initialize the value on the form.
    if( getValue("fname", props.formState.form) === "Jack" )
    {
        initInput("lname", "Legal Last Name", props.formState)
        nameInput = <>
            <label htmlFor="legal-lname-input">Legal Last Name</label>
            <input id="legal-lname-input" 
                    type="text" 
                    value={ getValue("lname", props.formState.form) } 
                    onChange={ (e) => setValue(e.target.value, "lname", props.formState) } 
                ></input>
            { lnameError != "" && <p> { lnameError } </p>}
        </> 
    }
    else
    {
        removeInput("lname", props.formState)
    }

    return <div>
        <p>To start, we would love to get to know you!</p>

        <label htmlFor="legal-fname-input">Legal First Name</label>
        <input 
            id="legal-fname-input" 
            type="text" 
            value={ getValue("fname", props.formState.form) } 
            onChange={ (e) => setValue(e.target.value, "fname", props.formState) } 
            ></input>
        { fnameError != "" && <p> { fnameError } </p>}

        { nameInput }

        <button onClick={ (e) => props.next(e, validationRules) } >Next</button>
    </div>
}