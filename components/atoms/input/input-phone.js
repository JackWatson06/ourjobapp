
/**
 * Original Author: Jack Watson
 * Created Date: 11/15/2021
 * Purpose: This component rerpresents a smarter telephone input component. Since telephone numbers are now a much more quintessential portion
 * of our application I have decided to incorporate smarter handling of these numbers. Plus they are necessary for our texting features.
 */

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

import Label from "./label";
import React from "react";

import style from "./InputText.module.css";

export default function InputPhone({label, name, value, onChange, onFocus}) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const hasInput = value != ""
    
  return <div className={style.InputWrapper}>
      <Label active={ hasInput } htmlFor={name} label={label} />
      <PhoneInput
        defaultCountry="US"
        id        = {name}
        className = {hasInput ? `${style.Input} ${style.ActiveInput}` : style.Input}
        name      = {name}
        value     = {value}
        onChange  = {onChange}
        onClick   = {e => e.stopPropagation()}
        onFocus   = {e => { onFocus != undefined && onFocus(true, e) }}
        onBlur    = {e => { onFocus != undefined && onFocus(false, e)} }/>
  </div>

}




