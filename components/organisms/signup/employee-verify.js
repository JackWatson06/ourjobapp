/**
 * This component will prompot the employee to verify their phone number is accurate.
 */
import {useState} from "react"

import ShareButton from "@molecules/share-button.js"
import HeaderMedium from "@atoms/text/header-md.js"
import FormPage from "@organisms/form/form-page"
import Input from "@molecules/control/input"

import rules from "@lib/form/rules"
import axios from "axios"

export default function EmployeeVerify({formData, response})
{
    const [success, setSuccess] = useState(false)
    const [error, setError]     = useState(false)

    const onSubmit = (formData) => {

        axios.patch(`signup/verify/${response.id}`, {
            code: parseInt(formData.code)
        }).then(function (response) {
            if(response.status === 200)
            {
                setSuccess(true);
            }
        })
        .catch(function (error) {
            setError(true)
        });
    }

    const successfullyVerified = <>
        <HeaderMedium title="Congratulations! You have applied to all relevant jobs" />
        <ShareButton title="Find a Job" text="Apply for all relevant jobs with ourjob.app" />
    </>

    const verifyForm = <FormPage 
            title={`Verify code sent to ${formData.phone}`} 
            buttonLabel="Apply to All Jobs!" 
            onSubmit={onSubmit} >
        <Input label="Code" name="code" type="number" validators={ [ rules.maxLength(5) ] } />
    </FormPage>
    
    // Return a different value based on the state of the component.
    if(success)
    {
        return successfullyVerified;
    }

    return verifyForm;
}