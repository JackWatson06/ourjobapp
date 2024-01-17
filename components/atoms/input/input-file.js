import {useRef} from "react";

import style from "./InputFile.module.css"

import Label from "./label"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function InputFile({label, name, value, onChange, onFocus})
{
    const hasInput = value != ""

    const inputRef = useRef()

    // Focus on the input of the file input.
    const focusOnInput = () => {
        inputRef.current.click()
    }

    // Give the user hte ability to remove the file they tried to upload.
    const removeFile = (e) => {
        onChange("")
        e.stopPropagation()
    }

    return <div className={style.IconInputContainer} onClick={ e => focusOnInput() }>
        { !value && <FontAwesomeIcon className={style.InputIcon} icon={ faFilePdf }/> }
        <div className={style.InputWrapper}>
            <Label active={ hasInput } htmlFor={name} label={label} />
            <span className={style.ValueSpan}>{ value.name }</span>
            <input
                className ={style.FileInput}
                id        ={name}
                name      ={name}
                type      ="file"
                ref       ={inputRef}
                onChange  ={ e => onChange(e.target.files[0] ?? "") }
            />
        </div>
        { value && <FontAwesomeIcon className={style.InputIcon} icon={ faTimes } onClick={(e) => removeFile(e)}/> }
    </div>
}