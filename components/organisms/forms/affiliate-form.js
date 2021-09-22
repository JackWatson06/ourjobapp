import { getValue, getState, handleStateChange } from "../../lib/FormStateTracker"


/**
 * The affiliate form is in charge of create the form where the user will design their affiliate link
 * @param {object} pros Properties we are passing into the affiliate form.
 */
export default function AffiliateForm(props)
{
    return <div>
        <p>Hi, { getValue(props, "fname") }! Let’s design your affiliate link.</p>
        
        <label htmlFor="affiliate-input">Affiliate Name</label>
        <input id="affiliate-input" type="text" value={ getState(props, "link") } onChange={ (e) => handleStateChange(e, props, "link") }></input>
        
        <label htmlFor="charity-input">Charity</label>
        <select id="charity-select" value={ getState(props, "charity") } onChange={ (e) => handleStateChange(e, props, "charity") }>
            <option value=""></option>
            <option value="Doctors Without Borders">Doctors Without Borders</option>
            <option value="Water Wells">Water Wells</option>
        </select>

        <label htmlFor="terms-of-service-input">Terms of Service</label>
        <input id="terms-of-service-input" type="checkbox"></input>

        <button onClick={ props.next }>Create My Link!</button>
    </div>
}