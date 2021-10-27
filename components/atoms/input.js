/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: This class allows us to use default inputs so that we can encapsulate and reuse the idea of an input box
 * throughout our site so we get consistent styling. We do need to pass in the context of a formState. Which is less
 * than desriable since now we require to have some sort of 'FormState' object which means that we need to have the input
 * in the context of a form.... which it should be theoretically be anyways. Were not macking a web app here so this should
 * be fine.
 */

import fs from "@lib/form/FormStateTracker"
import { useEffect } from "react"

/**
 * Property object for react.
 * @param {object} props Reacts properties object
 */
export default function Input( {id, name, type, formState, validators} ) {
    let error = fs.getError( name, formState.form )

    useEffect(() => {
        fs.initInput(name, validators, formState)
    }, [])

    return <>
        <input 
            id       = { id }
            type     = { type ? type : "text" }
            value    = { fs.getValue( name, formState.form) }
            onChange = { (e) => fs.setValue(e.target.value, name, formState) }
            ></input>
        { error != "" && <p> { error } </p>}
    </>
}