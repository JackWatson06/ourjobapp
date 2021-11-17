
/**
 * Original Author: Jack Watson
 * Created Date: 11/15/2021
 * Purpose: This class holds the label code for an input element so that we can reuse the active state of the label so it
 * is consitent across different elements. 
 */

import style from "./Label.module.css"

export default function Label({label, htmlFor, active})
{
    return <label onClick={ e => e.stopPropagation() } 
                  className={ `${active ? style.ActiveLabel : '' } ${style.Label}`} 
                  htmlFor={htmlFor}>{label}</label>;
}