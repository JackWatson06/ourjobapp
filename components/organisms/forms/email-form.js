import { getValue, getState, handleStateChange } from "../../lib/FormStateTracker"


/**
 * The affiliate form is in charge of create the form where the user will design their affiliate link
 * @param {object} pros Properties we are passing into the affiliate form.
 */
export default function EmailForm(props)
{
    return <div>
        <p>Hi, { getValue(props.form, "fname") }! Let’s design your affiliate link.</p>
        <label htmlFor="affiliate-input">Email</label>
        <input id="affiliate-input" type="text" value={ getState(props, "email") } onChange={ (e) => handleStateChange(e, props, "email") }></input>
        <button onClick={ props.finish }>Send My Link!</button>
    </div>
}