import fs from "../lib/form/FormStateTracker"
import { useEffect, useState } from "react"

/**
 * Property object for react.
 * @param {object} props Reacts properties object
 */
export default function ApiSelect(props)
{   
    let [options, setOptions] = useState([])

    let error = fs.getError( props.name, props.formState.form )
    let value = fs.getValue( props.name, props.formState.form )

    useEffect(() => {
        fs.initInput(props.name, props.display_name, props.validators, props.formState)
    }, [])

    useEffect(() => {
        props.search(value, setOptions);
    }, [ value ])

    return <>
        <label htmlFor={ props.name } >{ props.display_name }</label>
        <input 
            id       = { props.name }
            type     = { props.type ? props.type : "text" }
            value    = { value }
            onChange = { (e) => fs.setValue(e.target.value, props.name, props.formState) }
            ></input>
        <select 
            id={ props.name } 
            value={ fs.getValue( props.name, props.formState.form) }  
            onChange={ (e) => console.log(e.target.value) } 
            >
                <option value="">None</option>
                { options.map((option) => {
                    <option key={option.key} value={option.value}>{option.display_name}</option>
                })}
        </select>
        { error != "" && <p> { error } </p>}
    </>
}