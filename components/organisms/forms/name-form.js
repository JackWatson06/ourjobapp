import required from "../../lib/rules/Required"

import Input from "../../molecules/input"
import DependentInput from "../../molecules/dependent-input"

/**
 * The name form is in charge of gathering the first name, and last name of the user.
 * @param {object} props Properties wer are passing into the name form.
 */
export default function NameForm(props)
{
    let dependent = {
        "Jack" : <Input 
                    name         = "lname"
                    display_name = "Legal Last Name"
                    formState    = {props.formState}
                    validators   = { [required] } />,
        "Bill" : <Input 
                    name         = "crime"
                    display_name = "Last Crime You Commited"
                    formState    = {props.formState}
                    validators   = { [required] } />,
    }

    return <div>
        <p>To start, we would love to get to know you!</p>

        <Input 
            name         = "fname"
            display_name = "Legal First Name"
            formState    = {props.formState}
            validators   = { [required] } />
        <DependentInput dependsOn = "fname" renders = { dependent } formState = {props.formState} />

        <button onClick={ (e) => props.next(e, [ "fname", "lname" ]) } >Next</button>
    </div>
}