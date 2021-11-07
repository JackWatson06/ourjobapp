/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: This form allows us to render multiple pages of a form. We use this extensviely thoughout our project since we 
 * rely on mutlipage forms for user signup.
 */


import fs from "@lib/form/FormStateTracker"
import * as affTrack from "@lib/affiliate/AffiliateTracker"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Router from 'next/router'
import React, { useState } from 'react'

import axios from "axios";

import styles from "@styles/organisms/MultiPageForm.module.css"

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
            const newStage = stage + 1
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
            const data = fs.getSubmitData(formState.form)

            // Add the affiliate if we have it.
            if(affTrack.ReadCookie() != undefined)
            {
                data.affiliate_id = affTrack.ReadCookie().id
            }

            // Upload the resume if we have it. Obv we will change this in the future.
            if( data.resume != undefined && data.resume)
            {
                const formData = new FormData();
                formData.append("resume", data.resume);

                try
                {
                    data.resume_id = (await axios.post('signup/resumes', formData, {
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                    })).data.id;
    
                    delete data.resume;
                }
                catch(err)
                {
                    console.error(err);
                }
            }

            // Post the data to the server.
            axios.post(`${props.link}`, data)
                .then(function (response) {
                    if(response.status === 200)
                    {
                        Router.push( props.redirect )
                    }
                })
                .catch(function (error) {
                    console.error(error)
                });
        }
    }

    const childrenArray = React.Children.toArray(props.children)  

    const notFirstPage  = stage != 0
    const lastPage      = stage === childrenArray.length - 1


    //https://stackoverflow.com/questions/32672966/react-props-children-is-not-array
    const Page = React.cloneElement( childrenArray[stage], { 
        formState : formState,
        action    : lastPage ? send : next   // If we are on the last page then set the send trigger 
    })

    // Finish does NOT need to be avaialbe to every form we should abstract that out into it's own FinishForm component.
    // maybe that also dictates how the form is sent.
    return <>
        {/* { notFirstPage && <FontAwesomeIcon className={styles.PrevButton} icon={ faChevronLeft } onClick={prev} /> } */}
        { Page }    
    </>
}