import fs from "../lib/FormStateTracker"
import { useEffect } from "react"

/**
 * Property object for react.
 * @param {object} props Reacts properties object
 */
export default function Select(props)
{
    let id    = Math.floor(Math.random() * 1_000_000_000);
    let error = fs.getError( props.name, props.formState.form )

    useEffect(() => {
        fs.initInput(props.name, props.display_name, props.validators, props.formState)
    }, [])

    return <>
        <label htmlFor={ id } >{ props.display_name }</label>
        <select 
            id={ id } 
            value={ fs.getValue( props.name, props.formState.form) }  
            onChange={ (e) => fs.setValue(e.target.value, props.name, props.formState) } 
            >
            <option value=""></option>
            { props.children }
        </select>
        { error != "" && <p> { error } </p>}
    </>
}