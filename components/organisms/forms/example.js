import required from "../../lib/form/rules/Required"
import search from "../../lib/api/GoogleApi"

import Input from "../../molecules/input"
import ApiSelect from "../../molecules/api-select"
import DependentInput from "../../molecules/dependent-input"

/**
 * The name form is in charge of gathering the first name, and last name of the user.
 * @param {object} props Properties wer are passing into the name form.
 */
export default function NameForm(props)
{

    // let lastName = <Input 
    //                     name         = "lname"
    //                     display_name = "Legal Last Name"
    //                     formState    = {props.formState}
    //                     validators   = { [required] } />

    // let crime    = <Input 
    //                     name         = "crime"
    //                     display_name = "Last Crime You Commited"
    //                     formState    = {props.formState}
    //                     validators   = { [required] } />

    return <div>
        <p>To start, we would love to get to know you!</p>

        <Input 
            name         = "fname"
            display_name = "Legal First Name"
            formState    = {props.formState}
            validators   = { [required] } />

        <Input 
            name         = "lname"
            display_name = "Legal Last Name"
            formState    = {props.formState}
            validators   = { [required] } />
{/* 
        <DependentInput dependsOn="fname" dependsOnValue="Jack" renders={ lastName } formState={props.formState} />
        <DependentInput dependsOn="fname" dependsOnValue="Bill" renders={ crime }    formState={props.formState} /> */}
        {/* <ApiSelect name  = "address"
            display_name = "Address"
            formState    = {props.formState}
            search       = { search }
            validators   = { [required] } /> */}

        <button onClick={ (e) => props.next(e, [ "fname", "lname" ]) } >Next</button>
    </div>
}