import { useRef, useEffect } from "react";

import style from "@styles/atoms/Input.module.css"
import fileStyle from "@styles/atoms/FileInput.module.css"
import fs from "@lib/form/FormStateTracker"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default function FileInput({ name, required, url, label, validators, formState })
{    
    const validate = () => fs.onBlurValidation(formState, name)
    const inputRef = useRef()
    
    const error = fs.getError( name, formState.form )
    const value = fs.getValue( name, formState.form ) === "" ? { name: "" } : fs.getValue( name, formState.form ); // Set default to blank path.

    const setValue = file => {
        if(file === undefined)
        {
            return
        }

        fs.setValue(file, name, formState)
        validate()
    }

    useEffect(() => {
        fs.initInput(name, formState, {
            required     : required,
            validators   : validators
        });
    }, [])

    return  <div className={style.text_input}>
        {/* Below here we also had the isTouched or'd with the isFocus variable. */}
        <div className={error != "" ? `${style.default_border} ${style.error_border}` : `${style.default_border}`}>
            <div className={`${style.text_input_wrapper} ${fileStyle.IconInputContainer}`} onClick={() => inputRef.current.click()}>
                <FontAwesomeIcon className={fileStyle.InputIcon} icon={ faFilePdf } />
                <div className={fileStyle.FileInputWrapper}>
                    <span className={value.name != "" ? `${style.active_label} ${style.label}` : `${style.label}`} >{label}</span>
                    <span className={fileStyle.ValueSpan} >{ value.name }</span>
                    <input
                        className={fileStyle.FileInput}
                        type="file"
                        ref={inputRef}
                        onChange={ e => setValue(e.target.files[0]) }
                    />
                </div>
            </div>
        </div >
        <span className={style.error_msg}>{error != undefined ? error : null}</span>
    </div>
}
