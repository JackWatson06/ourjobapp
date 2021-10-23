/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: A form page represents a form in the larger multi page form that we have. This page uses the formState tracker
 * passed down form the multi-page form in order to keep track of it's current state. This allows the entire multi page form
 * to keep track of all the states of the different inputs and bundles it up nicely into one submit request to the backend
 * server.
 */

import React from "react"

import Button from "@atoms/button"

/**
 * Create a new form page. Accept the following props parameters
 * 
 *  formState   : Reference to the FormStateTracker
 *  title       : Title of the form page.
 *  buttonLabel : Label of the submit button for the form
 *  inputBatch  : The batch of inputs inside the page which we will want to validate ( only useful if part of larger multi-page form, you can leave blank otherwise)
 * 
 * @param {object} props 
 */
export default function FormPage(props)
{
    const batch = props.inputBatch ?? [];

    return <div>
        <h5>{props.title}</h5>
        { props.children.map( (input, index) => {
            return <React.Fragment key={index}>
                { React.cloneElement( input, {  formState : props.formState } ) }
            </React.Fragment>
        } ) }
        <Button title={props.buttonLabel} onClick={ (e) => props.action(e, batch) } />
    </div>   
}
