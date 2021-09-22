import { getState, handleStateChange } from "../../lib/FormStateTracker"

import required from "../../lib/rules/Required"


/**
 * The name form is in charge of gathering the first name, and last name of the user.
 * @param {object} props Properties wer are passing into the name form.
 */
export default function NameForm(props)
{

    let validationRules = {
        "fname" : [ required ],
        "lname" : [ required ]
    }

    return <div>
        <p>To start, we would love to get to know you!</p>


        <label htmlFor="legal-fname-input">Legal First Name</label>
        <input 
            id="legal-fname-input" 
            type="text" 
            value={ getState(props, "fname") } 
            onChange={ (e) => handleStateChange(e, props, "fname") } 
            ></input>



        <label htmlFor="legal-lname-input">Legal Last Name</label>
        <input id="legal-lname-input" 
                type="text" 
                value={ getState(props, "lname") } 
                onChange={ (e) => handleStateChange(e, props, "lname") } 
            ></input>

            
        <button onClick={ (e) => props.next(e, validationRules) } >Next</button>
    </div>
}