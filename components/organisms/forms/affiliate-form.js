import fs from "../../lib/FormStateTracker"
import required from "../../lib/rules/Required"

import Input from "../../molecules/input"
import Select from "../../molecules/select"

/**
 * The affiliate form is in charge of create the form where the user will design their affiliate link
 * @param {object} pros Properties we are passing into the affiliate form.
 */
export default function AffiliateForm(props)
{
    return <div>
        <p>Hi, { fs.getValue("fname", props.formState.form) }! Let’s design your affiliate link.</p>
        
        <Input 
            name         = "affiliat-link"
            display_name = "Affiliate Link"
            formState    = {props.formState}
            validators   = { [required] } />
        
        <Select 
            name         = "charity"
            display_name = "Charity"
            formState    = {props.formState}
            validators   = { [required] } >
            <option value = "Doctors Without Borders">Doctors Without Borders</option>
            <option value = "Water Wells">Water Wells</option>
        </Select>

        <Input 
            name         = "terms-of-service"
            display_name = "Terms of Service"
            type         = "checkbox"
            formState    = {props.formState}
            validators   = { [required] } />

        <button onClick={ props.next }>Create My Link!</button>
    </div>
}