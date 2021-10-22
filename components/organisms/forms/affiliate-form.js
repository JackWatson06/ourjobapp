import required from "../../lib/form/rules/Required"
import email from "../../lib/form/rules/Email"

import Input from "../../molecules/input"
import Select from "../../molecules/select"

/**
 * The affiliate form is in charge of create the form where the user will design their affiliate link
 * @param {object} pros Properties we are passing into the affiliate form.
 */
export default function AffiliateForm(props)
{
    return <div>
        <p>Let’s design your link!</p>
        
        <Input 
            name         = "link"
            display_name = "Link Name"
            formState    = {props.formState}
            validators   = { [required] } />
        
        <Select 
            name         = "charity"
            endpoint     = "search/charities?name=Doctors"
            display_name = "Charity"
            formState    = {props.formState}
            validators   = { [required] } >
        </Select>

        <Input 
            name         = "email"
            display_name = "Email"
            formState    = {props.formState}
            validators   = { [ required, email ] } />

        <Input 
            name         = "terms-of-service"
            display_name = "Terms of Service"
            type         = "checkbox"
            formState    = {props.formState}
            validators   = { [required] } />

        <button onClick={ props.send }>Create My Link!</button>
    </div>
}