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
export default function MultiPageForm(props)
{
    let [ stage, setStage ] = useState(0)

    // Go to the next stage of the multi page form.
    const next = async (data) => 
    {
        const newStage = stage + 1
        if( newStage < props.children.length )
        {
            setStage( stage + 1 )
        }
    }


    // Generic send method ( this will probably change with the FinishForm component)
    const send = async (data) =>
    {
        console.log(data);

        // Add the affiliate if we have it.
        if(affTrack.ReadCookie() != undefined)
        {
            data.affiliate_id = affTrack.ReadCookie().id
        }

        // // Upload the resume if we have it. Obv we will change this in the future. This is essentially the upload
        // // process of a document. We will want to think about the mapping functionality.
        // if( data.resume != undefined )
        // {
        //     const formData = new FormData();
        //     formData.append("resume", data.resume);

        //     // Try to post to the server. If we failed then simply just don't upload the resume.
        //     try
        //     {
        //         const response = await axios.post('signup/resumes', formData, {
        //             headers: {
        //                 'Content-Type': 'multipart/form-data'
        //             }
        //         });

        //         data.resume_id = response.data.id;
        //     }
        //     catch(err)
        //     {
        //         console.error(err);
        //     }

        //     delete data.resume;
        // }

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

    const childrenArray = React.Children.toArray(props.children)  
    const lastPage      = stage === childrenArray.length - 1

    //https://stackoverflow.com/questions/32672966/react-props-children-is-not-array
    const Page = React.cloneElement( childrenArray[stage], { 
        onSubmit : lastPage ? send : next
    })

    // Finish does NOT need to be avaialbe to every form we should abstract that out into it's own FinishForm component.
    // maybe that also dictates how the form is sent.
    return Page
}