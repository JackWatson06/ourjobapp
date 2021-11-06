import React, { useState, useEffect, useRef } from "react";
import fs from "@lib/form/FormStateTracker"

import style from "@styles/atoms/Input.module.css";

export default function TextInput ({ name, required, type, label, validators, formState }) {

    const [validate, setValidate]   = useState(() => {})
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef()
    
    const error = fs.getError( name, formState.form )
    const value = fs.getValue( name, formState.form )

    useEffect(() => {
        fs.initInput(name, formState, {
            required     : required,
            validators   : validators
        });
        setValidate(() => fs.onChangeValidation(formState, name))
    }, [])

    return (
        <div className={style.text_input}>
            {/* Below here we also had the isTouched or'd with the isFocus variable. */}
            <div className={error != "" ? `${style.default_border} ${style.error_border}` : (isFocused === true) ? `${style.focused_border} ${style.default_border}` : `${style.default_border}`}>
                <div className={`${style.text_input_wrapper}`}>
                    <span className={value != "" ? `${style.active_label} ${style.label}` : `${style.label}`} onClick={() => inputRef.current.focus()}>{label}</span>
                    <input
                        type  = { type ? type : "text" }
                        value = { value }
                        ref   = {inputRef}
                        onChange={ (e) => {
                            fs.setValue(e.target.value, name, formState)
                            validate()
                        }}
                        onFocus={() => setIsFocused(true) }
                        onBlur={() => setIsFocused(false) }
                    />
                </div>
            </div >
            <span className={style.error_msg}>{error != undefined ? error : null}</span>
        </div>
    )
};