/**
 * Original Author: Jack Watson
 * Created Date: 10/22/2021
 * Purpose: This form allows us to render multiple pages of a form. We use this extensviely thoughout our project since we 
 * rely on mutlipage forms for user signup.
 */
import Router from 'next/router'
import React, { useState } from 'react'
import * as affTrack from "@lib/affiliate/AffiliateTracker"
import axios from "axios";

/**
 * 
 * @param {object} props Bag of properties that this multipage form will take.
 */
export default function MultiPageForm({link, Redirect, children})
{
    let [stage,     setStage]     = useState(0)
    let [formData,  setFormData]  = useState({})

    let [sent,  setSent]          = useState(false)
    let [response,  setResponse]  = useState({})
    

    // Go to the next stage of the multi page form.
    const next = async (data) => 
    {
        setFormData({...formData, ...data})

        const newStage = stage + 1
        if( newStage < children.length )
        {
            setStage( stage + 1 )
        }
    }

    // Generic send method ( this will probably change with the FinishForm component)
    const send = async (data) =>
    {
        const allFormData = {...formData, ...data}
        const resume = allFormData.resume

        setFormData(allFormData)
        delete allFormData.resume

        // Add the affiliate if we have it.
        if(affTrack.ReadCookie() != undefined)
        {
            data.affiliate_id = affTrack.ReadCookie().id
        }

        // Post the data to the server.
        axios.post(`${link}`, allFormData)
            .then(async function (response) {
                if(response.status === 200)
                {
                    console.log(resume);

                    // Upload the resume if we have the resume to uplaod
                    if(resume != undefined)
                    {
                        const formData = new FormData();
                        formData.append("resume", resume);
    
                        // Try to post to the server. If we failed then simply just don't upload the resume.
                        try
                        {
                            await axios.post(`signup/employees/${response.data.id}/resume`, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            });
                        }
                        catch(err)
                        {
                            console.error(err);
                        }
                    }

                    setSent(true)
                    setResponse(response.data)
                }
            })
            .catch(function (error) {
                console.error(error)
            });
    }

    const determineRenderPage = () => {
        // If we have yet to receive a response from the server.
        if(!sent)
        {
            const childrenArray = React.Children.toArray(children)  
            const lastPage      = stage === childrenArray.length - 1
        
            //https://stackoverflow.com/questions/32672966/react-props-children-is-not-array
            return React.cloneElement( childrenArray[stage], { 
                onSubmit : lastPage ? send : next
            })
        }
        
        return <Redirect formData={formData} response={response} />
    }

    
    // Finish does NOT need to be avaialbe to every form we should abstract that out into it's own FinishForm component.
    // maybe that also dictates how the form is sent.
    return determineRenderPage();
}