import fs from "../lib/FormStateTracker"
import { useEffect } from "react"

/**
 * Property object for react.
 * @param {object} props Reacts properties object
 */
export default function Input(props)
{
    let error = fs.getError( props.name, props.formState.form )

    useEffect(() => {
        fs.initInput(props.name, props.display_name, props.validators, props.formState)
    }, [])

    return <>
        <label htmlFor={ props.name } >{ props.display_name }</label>
        <input 
            id       = { props.name }
            type     = { props.type ? props.type : "text" }
            value    = { fs.getValue( props.name, props.formState.form) }
            onChange = { (e) => fs.setValue(e.target.value, props.name, props.formState) }
            ></input>
        { error != "" && <p> { error } </p>}
    </>
}