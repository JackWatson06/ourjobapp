/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: A form page represents a form in the larger multi page form that we have. This page uses the formState tracker
 * passed down form the multi-page form in order to keep track of it's current state. This allows the entire multi page form
 * to keep track of all the states of the different inputs and bundles it up nicely into one submit request to the backend
 * server.
 */


import React, { useState } from "react"

import Button from "@atoms/button"
import HeaderMedium from "@atoms/text/header-md"

import style from "./FormPage.module.css"

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
export default function FormPage({ title, buttonLabel, annotation, onSubmit, children})
{
    const [ loading, setLoading ] = useState(false);
    const [ valid, setValid ]     = useState({});
    const [ data, setData ]       = useState({});

    // When you only pass in one children the children prop will not be an array. This function turns that into an array.
    const formChildren = !Array.isArray(children) ? [children] : children

    /**
     * Handle an update to any input in this form.
     * @param {string} name Name of the input that is sending out the notification
     * @param {mixed} value Value that the input has just sent out.
     * @param {boolean} valid Is the value that was just sent a valid value?
     */
    const onChange = (name, value, inputValid) => {

        valid[name] = inputValid

        // Ugh this falsey check is kind of annyoing. Not a huge falsey person. What this check is doing is making sure
        // empty input does NOT go in the data that will be submited for this form. We just skip the empty data.
        if(value === [] || value === "")
        {
            delete data[name]
        }
        else
        {
            data[name] = value
        }

        setData({ ...data })
        setValid({ ...valid })
    }

    /**
     * Since we need to keep track of the state of which inputs elements are valid this function simply loops through
     * all of the states that we do have and returns the overall status of the form. If all input states are valid we
     * are good to submit.
     */
    const formValid = () => {
        return ! Object.values(valid).some((state) => !state)
    }
    
    // Render the form.
    return <form className={style.FormPage}>
        {title != undefined && <> <HeaderMedium title={title} /> <br/> </>}

        {/* Render the inputs into the form. */}
        <div className={style.InputWrapper}>
            { formChildren.map( (input, index) => {
                return <React.Fragment key={index}>
                    { React.cloneElement( input, {  notify : onChange } ) }
                </React.Fragment>
            } ) }
        </div>

        <br/>
        { annotation ?? "" }
        <Button title={buttonLabel} loading={loading} active={formValid()} onClick={ (e) => {
            setLoading(true);
            onSubmit(data)
         } } />
    </form>
}
