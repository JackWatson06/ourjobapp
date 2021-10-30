/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: A form page represents a form in the larger multi page form that we have. This page uses the formState tracker
 * passed down form the multi-page form in order to keep track of it's current state. This allows the entire multi page form
 * to keep track of all the states of the different inputs and bundles it up nicely into one submit request to the backend
 * server.
 */

import fs from "@lib/form/FormStateTracker"

import React, { useState } from "react"

import Button from "@atoms/button"
import HeaderMedium from "@atoms/text/header-md"

import styles from "@styles/FormPage.module.css"

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
export default function FormPage({ action, formState, title, buttonLabel, inputBatch, children})
{
    const [ loading, setLoading ] = useState(false);
    const batch = inputBatch ?? []
    const active = fs.someValid(formState, inputBatch);

    const inputs = <div className={styles.InputWrapper}>
                        { children.map( (input, index) => {
                            return <React.Fragment key={index}>
                                { React.cloneElement( input, {  formState : formState } ) }
                            </React.Fragment>
                        } ) }
                    </div>

    return <div className={styles.FormPage}>
        <HeaderMedium title={title} />
        <br/>
        { inputs }
        <br/>
        <Button title={buttonLabel} loading={loading} active={active} onClick={ (e) => {
            setLoading(true);
            action(e, batch)
         } } />
    </div>   
}
