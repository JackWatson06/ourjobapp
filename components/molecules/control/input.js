/**
 * This class simply acts as a helper class to combine to seperate atoms together to form a complete input component
 * which can track it's own state.
 */
import { useState, useEffect, useCallback } from "react"

import style from "./Input.module.css"

import Border from "@atoms/input/border"
import InputFile from "@atoms/input/input-file"
import InputPhone from "@atoms/input/input-phone"
import InputText from "@atoms/input/input-text"

import validate from "@lib/form/validate"

export default function Input({ label, type, name, validators, required = true, notify })
{
    // Interacted represnets if we have yet to interact with the component. Since we do not want the error showing on first touch.
    const [touched, setTouched] = useState(false)
    const [focused, setFocus]   = useState(false)
    const [value, setValue]     = useState("")
    const [error, setError]     = useState("")

    /**
     * Send a notification to a higher level component that this input is good to go ... only if we are correctly validated.
     */
    const validateInput = useCallback( async (newValue) => {
        const error = await validate(newValue, required, validators)

        if(notify != null)
        {
            notify(name, newValue, error === "")
        }

        setError(error)
    }, [name, validators, notify, required])

    // Since debouce is a stateful action (we have to know the current state of the timer) so we just load it into state.
    const [validator] = useState(() => validateInput)  


    /**
     * Run the notification on start so we can make sure the optional inputs are taken care of.
     */
    useEffect(() => {
        async function validateInput() {
            await validator(value)
        }

        validateInput();
    }, [validator, value])

    /**
     * Set the value of the input. Also setTouched which signifies that
     */
    const onChange = (value) =>
    {
        setValue(value)
        setTouched(true)
    }

    /**
     * We pass this function into the child component so they can set the focus state of the parent component (this component)
     * we also recognize that if we are explicitly setting the on focus to false than that means we have left the component
     * so we will trigger the touch.... this is totally a side-effect.
     * @param {boolean} focused Are we trying to focus or de-focus the component
     */
    const onFocus = (focused) => 
    {
        if(!focused)
        {
            setTouched(true)
        }
        setFocus(focused)
    }

    /**
     * Determine if we want to show the error. We really only want to do this after the first interaction with the component.
     */
    const errorState = () => {
        return error != "" && touched
    }

    /**
     * The file input is handled as a special parameter in our case. We simply due this to avoid some duplication there
     * is probably a better way to do this but I think it's fine. You could probably throw this in a factory.
     */
    const renderInput = () => {
        
        const inputProps = {
            "label"    : label,
            "name"     : name,
            "value"    : value,
            "onChange" : onChange,
            "onFocus"  : onFocus
        }

        if(type === "file")
        {
            return <InputFile { ...inputProps } />
        }
        else if(type === "tel")
        {
            return <InputPhone { ...inputProps } />
        }
        else
        {
            return <InputText { ...inputProps } type={type} />
        }
    }

    // Render the final input component.
    return <div className={style.ErrorWrapper}>
            <Border focused={focused} error={errorState()}>
                {renderInput()}
            </Border>
            <span className={style.ErrorSpan}>{errorState() ? error : null}</span>
        </div>
}
