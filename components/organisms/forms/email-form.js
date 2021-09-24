import required from "../../lib/rules/Required"
import email from "../../lib/rules/Email"

import Input from "../../molecules/input"

/**
 * The affiliate form is in charge of create the form where the user will design their affiliate link
 * @param {object} pros Properties we are passing into the affiliate form.
 */
export default function EmailForm(props)
{
    return <div>
        <p>Last step just send us your email!</p>
        <Input 
            name         = "email"
            display_name = "Email"
            formState    = {props.formState}
            validators   = { [ required, email ] } />
        <button onClick={ props.finish }>Send My Link!</button>
    </div>
}