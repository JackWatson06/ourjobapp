
/**
 * Original Author: Jack Watson
 * Created Date: 11/15/2021
 * Purpose: Wraps a generic input component in our system. We typically use this component in conjunction with the 
 * input box component which actual gives this component a shell around it.
 */

import Label from "./label";
import React from "react";

import style from "./InputText.module.css";

const Input = React.forwardRef(({label, type = "text", name, value, onChange, onFocus}, ref) => {
    const hasInput = value != ""
    
    return <div className={style.InputWrapper}>
        <Label active={ hasInput } htmlFor={name} label={label} />
        <input
            id        = {name}
            className = {hasInput ? `${style.Input} ${style.ActiveInput}` : style.Input}
            name      = {name}
            type      = {type}
            value     = {value}
            ref       = {ref}
            autoComplete = "false"
            onChange  = {e => onChange(e.target.value)}
            onClick   = {e => e.stopPropagation()}
            onFocus   = {e => { onFocus != undefined && onFocus(true, e) }}
            onBlur    = {e => { onFocus != undefined && onFocus(false, e)} }
        />
    </div>
});

export default Input;