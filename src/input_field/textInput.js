import React, { useState } from "react";
import "./styles.css";

const TextInput = ({ label, handleChange, value, isTouched, error }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="TextInput">
            <div className={error != undefined ? "error_border default_border" : (isFocused === true || isTouched === true) ? "focused_border default_border" : "default_border"}>
                <div className={isFocused === true ? "text_input_wrapper focus_wrapper" : "text_input_wrapper"}>
                    <span className={value != "" ? "acitveLabel label" : "label"}>{label}</span>
                    <input
                        type="text"
                        onChange={handleChange}
                        onFocus={() => { setIsFocused(true); }}
                        onBlur={() => { setIsFocused(false); }}

                    />
                </div>
            </div >
            <span className="error_msg">{error != undefined ? error : null}</span>
        </div >

    )
};

export default TextInput;