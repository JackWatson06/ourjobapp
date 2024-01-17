/**
 * Original Author: Jack Watson
 * Created Date: 11/17/2021
 * Purpose: This class simply wraps a generic input component with a frame. From here we can also manage.
 */

import style from "./Border.module.css"

export default function Border({focused, error, children})
{
    /*
    * Determine the border that we would like to apply to the input.
    */
    const border = () => {
        if( !error  && focused)
        {
            return `${style.InputFocused}`
        } 
        else if( error )
        {
            return `${style.InputError}`
        }
    }

    return <div className={ `${style.BorderWrapper} ${border()}` }>
        {children}
    </div >
}

