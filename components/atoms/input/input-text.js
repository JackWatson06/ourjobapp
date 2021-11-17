
/**
 * Original Author: Jack Watson
 * Created Date: 11/15/2021
 * Purpose: Wraps a generic input component in our system. We typically use this component in conjunction with the 
 * input box component which actual gives this component a shell around it.
 */

import Label from "./label";

import style from "./InputText.module.css";

export default function Input({label, type = "text", name, value, onChange, onFocus})
{
    const hasInput = value != ""

    return <div className={style.InputWrapper}>
        <Label active={ hasInput } htmlFor={name} label={label} />
        <input
            id        = { name }
            className = { hasInput ? `${style.Input} ${style.ActiveInput}` : style.Input }
            name      = { name }
            type      = { type }
            value     = { value }
            onChange  ={ e => onChange(e.target.value) }
            onFocus   ={ e => onFocus(true, e) }
            onBlur    ={ e => onFocus(false, e) }
        />
    </div>
}