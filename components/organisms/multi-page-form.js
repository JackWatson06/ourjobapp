/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: This form allows us to render multiple pages of a form. We use this extensviely thoughout our project since we 
 * rely on mutlipage forms for user signup.
 */


import fs from "@lib/form/FormStateTracker"

import Router from 'next/router'
import React, { useState } from 'react'

import axios from "axios";

import styles from "@styles/MultiPageForm.module.css"

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
    const next = async (e, inputChecks) => 
    {
        if( await fs.someValid(formState, inputChecks) )
        {
            let newStage = stage + 1
            if( newStage < props.children.length )
            {
                setStage( stage + 1 )
            }
        }
    }

    // Turn to the previous stage of the multi page form. Make sure we don't go lower than the last page.
    const prev = (e) => 
    {
        let newStage = stage - 1;
        if( newStage >= 0 )
        {
            setStage( newStage )    
        }
    }

    // Generic send method ( this will probably change with the FinishForm component)
    const send = async (e) =>
    {
        // Check the state of the whole form
        if( await fs.validateAll(formState) )
        {
            const data = fs.getSubmitData(formState.form);

            axios.post(`${props.link}`, data)
                .then(function (response) {
                    if(response.status === 200)
                    {
                        Router.push( props.redirect )
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }

    const childrenArray = React.Children.toArray(props.children); // <= React is a 

    //https://stackoverflow.com/questions/32672966/react-props-children-is-not-array
    const Page = React.cloneElement( childrenArray[stage], { 
        formState : formState,
        action    : childrenArray.length - 1 === stage ? send : next   // If we are on the last page then set the send trigger 
    });

    // Finish does NOT need to be avaialbe to every form we should abstract that out into it's own FinishForm component.
    // maybe that also dictates how the form is sent.
    return <>
        <button className={styles.PreButton} onClick={ prev }></button>
        { Page }    
    </>;
}