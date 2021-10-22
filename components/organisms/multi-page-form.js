import { useState } from 'react'
import { isValid } from '../lib/form/FormValidator'

import React from 'react'

/**
 * 
 * @param {object} props Bag of properties that this multipage form will take.
 */
export default function MultiPageForm(props)
{
    let [ form, setForm ]   = useState({})
    let formState = {
        "form"      : form,
        "setForm"   : setForm
    }

    let [ stage, setStage ] = useState(0)

    // Go to the next stage of the multi page form.
    const nextStage = (e, inputChecks) => 
    {
        if( isValid(formState, inputChecks) )
        {
            let newStage = stage + 1
            if( newStage < props.children.length )
            {
                setStage( stage + 1 )
            }
        }
    }

    // Turn to the previous stage of the multi page form.
    const prevStage = (e) => 
    {
        let newStage = stage - 1;
        if( newStage >= 0 )
        {
            setStage( newStage )    
        }
    }

    // Generic send method ( this will probably change with the FinishForm component)
    const send = (e) =>
    {
        console.log("Sent the form! ");
        console.log(formState.form);
    }

    //https://stackoverflow.com/questions/32672966/react-props-children-is-not-array
    let FormComponent = React.Children.toArray(props.children)[stage].type;


    // Finish does NOT need to be avaialbe to every form we should abstract that out into it's own FinishForm component.
    // maybe that also dictates how the form is sent.
    return <>
        <button onClick={ prevStage }>Previous</button>
        <FormComponent formState={formState} next={ nextStage } finish={ send } />
    </>;
}